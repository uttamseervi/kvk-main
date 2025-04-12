"use client"

import { useState } from "react"
import { ArrowLeft, Calendar, ChevronRight, MapPin, Users, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog"
import {
  PageTransition,
  FadeUpSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  TextReveal,
  ImageReveal,
  AnimatedButton,
  SlideIn,
} from "@/components/animations"
import Link from "next/link"

// Health data object
const healthData = {
  id: "health",
  title: "Health",
  description:
    "Improving healthcare access and awareness in underserved communities through medical camps, blood donation drives, and health education programs.",
  image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378028/3275630-1281620543_mfbb5z.jpg",
  topic: "healthcare,medical,camp,india",
  projects: [
    "Free Medical Camps in Rural Areas",
    "Blood Donation Drives",
    "Health Awareness Workshops",
    "COVID-19 Relief Efforts",
  ],
}

// Main Health Initiative Details Component
interface HealthInitiativeDetailsProps {
  onClose?: () => void
}

export function HealthInitiativeDetails({ onClose }: HealthInitiativeDetailsProps) {
  const topics = healthData.topic.split(",")

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <SlideIn>
          <Link href="/our-work" className="text-primary mb-1 flex items-center hover:underline">
            <ChevronRight className="w-4 h-4 rotate-180 mr-1" />
            Back to Our Work
          </Link>
        </SlideIn>
        <div className="flex items-center mb-6">
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          )}
          <TextReveal>
            <h1 className="text-3xl font-bold">{healthData.title} Initiatives</h1>
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ImageReveal>
              <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-6">
                <Image
                  src={healthData.image || "/placeholder.svg"}
                  alt={healthData.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ImageReveal>

            <div className="space-y-6">
              <FadeUpSection>
                <div>
                  <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                  <p className="text-muted-foreground text-lg">{healthData.description}</p>
                </div>
              </FadeUpSection>

              <Separator />

              <FadeUpSection delay={0.1}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Health Projects</h2>
                  <StaggerContainer>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {healthData.projects.map((project, index) => (
                        <StaggerItem key={index}>
                          <AnimatedCard>
                            <Card className="border-l-4 border-l-emerald-500">
                              <CardContent className="p-4">
                                <div className="flex items-start">
                                  <div className="bg-emerald-100 p-2 rounded-full mr-3">
                                    {index % 2 === 0 ? (
                                      <Users className="h-5 w-5 text-emerald-600" />
                                    ) : (
                                      <Calendar className="h-5 w-5 text-emerald-600" />
                                    )}
                                  </div>
                                  <div>
                                    <h3 className="font-medium">{project}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                      {index % 2 === 0
                                        ? "Ongoing initiative serving communities in need"
                                        : "Regular events organized throughout the year"}
                                    </p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </AnimatedCard>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                </div>
              </FadeUpSection>

              <Separator />

              <FadeUpSection delay={0.2}>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Impact & Achievements</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <SlideIn direction="up" delay={0.1}>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">10,000+</div>
                        <p className="text-muted-foreground">People served through medical camps</p>
                      </div>
                    </SlideIn>
                    <SlideIn direction="up" delay={0.2}>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                        <p className="text-muted-foreground">Blood donation drives organized</p>
                      </div>
                    </SlideIn>
                    <SlideIn direction="up" delay={0.3}>
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600 mb-2">25+</div>
                        <p className="text-muted-foreground">Rural communities reached</p>
                      </div>
                    </SlideIn>
                  </div>
                </div>
              </FadeUpSection>
            </div>
          </div>

          <div className="space-y-6">
            <SlideIn direction="right">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
                  <div className="space-y-4">
                    <AnimatedButton>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Volunteer Now</Button>
                    </AnimatedButton>
                    <AnimatedButton>
                      <Button variant="outline" className="w-full">
                        Donate
                      </Button>
                    </AnimatedButton>
                    <AnimatedButton>
                      <Button variant="outline" className="w-full">
                        Partner With Us
                      </Button>
                    </AnimatedButton>
                  </div>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction="right" delay={0.1}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Focus Areas</h3>
                  <StaggerContainer>
                    <div className="flex flex-wrap gap-2">
                      {topics.map((topic, index) => (
                        <StaggerItem key={index}>
                          <div className="px-3 py-1 bg-slate-100 text-slate-800 rounded-full text-sm capitalize">
                            {topic.trim()}
                          </div>
                        </StaggerItem>
                      ))}
                    </div>
                  </StaggerContainer>
                </CardContent>
              </Card>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                  <StaggerContainer>
                    <div className="space-y-4">
                      <StaggerItem>
                        <div className="flex items-start">
                          <div className="bg-slate-100 p-2 rounded-md mr-3 text-center min-w-[50px]">
                            <div className="text-sm font-bold">15</div>
                            <div className="text-xs">May</div>
                          </div>
                          <div>
                            <h4 className="font-medium">Medical Camp</h4>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>Rural District, India</span>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                      <StaggerItem>
                        <div className="flex items-start">
                          <div className="bg-slate-100 p-2 rounded-md mr-3 text-center min-w-[50px]">
                            <div className="text-sm font-bold">22</div>
                            <div className="text-xs">Jun</div>
                          </div>
                          <div>
                            <h4 className="font-medium">Blood Donation Drive</h4>
                            <div className="flex items-center text-sm text-muted-foreground mt-1">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>City Center, India</span>
                            </div>
                          </div>
                        </div>
                      </StaggerItem>
                    </div>
                  </StaggerContainer>
                </CardContent>
              </Card>
            </SlideIn>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}

// Modal Component
interface HealthInitiativeModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HealthInitiativeModal({ isOpen, onClose }: HealthInitiativeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogOverlay className="bg-black/50" />
      <DialogContent className="sm:max-w-[90%] max-h-[90vh] overflow-y-auto p-0 gap-0">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>
        <HealthInitiativeDetails onClose={onClose} />
      </DialogContent>
    </Dialog>
  )
}

// Page Component
export default function HealthInitiativePage() {
  return <HealthInitiativeDetails />
}

// Card Component for use in other pages (like a grid of initiatives)
export function HealthInitiativeCard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <AnimatedCard>
        <Card className="overflow-hidden">
          <div className="relative h-48">
            <Image src={healthData.image || "/placeholder.svg"} alt={healthData.title} fill className="object-cover" />
          </div>
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-2">{healthData.title} Initiatives</h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{healthData.description}</p>
            <AnimatedButton>
              <Button onClick={() => setIsModalOpen(true)} variant="outline" className="w-full">
                Learn More
              </Button>
            </AnimatedButton>
          </CardContent>
        </Card>
      </AnimatedCard>

      <HealthInitiativeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

// Usage examples:
//
// 1. As a standalone page:
// import HealthInitiativePage from "@/components/health-initiative"
//
// 2. As a modal triggered from another component:
// import { HealthInitiativeModal } from "@/components/health-initiative"
// const [isOpen, setIsOpen] = useState(false)
// <Button onClick={() => setIsOpen(true)}>Learn More</Button>
// <HealthInitiativeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//
// 3. As a card in a grid of initiatives:
// import { HealthInitiativeCard } from "@/components/health-initiative"
// <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//   <HealthInitiativeCard />
//   {/* Other initiative cards */}
// </div>
