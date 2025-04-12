import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, SlideIn, ScrollProgress, AnimatedButton } from "@/components/animations"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Natural Disaster Relief | Lions Club Bangalore",
    description:
        "Providing immediate assistance and long-term rehabilitation support to communities affected by floods, droughts, and other natural calamities.",
}

export default function NaturalDisasterPage() {
    return (
        <div className="container max-w-6xl py-10 space-y-10">


            <div className="space-y-4">
                <SlideIn>
                    <Link href="/our-work" className="text-primary flex items-center hover:underline">
                        <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                        Back to Our Work
                    </Link>
                </SlideIn>

                <FadeUpSection>
                    <h1 className="text-4xl font-bold">Natural Disaster Relief</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        Providing immediate assistance and long-term rehabilitation support to communities affected by floods,
                        droughts, and other natural calamities.
                    </p>
                </FadeUpSection>
            </div>

            <div className="grid gap-8">
                <FadeUpSection delay={0.2}>
                    <Card>
                        <CardContent className="p-0 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="h-[300px] md:h-auto relative">

                                    <Image src="https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378953/AP21193389703866-e1626147548358-3339018612_u9mbo6.jpg"
                                        alt="" fill
                                        className="object-cover"
                                        priority />
                                </div>
                                <div className="p-6 flex flex-col justify-center space-y-4">
                                    <h2 className="text-2xl font-bold">Our Disaster Relief Impact</h2>
                                    <p>
                                        Natural disasters can devastate communities in an instant, leaving people without shelter, food, or
                                        basic necessities. Our club is committed to providing immediate relief and long-term support to
                                        communities affected by natural calamities.
                                    </p>
                                    <p>
                                        From emergency response teams to rehabilitation programs, we work tirelessly to help communities
                                        recover and rebuild after disasters. We believe in not just providing immediate aid but also in
                                        helping communities become more resilient against future calamities.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </FadeUpSection>

                <FadeUpSection delay={0.3}>
                    <h2 className="text-3xl font-bold mb-6">Our Key Projects</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Emergency Relief Distribution</h3>
                                <p>
                                    We provide immediate relief materials including food, water, clothing, and medical supplies to
                                    communities affected by natural disasters.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Rehabilitation Programs</h3>
                                <p>
                                    Our long-term rehabilitation programs help affected communities rebuild their lives through housing
                                    assistance, livelihood support, and psychological counseling.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Disaster Preparedness Training</h3>
                                <p>
                                    We conduct training programs to help communities prepare for potential disasters, teaching them safety
                                    protocols and emergency response techniques.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Rebuilding Community Infrastructure</h3>
                                <p>
                                    We assist in rebuilding essential community infrastructure like schools, healthcare centers, and water
                                    systems that are damaged during natural disasters.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </FadeUpSection>

                <FadeUpSection delay={0.4}>
                    <Card>
                        <CardContent className="p-6 space-y-6">
                            <h2 className="text-2xl font-bold">Get Involved</h2>
                            <p>
                                Your support can help communities recover from natural disasters and build resilience for the future.
                                Join us in our mission to provide relief and rehabilitation to those affected by calamities.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <AnimatedButton >
                                    <Link
                                        href="/donate"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        Donate Now
                                    </Link>
                                </AnimatedButton>
                                <AnimatedButton >
                                    <Link
                                        href="/volunteer"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                    >
                                        Volunteer
                                    </Link>
                                </AnimatedButton>
                            </div>
                        </CardContent>
                    </Card>
                </FadeUpSection>
            </div>
        </div>
    )
}
