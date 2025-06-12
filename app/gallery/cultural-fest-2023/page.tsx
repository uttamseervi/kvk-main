"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { X, ArrowLeft, ArrowRight, ChevronLeft, Camera, ImageIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { KeyboardEvent as ReactKeyboardEvent } from 'react'

export default function GalleryPage() {
  const router = useRouter()
  const [previewImage, setPreviewImage] = useState<number | null>(null)

  const images = [
    "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752714/42381464_1846986042022936_7566158364527296512_o_oozhyv.jpg",
    "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752713/42419759_1846962335358640_544628146922586112_o_kzk2o7.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752714/43596046_1867953613259512_7960931314331287552_n_1867953609926179_ze1xsn.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752715/43750353_1867954283259445_3247219090816761856_n_1867954279926112_uoailt.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752715/Pic3_xyhyjn.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752715/43647266_1867954476592759_7172659155994411008_o_1867954473259426_w8uxh3.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752714/42469868_1847001292021411_4179626791079510016_o_cvl4mh.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752714/42492792_1846974085357465_3498179205357633536_o_esiyrl.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752713/39249462_1797290613659146_3842615142747471872_o_1797290606992480_ao5kp6.jpg",
   "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1749752713/42419759_1846962335358640_544628146922586112_o_kzk2o7.jpg"
  ]

  // Function to determine grid layout for bento grid
  const getGridClass = (index: number) => {
    // Create a more compact pattern that ensures no gaps
    const patterns = [
      "col-span-2 row-span-2", // Large square (2x2)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-2 row-span-1", // Wide rectangle (2x1)
      "col-span-1 row-span-2", // Tall rectangle (1x2)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-1 row-span-1", // Small square (1x1)
      "col-span-2 row-span-1", // Wide rectangle (2x1)
    ]
    return patterns[index % patterns.length]
  }

  // Image preview navigation
  const goToPreviousImage = () => {
    if (previewImage === null) return
    setPreviewImage((previewImage - 1 + images.length) % images.length)
  }

  const goToNextImage = () => {
    if (previewImage === null) return
    setPreviewImage((previewImage + 1) % images.length)
  }

  // Handle keyboard navigation for image preview
  const handleKeyDown = (e: ReactKeyboardEvent) => {
    if (previewImage === null) return
    
    if (e.key === 'ArrowLeft') {
      goToPreviousImage()
    } else if (e.key === 'ArrowRight') {
      goToNextImage()
    } else if (e.key === 'Escape') {
      setPreviewImage(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 font-sans" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            className="flex items-center gap-2 hover:gap-3 transition-all duration-300"
            onClick={() => router.back()}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back</span>
          </Button>

          <div className="h-8 w-px bg-gray-200" /> {/* Vertical divider */}

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Camera className="h-5 w-5 text-gray-600" />
              <ImageIcon className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h2 
                className="text-2xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-900"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Memories & Moments
              </h2>
              <p className="text-sm text-gray-500 font-medium">
                Our Journey Through the Years
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 auto-rows-[200px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${getGridClass(index)} overflow-hidden`}
          >
            <div 
              className="relative w-full h-full group cursor-pointer"
              onClick={() => setPreviewImage(index)}
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16.67vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority={index < 4}
                loading={index < 8 ? "eager" : "lazy"}
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="p-3 w-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium">
                    Image #{index + 1}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Preview Modal */}
      <Dialog open={previewImage !== null} onOpenChange={(open) => !open && setPreviewImage(null)}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-black/95">
          <div className="relative w-full h-full flex flex-col">
            {/* Close button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-4 right-4 z-50 text-white bg-black/50 hover:bg-black/70 rounded-full"
              onClick={() => setPreviewImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            
            {/* Image container */}
            <div className="flex-1 relative flex items-center justify-center p-8">
              {previewImage !== null && (
                <div className="relative w-full h-full">
                  <Image
                    src={images[previewImage]}
                    alt={`Gallery Image ${previewImage + 1}`}
                    fill
                    sizes="95vw"
                    className="object-contain"
                    priority
                    quality={100}
                  />
                </div>
              )}
            </div>
            
            {/* Navigation controls */}
            <div className="absolute inset-y-0 left-0 flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 ml-4 text-white bg-black/50 hover:bg-black/70 rounded-full"
                onClick={goToPreviousImage}
              >
                <ArrowLeft className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="absolute inset-y-0 right-0 flex items-center">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 mr-4 text-white bg-black/50 hover:bg-black/70 rounded-full"
                onClick={goToNextImage}
              >
                <ArrowRight className="h-6 w-6" />
              </Button>
            </div>
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                {previewImage !== null ? `${previewImage + 1} / ${images.length}` : ''}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
