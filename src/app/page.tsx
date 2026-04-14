import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SellYourProperty from "@/components/SellYourProperty";
import MortgageCalculator from "@/components/MortgageCalculator";
import ContactCTA from "@/components/ContactCTA";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inmobel.com.ar";

export const metadata: Metadata = {
  title: "InmoBel | Inmobiliaria en Buenos Aires - Venta y Alquiler de propiedades",
  description:
    "Más de 15 años en el mercado inmobiliario. Encontrá casas, departamentos y PH en venta y alquiler en Belgrano, Núñez, Palermo, Coghlan, Saavedra y más. Tasación gratuita.",
  openGraph: {
    title: "InmoBel | Inmobiliaria en Buenos Aires",
    description:
      "Encontrá propiedades en venta y alquiler en Buenos Aires. Más de 15 años de experiencia.",
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "InmoBel",
    images: [
      {
        url: `${SITE_URL}/preview.webp`,
        width: 1200,
        height: 630,
        alt: "InmoBel - Tu inmobiliaria de confianza en Buenos Aires",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InmoBel | Inmobiliaria en Buenos Aires",
    description:
      "Encontrá propiedades en venta y alquiler en Buenos Aires.",
    images: [`${SITE_URL}/preview.webp`],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

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
