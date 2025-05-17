"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft, X, ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function PortfolioPage() {
  const [activeYear, setActiveYear] = useState("2024")
  const [previewImage, setPreviewImage] = useState<number | null>(null)

  // Portfolio data organized by year
  const portfolioData:any = {
    2010: {
      title: "Early Works",
      description: "A collection of foundational pieces that marked the beginning of my artistic journey.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
      ],
    },
    2011: {
      title: "Exploration Phase",
      description: "Experimenting with new techniques and expanding my visual vocabulary.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
      ],
    },
    2012: {
      title: "Transition Period",
      description: "A year of significant growth and stylistic development.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
      ],
    },
    2013: {
      title: "Refined Approach",
      description: "Consolidating techniques and developing a more cohesive visual language.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
      ],
    },
    2014: {
      title: "Breakthrough Series",
      description: "A pivotal year with several key works that defined my artistic direction.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
      ],
    },
    2015: {
      title: "Experimental Phase",
      description: "Pushing boundaries and exploring unconventional approaches.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
      ],
    },
    2016: {
      title: "Mature Works",
      description: "A collection showcasing technical mastery and conceptual depth.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
      ],
    },
    2017: {
      title: "Conceptual Series",
      description: "Exploring deeper themes and narrative structures in my work.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
      ],
    },
    2018: {
      title: "Collaborative Projects",
      description: "Works created through partnerships and collaborative initiatives.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
      ],
    },
    2019: {
      title: "International Influence",
      description: "Works inspired by global travels and cross-cultural exchanges.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
      ],
    },
    2020: {
      title: "Pandemic Response",
      description: "Works created during global isolation, reflecting on connection and distance.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
      ],
    },
    2021: {
      title: "New Directions",
      description: "Exploring fresh approaches and media in a changing world.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
      ],
    },
    2022: {
      title: "Retrospective Collection",
      description: "A curated selection revisiting and reinterpreting past themes.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
      ],
    },
    2023: {
      title: "Contemporary Vision",
      description: "Recent works reflecting current artistic preoccupations and techniques.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
      ],
    },
    2024: {
      title: "Current Projects",
      description: "The latest works showcasing evolving interests and techniques.",
      images: [
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705084/WBDD_2010_A3_zcqrbm.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705083/scan0011_euezzc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705082/KVK1_1_-page-001_ac8wqe.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705081/KVK_1_-page-001_fugcvc.jpg",
        "https://res.cloudinary.com/dl4kyk1ff/image/upload/v1746705080/IMG_2904_oanubh.jpg",
      ],
    },
  }

  // Years for the timeline
  const years = Object.keys(portfolioData).sort((a, b) => Number(a) - Number(b))

  // Get current year index
  const currentYearIndex = years.indexOf(activeYear)

  // Navigation functions
  const goToPreviousYear = () => {
    if (currentYearIndex > 0) {
      setActiveYear(years[currentYearIndex - 1])
    }
  }

  const goToNextYear = () => {
    if (currentYearIndex < years.length - 1) {
      setActiveYear(years[currentYearIndex + 1])
    }
  }

  // Image preview navigation
  const goToPreviousImage = () => {
    if (previewImage === null) return
    
    const imagesCount = portfolioData[activeYear].images.length
    setPreviewImage((previewImage - 1 + imagesCount) % imagesCount)
  }

  const goToNextImage = () => {
    if (previewImage === null) return
    
    const imagesCount = portfolioData[activeYear].images.length
    setPreviewImage((previewImage + 1) % imagesCount)
  }

  // Function to determine grid layout for bento grid
  const getGridClass = (index:any) => {
    const patterns = [
      "col-span-2 row-span-2", // Large square
      "col-span-1 row-span-1", // Small square
      "col-span-1 row-span-1", // Small square
      "col-span-1 row-span-2", // Tall rectangle
      "col-span-2 row-span-1", // Wide rectangle
    ]
    return patterns[index % patterns.length]
  }

  // Handle keyboard navigation for image preview
  const handleKeyDown = (e:any) => {
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
      <h1 className="text-5xl font-bold mb-10 text-center font-serif tracking-tight">KVK's Portfolio Timeline</h1>

      {/* Year Navigation */}
      <div className="flex items-center justify-center mb-12 space-x-6">
        <Button
          onClick={goToPreviousYear}
          disabled={currentYearIndex === 0}
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-2 hover:bg-gray-100 transition-all"
          aria-label="Previous year"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="relative">
          <select
            value={activeYear}
            onChange={(e) => setActiveYear(e.target.value)}
            className="appearance-none bg-white border-2 border-gray-300 rounded-full px-6 py-3 pr-12 font-medium text-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-all"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
            <ChevronRight className="h-5 w-5 rotate-90" />
          </div>
        </div>

        <Button
          onClick={goToNextYear}
          disabled={currentYearIndex === years.length - 1}
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 border-2 hover:bg-gray-100 transition-all"
          aria-label="Next year"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Year Content */}
      <div className="mb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold font-serif mb-3">
                {activeYear} - {portfolioData[activeYear].title}
              </h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-lg">
                {portfolioData[activeYear].description}
              </p>
            </div>

            {/* Bento Grid Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
              {portfolioData[activeYear].images.map((image:any, index:any) => (
                <motion.div
                  key={index}
                  className={`${getGridClass(index)} overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  <div 
                    className="relative w-full h-full group cursor-pointer"
                    onClick={() => setPreviewImage(index)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${portfolioData[activeYear].title} - Image ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                      <div className="p-5 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-base font-medium drop-shadow-md">
                          {portfolioData[activeYear].title} #{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline Navigation */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center font-serif">Timeline</h3>
        <div className="flex justify-center overflow-x-auto py-4 px-2 max-w-full">
          <div className="flex space-x-2">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeYear === year 
                    ? "bg-gray-900 text-white shadow-md transform scale-110" 
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800 hover:scale-105"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      <Dialog open={previewImage !== null} onOpenChange={(open) => !open && setPreviewImage(null)}>
        <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 bg-black/95 border-none">
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
                    src={portfolioData[activeYear].images[previewImage] || "/placeholder.svg"}
                    alt={`${portfolioData[activeYear].title} - Full view ${previewImage + 1}`}
                    fill
                    sizes="95vw"
                    className="object-contain"
                    priority
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
                {previewImage !== null ? `${previewImage + 1} / ${portfolioData[activeYear].images.length}` : ''}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
