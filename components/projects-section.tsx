'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from 'next/link'
import { ArrowUpRight } from "lucide-react";

// Define the interface for a project
interface Project {
  title: string;
  description: string;
  image: string;
}

// Define props interface for the ProjectsSection component
interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects = [] }) => {
  return (
    <section className="py-16 flex flex-col items-center gap-10 max-w-screen-2xl mx-auto px-6 lg:px-6">
      {/* Header Section */}
      <header className="h-fit flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Projects
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-4xl">
            Trusted by Leading Multinational<br /> Companies Worldwide
          </h1>
        </div>
        <Button
          variant="default"
          size="lg"
          asChild
          className="w-fit"
        >
          <Link href="#">
            View all projects
          </Link>
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
            <div className="flex-col inline-flex space-y-5">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl lg:text-2xl">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-base sm:text-lg mt-4">
                  {project.description}
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
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const sampleProjects: Project[] = [
  {
    title: "Project Support Services",
    description: "Comprehensive support: field services, operators, technicians, transport, installation, and commissioning.",
    image: "/project-1.jpg",
  },
  {
    title: "Testing & Certifications",
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