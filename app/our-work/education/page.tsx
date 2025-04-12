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

                <FadeUpSection delay={0.35}>
                    <Card>
                        <CardContent className="p-6 space-y-6">
                            <h2 className="text-2xl font-bold">KVK's Holistic Approach to Education</h2>
                            <p className="text-lg text-muted-foreground">
                                Students are the future of a nation. For an emerging country like India, the development of underprivileged students is key to national progress, with education as its cornerstone. But true educational empowerment cannot be achieved without first supporting the family – especially the mother – through healthcare, empowerment, and income stability.
                            </p>
                            <p className="text-muted-foreground">
                                Realizing this, KVK adopts a lifecycle approach that begins in the corridors of education and extends to family welfare, livelihood support, and community engagement – especially through women empowerment. This comprehensive model supports less privileged children, their families, and the broader community.
                            </p>
                            <div className="space-y-4 text-muted-foreground text-base">
                                <h3 className="text-xl font-semibold mt-4">What We Do</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Conduct personality development programs for students.</li>
                                    <li>Promote adult education programs within underserved communities.</li>
                                    <li>Introduce Mathematics modules to government school students through specialized workshops.</li>
                                    <li>Host technical talks on advancements in technology, including computer literacy.</li>
                                    <li>Educate students about various government scholarship schemes for pursuing higher education.</li>
                                    <li>Organize Lego Robotics Workshops to spark innovation and creativity in young minds.</li>
                                    <li>Host a National E-Conference on novel trends in science and technology.</li>
                                    <li>Provide financial assistance to students pursuing higher studies.</li>
                                    <li>Arrange technical talks, including sessions by Principal Modelling Engineers from Dialog Semiconductors.</li>
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
