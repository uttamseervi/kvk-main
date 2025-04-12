import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, SlideIn, ScrollProgress, AnimatedButton } from "@/components/animations"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Education Initiatives | Lions Club Bangalore",
    description:
        "Empowering the next generation through scholarships, educational resources, career guidance, and skill development programs for underprivileged students.",
}

export default function EducationPage() {
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
                    <h1 className="text-4xl font-bold">Education Initiatives</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        Empowering the next generation through scholarships, educational resources, career guidance, and skill
                        development programs for underprivileged students.
                    </p>
                </FadeUpSection>
            </div>

            <div className="grid gap-8">
                <FadeUpSection delay={0.2}>
                    <Card>
                        <CardContent className="p-0 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="h-[300px] md:h-auto relative">

                                    <Image src="https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378350/person-holds-a-book-over-a-stack-and-turns-the-page-1802552817_gixevq.jpg" alt="" fill
                                        className="object-cover"
                                        priority />
                                </div>
                                <div className="p-6 flex flex-col justify-center space-y-4">
                                    <h2 className="text-2xl font-bold">Our Educational Impact</h2>
                                    <p>
                                        Education is the cornerstone of societal development. Our club is dedicated to ensuring that quality
                                        education reaches every child, regardless of their socioeconomic background. Through our various
                                        educational initiatives, we aim to bridge the gap between privileged and underprivileged students,
                                        providing equal opportunities for all.
                                    </p>
                                    <p>
                                        Our programs focus on holistic educational development, from providing basic educational materials
                                        to offering career guidance and digital literacy training. We believe in empowering students not
                                        just with knowledge but with the skills and confidence they need to succeed in life.
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
                                <h3 className="text-xl font-bold">Scholarship Programs for Deserving Students</h3>
                                <p>
                                    We provide financial assistance to academically gifted students from economically disadvantaged
                                    backgrounds, helping them pursue higher education without financial constraints.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Career Guidance Seminars</h3>
                                <p>
                                    Our career guidance seminars connect students with professionals from various fields, providing
                                    insights into different career paths and helping them make informed decisions about their future.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Digital Literacy Initiatives</h3>
                                <p>
                                    In today's digital world, computer literacy is essential. Our digital literacy programs equip students
                                    with basic computer skills, preparing them for the modern workforce.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Educational Material Distribution</h3>
                                <p>
                                    We regularly distribute books, stationery, and other educational materials to underprivileged
                                    students, ensuring they have the resources they need to learn effectively.
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
                                Your support can make a significant difference in a child's educational journey. Join us in our mission
                                to provide quality education to all.
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
