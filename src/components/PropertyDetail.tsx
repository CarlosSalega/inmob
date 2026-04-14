"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  Phone,
  Mail,
  MessageCircle,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  Building2,
  Check,
  MapPin,
} from "lucide-react";
import type { Property } from "@/data/properties";
import MortgageCalculator from "@/components/MortgageCalculator";
import SimilarProperties from "@/components/SimilarProperties";

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const isAlquiler = property.operation === "Alquiler";

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa "${property.title}" (${property.operation}). ¿Está disponible?`
  );

  const emailSubject = encodeURIComponent(
    `Consulta: ${property.title}`
  );
  const emailBody = encodeURIComponent(
    `Hola, vi la propiedad "${property.title}" en su web y me gustaría obtener más información.\n\nOperación: ${property.operation}\nBarrio: ${property.neighborhood}\n\nGracias!`
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <Link
          href="/propiedades"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-inmob-primary mb-6 transition-colors"
        >
          <ChevronLeft size={16} />
          Volver a propiedades
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Gallery */}
            <div className="mb-8">
              {/* Main image */}
              <div className="relative aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-4">
                <Image
                  src={property.images[selectedImage]}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className={`badge-operation ${isAlquiler ? "badge-alquiler" : "badge-venta"}`}
                  >
                    {property.operation}
                  </span>
                  <span className="badge-type">{property.type}</span>
                </div>
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="flex gap-3">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === i
                          ? "border-inmob-accent"
                          : "border-gray-200"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${property.title} - Imagen ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Location */}
            <div className="mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-inmob-primary mb-2">
                {property.title}
              </h1>
              <p className="flex items-center gap-2 text-gray-500">
                <MapPin size={16} />
                {property.address}
              </p>
            </div>

            {/* Price */}
            <div className="bg-bg-secondary rounded-xl p-6 mb-8">
              <div className="flex items-center gap-4">
                <span
                  className={`text-3xl font-bold ${isAlquiler ? "text-inmob-accent-dark" : "text-inmob-primary"}`}
                >
                  {isAlquiler && property.priceLabel
                    ? property.priceLabel
                    : `${property.currency === "USD" ? "USD" : "$"} ${property.price.toLocaleString()}`}
                </span>
                {isAlquiler && !property.priceLabel && (
                  <span className="text-sm text-gray-400">/mes</span>
                )}
              </div>
            </div>

            {/* Specs */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-inmob-primary mb-4">
                Características
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.specs.ambientes && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Building2 size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Ambientes</p>
                      <p className="text-sm font-semibold">{property.specs.ambientes}</p>
                    </div>
                  </div>
                )}
                {property.specs.dormitorios !== undefined && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Bed size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Dormitorios</p>
                      <p className="text-sm font-semibold">{property.specs.dormitorios}</p>
                    </div>
                  </div>
                )}
                {property.specs.bathrooms && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Bath size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Baños</p>
                      <p className="text-sm font-semibold">{property.specs.bathrooms}</p>
                    </div>
                  </div>
                )}
                {property.specs.superficieTotal && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Square size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Sup. Total</p>
                      <p className="text-sm font-semibold">{property.specs.superficieTotal} m²</p>
                    </div>
                  </div>
                )}
                {property.specs.superficieCubierta && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Square size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Sup. Cubierta</p>
                      <p className="text-sm font-semibold">{property.specs.superficieCubierta} m²</p>
                    </div>
                  </div>
                )}
                {property.specs.antiguedad && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Calendar size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Antigüedad</p>
                      <p className="text-sm font-semibold">{property.specs.antiguedad}</p>
                    </div>
                  </div>
                )}
                {property.specs.expensas !== undefined && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Building2 size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Expensas</p>
                      <p className="text-sm font-semibold">
                        ${property.specs.expensas.toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
                {property.specs.estacionamiento !== undefined && property.specs.estacionamiento > 0 && (
                  <div className="flex items-center gap-3 p-4 bg-bg-secondary rounded-lg">
                    <Car size={20} className="text-inmob-accent" />
                    <div>
                      <p className="text-xs text-gray-400">Estacionamiento</p>
                      <p className="text-sm font-semibold">
                        {property.specs.estacionamiento} lugar{property.specs.estacionamiento > 1 ? "es" : ""}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-inmob-primary mb-4">
                Descripción
              </h2>
              <p className="text-gray-500 leading-relaxed">{property.description}</p>
            </div>

            {/* Features */}
            {property.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-inmob-primary mb-4">
                  Características adicionales
                </h2>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature) => (
                    <span
                      key={feature}
                      className="feature-item"
                    >
                      <Check size={14} className="text-inmob-accent" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Map */}
            <div>
              <h2 className="text-lg font-semibold text-inmob-primary mb-4">
                Ubicación
              </h2>
              <div className="relative aspect-video bg-bg-secondary rounded-xl overflow-hidden">
                <Image
                  src="/placeholder-property.webp"
                  alt={`Mapa de ${property.neighborhood}`}
                  fill
                  className="object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center bg-white/90 rounded-xl p-6">
                    <MapPin size={32} className="mx-auto text-inmob-primary mb-2" />
                    <p className="text-sm font-semibold text-inmob-primary">
                      {property.neighborhood}
                    </p>
                    <p className="text-xs text-gray-500">{property.address}</p>
                    <p className="text-xs text-gray-400 mt-2">
                      Ubicación aproximada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Similar Properties */}
            <SimilarProperties currentProperty={property} />

            {/* Mortgage Calculator */}
            {!isAlquiler && (
              <div className="mt-12">
                <MortgageCalculator propertyPrice={property.price} />
              </div>
            )}
          </div>

          {/* Sidebar - Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-bg-secondary rounded-xl p-6">
              <h3 className="text-lg font-semibold text-inmob-primary mb-4">
                Consultar por esta propiedad
              </h3>

              <div className="space-y-3 mb-6">
                <a
                  href={`https://wa.me/5491157942604?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href={`tel:+5491157942604`}
                  className="btn-primary w-full"
                >
                  <Phone size={18} />
                  Llamar
                </a>
                <a
                  href={`mailto:info@inmobel.com.ar?subject=${emailSubject}&body=${emailBody}`}
                  className="btn-outline w-full"
                >
                  <Mail size={18} />
                  Enviar email
                </a>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-400 text-center">
                  Respuesta en menos de 2 horas en horario comercial
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
