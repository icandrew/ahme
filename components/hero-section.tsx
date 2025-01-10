import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <div className="relative py-20 w-full lg:px-10">
      {/* Background Image */}
      <Image
        src="/home-bg.jpg"
        alt="Access Hire Middle East Hero Background"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      
      {/* Content */}
      <section className="relative">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-black text-white leading-tight mb-8">
              Global rental solutions for<br/> your next energy project
            </h1>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-red-700 text-white w-fit"
            >
              Request a quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

