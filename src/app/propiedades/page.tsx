import type { Metadata } from "next";
import CatalogPage from "@/components/CatalogPage";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inmobel.com.ar";

export const metadata: Metadata = {
  title: "Catálogo de propiedades en venta y alquiler | InmoBel",
  description:
    "Explorá nuestras propiedades disponibles en Buenos Aires. Casas, departamentos, PH y locales en Belgrano, Núñez, Palermo, Coghlan y más. Filtrá por operación, tipo y barrio.",
  keywords: [
    "propiedades en venta",
    "propiedades en alquiler",
    "departamentos",
    "casas",
    "PH",
    "locales comerciales",
    "Buenos Aires",
    "Belgrano",
    "inmobiliaria",
    "catálogo",
  ],
  openGraph: {
    title: "Catálogo de propiedades | InmoBel",
    description:
      "Explorá nuestras propiedades disponibles en Buenos Aires. Casas, departamentos, PH y locales.",
    type: "website",
    locale: "es_AR",
    url: `${SITE_URL}/propiedades`,
    siteName: "InmoBel",
    images: [
      {
        url: `${SITE_URL}/preview.webp`,
        width: 1200,
        height: 630,
        alt: "InmoBel - Catálogo de propiedades",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de propiedades | InmoBel",
    description:
      "Explorá nuestras propiedades disponibles en Buenos Aires.",
    images: [`${SITE_URL}/preview.webp`],
  },
  alternates: {
    canonical: `${SITE_URL}/propiedades`,
  },
};

export default function Propiedades() {
  return <CatalogPage />;
}
