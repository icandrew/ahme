"use client";

import * as React from "react";
import { TeamMember } from "./TeamMember";
import { TeamGridProps } from "./types";

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="flex flex-wrap justify-between gap-10 max-w-screen-2xl  mx-auto px-4 sm:px-6 lg:px-8">
      {members.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  );
}
