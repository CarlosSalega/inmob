import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="bg-bg-secondary py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-inmob-primary mb-3">
            Propiedades destacadas
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Selección de nuestras mejores propiedades en las zonas más buscadas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/propiedades" className="btn-primary">
            Ver todas las propiedades
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
