import { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, SlideIn, ScrollProgress, AnimatedButton } from "@/components/animations"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Art and Culture Initiatives | Lions Club Bangalore",
    description: "Preserving and promoting Karnataka's rich cultural heritage through festivals, performances, workshops, and cultural exchange programs.",
}

export default function ArtAndCulturePage() {
    return (
        <div className="container max-w-6xl py-10 space-y-10">
            {/* <ScrollProgress  /> */}

            <div className="space-y-4">
                <SlideIn>
                    <Link href="/our-work" className="text-primary flex items-center hover:underline">
                        <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
                        Back to Our Work
                    </Link>
                </SlideIn>

                <FadeUpSection>
                    <h1 className="text-4xl font-bold">Art and Culture Initiatives</h1>
                    <p className="text-xl text-muted-foreground mt-2">
                        Preserving and promoting Karnataka's rich cultural heritage through festivals, performances, workshops, and cultural exchange programs.
                    </p>
                </FadeUpSection>
            </div>

            <div className="grid gap-8">
                <FadeUpSection delay={0.2}>
                    <Card>
                        <CardContent className="p-0 overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="h-[300px] md:h-auto relative">
                                    {/* <ImageWithFallback
                                        src="https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378953/Kathakali-Dance-113591244_kxoi6g.jpg"
                                        alt="Art and culture initiatives"
                                        
                                        className="object-cover"
                                    /> */}
                                    <Image src="https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378953/Kathakali-Dance-113591244_kxoi6g.jpg" alt=""  fill className="object-cover" />
                                </div>
                                <div className="p-6 flex flex-col justify-center space-y-4">
                                    <h2 className="text-2xl font-bold">Our Cultural Impact</h2>
                                    <p>
                                        Karnataka has a rich cultural heritage that spans centuries, encompassing diverse art forms, music, dance, and traditions. Our club is dedicated to preserving and promoting this cultural legacy for future generations.
                                    </p>
                                    <p>
                                        Through various cultural initiatives, we aim to create awareness about traditional art forms, provide platforms for artists to showcase their talents, and foster a deeper appreciation for our cultural roots among the younger generation.
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
                                <h3 className="text-xl font-bold">Annual Cultural Festivals</h3>
                                <p>
                                    We organize annual cultural festivals that showcase various traditional art forms, music, and dance performances, providing a platform for both established and emerging artists.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Traditional Art Workshops</h3>
                                <p>
                                    Our workshops on traditional art forms like Yakshagana, folk music, and classical dance help preserve these art forms by passing them on to the younger generation.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Kannada Language Promotion</h3>
                                <p>
                                    We conduct various programs to promote the Kannada language, including literary events, poetry recitals, and competitions for school and college students.
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6 space-y-4">
                                <h3 className="text-xl font-bold">Folk Art Preservation Programs</h3>
                                <p>
                                    Our initiatives focus on documenting and preserving endangered folk art forms of Karnataka, ensuring they continue to thrive in the modern era.
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
                                Help us preserve and promote Karnataka's rich cultural heritage. Your support can make a significant difference in keeping our traditions alive.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <AnimatedButton >
                                    <Link href="/donate" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                                        Donate Now
                                    </Link>
                                </AnimatedButton>
                                <AnimatedButton>
                                    <Link href="/volunteer" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
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
