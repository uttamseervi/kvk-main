"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LogIn } from "lucide-react"
import { GoogleIcon } from "@/components/icons/google-icon"

export function AuthDialog() {
    const [isOpen, setIsOpen] = useState(false)

    const handleGoogleSignIn = async () => {
        // TODO: Implement Google Sign In
        console.log("Google sign in clicked")
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <LogIn className="h-4 w-4" />
                    Register to KVK
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Join Karnataka Vidyarthi Koota</DialogTitle>
                    <DialogDescription className="pt-2">
                        Register to become a member of KVK and get access to:
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                            <li>Participate in cultural events and activities</li>
                            <li>Join our social service initiatives</li>
                            <li>Connect with the Kannada community</li>
                            <li>Receive updates about our programs</li>
                        </ul>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Button
                        variant="outline"
                        className="w-full gap-2"
                        onClick={handleGoogleSignIn}
                    >
                        <GoogleIcon className="h-5 w-5" />
                        Continue with Google
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                        By registering, you agree to our Terms of Service and Privacy Policy
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
} 