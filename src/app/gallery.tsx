"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  {
    src: "/image9.png?height=400&width=600",
    alt: "Studio Interior - Lounge Area",
  },
  {
    src: "/image10.png?height=400&width=600",
    alt: "NYC Skyline View",
  },
  {
    src: "/image11.png?height=400&width=600",
    alt: "Studio Common Area",
  },
  {
    src: "/image12.png?height=400&width=600",
    alt: "Building Exterior",
  },
  {
    src: "/image13.png?height=400&width=600",
    alt: "Studio Hallway",
  },
  {
    src: "/image14.png?height=400&width=600",
    alt: "Bar and Lounge",
  },
  {
    src: "/image15.png?height=400&width=600",
    alt: "Bar and Lounge",
  },
  {
    src: "/image16.png?height=400&width=600",
    alt: "Bar and Lounge",
  },
  {
    src: "/image19.png?height=400&width=600",
    alt: "Bar and Lounge",
  },
  
]

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {galleryImages.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="relative aspect-video overflow-hidden rounded-lg"
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </motion.div>
      ))}
    </div>
  )
}

