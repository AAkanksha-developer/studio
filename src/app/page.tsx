import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain } from "lucide-react"
import Link from "next/link"
import HeroCarousel from "./hero-carousel"
import ClientsCarousel from "./clients-carousel"
import ServicesGrid from "./services-grid"
import QuoteSection from "./quote-section"
import Gallery from "./gallery"
import IntroSection from "./intro-section"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Mountain className="h-8 w-8" />
            <span className="text-xl font-bold">Studio</span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#" className="hover:text-primary">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  BOOKING
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  SERVICES
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  CLIENTS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <Button className="bg-white text-black hover:bg-white/90">BOOK NOW</Button>
        </div>
      </header>

      <main className="flex-1">
        <HeroCarousel />
        <QuoteSection />
        <IntroSection/>

        <section className="py-20">
          <div className="container px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">GALLERY</h2>
            <Gallery />
          </div>
        </section>

        <section className="py-20">
          <div className="container px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">OUR CLIENTS INCLUDE</h2>
            <ClientsCarousel />
            
          </div>
        </section>

        <ServicesGrid />

        <section className="relative  bg-cover bg-center bg-no-repeat py-24">
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="container relative z-10 px-4 text-center">
            <h2 className="mx-auto max-w-3xl text-xl">
              SUBSCRIBE FOR FIRST ACCESS TO EXCLUSIVE CONTENT FROM STUDIO; AS WELL AS UP TO DATE INFORMATION ON STUDIO
              NEWS, CONTESTS AND GIVEAWAYS:
            </h2>
            <div className="mx-auto mt-8 flex max-w-md gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 text-white placeholder:text-white/70"
              />
              <Button className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black">
                SIGN ME UP
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container grid gap-8 px-4 ">
            
            <div className="flex flex-col justify-center ">
              <h2 className="text-2xl  text-center font-bold">The Studio</h2>
              <p className="text-2xl  text-center font-bold">NYC - Chelsea, NY</p>
              
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container px-4 text-center text-sm">
          <p>ALL CONTENTS © STUDIO, {new Date().getFullYear()}</p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="hover:text-primary">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

