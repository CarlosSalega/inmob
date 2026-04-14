import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-inmob-primary mb-3">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Más de 500 familias confiaron en nosotros para encontrar su hogar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-bg-secondary rounded-xl p-6 border border-gray-100"
            >
              {/* Quote icon */}
              <Quote size={24} className="text-inmob-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < t.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-inmob-primary">
                  {t.name}
                </p>
                <p className="text-xs text-gray-400">
                  {t.operation} · {t.propertyType} · {t.neighborhood}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
