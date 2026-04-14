import { MapPin, Clock, Phone, Mail, Building2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-inmob-primary-dark text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-inmob-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IB</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Inmo</span>
                <span className="text-xl font-bold text-inmob-accent">Bel</span>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Más de 15 años conectando personas con su hogar ideal en Buenos
              Aires.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin
                  size={16}
                  className="mt-0.5 text-inmob-accent shrink-0"
                />
                <span>Av. Cabildo 2200, Belgrano</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone
                  size={16}
                  className="mt-0.5 text-inmob-accent shrink-0"
                />
                <span>11-5794-2604</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-inmob-accent shrink-0" />
                <span>info@inmobel.com.ar</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Horarios</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <Clock
                  size={16}
                  className="mt-0.5 text-inmob-accent shrink-0"
                />
                <span>Lun a Vie: 9 a 19hs</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock
                  size={16}
                  className="mt-0.5 text-inmob-accent shrink-0"
                />
                <span>Sábados: 10 a 14hs</span>
              </li>
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">
              Zona de cobertura
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Belgrano y alrededores</li>
              <li>• Núñez - Saavedra</li>
              <li>• Coghlan - Villa Urquiza</li>
              <li>• Palermo - Colegiales</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-xs text-gray-400">
          © 2026 InmoBel. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
