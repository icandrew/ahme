import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-8 md:py-16 w-full">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="w-[160px] md:w-[217px] h-[45px] relative">
            <Image
              src="/logo-on-white.svg"
              alt="Access Group Middle East Logo"
              width={161}
              height={45}
              className="h-[45px] w-auto object-contain"
            />
          </div>
          <h2 className="text-xl md:text-2xl font-black text-primary text-center md:text-right">
            Integrity And Loyalty, In Our Brand
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {/* Company Info Column */}
          <div className="space-y-6">
            <p className="text-sm text-muted-foreground">
              Access Group Middle East offers top-quality forklifts and material handling solutions from trusted brands like UN, Manitou, JCB, Merlo, and Kalmar.
            </p>
              {/* Certification Images */}
              <div className="flex flex-row gap-4">
                {[
                  { src: '/cert-1.svg', alt: 'Certification Level 1', width: 60, height: 57 },
                  { src: '/cert-2.png', alt: 'Certification Level 2', width: 65, height: 62 },
                  { src: '/cert-3.png', alt: 'Certification Level 3', width: 70, height: 67 },
                  { src: '/cert-4.png', alt: 'Certification Level 4', width: 75, height: 72 }
                ].map((cert, index) => (
                  <div key={index} className="cert-placeholder">
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      width={cert.width}
                      height={cert.height}
                      className="h-12 md:h-[60px] w-auto object-contain mix-blend-darken"
                    />
                  </div>
                ))}
              </div>
              
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-black text-foreground">Company</h3>
              <div className="space-y-1">
                {[
                  { name: 'About Us', href: '#' },
                  { name: 'Rent', href: '#' },
                  { name: 'Solutions', href: '#' },
                  { name: 'Projects', href: '#' },
                  { name: 'Contact Us', href: '#' }
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="link"
                    asChild
                    className="block text-sm text-muted-foreground font-medium h-auto px-0 py-1"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Products Links */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-black text-foreground">Products</h3>
              <div className="space-y-1">
                {[
                  { name: 'Nitrogen Generation Units', href: '#' },
                  { name: 'Nitrogen & Air Boosters', href: '#' },
                  { name: 'Air Compressors', href: '#' },
                  { name: 'Desiccant Driers', href: '#' },
                  { name: 'View all products', href: '#' }
                ].map((item, index) => (
                  <Button
                    key={index}
                    variant="link"
                    asChild
                    className="block text-sm text-muted-foreground font-medium h-auto px-0 py-1"
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-black text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                24/7 Support Line: 800 888 4473<br />
                General Enquiry: contactus@accesshire.ae<br />
                Marketing Enquiry: marketing@accesshire.ae
              </p>
              
              {/* Social Media Links */}
              <div className="flex flex-col gap-2">
        {[
          { name: '/accesshiremiddleeast', href: '#', imgSrc: '/facebook.svg', imgAlt: 'facebook' },
          { name: '/access-hire-middle-east', href: '#', imgSrc: '/linkedin.svg', imgAlt: 'linkedin' },
          { name: '/access_hire', href: '#', imgSrc: '/instagram.svg', imgAlt: 'instagram' },
          { name: '@accesshire', href: '#', imgSrc: '/youtube.svg', imgAlt: 'youtube' },
        ].map((item, index) => (
          <Link 
            key={index} 
            href={item.href} 
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="w-5 flex-shrink-0">
              <Image
                src={item.imgSrc}
                alt={item.imgAlt}
                width={20}
                height={20}
                className="h-5 w-5"
              />
            </div>
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}