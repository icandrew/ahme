import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import PartnerShowcase from "@/components/partner-showcase";
import ProductShowcase from "@/components/product-showcase";
import ProjectsSection from "@/components/projects-section";
import StatsSection from "@/components/stats-section";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <StatsSection />
      <ProjectsSection />
      <PartnerShowcase />
      <ContactForm />
      <Footer />
    </>
  );
}
