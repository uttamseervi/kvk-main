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

                <FadeUpSection delay={0.35}>
                    <Card>
                        <CardContent className="p-6 space-y-6">
                            <h2 className="text-2xl font-bold">KVK’s Sports and Adventure Initiatives</h2>
                            <p className="text-muted-foreground">
                                Karnataka is fast becoming not only a hub for information technology but also a hotspot for adventure seekers from around the world. With lush trekking trails and an expanding range of adventure sports like river rafting, the state is a paradise for nature and thrill lovers.
                            </p>
                            <p className="text-muted-foreground">
                                KVK sees sports as a vital medium for inclusion and growth. Beyond just physical development, sports instill discipline, confidence, and camaraderie. At KVK, students are encouraged to explore their athletic interests with passion and are often trained to compete at the national level. Our programs actively involve beneficiaries across various initiatives in sporting and adventure activities.
                            </p>
                            <div className="space-y-4 text-muted-foreground text-base">
                                <h3 className="text-xl font-semibold mt-4">What We Do</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Organize sports meets for rural students in collaboration with government and corporate entities.</li>
                                    <li>Partner with the Department of Youth Affairs and Sports to host competitive events promoting sportsmanship and inclusivity.</li>
                                    <li>Train students in trekking with certified instructors through local sports associations, fostering environmental appreciation.</li>
                                    <li>Coordinate with Sports Clubs and Corporate sponsors to offer paragliding, river rafting, rappelling, and more, boosting adventure tourism in Karnataka.</li>
                                    <li>Conduct inter-college sports competitions uniting students from urban and rural backgrounds, giving them exposure to global sports culture.</li>
                                    <li>Revive traditional Indian sports that are on the verge of being forgotten, preserving cultural legacy through play.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
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
