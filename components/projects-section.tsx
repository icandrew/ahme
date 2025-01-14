'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const ProjectsSection = ({ projects = [] }) => {
  return (
    <section className="py-16 flex flex-col items-center gap-10 max-w-screen-2xl mx-auto px-6 lg:px-6">
      {/* Header Section */}
      <header className="h-fit flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-sm font-medium text-muted-foreground">Projects</p>
          <h2 className="max-w-xl text-4xl font-black tracking-tight sm:text-4xl md:text-4xl">
            Trusted by Leading Multinational Companies Worldwide
          </h2>
        </div>
        <Button
          variant="default"
          className="w-fit px-3 py-2 inline-flex justify-center items-center gap-1"
          size="lg"
        >
          <span className="px-1">View all projects</span>
        </Button>
                
      </header>

      {/* Map Section */}
      <div className="relative w-full hidden md:block">
        <div className="w-[70%] mx-auto">
          <div className="relative aspect-[1280/515]">
            <Image
              src="/world-map.png"
              alt="World map"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-6 max-w-screen-2xl">
            {/* Project Card */}
            <Card className="w-full h-[400px] border-0 shadow-none transition-transform transform hover:scale-105 hover:shadow-lg">
              <CardContent className="relative p-0 h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300"
                />
              </CardContent>
            </Card>

            {/* Project Info */}
            <div className="flex-col inline-flex gap-4">
              <h3 className="text-2xl font-black">
                {project.title}
              </h3>
              <p className="text-base text-muted-foreground">
                {project.description}
              </p>
              <Button
                variant="default"
                className="w-fit px-3 py-2 inline-flex justify-center items-center gap-1"
                size="lg"
              >
                <span className="px-1">Read more</span>
                <ArrowUpRight className="w-4 h-4" /> {/* Replace with your desired icon */}
              </Button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

const sampleProjects = [
  {
    title: "Project Support Services",
    description: "Comprehensive project support including field services, operators & technicians, transport, installation & commissioning.",
    image: "/project-1.jpg",
  },
  {
    title: "Testing & Certifications​",
    description: "Ensure peace of mind with calibration, function testing, lifting & MPI testing and certification services.",
    image: "/project-2.jpg",
  },
  {
    title: "Maintenance Services",
    description: "Minimize downtime and reduce costs with preventative maintenance, servicing and refurbishment.",
    image: "/project-3.jpg",
  },
];

export default function App() {
  return <ProjectsSection projects={sampleProjects} />;
}
