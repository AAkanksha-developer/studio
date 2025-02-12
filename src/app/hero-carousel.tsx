"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    image: "/image21.png",
    title: "QUALITY PRE AND POST PRODUCTION SERVICES",
  },
  {
    image: "/image2.png",
    title: "STATE OF THE ART RECORDING FACILITIES",
  },
  {
    image: "/image3.png",
    title: "PROFESSIONAL AUDIO ENGINEERING",
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative min-w-0 flex-[0_0_100%]">
              <div className="relative h-[80vh] w-full">
                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="max-w-4xl text-center text-4xl font-bold text-white md:text-6xl">{slide.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 border-white text-white hover:bg-white hover:text-black"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 border-white text-white hover:bg-white hover:text-black"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

