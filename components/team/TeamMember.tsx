"use client";

import * as React from "react";
import { TeamMemberProps } from "./types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

export function TeamMember({
  name,
  role,
  description,
  imageSrc,
}: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const descriptionRef = React.useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedDescription = React.useMemo(() => {
    const lines = description.split("\n").slice(0, 4);
    return (
      lines.join("\n") +
      (lines.length < description.split("\n").length ? "..." : "")
    );
  }, [description]);

  return (
    <div className="flex flex-wrap gap-6 items-start w-full md:w-[calc(50%-1.25rem)]">
      <Image
        src={imageSrc}
        alt={`${name} - ${role}`}
        width={240}
        height={392}
        className="object-cover rounded-md max-sm:mx-auto"
      />
      <div className="flex flex-col flex-1 min-w-[200px] max-w-xl mx-auto">
        <h2 className="text-3xl font-black text-center sm:text-left">{name}</h2>
        <div className="mt-1 text-sm text-muted-foreground text-center sm:text-left">
          {role}
        </div>
        <div className="mt-4">
          <div
            ref={descriptionRef}
            className={`text-base text-muted-foreground prose transition-all duration-300 ${
              isExpanded ? "line-clamp-none" : "line-clamp-9"
            }`}
          >
            {isExpanded ? description : truncatedDescription}
          </div>
          <div className="mt-4 flex justify-center sm:justify-start">
            <Button
              variant="default"
              className="inline-flex items-center"
              onClick={toggleExpand}
            >
              {isExpanded ? "Read Less" : "Read More"}
              {isExpanded ? (
                <ArrowDown className="ml-2" />
              ) : (
                <ArrowRight className="ml-2" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
