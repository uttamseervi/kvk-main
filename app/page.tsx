import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Award, Users, Heart, Calendar } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import {
  FadeUpSection,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  AnimatedButton,
  TextReveal,
  ImageReveal,
} from "@/components/animations"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-orange-50 py-20 md:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <TextReveal>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">Karnataka Vidyarthi Koota</h1>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              Preserving our cultural heritage and serving the community through social initiatives
            </p>
          </TextReveal>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <AnimatedButton>
              <Button className="bg-orange-600 hover:bg-orange-700">Join Our Mission</Button>
            </AnimatedButton>
            <AnimatedButton>
              <Button variant="outline">
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedButton>
          </div>
        </div>
        <div className="absolute inset-0 z-0 bg-[url('https://indiachalk.com/wp-content/uploads/2021/09/00.-blog-feature-image-india-chalk-scaled.jpg')]  bg-cover bg-no-repeat opacity-35"></div>
      </section>

      {/* Introduction Section */}
      <FadeUpSection>
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Our Mission & Vision</h2>
              <p className="mb-8 text-lg text-gray-600">
                Karnataka Vidyarthi Koota (KVK) is dedicated to preserving and promoting the rich cultural heritage of
                Karnataka while serving the community through various social initiatives. We believe in the power of
                cultural identity as a force for positive change.
              </p>
              <p className="text-lg text-gray-600">
                Our vision is to create a global network of individuals connected by their love for Karnataka's culture
                and their commitment to social service, fostering a sense of belonging and responsibility towards our
                heritage and community.
              </p>
            </div>
          </div>
        </section>
      </FadeUpSection>

      {/* Certificates & Recognitions */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container">
          <FadeUpSection>
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Certificates & Recognitions</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                Our commitment to excellence and service has been recognized by various organizations and institutions.
              </p>
            </div>
          </FadeUpSection>

          <StaggerContainer>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Excellence in Cultural Preservation",
                  issuer: "Ministry of Culture, Government of Karnataka",
                  year: "2023",
                  description: "Awarded for outstanding contribution to preserving Karnataka's cultural heritage",
                },
                {
                  title: "Community Service Award",
                  issuer: "National Social Service Association",
                  year: "2022",
                  description: "Recognized for exceptional service during the pandemic relief efforts",
                },
                {
                  title: "Best Cultural Organization",
                  issuer: "Karnataka Cultural Foundation",
                  year: "2021",
                  description: "Awarded for promoting Kannada language and arts among youth",
                },
                {
                  title: "Environmental Stewardship",
                  issuer: "Green Earth Initiative",
                  year: "2020",
                  description: "Recognized for tree plantation and conservation efforts",
                },
                {
                  title: "Youth Empowerment Award",
                  issuer: "Youth Development Council",
                  year: "2019",
                  description: "Awarded for skill development programs for underprivileged youth",
                },
                {
                  title: "Humanitarian Excellence",
                  issuer: "International Aid Foundation",
                  year: "2018",
                  description: "Recognized for flood relief efforts in coastal Karnataka",
                },
              ].map((certificate, index) => (
                <StaggerItem key={index}>
                  <AnimatedCard>
                    <Card className="overflow-hidden transition-all">
                      <CardHeader className="bg-orange-100 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{certificate.title}</CardTitle>
                          <Award className="h-5 w-5 text-orange-600" />
                        </div>
                        <CardDescription>{certificate.issuer}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <p className="text-sm text-gray-600 mb-2">{certificate.description}</p>
                        <p className="text-xs text-gray-500">Awarded in {certificate.year}</p>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Social and Cultural Work Showcase */}
      <section className="py-16 md:py-24">
        <div className="container">
          <FadeUpSection>
            <div className="mb-12 text-center">
              <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Our Impact</h2>
              <p className="mx-auto max-w-2xl text-gray-600">
                A glimpse of our social and cultural initiatives that have made a difference in the community.
              </p>
            </div>
          </FadeUpSection>

          <StaggerContainer>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cultural Fest 2023",
                  description: "Annual celebration of Karnataka's diverse cultural traditions",
                  icon: Calendar,
                  image: "https://indiachalk.com/wp-content/uploads/2021/09/00.-blog-feature-image-india-chalk-scaled.jpg",
                  topic: "festival,culture",
                },
                {
                  title: "Flood Relief Drive",
                  description: "Emergency assistance to affected communities in North Karnataka",
                  icon: Heart,
                  image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744377769/Kerala_zr4rcv.jpg",
                  topic: "flood,relief,volunteer",
                },
                {
                  title: "Youth Leadership Program",
                  description: "Mentoring the next generation of community leaders",
                  icon: Users,
                  image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744376267/youth-leadership_aavcsf.jpg",
                  topic: "youth,leadership,education",
                },
                {
                  title: "Rural Education Initiative",
                  description: "Bringing quality education to underserved rural areas",
                  icon: Award,
                  image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744376952/1_Ek74u2m7usid9rvFIMSxqA_zv2ibz.jpg",
                  topic: "rural,education,india",
                },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <div className="group relative overflow-hidden rounded-lg">
                    <ImageReveal>
                      <ImageWithFallback
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        unsplashTopic={item.topic}
                        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </ImageReveal>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-0 p-4 text-white">
                        <div className="mb-2 flex items-center">
                          <item.icon className="mr-2 h-5 w-5" />
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="mt-12 text-center">
            <AnimatedButton>
              <Link href="/our-work">
                <Button variant="outline" className="gap-2">
                  View All Projects
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </section>
    </div>
  )
}
