import { type FC } from 'react'
import Image from "next/image"
import Link from "next/link"

interface Product {
  title: string
  image: string
  alt: string
  href: string
}

const PRODUCTS: Product[] = [
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
    alt: "Industrial HVAC unit",
    href: "/products/hvac-systems"
  },
  {
    title: "DNV 2.7 - 1 Frames",
    image: "/product-7.jpg",
    alt: "Professional welding equipment",
    href: "/products/welding-equipment"
  },
  {
    title: "Desiccant Air Dryers",
    image: "/product-8.jpg",
    alt: "Material handling equipment",
    href: "/products/material-handling"
  }
] as const

const ProductCard: FC<Product> = ({ title, image, alt, href }) => (
  <Link 
    href={href}
    className="group block"
  >
    <div className="flex flex-col">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 transition-colors duration-200 ease-in-out group-hover:bg-gray-200">
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="relative aspect-square w-full">
            <Image
              src={image}
              alt={alt}
              fill
              priority={false}
              className="object-contain p-2 sm:p-6 lg:p-4 mix-blend-darken transition-transform duration-200 ease-in-out group-hover:scale-105"
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              quality={90}
            />
          </div>
        </div>
      </div>
  <h2 className="mt-3 sm:mt-4 text-lg font-black text-foreground sm:text-xl">
    {title}
  </h2>
</div>
  </Link>
)

export default function ProductShowcase() {
  return (
    <section className="bg-background">
      <div className="relative mx-auto max-w-screen-2xl px-4 sm:px-6 md:px-16 lg:px-10">
        <div className="py-8 sm:py-12 md:py-16">
          <header className="space-y-2 sm:space-y-3 md:max-w-2xl lg:max-w-xl">
            <p className="text-sm font-medium text-muted-foreground">Products</p>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Comprehensive Equipment<br className="hidden sm:inline" />
              Solutions for Every Project
            </h1>
          </header>
          
          <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.title} 
                {...product} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}