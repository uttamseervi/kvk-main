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

                <FadeUpSection delay={0.35}>
                    <Card>
                        <CardContent className="p-6 space-y-6">
                            <h2 className="text-2xl font-bold">KVK’s Environmental Commitment</h2>
                            <p className="text-lg text-muted-foreground italic">
                                “We don’t inherit the Earth from our ancestors, we borrow it from our children.”
                            </p>
                            <p className="text-muted-foreground">
                                Preserving the environment is a universal obligation. A single tree can absorb approximately a ton of carbon dioxide over its lifetime. Tree planting and environmental education are crucial to restoring our planet and securing a future for the next generations.
                            </p>
                            <p className="text-muted-foreground">
                                KVK, a dedicated NGO working toward environmental protection in India, understands that conservation cannot be the effort of one — it takes awareness, collaboration, and action. Environmental preservation is deeply embedded in KVK’s core values.
                            </p>
                            <div className="space-y-4 text-muted-foreground text-base">
                                <h3 className="text-xl font-semibold mt-4">What We Do</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Educate communities about Ground Water Replenishment, Rainwater Harvesting, and the dangers of water wastage.</li>
                                    <li>Raise awareness about the harmful effects of e-waste and plastics on our environment.</li>
                                    <li>Plant saplings to preserve greenery amidst urban expansion and promote the value of medicinal herbs in collaboration with government bodies.</li>
                                    <li>Organize “Clean-Up” drives in tourist spots and parks involving local students and volunteers to remove plastic waste and restore natural beauty.</li>
                                    <li>Conduct educational programs for farmers on scientific agricultural techniques to encourage sustainable farming practices.</li>
                                    <li>Support both government and private missions aimed at wildlife conservation and biodiversity preservation.</li>
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
