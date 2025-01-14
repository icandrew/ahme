import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="relative w-full py-20 lg:px-10">
      {/* Background Image */}
      <Image
        src="/home-bg.jpg"
        alt="Access Hire Middle East Hero Background"
        fill
        className="object-cover sm:object-center"
        priority
        quality={90}
      />

      {/* Content */}
      <section className="relative">
        <div className="mx-auto max-w-screen-2xl px-6">
          <div className="flex flex-col justify-center h-full">
            <h1 className="mb-8 text-4xl font-black leading-tight text-white">
              Global rental solutions for your next energy project
            </h1>
            <Button 
              size="lg" 
              className="w-fit bg-primary text-white hover:bg-red-700"
            >
              Request a quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
