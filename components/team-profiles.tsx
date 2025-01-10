'use client'

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ArrowDown } from 'lucide-react'

export default function TeamProfiles() {
  const team = [
    {
      name: "Robert Carson",
      role: "Managing Director",
      image: "/carson.jpg",
      bio: "Robert has over 30 years of experience in the equipment rental industry having commenced his career in Australia in 1991.\n\nHe has since successfully set up and operated rental businesses in the Middle East, North Africa, Australia and Southeast Asia, and supported key industry sectors, including infrastructure, mining, construction and oil & gas.\n\nHe maintains a demonstrated ability of streamlining operations, transforming profitability, actively maintaining industry leading customer service standards and driving continued market share. He brings exceptional multicultural work-force management skills into the business and is well aware of the varied business challenges across the Middle East.\n\nRobert understands the importance of HSEQ in the region, and the importance of employee training, employee retention and work place integrity. These, coupled with his global rental industry skills and comprehensive equipment knowledge, ensure Robert is well positioned to drive aggressive and sustainable growth across our Middle East business.",
    },
    {
      name: "John Jones",
      role: "Executive Chairman Managing Director",
      image: "/jones.jpg",
      bio: "John is the founding CEO of Access Group. Having enjoyed an illustrious career in previous roles...",
    },
    {
      name: "Dean Rullo",
      role: "International Sales Director",
      image: "/rullo.jpg",
      bio: "Dean is the International Sales Director of Access Hire, the remote project specialist division of Access Group...",
    },
    {
      name: "Marc Licha",
      role: "Operations Director",
      image: "/licha.jpg",
      bio: "Marc is a customer service self-driven and focused management professional holding 17 years of comprehensive operations experience...",
    },
    {
      name: "Juan Fernando Ramirez",
      role: "Finance Director",
      image: "/ramirez.jpg",
      bio: "Juan joined Access Hire Middle East in April 2019, bringing over 15 years of experience in operating and strategic finance roles...",
    },
  ]

  const [expandedBios, setExpandedBios] = useState<{ [key: string]: boolean }>({})

  const toggleBio = (name: string) => {
    setExpandedBios(prev => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <div className="container mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-2xl mx-auto px-8">
        {team.map((member) => (
          <div key={member.name} className="flex flex-col md:flex-row">
            <div className="relative h-[392px] w-[248px]">
              <Image
                src={member.image}
                alt={member.name}
                width={240}
                height={392}
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 px-6">
              <h2 className="text-2xl font-font-black">{member.name}</h2>
              <h3 className="text-sm mt-2">{member.role}</h3>
              <p className={`text-base font-sans  mt-4 ${expandedBios[member.name] ? '' : 'line-clamp-6'}`}>
                {member.bio}
              </p>
              <button
                className="mt-4 flex items-center"
                onClick={() => toggleBio(member.name)}
              >
                {expandedBios[member.name] ? 'Read Less' : 'Read More'}
                {expandedBios[member.name] ? <ArrowDown className="ml-2" /> : <ArrowRight className="ml-2" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
