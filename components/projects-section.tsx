import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "Project Support Services",
    description: "Montes magna ultricies lectus egestas ultricies feugiat commodo tincidunt maecenas felis",
    image: "/project-1.jpg",
  },
  {
    title: "Testing & Certifications",
    description: "Montes magna ultricies lectus egestas ultricies feugiat commodo tincidunt maecenas felis",
    image: "/project-2.jpg",
  },
  {
    title: "Project Support Services",
    description: "Montes magna ultricies lectus egestas ultricies feugiat commodo tincidunt maecenas felis",
    image: "/project-3.jpg",
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-16 flex flex-col items-center gap-10 max-w-screen-2xl mx-auto lg:px-10">
      {/* Header Section */}
      <div className="h-[190px] flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-1.5">
            <p className="text-sm font-medium text-muted-foreground">Projects</p>
            <h2 className="text-center max-w-xl text-4xl font-black tracking-tight sm:text-4xl md:text-4xl">
              Trusted by Leading Multinational Companies Worldwide
            </h2>
          </div>
          <button className="px-3 py-2 bg-[#E72B2D] rounded overflow-hidden flex justify-center items-center">
            <span className="px-1 text-white text-sm font-medium leading-6 font-roboto">
              View all projects
            </span>
          </button>
        </div>
      </div>

      {/* Map Section */}
      <div className="flex flex-col items-start">
        <div className="w-full flex flex-col items-center gap-4 mb-10">
          <div className="relative w-full aspect-[1280/515]">
            <Image
              src="/world-map.png"
              alt="World map"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col justify-center items-start gap-5">
            <Card className="w-full h-[400px] border-0 shadow-none transition-transform transform hover:scale-105 hover:shadow-lg">
              <CardContent className="p-0 h-full relative">
                <div className="absolute inset-0 bg-[#D9D9D9] rounded-lg transition-colors duration-300 hover:bg-gray-300" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300"
                />
              </CardContent>
            </Card>

            <div className="h-[130px] flex flex-col gap-2.5">
              <h3 className="text-[#09090B] text-2xl font-black leading-8">
                {project.title}
              </h3>
              <p className="text-[#71717A] text-base font-normal leading-7">
                {project.description}
              </p>
              <button className="flex items-center gap-2 text-[#E72B2D] text-sm font-medium leading-6">
                Read more
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

