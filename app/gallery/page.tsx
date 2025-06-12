import { Card, CardContent } from "@/components/ui/card"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/animations"
import Link from "next/link"

// Generate gallery items with different categories
const galleryItems = [
  {
    id: 1,
    slug: "cultural-fest-2023",
    title: "Cultural Fest 2023",
    category: "Cultural",
    description: "Annual celebration showcasing Karnataka's rich cultural heritage",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744375812/00.-blog-feature-image-india-chalk-scaled_uechxd.jpg",
    topic: "karnataka,festival,culture",
  },
  {
    id: 2,
    slug: "endorse",
    title: "Endorse",
    category: "Social Service",
    description: "highlighting your work with celebrity attention",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749747935/_DSC0406_xx50de.jpg",
    topic: "elderly,support,community",
  },
  {
    id: 3,
    slug: "kannada-literary-meet",
    title: "Kannada Literary Meet",
    category: "Cultural",
    description: "Bringing together authors and poets to celebrate Kannada literature",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749745236/DSC_3818_ylrayn.jpg",
    topic: "literature,books,india",
  },
  {
    id: 4,
    slug: "health-camp-in-rural-areas",
    title: "Health Camp in Rural Areas",
    category: "Social Service",
    description: "Free medical checkups and awareness programs in underserved communities",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749745466/indian-female-doctor-checking-young-adult-girl-patient-heartbeat-with-stethoscope-at-village_ognfxs.webp",
    topic: "medical,camp,rural,india",
  },
  {
    id: 5,
    slug: "traditional-dance-performance",
    title: "Traditional Dance Performance",
    category: "Cultural",
    description: "Showcasing the classical dance forms of Karnataka",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749745875/pexels-photo-15167466_auujsb.webp",
    topic: "dance,classical,india,performance",
  },
  {
    id: 6,
    slug: "tree-plantation-drive",
    title: "Tree Plantation Drive",
    category: "Environmental",
    description: "Contributing to a greener future through community tree planting",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744379507/Tree_Plantation-825816428_cqcu7c.jpg",
    topic: "tree,planting,environment",
  },
  {
    id: 7,
    slug: "youth-leadership-workshop",
    title: "Youth Leadership Workshop",
    category: "Educational",
    description: "Empowering young leaders with skills and knowledge",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749746066/DSC_3777_ehwqfx.jpg",
    topic: "youth,workshop,leadership",
  },
  {
    id: 8,
    slug: "kvk-since-2010",
    title: "KVK SINCE 2010",
    category: "Socail Service",
    description: "Traditional theater form of Karnataka showcased by expert performers",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705737/DSC_2983_y3eprc.jpg",
    topic: "theater,traditional,india,performance",
  },
  {
    id: 9,
    slug: "blood-donation-camp",
    title: "Blood Donation Camp",
    category: "Social Service",
    description: "Community blood donation initiative to support local hospitals",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1747465199/360_F_807774034_D8rcB1wbc8b9lXin4oaQXUBxUqFdsR8L_mou3iw.webp",
    topic: "blood,donation,medical",
  },
  {
    id: 10,
    slug: "rajyotsava-celebrations",
    title: "Rajyotsava Celebrations",
    category: "Cultural",
    description: "Karnataka formation day celebrations with cultural programs",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749747478/1000X650-Copy_hcy2qa.jpg",
    topic: "celebration,festival,india,karnataka",
  },
  {
    id: 11,
    slug: "career-guidance-seminar",
    title: "Career Guidance Seminar",
    category: "Educational",
    description: "Helping students make informed decisions about their future",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746711945/_YDP4814_guxr0e.jpg",
    topic: "career,guidance,education,seminar",
  },
  {
    id: 12,
    slug: "flood-relief-drive",
    title: "Flood Relief Drive",
    category: "Social Service",
    description: "Providing essential supplies to flood-affected areas in North Karnataka",
    image: "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1744378953/AP21193389703866-e1626147548358-3339018612_u9mbo6.jpg",
    topic: "flood,relief,volunteer",
  },
 
]


export default function GalleryPage() {
  return (
    <div className="container py-12 md:py-16">
      <FadeUpSection>
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-3xl font-bold md:text-4xl">Our Gallery</h1>
          <p className="mx-auto max-w-2xl text-gray-600">
            A visual journey through our events, activities, and initiatives that showcase our commitment to cultural
            preservation and social service.
          </p>
        </div>
      </FadeUpSection>

      {/* Gallery Grid */}
      <StaggerContainer>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <StaggerItem key={item.id}>
              <AnimatedCard>
                <Link href={`/gallery/${item.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer">
                    <div className="relative">
                      <ImageWithFallback
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={800}
                        height={600}
                        unsplashTopic={item.topic}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2 right-2 bg-orange-600 px-2 py-1 text-xs font-medium text-white rounded">
                        {item.category}
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedCard>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  )
}
