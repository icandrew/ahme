import { type FC } from 'react'
import Image from "next/image"
import Link from "next/link"

interface Product {
  title: string
  image: string
  alt: string
  href: string
}

const PRODUCTS = [
  {
    title: "Nitrogen Generators",
    image: "/product-1.png",
    alt: "Industrial nitrogen generator unit",
    href: "/products/nitrogen-generators"
  },
  {
    title: "Air Compressors",
    image: "/product-2.jpg",
    alt: "Portable air compressor unit",
    href: "/products/air-compressors"
  },
  {
    title: "Fuel Tanks",
    image: "/product-3.jpg",
    alt: "Fuel tank containment system",
    href: "/products/fuel-tanks"
  },
  {
    title: "Generators",
    image: "/product-4.jpg",
    alt: "Stationary power generator unit",
    href: "/products/generators"
  },
  {
    title: "Lighting Towers",
    image: "/product-5.jpg",
    alt: "Mobile lighting tower",
    href: "/products/lighting-towers"
  },
  {
    title: "Welding",
    image: "/product-6.jpg",
    alt: "Industrial welding equipment",
    href: "/products/welding"
  },
  {
    title: "DNV 2.7 - 1 Frames",
    image: "/product-7.jpg",
    alt: "DNV certified frames",
    href: "/products/dnv-frames"
  },
  {
    title: "Desiccant Air Dryers",
    image: "/product-8.jpg",
    alt: "Industrial air drying systems",
    href: "/products/air-dryers"
  }
] as const

const ProductCard: FC<Product> = ({ title, image, alt, href }) => (
  <Link
    href={href}
    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
  >
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-lg border bg-white transition-colors duration-200 ease-in-out group-hover:bg-zinc-100">
        <div className="p-4 sm:p-6">
          <div className="relative aspect-square w-full">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-contain p-2 sm:p-6 mix-blend-darken transition-transform duration-200 ease-in-out group-hover:scale-105"
              sizes="(min-width: 1536px) 384px, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              quality={85}
            />
          </div>
        </div>
      </div>
      <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-gray-700">
        {title}
      </h2>
    </div>
  </Link>
)

export default function ProductShowcase() {
  return (
    <section className="bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Products
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-4xl">
            Comprehensive Equipment
            <br className="hidden sm:inline" />
            Solutions for Every Project
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:mt-12 sm:gap-x-6 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 lg:gap-x-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  )
}