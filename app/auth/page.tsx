"use client"

import { Button } from "@/components/ui/button"
import { GoogleIcon } from "@/components/icons/google-icon"
import Image from "next/image"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AuthPage() {
    const router = useRouter()

    const handleGoogleSignIn = async () => {
        try {
            const result = await signIn("google", {
                callbackUrl: "/",
                redirect: true,
            })
        } catch (error) {
            console.error("Error signing in with Google:", error)
        }
    }

    return (
        <div className="min-h-screen flex">
            {/* Left side - Image */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <Image
                    src="/images/landingPage/00.-blog-feature-image-india-chalk-scaled.jpg"
                    alt="KVK Cultural Event"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Join Karnataka Vidyarthi Koota</h1>
                        <p className="mt-2 text-gray-600">
                            Register to become a member and get access to exclusive benefits
                        </p>
                    </div>

                    <div className="space-y-6">
                        <Button
                            variant="outline"
                            className="w-full gap-2 h-12 text-base"
                            onClick={handleGoogleSignIn}
                        >
                            <GoogleIcon className="h-5 w-5" />
                            Continue with Google
                        </Button>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="text-lg font-medium">Why Join KVK?</h3>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• Access to exclusive cultural events and workshops</li>
                                    <li>• Network with fellow Kannada students and professionals</li>
                                    <li>• Participate in community service initiatives</li>
                                    <li>• Stay updated with Kannada cultural activities</li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-xs text-center text-gray-500">
                            By registering, you agree to our{" "}
                            <a href="#" className="text-orange-600 hover:underline">
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-orange-600 hover:underline">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
} 