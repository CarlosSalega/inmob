import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SellYourProperty from "@/components/SellYourProperty";
import MortgageCalculator from "@/components/MortgageCalculator";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <AboutSection />
      <TestimonialsSection />
      <SellYourProperty />
      <MortgageCalculator />
      <ContactCTA />
    </>
  );
}
