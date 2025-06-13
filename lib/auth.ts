import { NextAuthOptions, Session, User } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { randomBytes } from 'crypto';
import axios from 'axios';

// Validate API URL
const DASHBOARD_API_URL = process.env.NEXT_PUBLIC_API_URL;
if (!DASHBOARD_API_URL) {
    throw new Error('DASHBOARD_API_URL environment variable is not set');
}

// Create axios instance with default config
const api = axios.create({
    timeout: 5000, // Reduced timeout to 5 seconds
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: DASHBOARD_API_URL
});

// Extend the Session and User types
declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
            role?: string | null;
        };
    }
    interface User {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
        role?: string | null;
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    pages: {
        signIn: '/auth',
        error: '/auth',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {
        async signIn({ user, account }) {
            if (!user.email) return false;

            if (account?.provider === 'google') {
                try {
                    // First try to get the user
                    const response = await api.get('/api/users', {
                        params: { email: user.email },
                        timeout: 3000 // 3 second timeout for this specific request
                    });
                    return true;
                } catch (error: any) {
                    // If user doesn't exist (404), create them
                    if (error.response?.status === 404) {
                        try {
                            const randomPassword = randomBytes(32).toString('hex');
                            await api.post('/api/users', {
                                email: user.email,
                                name: user.name,
                                image: user.image,
                                password: randomPassword,
                                role: 'MODERATOR'
                            }, {
                                timeout: 3000 // 3 second timeout for this specific request
                            });
                            return true;
                        } catch (createError) {
                            console.error('Error creating user:', createError);
                            return false;
                        }
                    }
                    // For other errors, log them but allow sign in
                    console.error('Error during sign in:', error);
                    return true; // Changed to true to allow sign in even if API fails
                }
            }
            return true;
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.sub ?? '';
                session.user.role = token.role as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
                token.role = user.role;
            }
            return token;
        },
    },
    debug: process.env.NODE_ENV === 'development',
};