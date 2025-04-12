import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, SlideIn, ScrollProgress, AnimatedButton } from "@/components/animations"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Sports and Adventure Initiatives | Lions Club Bangalore",
    description:
        "Encouraging physical fitness and team spirit through sports tournaments, adventure camps, and outdoor activities for youth development.",
}

export default function SportsAndAdventurePage() {
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
                    <h1 className="text-4xl font-bold">Sports and Adventure Initiatives</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        Encouraging physical fitness and team spirit through sports tournaments, adventure camps, and outdoor
                        activities for youth development.
                    </p>
                </FadeUpSection>
            </div>

            <div className="grid gap-8">
                <FadeUpSection delay={0.2}>
                    <Card>
                        <CardContent className="p-0 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="h-[300px] md:h-auto relative">

                                    <Image src="https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378954/shutterstock-114911380-4102512431_slkc02.webp"
                                        alt="Sports and adventure initiatives" fill className="object-cover"
                                        priority />
                                </div>
                                <div className="p-6 flex flex-col justify-center space-y-4">
                                    <h2 className="text-2xl font-bold">Our Sports Impact</h2>
                                    <p>
                                        Sports and adventure activities play a crucial role in youth development, fostering physical
                                        fitness, teamwork, leadership, and resilience. Our club is committed to promoting sports and outdoor
                                        activities among young people.
                                    </p>
                                    <p>
                                        Through various sports initiatives, we aim to provide opportunities for youth to engage in healthy
                                        competition, develop their athletic abilities, and learn important life skills. We believe that
                                        sports can be a powerful tool for personal growth and community building.
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
                                <h3 className="text-xl font-bold">Inter-College Sports Tournaments</h3>
                                <p>
                                    We organize annual sports tournaments for college students, providing a platform for young athletes to
                                    showcase their talents and fostering healthy competition.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Adventure Camps for Youth</h3>
                                <p>
                                    Our adventure camps offer young people the opportunity to experience outdoor activities like trekking,
                                    rock climbing, and camping, helping them develop courage and resilience.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Traditional Sports Revival</h3>
                                <p>
                                    We work to revive and promote traditional Indian sports like Kabaddi, Kho-Kho, and Gilli-Danda,
                                    preserving our sporting heritage for future generations.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Sports Training for Underprivileged Children</h3>
                                <p>
                                    We provide sports equipment and training to underprivileged children, giving them access to sporting
                                    opportunities they might not otherwise have.
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
                                Support our sports and adventure initiatives to help young people develop physical fitness, teamwork,
                                and leadership skills. Your contribution can make a significant difference.
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
