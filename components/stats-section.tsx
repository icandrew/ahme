'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  label: string
}

const AnimatedCounter = ({ end, label }: AnimatedCounterProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

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
  }, [isInView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[260px] sm:w-[232px] sm:h-[288px] px-6 py-8 bg-white rounded-md shadow-md"
    >
      <div className="h-full flex flex-col justify-start gap-8">
        <div className="text-zinc-900 text-5xl font-bold">
          {count}
          {end >= 1000 ? 'k' : ''}+
        </div>
        <div className="h-1 w-16 bg-primary" />
        <div className="text-zinc-500 text-lg whitespace-pre-line">
          {label}
        </div>
      </div>
    </motion.div>


  )
}

const StatsSection = () => {
  const stats = [
    { end: 17, label: 'Operating Countries' },
    { end: 25, label: 'Fleet' },
    { end: 30, label: 'Years Experience' }
  ]

  return (
    <section className="bg-zinc-100">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-6 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          {/* Left Section */}
          <div className="max-w-xl space-y-6">
            <span className="text-sm text-muted-foreground">About Us</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Local Experience - Global Reach
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Access Hire Middle East operates globally with offices in the UAE, Saudi Arabia, Kazakhstan,
              South Africa, USA, UK, China, and Australia, strategically positioned to support energy
              projects in any location or environment.
            </p>
            <Button variant="default" size="lg">
              Learn more
            </Button>
          </div>

          {/* Right Section (Counters) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                end={stat.end}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection