'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface AnimatedCounterProps {

  end: number
  label: string
}

const AnimatedCounter = ({ end, label }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

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
  }, [isVisible, end])

  return (
    <div
      ref={ref}
      className={`w-full h-60 sm:w-56 sm:h-72 px-6 py-8 bg-white rounded-md shadow-md transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
    >
      <div className="h-full flex flex-col justify-between gap-6">
        <div className="text-foreground text-5xl font-bold">
          {count}
          {end >= 1000 ? 'k' : ''}+
        </div>
        <div className="h-1 w-16 bg-primary" />
        <div className="text-muted-foreground text-lg">
          {label}
        </div>
      </div>
    </div>
  )
}

const StatsSection = () => {
  const stats = [
    { end: 17, label: 'Operating Countries' },
    { end: 25, label: 'Fleet' },
    { end: 30, label: 'Years Experience' },
  ]

  return (
    <section className="bg-zinc-100">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
          <div className="max-w-xl space-y-4 ">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                About Us
              </p>
              <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-4xl">
                Local Experience - Global Reach
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg mt-4">
                Access Hire Middle East operates globally with offices in the UAE, Saudi Arabia, Kazakhstan,
                South Africa, USA, UK, China, and Australia, strategically positioned to support energy
                projects in any location or environment.
              </p>
            </div>

            <Button
              variant="default"
              size="lg"
              asChild
              className="w-fit"
            >
              <Link href="#">
                Read more
              </Link>
            </Button>
          </div>

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