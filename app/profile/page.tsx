"use client"

import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Calendar, MapPin } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import axios from "axios"

interface UserData {
    id: string
    name: string
    email: string
    image?: string
    role: string
    createdAt: string
    updatedAt: string
}

export default function ProfilePage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [userData, setUserData] = useState<UserData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/auth")
        }
    }, [status, router])

    useEffect(() => {
        const fetchUserData = async () => {
            if (!session?.user?.email) return

            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/users`, {
                    params: { email: session.user.email }
                })
                setUserData(response.data)
            } catch (err) {
                setError("Failed to fetch user data")
                console.error("Error fetching user data:", err)
            } finally {
                setLoading(false)
            }
        }

        if (session?.user?.email) {
            fetchUserData()
        }
    }, [session])

    if (status === "loading" || loading) {
        return (
            <div className="container max-w-4xl py-8">
                <Card>
                    <CardHeader>
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-4 w-72" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <Skeleton className="h-20 w-20 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-32" />
                                <Skeleton className="h-4 w-48" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-2/3" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (error) {
        return (
            <div className="container max-w-4xl py-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="text-center text-red-600">
                            <p>{error}</p>
                            <Button
                                variant="outline"
                                className="mt-4"
                                onClick={() => window.location.reload()}
                            >
                                Try Again
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="container max-w-4xl py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>Your personal information and account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={userData?.image || session?.user?.image || ""} />
                            <AvatarFallback>
                                {userData?.name?.charAt(0) || session?.user?.name?.charAt(0) || <User className="h-8 w-8" />}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-2xl font-bold">{userData?.name || session?.user?.name}</h2>
                            <p className="text-muted-foreground">{userData?.role}</p>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span>{userData?.email || session?.user?.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span>Member since {new Date(userData?.createdAt || "").toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span>Karnataka, India</span>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <Button variant="outline">Edit Profile</Button>
                        <Button>Update Settings</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 