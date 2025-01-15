import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-6 md:px-6 lg:px-6">
          <div className="flex flex-col justify-center h-full gap-4 ">
            <h1 className="text-2xl font-extrabold text-background sm:text-4xl lg:text-4xl">
              Global rental solutions for
              <br className="hidden sm:inline" />
              your next energy project
            </h1>
            <Button
              variant="default"
              size="lg"
              asChild
              className="w-fit"
            >
              <Link href="#">
                Request a quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
