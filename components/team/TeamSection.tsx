"use client";

import * as React from "react";
import { TeamGrid } from "./TeamGrid";
import { TeamMemberProps } from "./types";

const teamMembers: TeamMemberProps[] = [
  
  {
    name: "Robert Carson",
    role: "Managing Director",
    description: `
      Robert has over 30 years of experience in the equipment rental industry having commenced his career in Australia in 1991.
      He has since successfully set up and operated rental businesses in the Middle East, North Africa, Australia, and Southeast Asia,
      and supported key industry sectors, including infrastructure, mining, construction, and oil & gas.
      He maintains a demonstrated ability to streamline operations, transform profitability, actively maintain industry-leading customer service standards,
      and drive continued market share. Robert understands the importance of HSEQ in the region, and the importance of employee training,
      employee retention, and workplace integrity. These, coupled with his global rental industry skills and comprehensive equipment knowledge,
      ensure Robert is well-positioned to drive aggressive and sustainable growth across our Middle East business.`,
    imageSrc: "/carson.jpg",
  },
  {
    name: "John Jones",
    role: "Executive Chairman Managing Director",
    description: `
      John is the founding CEO of Access Group. Having enjoyed an illustrious career in previous roles as a General Manager and Director,
      John has guided several businesses to rapid organic growth and market dominance. Since Access Group and its various subsidiary companies
      were founded, the business model has proved highly successful. John brings a distinctive management style executed decisively.`,
    imageSrc: "/jones.jpg",
  },
  {
    name: "Dean Rullo",
    role: "International Sales Director",
    description: `
      Dean is the International Sales Director of Access Hire, the remote project specialist division of Access Group.
      He is responsible for overseeing the operational activities of the business and has extensive experience in the hire industry of more than 17 years.
      Dean’s success is attributed to his wide-ranging experience and commitment to exceeding client expectations.`,
    imageSrc: "/rullo.jpg",
  },
  {
    name: "Marc Licha",
    role: "Operations Director",
    description: `
      Marc is a customer service-focused management professional with 17 years of comprehensive operations experience.
      He has a proven record of streamlining operations and transforming profitability. Marc’s international experience and
      engineering and business educational background combine technical knowledge with managerial and executive skills.`,
    imageSrc: "/licha.jpg",
  },
  {
    name: "Juan Fernando Ramirez",
    role: "Finance Director",
    description: `
      Juan joined Access Hire Middle East in April 2019, bringing over 15 years of experience in strategic finance roles
      across the automotive, financial services, investment banking, and FMCG industries. Juan’s expertise in Corporate Finance
      and global program management drives the financial development of our Middle East business.`,
    imageSrc: "/ramirez.jpg",
  },
];

export function TeamSection() {
  return (
    <section className="py-16" aria-label="Team Members">
      <TeamGrid members={teamMembers} />
    </section>
  );
}
