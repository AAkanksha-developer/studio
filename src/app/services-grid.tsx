import Link from "next/link"

const services = [
  {
    title: "SERVICES RATES & EQUIPMENT",
    image: "/image5.png",
    href: "#",
  },
  {
    title: "ABOUT US",
    image: "/image6.png",
    href: "#",
  },
  {
    title: "BOOKING",
    image: "/image7.png",
    href: "#",
  },
]

export default function ServicesGrid() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3">
      {services.map((service, index) => (
        <Link key={index} href={service.href} className="group relative h-[300px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-center text-2xl font-bold text-white">{service.title}</h3>
          </div>
        </Link>
      ))}
    </section>
  )
}

