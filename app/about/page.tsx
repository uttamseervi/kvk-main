import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarDays, Award, Users, BookOpen } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import {
  FadeUpSection,
  SlideIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  TimelineItem,
} from "@/components/animations"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeUpSection>
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">About Us</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Learn about our journey, mission, and the people behind Karnataka Vidyarthi Koota.
          </p>
        </div>
      </FadeUpSection>

      {/* History and Mission */}
      <section className="mb-16 grid gap-8 md:grid-cols-2">
        <SlideIn direction="left">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our History</h2>
            <p className="mb-4 text-gray-600">
              Karnataka Vidyarthi Koota (KVK) was founded in 1985 by a group of passionate students from Karnataka who
              were studying away from their home state. What began as a small gathering to celebrate regional festivals
              and maintain cultural connections has grown into a significant organization with multiple chapters across
              the country.
            </p>
            <p className="mb-4 text-gray-600">
              Over the decades, KVK has evolved from a cultural association to a multifaceted organization that balances
              cultural preservation with social responsibility. Our founding members envisioned an organization that
              would serve as a bridge between tradition and progress, and we continue to honor that vision today.
            </p>
            <p className="text-gray-600">
              Today, KVK stands as a testament to the power of cultural identity as a force for positive change,
              bringing together people from all walks of life who share a love for Karnataka's heritage and a commitment
              to community service.
            </p>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Mission & Core Values</h2>
            <p className="mb-4 text-gray-600">
              Our mission is to preserve and promote the rich cultural heritage of Karnataka while serving the community
              through various social initiatives. We believe that cultural identity and social responsibility go hand in
              hand.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Cultural Preservation</h3>
                  <p className="text-sm text-gray-600">
                    Promoting and preserving Karnataka's language, arts, and traditions
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Community Service</h3>
                  <p className="text-sm text-gray-600">Addressing social needs through volunteer-driven initiatives</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Excellence</h3>
                  <p className="text-sm text-gray-600">Striving for the highest standards in all our endeavors</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Inclusivity</h3>
                  <p className="text-sm text-gray-600">
                    Welcoming all who share our love for Karnataka and its culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SlideIn>
      </section>

      {/* Team Members */}
      <section className="mb-16">
        <FadeUpSection>
          <h2 className="mb-8 text-center text-2xl font-bold">Our Team</h2>
        </FadeUpSection>

        <StaggerContainer>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Dr. Rajesh Kumar",
                role: "President",
                bio: "Cultural anthropologist with 20+ years of experience in preserving Karnataka's heritage",
                image: "https://source.unsplash.com/random/300x300/?man,professional,indian",
                topic: "man,professional,indian",
              },
              {
                name: "Smt. Lakshmi Devi",
                role: "Vice President",
                bio: "Social activist and former educator dedicated to community development",
                image: "https://source.unsplash.com/random/300x300/?woman,professional,indian",
                topic: "woman,professional,indian",
              },
              {
                name: "Shri. Venkatesh Murthy",
                role: "Secretary",
                bio: "Public relations professional with a passion for Kannada literature",
                image: "https://source.unsplash.com/random/300x300/?man,indian,formal",
                topic: "man,indian,formal",
              },
              {
                name: "Smt. Ananya Sharma",
                role: "Treasurer",
                bio: "Financial analyst and volunteer coordinator for multiple social initiatives",
                image: "https://source.unsplash.com/random/300x300/?woman,indian,business",
                topic: "woman,indian,business",
              },
              {
                name: "Shri. Rishi Manjunath",
                role: "Junior Tech Lead",
                bio: "Aspiring web developer and a Entepruner",
                image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744379909/WhatsApp_Image_2025-04-11_at_19.26.23_63a4b125_xfyptr.jpg",
                topic: "man,musician,indian",
              },
              {
                name: "Shri. Uttam Seervi",
                role: "Tech Lead",
                bio: "Passionate Web Developer",
                image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744380057/WhatsApp_Image_2025-04-11_at_19.30.08_448cda1d_e6gvpv.jpg",
                topic: "Student, Developer",
              },
              {
                name: "Shri. Druva Suresh",
                role: "Tech Lead",
                bio: "Web Developer",
                image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744380462/WhatsApp_Image_2025-04-11_at_19.34.04_9f275eea_ot89kg.jpg",
                topic: "man,tech,indian",
              },
           
            ].map((member, index) => (
              <StaggerItem key={index}>
                <AnimatedCard>
                  <Card className="overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <ImageWithFallback
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={300}
                        height={300}
                        unsplashTopic={member.topic}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <p className="text-sm font-medium text-orange-600">{member.role}</p>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-sm text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Milestones */}
      <section>
        <FadeUpSection>
          <h2 className="mb-8 text-center text-2xl font-bold">Our Journey & Achievements</h2>
        </FadeUpSection>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-orange-200"></div>

          <div className="space-y-12">
            {[
              {
                year: "1985",
                title: "Foundation",
                description: "Karnataka Vidyarthi Koota was established by a group of students from Karnataka",
              },
              {
                year: "1990",
                title: "First Cultural Festival",
                description: "Organized the first annual cultural festival celebrating Karnataka's traditions",
              },
              {
                year: "1995",
                title: "Expansion",
                description: "Opened three new chapters in different cities across India",
              },
              {
                year: "2000",
                title: "Social Service Initiative",
                description: "Launched our first major social service program focusing on education",
              },
              {
                year: "2005",
                title: "Recognition",
                description: "Received state-level recognition for cultural preservation efforts",
              },
              {
                year: "2010",
                title: "Blood Donation Program",
                description: "Established our regular blood donation camps and donor registry",
              },
              {
                year: "2015",
                title: "30th Anniversary",
                description: "Celebrated 30 years with a grand cultural event and publication of our history",
              },
              {
                year: "2020",
                title: "Pandemic Response",
                description: "Mobilized resources to provide relief during the COVID-19  pandemic",
              },
              {
                year: "2023",
                title: "Digital Transformation",
                description: "Launched comprehensive digital platform to reach wider audience",
              },
            ].map((milestone, index) => (
              <TimelineItem key={index} index={index}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <div className="h-6 w-6 rounded-full border-4 border-orange-200 bg-orange-600"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "items-end pr-8 md:items-end md:pr-12" : "items-start pl-8 md:items-start md:pl-12"}`}
                  >
                    <div
                      className={`w-full max-w-xs rounded-lg bg-white p-4 shadow-md md:max-w-sm ${index % 2 === 0 ? "text-right" : "text-left"}`}
                    >
                      <div className="mb-2 inline-block rounded bg-orange-100 px-2 py-1 text-sm font-semibold text-orange-800">
                        {milestone.year}
                      </div>
                      <h3 className="mb-2 text-lg font-bold">{milestone.title}</h3>
                      <p className="text-sm text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </TimelineItem>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
