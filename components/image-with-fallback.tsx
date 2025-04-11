"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageWithFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  unsplashTopic?: string
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  unsplashTopic = "culture",
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isUnsplash, setIsUnsplash] = useState(src.includes("unsplash.com"))

  // If the image is already from Unsplash, use it directly
  // Otherwise, handle errors by loading a random Unsplash image
  const handleError = () => {
    if (!isUnsplash) {
      // Generate a random Unsplash image URL with the specified topic
      const unsplashUrl = `https://source.unsplash.com/random/${width}x${height}/?${unsplashTopic}`
      setImgSrc(unsplashUrl)
      setIsUnsplash(true)
    }
  }

  return (
    <Image
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className || ""}
      onError={handleError}
      priority={false}
    />
  )
}
