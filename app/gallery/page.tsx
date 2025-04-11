import { Card, CardContent } from "@/components/ui/card"
import ImageWithFallback from "@/components/image-with-fallback"
import { FadeUpSection, StaggerContainer, StaggerItem, AnimatedCard } from "@/components/animations"

// Generate gallery items with different categories
const galleryItems = [
  {
    id: 1,
    title: "Cultural Fest 2023",
    category: "Cultural",
    description: "Annual celebration showcasing Karnataka's rich cultural heritage",
    image: "https://source.unsplash.com/random/800x600/?karnataka,festival",
    topic: "karnataka,festival,culture",
  },
  {
    id: 2,
    title: "Flood Relief Drive",
    category: "Social Service",
    description: "Providing essential supplies to flood-affected areas in North Karnataka",
    image: "https://source.unsplash.com/random/800x600/?flood,relief",
    topic: "flood,relief,volunteer",
  },
  {
    id: 3,
    title: "Kannada Literary Meet",
    category: "Cultural",
    description: "Bringing together authors and poets to celebrate Kannada literature",
    image: "https://source.unsplash.com/random/800x600/?literature,books",
    topic: "literature,books,india",
  },
  {
    id: 4,
    title: "Health Camp in Rural Areas",
    category: "Social Service",
    description: "Free medical checkups and awareness programs in underserved communities",
    image: "https://source.unsplash.com/random/800x600/?medical,camp,rural",
    topic: "medical,camp,rural,india",
  },
  {
    id: 5,
    title: "Traditional Dance Performance",
    category: "Cultural",
    description: "Showcasing the classical dance forms of Karnataka",
    image: "https://source.unsplash.com/random/800x600/?dance,classical,india",
    topic: "dance,classical,india,performance",
  },
  {
    id: 6,
    title: "Tree Plantation Drive",
    category: "Environmental",
    description: "Contributing to a greener future through community tree planting",
    image: "https://source.unsplash.com/random/800x600/?tree,planting",
    topic: "tree,planting,environment",
  },
  {
    id: 7,
    title: "Youth Leadership Workshop",
    category: "Educational",
    description: "Empowering young leaders with skills and knowledge",
    image: "https://source.unsplash.com/random/800x600/?youth,workshop",
    topic: "youth,workshop,leadership",
  },
  {
    id: 8,
    title: "Yakshagana Performance",
    category: "Cultural",
    description: "Traditional theater form of Karnataka showcased by expert performers",
    image: "https://source.unsplash.com/random/800x600/?theater,traditional,india",
    topic: "theater,traditional,india,performance",
  },
  {
    id: 9,
    title: "Blood Donation Camp",
    category: "Social Service",
    description: "Community blood donation initiative to support local hospitals",
    image: "https://source.unsplash.com/random/800x600/?blood,donation",
    topic: "blood,donation,medical",
  },
  {
    id: 10,
    title: "Rajyotsava Celebrations",
    category: "Cultural",
    description: "Karnataka formation day celebrations with cultural programs",
    image: "https://source.unsplash.com/random/800x600/?celebration,festival,india",
    topic: "celebration,festival,india,karnataka",
  },
  {
    id: 11,
    title: "Career Guidance Seminar",
    category: "Educational",
    description: "Helping students make informed decisions about their future",
    image: "https://source.unsplash.com/random/800x600/?career,guidance,education",
    topic: "career,guidance,education,seminar",
  },
  {
    id: 12,
    title: "Senior Citizen Support Program",
    category: "Social Service",
    description: "Providing companionship and assistance to elderly community members",
    image: "https://source.unsplash.com/random/800x600/?elderly,support",
    topic: "elderly,support,community",
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
              </AnimatedCard>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </div>
  )
}
