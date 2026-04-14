import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inmobel.com.ar";

export const metadata: Metadata = {
  title: {
    default: "InmoBel | Tu inmobiliaria de confianza en Buenos Aires",
    template: "%s | InmoBel",
  },
  description:
    "Propiedades en venta y alquiler en Buenos Aires. Más de 15 años de experiencia en el mercado inmobiliario. Casas, departamentos, PH y locales en Belgrano, Núñez, Palermo y más.",
  applicationName: "InmoBel",
  authors: [{ name: "InmoBel" }],
  generator: "Next.js",
  keywords: [
    "inmobiliaria",
    "propiedades",
    "venta",
    "alquiler",
    "Buenos Aires",
    "Belgrano",
    "casas",
    "departamentos",
    "PH",
    "real estate",
  ],
  creator: "InmoBel",
  publisher: "InmoBel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: "InmoBel",
    title: "InmoBel | Tu inmobiliaria de confianza en Buenos Aires",
    description:
      "Propiedades en venta y alquiler en Buenos Aires. Más de 15 años de experiencia en el mercado inmobiliario.",
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
    title: "InmoBel | Tu inmobiliaria de confianza en Buenos Aires",
    description:
      "Propiedades en venta y alquiler en Buenos Aires. Más de 15 años de experiencia.",
    images: [`${SITE_URL}/preview.webp`],
  },
  verification: {
    // google: "tu-codigo-de-verificacion",
    // yandex: "tu-codigo-de-verificacion",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
