"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function AnimatedCounter({ end, label }: { end: number, label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = end / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full md:w-[232px] h-[273px] px-6 py-8 bg-white rounded-md flex flex-col justify-center items-start gap-2.5 shadow-md"
    >
      <div className="self-stretch h-[190px] flex flex-col justify-start items-start gap-8">
        <div className="self-stretch text-[#09090B] text-[48px] font-bold leading-[48px]">
          {count}
          {end >= 1000 ? "k" : ""}+
        </div>
        <div className="w-[30px] h-[2px] bg-[#E72B2D]"></div>
        <div className="self-stretch text-[#71717A] text-lg font-normal leading-6 whitespace-pre-line">
          {label}
        </div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="bg-zinc-100 py-10 px-4 lg:px-6">
      <div className="relative py-16 max-w-screen-2xl mx-auto lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left Section */}
          <div className="space-y-4 max-w-xl">
            <div className="text-sm text-muted-foreground">About Us</div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">Local Experience - Global Reach</h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Access Hire Middle East operates globally with offices in the UAE, Saudi Arabia, Kazakhstan,
              South Africa, USA, UK, China, and Australia, strategically positioned to support energy
              projects in any location or environment.
            </p>
            <Button variant="default" size="lg">
              Learn more
            </Button>
          </div>

          {/* Right Section (Counters) */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-8 lg:gap-12">
            <AnimatedCounter end={17} label="Countries&#10;Operated in" />
            <AnimatedCounter end={25} label="Fleet" />
            <AnimatedCounter end={30} label="Years Experience" />
          </div>

        </div>
      </div>
    </section>
  )
}
