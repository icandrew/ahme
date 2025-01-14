"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  return (
    <header className="w-full bg-primary relative">
      <div className="max-w-screen-2xl mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="w-48 md:w-56 lg:w-64">
          <Image 
            src="/logo.svg"
            alt="Access Hire Middle East Logo"
            width={192}
            height={48}
            priority
          />
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-sm text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                About Us
              </NavigationMenuTrigger>
              <NavigationMenuContent  className="absolute left-1/2 transform -translate-x-1/2 w-[var(--radix-navigation-menu-trigger-width)] min-w-[200px]">
                <div className="w-48 p-2">
                  <Link href="/our-team" className="block p-2 hover:bg-accent">
                    Our Team
                  </Link>
                  <Link href="/about" className="block p-2 hover:bg-accent">
                    Our Values
                  </Link>
                  <Link href="/about" className="block p-2 hover:bg-accent">
                    Safety
                  </Link>
                  <Link href="/team" className="block p-2 hover:bg-accent">
                    Certifications
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger className="group h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2 w-[var(--radix-navigation-menu-trigger-width)] min-w-[200px]">
                <div className="w-[768px] p-4 bg-white rounded-md shadow-lg grid grid-cols-3 gap-4">
                  <Link href="/products/nitrogen-generation" className="p-2 hover:bg-accent rounded-sm">
                    Nitrogen Generation Unit
                  </Link>
                  <Link href="/products/air-compressors" className="p-2 hover:bg-accent rounded-sm">
                    Air Compressors
                  </Link>
                  <Link href="/products/air-nitrogen-boosters" className="p-2 hover:bg-accent rounded-sm">
                    Air & Nitrogen Boosters
                  </Link>
                  <Link href="/products/desiccant-air-dryers" className="p-2 hover:bg-accent rounded-sm">
                    Desiccant Air Dryers
                  </Link>
                  <Link href="/products/fuel-tanks" className="p-2 hover:bg-accent rounded-sm">
                    Fuel Tanks
                  </Link>
                  <Link href="/products/generators" className="p-2 hover:bg-accent rounded-sm">
                    Generators
                  </Link>
                  <Link href="/products/lighting-towers" className="p-2 hover:bg-accent rounded-sm">
                    Lighting Towers
                  </Link>
                  <Link href="/products/welding" className="p-2 hover:bg-accent rounded-sm">
                    Welding
                  </Link>
                  <Link href="/products/dnv-frames" className="p-2 hover:bg-accent rounded-sm">
                    DNV 2.7-1 Frames
                  </Link>
                  <Link href="/products/double-stacker" className="p-2 hover:bg-accent rounded-sm">
                    Double Stacker & Walkway
                  </Link>
                  <Link href="/products/hvac" className="p-2 hover:bg-accent rounded-sm">
                    HVAC
                  </Link>
                  <Link href="/products/earth-moving" className="p-2 hover:bg-accent rounded-sm">
                    Earth Moving
                  </Link>
                  <Link href="/products/material-handling" className="p-2 hover:bg-accent rounded-sm">
                    Material Handling
                  </Link>
                  <Link href="/products/elevated-platforms" className="p-2 hover:bg-accent rounded-sm">
                    Elevated Work Platforms
                  </Link>
                  <Link href="/products/ancillaries" className="p-2 hover:bg-accent rounded-sm">
                    Ancillaries
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="group h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Solutions
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[320px] p-2">
                  <Link href="/solutions/solution1" className="block p-2 hover:bg-accent">
                    Project Support Services
                  </Link>
                  <Link href="/solutions/solution2" className="block p-2 hover:bg-accent">
                    Testing &amp; Certifications
                  </Link>
                  <Link href="/solutions/solution2" className="block p-2 hover:bg-accent">
                    Preventative Maintenance &amp; Servicing
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-white hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Phone Number */}
        <Button variant="secondary" size="lg" className="hidden lg:flex text-primary">
          <Link href="tel:+97148841118" className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            +971 4 884 1118
          </Link>
        </Button>
        {/* <Button variant="ghost" size="lg" className="hidden lg:flex">
          <Link href="tel:+97148841118" className="flex items-center gap-2">
            +971 4 884 1118
          </Link>
        </Button> */}

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="text-white lg:hidden">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  )
}

