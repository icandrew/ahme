import InnerPageHeader from "@/components/innerpage-header"
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import * as React from "react";
import { TeamSection } from "@/components/team/TeamSection";

export default function Home() {
  return (
    <main>
      <Navigation />
      <InnerPageHeader title="Our Team" />
      <TeamSection />
      {/* <TeamProfiles /> */}
      <Footer />
    </main>
  )
}

