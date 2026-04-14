import { Shield, Award, Users, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="nosotros" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-inmob-primary mb-6">
              Más de 15 años en el mercado inmobiliario
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Somos una inmobiliaria familiar con profunda raíz en el barrio de
              Belgrano y zonas aledañas. Conocemos cada calle, cada edificio,
              cada oportunidad.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Nuestro compromiso es acompañarte en cada paso, desde la primera
              visita hasta la firma del contrato. Asesoramiento personalizado y
              transparencia en cada operación.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Shield size={20} className="text-inmob-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-inmob-primary">
                    Confianza
                  </p>
                  <p className="text-xs text-gray-500">
                    Operaciones seguras y transparentes
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award size={20} className="text-inmob-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-inmob-primary">
                    Experiencia
                  </p>
                  <p className="text-xs text-gray-500">
                    Conocimiento profundo de la zona
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users size={20} className="text-inmob-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-inmob-primary">
                    Atención
                  </p>
                  <p className="text-xs text-gray-500">
                    Asesoramiento personalizado
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-inmob-accent mt-1 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-inmob-primary">
                    Cobertura
                  </p>
                  <p className="text-xs text-gray-500">
                    Zona norte de CABA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="bg-gradient-to-br from-inmob-primary/10 via-gray-50 to-inmob-accent/10 rounded-xl p-12 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-inmob-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-3xl">IB</span>
              </div>
              <p className="text-inmob-primary font-bold text-xl mb-1">
                Inmo<span className="text-inmob-accent">Bel</span>
              </p>
              <p className="text-gray-500 text-sm">Tu inmobiliaria de confianza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
