import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

interface InnerPageHeaderProps {
  title: string;
}

export default function InnerPageHeader({ title }: InnerPageHeaderProps) {
  return (
    <div className="relative h-[308px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about-us.jpg"
        alt="Page header background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}{/* Darker overlay for better text visibility */}
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-center h-full max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col gap-4">
          {/* Breadcrumb */}
          <Breadcrumb>
            <BreadcrumbList className="text-sm sm:text-base">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="hover:underline">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/about-us" className="hover:underline">
                  About Us
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Our Team</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          {/* Page Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
