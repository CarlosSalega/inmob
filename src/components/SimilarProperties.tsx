import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, ArrowRight } from "lucide-react";
import { properties, type Property } from "@/data/properties";

interface SimilarPropertiesProps {
  currentProperty: Property;
}

export default function SimilarProperties({ currentProperty }: SimilarPropertiesProps) {
  const similar = properties
    .filter(
      (p) =>
        p.id !== currentProperty.id &&
        (p.neighborhood === currentProperty.neighborhood ||
          p.type === currentProperty.type) &&
        p.operation === currentProperty.operation
    )
    .slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-inmob-primary">
          Propiedades similares
        </h2>
        <Link
          href="/propiedades"
          className="text-sm text-inmob-accent-dark font-medium hover:text-inmob-accent transition-colors flex items-center gap-1"
        >
          Ver todas
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {similar.map((p) => {
          const firstPrice = p.price;
          const isAlquiler = p.operation === "Alquiler";

          return (
            <Link
              key={p.id}
              href={`/propiedad/${p.slug}`}
              className="card-property group block"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={p.images[0]}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-inmob-accent-dark font-medium mb-1">
                  {p.neighborhood}
                </p>
                <h3 className="text-sm font-semibold text-inmob-primary mb-2 line-clamp-2 group-hover:text-inmob-accent-dark transition-colors">
                  {p.title}
                </h3>

                {/* Mini specs */}
                <div className="flex flex-wrap gap-2 mb-3 text-xs text-gray-500">
                  {p.specs.dormitorios !== undefined && p.specs.dormitorios > 0 && (
                    <span className="flex items-center gap-1">
                      <Bed size={12} />
                      {p.specs.dormitorios}
                    </span>
                  )}
                  {p.specs.bathrooms && (
                    <span className="flex items-center gap-1">
                      <Bath size={12} />
                      {p.specs.bathrooms}
                    </span>
                  )}
                  {p.specs.superficieTotal && (
                    <span className="flex items-center gap-1">
                      <Square size={12} />
                      {p.specs.superficieTotal} m²
                    </span>
                  )}
                </div>

                {/* Price */}
                <p
                  className={`text-base font-bold ${
                    isAlquiler ? "text-inmob-accent-dark" : "text-inmob-primary"
                  }`}
                >
                  {isAlquiler && p.priceLabel
                    ? p.priceLabel
                    : `${p.currency === "USD" ? "USD" : "$"} ${firstPrice.toLocaleString()}`}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
