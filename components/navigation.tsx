"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu } from 'lucide-react'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="w-full bg-primary relative">
      <div className="max-w-screen-2xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
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

        {/* Desktop Navigation */}
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
              <NavigationMenuContent className="absolute left-1/2 transform -translate-x-1/2 w-[var(--radix-navigation-menu-trigger-width)] min-w-[200px]">
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
        <Button
          variant="default"
          size="lg"
          asChild
          className="w-fit hidden lg:flex items-center gap-2 px-4 py-2 bg-white text-primary hover:bg-gray-100"
        >
          <Link href="#">
            <Phone className="h-4 w-4" />
            +971 4884 1118
          </Link>
        </Button>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white lg:hidden">
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px] flex flex-col">
            <nav className="flex flex-col h-full overflow-y-auto pb-20">
              <Link href="/" className="py-4 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Accordion type="single" collapsible>
                <AccordionItem value="about">
                  <AccordionTrigger>About Us</AccordionTrigger>
                  <AccordionContent>
                    <Link href="/our-team" className="block py-2" onClick={() => setIsOpen(false)}>
                      Our Team
                    </Link>
                    <Link href="/about" className="block py-2" onClick={() => setIsOpen(false)}>
                      Our Values
                    </Link>
                    <Link href="/about" className="block py-2" onClick={() => setIsOpen(false)}>
                      Safety
                    </Link>
                    <Link href="/team" className="block py-2" onClick={() => setIsOpen(false)}>
                      Certifications
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="products">
                  <AccordionTrigger>Products</AccordionTrigger>
                  <AccordionContent className="max-h-[50vh] overflow-y-auto">
                    <Link href="/products/nitrogen-generation" className="block py-2" onClick={() => setIsOpen(false)}>
                      Nitrogen Generation Unit
                    </Link>
                    <Link href="/products/air-compressors" className="block py-2" onClick={() => setIsOpen(false)}>
                      Air Compressors
                    </Link>
                    <Link href="/products/air-nitrogen-boosters" className="block py-2" onClick={() => setIsOpen(false)}>
                      Air & Nitrogen Boosters
                    </Link>
                    <Link href="/products/desiccant-air-dryers" className="block py-2" onClick={() => setIsOpen(false)}>
                      Desiccant Air Dryers
                    </Link>
                    <Link href="/products/fuel-tanks" className="block py-2" onClick={() => setIsOpen(false)}>
                      Fuel Tanks
                    </Link>
                    <Link href="/products/generators" className="block py-2" onClick={() => setIsOpen(false)}>
                      Generators
                    </Link>
                    <Link href="/products/lighting-towers" className="block py-2" onClick={() => setIsOpen(false)}>
                      Lighting Towers
                    </Link>
                    <Link href="/products/welding" className="block py-2" onClick={() => setIsOpen(false)}>
                      Welding
                    </Link>
                    <Link href="/products/dnv-frames" className="block py-2" onClick={() => setIsOpen(false)}>
                      DNV 2.7-1 Frames
                    </Link>
                    <Link href="/products/double-stacker" className="block py-2" onClick={() => setIsOpen(false)}>
                      Double Stacker & Walkway
                    </Link>
                    <Link href="/products/hvac" className="block py-2" onClick={() => setIsOpen(false)}>
                      HVAC
                    </Link>
                    <Link href="/products/earth-moving" className="block py-2" onClick={() => setIsOpen(false)}>
                      Earth Moving
                    </Link>
                    <Link href="/products/material-handling" className="block py-2" onClick={() => setIsOpen(false)}>
                      Material Handling
                    </Link>
                    <Link href="/products/elevated-platforms" className="block py-2" onClick={() => setIsOpen(false)}>
                      Elevated Work Platforms
                    </Link>
                    <Link href="/products/ancillaries" className="block py-2" onClick={() => setIsOpen(false)}>
                      Ancillaries
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="solutions">
                  <AccordionTrigger>Solutions</AccordionTrigger>
                  <AccordionContent>
                    <Link href="/solutions/solution1" className="block py-2" onClick={() => setIsOpen(false)}>
                      Project Support Services
                    </Link>
                    <Link href="/solutions/solution2" className="block py-2" onClick={() => setIsOpen(false)}>
                      Testing &amp; Certifications
                    </Link>
                    <Link href="/solutions/solution3" className="block py-2" onClick={() => setIsOpen(false)}>
                      Preventative Maintenance &amp; Servicing
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <Link href="/projects" className="py-4 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" className="py-4 text-lg font-semibold" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

