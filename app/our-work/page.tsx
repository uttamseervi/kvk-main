import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, SlideIn, ScrollProgress, AnimatedButton ,TimelineItem} from "@/components/animations"


// Work Categories
const workCategories = [
  {
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
  },
  {
    id: "education",
    title: "Education",
    description:
      "Empowering the next generation through scholarships, educational resources, career guidance, and skill development programs for underprivileged students.",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378350/person-holds-a-book-over-a-stack-and-turns-the-page-1802552817_gixevq.jpg",
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
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744379507/Tree_Plantation-825816428_cqcu7c.jpg",
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
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378953/Kathakali-Dance-113591244_kxoi6g.jpg",
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
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378954/shutterstock-114911380-4102512431_slkc02.webp",
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
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378953/AP21193389703866-e1626147548358-3339018612_u9mbo6.jpg",
    topic: "disaster,relief,flood,volunteer",
    projects: [
      "Emergency Relief Distribution",
      "Rehabilitation Programs",
      "Disaster Preparedness Training",
      "Rebuilding Community Infrastructure",
    ],
  },
]

// List of Events Since 2010


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
                        <Link href={`/our-work/${category.id}`}>
                          <Button variant="outline" className="gap-2">
                            Learn More About {category.title} Initiatives
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
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

      {/* List of Events Section - Wave Timeline */}
      

     

      <section>
              <FadeUpSection>
                <section className="mb-8 mt-16 text-center text-2xl font-bold">Our Journey & Achievements</section>
              </FadeUpSection>
      
              <div className="relative mx-auto max-w-4xl">
                {/* Timeline line */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-orange-200"></div>
      
                <div className="space-y-12">
                  {[
                    {
                      year: "2010",
                      title: "Foundation",
                      description: "KVK was established by a group of friends from multiple disciplines across the country to contribute towards a cognitive society.",
                    },
                    {
                      year: "2011",
                      title: "Blood Link Launch",
                      description: "KVK Blood Link initiative was launched to support emergency blood needs.",
                    },
                    {
                      year: "2012",
                      title: "AIDS Awareness",
                      description: "Red Ribbon Express & Bike Rally conducted to spread AIDS awareness.",
                    },
                    {
                      year: "2013",
                      title: "Math Workshop",
                      description: "Modules introduced to Government School students as part of a mathematics workshop.",
                    },
                    {
                      year: "2014",
                      title: "Blood Group Awareness",
                      description: "Blood group testing and awareness for students from underprivileged backgrounds.",
                    },
                    {
                      year: "2015",
                      title: "Donor Recognition",
                      description: "Blood Donors Flag released to honor consistent contributors.",
                    },
                    {
                      year: "2016",
                      title: "Technical Talk",
                      description: "Talk by Dr. Sunil Chitrashekariah, Principal Modelling Engineer at Dialog Semiconductors.",
                    },
                    {
                      year: "2017",
                      title: "Global Recognition",
                      description: "Delegates from the United Kingdom visited our NGO for collaboration and recognition.",
                    },
                    {
                      year: "2018",
                      title: "Growth & Innovation",
                      description: "Introduced LEGO Robotics Workshop for students and inaugurated the 2nd KVK office at Hulimavu.",
                    },
                    {
                      year: "2019",
                      title: "Disaster Management",
                      description: "Conducted relief and training programs for natural disasters in Kodagu & Chikkamagaluru.",
                    },
                    {
                      year: "2020",
                      title: "COVID Response",
                      description: "Felicitation for COVID warriors and inauguration of an indoor sports facility.",
                    },
                    {
                      year: "2023",
                      title: "Digital Transformation",
                      description: "Launched a comprehensive digital platform to reach a wider audience.",
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
                          className={`flex flex-col ${index % 2 === 0
                            ? "items-end pr-8 md:items-end md:pr-12"
                            : "items-start pl-8 md:items-start md:pl-12"
                            }`}
                        >
                          <div
                            className={`w-full max-w-xs rounded-lg bg-white p-4 shadow-md md:max-w-sm ${index % 2 === 0 ? "text-right" : "text-left"
                              }`}
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



             {/* Get Involved Section */}
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
