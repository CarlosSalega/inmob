import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, Car } from "lucide-react";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isAlquiler = property.operation === "Alquiler";

  return (
    <Link href={`/propiedad/${property.slug}`} className="card-property group block">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Operation badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`badge-operation ${isAlquiler ? "badge-alquiler" : "badge-venta"}`}
          >
            {property.operation}
          </span>
        </div>
        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span className="badge-type">{property.type}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <p className="text-xs text-inmob-accent-dark font-medium mb-1">
          {property.neighborhood}
        </p>

        {/* Title */}
        <h3 className="text-base font-semibold text-inmob-primary mb-3 line-clamp-2 group-hover:text-inmob-accent-dark transition-colors">
          {property.title}
        </h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500">
          {property.specs.superficieTotal && (
            <span className="flex items-center gap-1">
              <Square size={14} />
              {property.specs.superficieTotal} m²
            </span>
          )}
          {property.specs.dormitorios !== undefined && property.specs.dormitorios > 0 && (
            <span className="flex items-center gap-1">
              <Bed size={14} />
              {property.specs.dormitorios} dorm.
            </span>
          )}
          {property.specs.bathrooms && (
            <span className="flex items-center gap-1">
              <Bath size={14} />
              {property.specs.bathrooms} baño{property.specs.bathrooms > 1 ? "s" : ""}
            </span>
          )}
          {property.specs.estacionamiento && property.specs.estacionamiento > 0 && (
            <span className="flex items-center gap-1">
              <Car size={14} />
              {property.specs.estacionamiento} est.
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className={isAlquiler ? "price-tag-alquiler" : "price-tag"}>
            {isAlquiler && property.priceLabel
              ? property.priceLabel
              : `${property.currency === "USD" ? "USD" : "$"} ${property.price.toLocaleString()}`}
          </span>
          {isAlquiler && !property.priceLabel && (
            <span className="text-xs text-gray-400">/mes</span>
          )}
        </div>
      </div>
    </Link>
  );
}
