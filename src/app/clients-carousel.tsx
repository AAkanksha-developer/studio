"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const clients = [
  "/images1.png?height=400&width=300",
  "/images3.png?height=400&width=300",
  "/images4.png?height=400&width=300",
  "/images7.png?height=400&width=300",
  "/images8.png?height=400&width=300",
  "/images9.jpg?height=400&width=300",
  "/images10.jpg?height=400&width=300",
]

export default function ClientsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  })

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
          {clients.map((client, index) => (
            <div key={index} className="relative mr-4 min-w-0 flex-[0_0_250px] md:flex-[0_0_300px]">
              <Image
                src={client || "/placeholder.svg"}
                alt={`Client ${index + 1}`}
                width={300}
                height={400}
                className="h-[300px] w-full rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute -left-4 top-1/2 -translate-y-1/2 border-white text-white hover:bg-white hover:text-black"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute -right-4 top-1/2 -translate-y-1/2 border-white text-white hover:bg-white hover:text-black"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

