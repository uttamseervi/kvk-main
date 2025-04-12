import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, SlideIn, ScrollProgress, AnimatedButton } from "@/components/animations"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Environmental Initiatives | Lions Club Bangalore",
    description:
        "Protecting our natural resources through tree plantation drives, clean-up campaigns, and environmental awareness programs to create a sustainable future.",
}

export default function EnvironmentPage() {
    return (
        <div className="container max-w-6xl py-10 space-y-10">
            {/* <ScrollProgress /> */}

            <div className="space-y-4">
                <SlideIn>
                    <Link href="/our-work" className="text-primary flex items-center hover:underline">
                        <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                        Back to Our Work
                    </Link>
                </SlideIn>

                <FadeUpSection>
                    <h1 className="text-4xl font-bold">Environmental Initiatives</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        Protecting our natural resources through tree plantation drives, clean-up campaigns, and environmental
                        awareness programs to create a sustainable future.
                    </p>
                </FadeUpSection>
            </div>

            <div className="grid gap-8">
                <FadeUpSection delay={0.2}>
                    <Card>
                        <CardContent className="p-0 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="h-[300px] md:h-auto relative">

                                    <Image src="https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744379507/Tree_Plantation-825816428_cqcu7c.jpg" alt="" fill
                                        className="object-cover"
                                        priority />
                                </div>
                                <div className="p-6 flex flex-col justify-center space-y-4">
                                    <h2 className="text-2xl font-bold">Our Environmental Impact</h2>
                                    <p>
                                        Environmental conservation is crucial for the well-being of current and future generations. Our club
                                        is committed to protecting and preserving our natural resources through various initiatives aimed at
                                        creating a more sustainable and greener planet.
                                    </p>
                                    <p>
                                        From tree plantation drives to clean-up campaigns and awareness programs, we work tirelessly to make
                                        a positive impact on our environment. We believe that small actions, when taken collectively, can
                                        lead to significant environmental change.
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
                                <h3 className="text-xl font-bold">Tree Plantation Drives</h3>
                                <p>
                                    We regularly organize tree plantation drives across Bangalore and surrounding areas, contributing to
                                    increased green cover and combating air pollution.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Beach and Lake Clean-up Campaigns</h3>
                                <p>
                                    Our volunteers actively participate in cleaning up lakes, rivers, and public spaces, removing waste
                                    and plastic to protect aquatic ecosystems.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Plastic-Free Initiatives</h3>
                                <p>
                                    We promote plastic-free alternatives and conduct awareness campaigns about the harmful effects of
                                    single-use plastics on our environment.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Environmental Awareness Workshops</h3>
                                <p>
                                    We conduct workshops in schools and communities to educate people about environmental conservation,
                                    waste management, and sustainable living practices.
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
                                Join us in our mission to create a greener and more sustainable future. Your contribution, whether
                                through volunteering or donations, can make a significant difference.
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
                                <AnimatedButton  >
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
