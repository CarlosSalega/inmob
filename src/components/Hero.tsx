"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { operations, propertyTypes, neighborhoods } from "@/data/properties";

export default function Hero() {
  const [operation, setOperation] = useState("Todas");
  const [type, setType] = useState("Todos");
  const [neighborhood, setNeighborhood] = useState("Todos");

  const searchParams = new URLSearchParams();
  if (operation !== "Todas") searchParams.set("operation", operation);
  if (type !== "Todos") searchParams.set("type", type);
  if (neighborhood !== "Todos") searchParams.set("neighborhood", neighborhood);

  return (
    <section className="relative overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="/hero.webp"
          alt="InmoBel - Tu inmobiliaria de confianza en Buenos Aires"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-inmob-primary/90 via-inmob-primary-dark/85 to-inmob-primary/90" />
      </div>

      {/* Decorative accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-inmob-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Encontrá tu{" "}
            <span className="text-inmob-accent">hogar ideal</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Propiedades en venta y alquiler en las mejores zonas de Buenos Aires
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            {/* Operation */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                Operación
              </label>
              <div className="relative">
                <select
                  value={operation}
                  onChange={(e) => setOperation(e.target.value)}
                  className="select-premium"
                >
                  {operations.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                Tipo
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="select-premium"
              >
                {propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Neighborhood */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                Barrio
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="select-premium"
              >
                {neighborhoods.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <Link
                href={`/propiedades?${searchParams.toString()}`}
                className="btn-accent w-full py-3"
              >
                <Search size={18} />
                Buscar
              </Link>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">150+</p>
            <p className="text-sm text-gray-400">Propiedades activas</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">15</p>
            <p className="text-sm text-gray-400">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">500+</p>
            <p className="text-sm text-gray-400">Operaciones concretadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
