import { notFound } from "next/navigation";
import { getPropertyBySlug, properties } from "@/data/properties";
import PropertyDetail from "@/components/PropertyDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetail property={property} />;
}
