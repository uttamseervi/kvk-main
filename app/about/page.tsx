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
              Karnataka Vidyarthi Koota (KVK) Trust was established in the year
              2010 by General Secretary and Managing Trustee Harsha
              Lakshman along with his schoolmates and childhood friends
            </p>
            <p className="mb-4 text-gray-600">
              Karnataka Vidyarthi Koota, one of the biggest NGOs in India,
              works towards creating awareness for the cause of Voluntary
              Blood Donation and its importance by motivating young blood
              donors and public with good health to self-drive themselves for
              donating blood voluntarily after attaining age of 18 years and
              thereby contribute in life saving moments and thereby eradicate
              the shortage of blood at times mostly needed, providing
              education aids and grants to deserving students who have
              been deprived with opportunities to aim for higher education
              due to poor financial background, provide platform for talented
              students to showcase their talent and thereby support people
              willing to purse their carrier in the field of art and culture.

            </p>
            {/* <p className="text-gray-600">
              Today, KVK stands as a testament to the power of cultural identity as a force for positive change,
              bringing together people from all walks of life who share a love for Karnataka's heritage and a commitment
              to community service.
            </p> */}
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Our Mission & Core Values</h2>
            <p className="mb-4 text-gray-600">
              To empower underprivileged people through developmental
              initiatives focusing on educational, social, economic, cultural
              and technological aspects.
            </p>
            <div className="space-y-4">
              {/* Cultural Preservation */}
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Cultural Preservation</h3>
                  <p className="text-sm text-gray-600">
                    Promoting and preserving Karnataka's language, arts, and traditions.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Driven by passion and rooted in unity.
                  </p>
                </div>
              </div>

              {/* Community Service */}
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Community Service</h3>
                  <p className="text-sm text-gray-600">
                    Addressing social needs through volunteer-driven initiatives.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Guided by humanity, impartiality, and voluntary service.
                  </p>
                </div>
              </div>

              {/* Excellence */}
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Excellence</h3>
                  <p className="text-sm text-gray-600">
                    Striving for the highest standards in all our endeavors.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Built on a foundation of neutrality, independence, and purpose.
                  </p>
                </div>
              </div>

              {/* Inclusivity */}
              <div className="flex items-start">
                <div className="mr-4 rounded-full bg-orange-100 p-2 text-orange-600">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Inclusivity</h3>
                  <p className="text-sm text-gray-600">
                    Welcoming all who share our love for Karnataka and its culture.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Empowering youth and embracing diversity with open arms.
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
                name: "Harish V",
                role: "Operations & Field Program Manager",
                bio: "An entrepreneur passionate about social impact. Harish is the backbone behind our seamless event execution, with a focus on community betterment through expert management.",
                image: "/placeholder.svg",
                topic: "event,manager,entrepreneur",
              },
              {
                name: "Rajesh Krishnappa",
                role: "Cultural Mentor",
                bio: "A vibrant cultural torchbearer who empowers youth through folk dance and traditional arts. Rajesh brings creativity, energy, and a nurturing spirit to the KVK family.",
                image: "/placeholder.svg",
                topic: "cultural,dance,mentor",
              },
              {
                name: "Harsha L",
                role: "Program Director",
                bio: "Known as 'Blood Harsha', he has over 14 years in social impact. Expert in strategy, fundraising, and public awareness, Harsha bridges gaps between community and governance.",
                image: "/placeholder.svg",
                topic: "social,impact,leader",
              },
              {
                name: "Divya K Murthy",
                role: "Admin & Finance Support",
                bio: "A former IBM accountant, Divya supports operational management and brings a strong belief in education and continuous improvement to our mission.",
                image: "/placeholder.svg",
                topic: "finance,admin,woman",
              },
              {
                name: "Shri. Rishi Manjunath",
                role: "Junior Tech Lead",
                bio: "Aspiring web developer and an entrepreneur, Rishi blends creativity with technical precision to deliver scalable and innovative digital solutions.",
                image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744379909/WhatsApp_Image_2025-04-11_at_19.26.23_63a4b125_xfyptr.jpg",
                topic: "man,musician,indian",
              },
              {
                name: "Shri. Uttam Seervi",
                role: "Tech Lead",
                bio: "A passionate web developer, Uttam leads with a vision for inclusive technology, mentoring teams and pushing boundaries of what’s possible on the web.",
                image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744380057/WhatsApp_Image_2025-04-11_at_19.30.08_448cda1d_e6gvpv.jpg",
                topic: "Student, Developer",
              },
              {
                name: "Shri. Druva Suresh",
                role: "Tech Lead",
                bio: "Tech-savvy and driven, Druva crafts intuitive and robust web experiences. His passion for coding is matched only by his commitment to social good.",
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

    </div>
  )
}
