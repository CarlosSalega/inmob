"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, MapPin } from "lucide-react";
import {
  properties,
  operations,
  propertyTypes,
  neighborhoods,
} from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

const PROPERTIES_PER_PAGE = 8;

export default function CatalogPage() {
  const [selectedOperation, setSelectedOperation] = useState("Todas");
  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const matchOperation =
        selectedOperation === "Todas" || p.operation === selectedOperation;
      const matchType = selectedType === "Todos" || p.type === selectedType;
      const matchNeighborhood =
        selectedNeighborhood === "Todos" ||
        p.neighborhood === selectedNeighborhood;
      const matchSearch =
        searchQuery === "" ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.neighborhood.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.type.toLowerCase().includes(searchQuery.toLowerCase());
      return matchOperation && matchType && matchNeighborhood && matchSearch;
    });
  }, [selectedOperation, selectedType, selectedNeighborhood, searchQuery]);

  const totalPages = Math.ceil(filtered.length / PROPERTIES_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * PROPERTIES_PER_PAGE,
    currentPage * PROPERTIES_PER_PAGE,
  );

  const handleFilterChange = (setter: (val: string) => void, value: string) => {
    setter(value);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedOperation("Todas");
    setSelectedType("Todos");
    setSelectedNeighborhood("Todos");
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div className="bg-bg-secondary min-h-screen">
      {/* Header */}
      <section className="bg-inmob-primary text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft size={16} />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Propiedades</h1>
          <p className="text-gray-300">
            {filtered.length} propiedad{filtered.length !== 1 && "es"}{" "}
            encontrada{filtered.length !== 1 && "s"}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
          {/* Search */}
          <div className="relative w-full">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Buscar por nombre, barrio o tipo..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="input-premium !pl-11"
            />

            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Filter chips */}
          <div className="flex flex-wrap gap-6 pt-6">
            {/* Operation */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Operación
              </p>
              <div className="flex flex-wrap gap-2">
                {operations.map((op) => (
                  <button
                    key={op}
                    onClick={() => handleFilterChange(setSelectedOperation, op)}
                    className={`filter-chip ${selectedOperation === op ? "active" : ""}`}
                  >
                    {op}
                  </button>
                ))}
              </div>
            </div>

            {/* Type */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Tipo
              </p>
              <div className="flex flex-wrap gap-2">
                {propertyTypes.map((t) => (
                  <button
                    key={t}
                    onClick={() => handleFilterChange(setSelectedType, t)}
                    className={`filter-chip ${selectedType === t ? "active" : ""}`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Neighborhood */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Barrio
              </p>
              <div className="flex flex-wrap gap-2">
                {neighborhoods.map((n) => (
                  <button
                    key={n}
                    onClick={() =>
                      handleFilterChange(setSelectedNeighborhood, n)
                    }
                    className={`filter-chip ${selectedNeighborhood === n ? "active" : ""}`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {paginated.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginated.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-inmob-primary hover:text-inmob-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                        currentPage === page
                          ? "bg-inmob-primary text-white"
                          : "border border-gray-200 text-gray-500 hover:border-inmob-primary hover:text-inmob-primary"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:border-inmob-primary hover:text-inmob-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20">
            <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-400 text-lg mb-2">
              No encontramos propiedades con esos filtros
            </p>
            <p className="text-gray-400 text-sm mb-6">
              Probá cambiando los filtros o buscando otro término
            </p>
            <button onClick={clearFilters} className="btn-outline text-sm">
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
