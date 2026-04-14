import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";
import { getPropertyBySlug, properties } from "@/data/properties";
import PropertyDetail from "@/components/PropertyDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://inmobel.com.ar";

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Propiedad no encontrada",
    };
  }

  const priceFormatted =
    property.currency === "USD"
      ? `USD ${property.price.toLocaleString("es-AR")}`
      : property.priceLabel || `$${property.price.toLocaleString("es-AR")}`;

  const title = `${property.title} - ${property.operation} en ${property.neighborhood}`;
  const description = `${property.operation} ${property.type} en ${property.neighborhood}. ${property.specs.ambientes || ""} ambientes, ${property.specs.dormitorios || ""} dormitorios, ${property.specs.superficieTotal || ""}m². ${priceFormatted}. InmoBel - Tu inmobiliaria de confianza.`;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title,
    description,
    keywords: [
      property.type.toLowerCase(),
      property.operation.toLowerCase(),
      property.neighborhood.toLowerCase(),
      "inmobiliaria",
      "propiedades",
      "buenos aires",
    ],
    openGraph: {
      title,
      description,
      type: "article",
      locale: "es_AR",
      url: `${SITE_URL}/propiedad/${property.slug}`,
      siteName: "InmoBel",
      images: [
        {
          url: `${SITE_URL}/preview.webp`,
          width: 1200,
          height: 630,
          alt: property.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/preview.webp`],
    },
    alternates: {
      canonical: `${SITE_URL}/propiedad/${property.slug}`,
    },
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetail property={property} />;
}
