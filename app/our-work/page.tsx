import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, SlideIn, ScrollProgress, AnimatedButton } from "@/components/animations"

// Define the work categories
const workCategories = [
  {
    id: "health",
    title: "Health",
    description:
      "Improving healthcare access and awareness in underserved communities through medical camps, blood donation drives, and health education programs.",
    image: "https://source.unsplash.com/random/1200x800/?healthcare,medical,camp",
    topic: "healthcare,medical,camp,india",
    projects: [
      "Free Medical Camps in Rural Areas",
      "Blood Donation Drives",
      "Health Awareness Workshops",
      "COVID-19 Relief Efforts",
    ],
  },
  {
    id: "education",
    title: "Education",
    description:
      "Empowering the next generation through scholarships, educational resources, career guidance, and skill development programs for underprivileged students.",
    image: "https://source.unsplash.com/random/1200x800/?education,school,india",
    topic: "education,school,india,rural",
    projects: [
      "Scholarship Programs for Deserving Students",
      "Career Guidance Seminars",
      "Digital Literacy Initiatives",
      "Educational Material Distribution",
    ],
  },
  {
    id: "environment",
    title: "Environment",
    description:
      "Protecting our natural resources through tree plantation drives, clean-up campaigns, and environmental awareness programs to create a sustainable future.",
    image: "https://source.unsplash.com/random/1200x800/?environment,planting,trees",
    topic: "environment,planting,trees,conservation",
    projects: [
      "Tree Plantation Drives",
      "Beach and Lake Clean-up Campaigns",
      "Plastic-Free Initiatives",
      "Environmental Awareness Workshops",
    ],
  },
  {
    id: "art-and-culture",
    title: "Art and Culture",
    description:
      "Preserving and promoting Karnataka's rich cultural heritage through festivals, performances, workshops, and cultural exchange programs.",
    image: "https://source.unsplash.com/random/1200x800/?culture,art,india,performance",
    topic: "culture,art,india,performance,traditional",
    projects: [
      "Annual Cultural Festivals",
      "Traditional Art Workshops",
      "Kannada Language Promotion",
      "Folk Art Preservation Programs",
    ],
  },
  {
    id: "sports-and-adventure",
    title: "Sports and Adventure",
    description:
      "Encouraging physical fitness and team spirit through sports tournaments, adventure camps, and outdoor activities for youth development.",
    image: "https://source.unsplash.com/random/1200x800/?sports,adventure,youth",
    topic: "sports,adventure,youth,outdoor",
    projects: [
      "Inter-College Sports Tournaments",
      "Adventure Camps for Youth",
      "Traditional Sports Revival",
      "Sports Training for Underprivileged Children",
    ],
  },
  {
    id: "natural-disaster",
    title: "Natural Disaster Relief",
    description:
      "Providing immediate assistance and long-term rehabilitation support to communities affected by floods, droughts, and other natural calamities.",
    image: "https://source.unsplash.com/random/1200x800/?disaster,relief,flood",
    topic: "disaster,relief,flood,volunteer",
    projects: [
      "Emergency Relief Distribution",
      "Rehabilitation Programs",
      "Disaster Preparedness Training",
      "Rebuilding Community Infrastructure",
    ],
  },
]

export default function OurWorkPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeUpSection>
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Our Work</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            Explore the various initiatives and projects undertaken by Karnataka Vidyarthi Koota across different
            domains to serve the community and preserve our cultural heritage.
          </p>
        </div>
      </FadeUpSection>

      <div className="space-y-24">
        {workCategories.map((category, index) => (
          <section key={category.id} id={category.id} className="scroll-mt-20">
            <ScrollProgress>
              <div
                className={`grid gap-8 md:grid-cols-2 md:items-center ${index % 2 === 0 ? "" : "md:grid-flow-dense"}`}
              >
                <SlideIn direction={index % 2 === 0 ? "left" : "right"}>
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <h2 className="text-2xl font-bold md:text-3xl">{category.title}</h2>
                    <p className="text-gray-600">{category.description}</p>

                    <div className="mt-6">
                      <h3 className="mb-3 font-semibold">Key Initiatives:</h3>
                      <ul className="space-y-2">
                        {category.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="mr-2 mt-1 flex h-2 w-2 rounded-full bg-orange-500"></span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <AnimatedButton>
                        <Button variant="outline" className="gap-2">
                          Learn More About {category.title} Initiatives
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </AnimatedButton>
                    </div>
                  </div>
                </SlideIn>

                <SlideIn direction={index % 2 === 0 ? "right" : "left"}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <ImageWithFallback
                          src={category.image || "/placeholder.svg"}
                          alt={category.title}
                          width={1200}
                          height={800}
                          unsplashTopic={category.topic}
                          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </SlideIn>
              </div>
            </ScrollProgress>
          </section>
        ))}
      </div>

      <FadeUpSection>
        <div className="mt-16 rounded-lg bg-orange-50 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Get Involved</h2>
          <p className="mx-auto mb-6 max-w-2xl text-gray-600">
            Join us in our mission to serve the community and preserve our cultural heritage. There are many ways you
            can contribute to our initiatives and make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <AnimatedButton>
              <Link href="/contact">
                <Button className="bg-orange-600 hover:bg-orange-700">Volunteer With Us</Button>
              </Link>
            </AnimatedButton>
            <AnimatedButton>
              <Link href="/contact">
                <Button variant="outline">Donate Now</Button>
              </Link>
            </AnimatedButton>
          </div>
        </div>
      </FadeUpSection>
    </div>
  )
}
