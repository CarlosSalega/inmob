import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-inmob-primary py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          ¿Querés vender o alquilar tu propiedad?
        </h2>
        <p className="text-gray-300 mb-10 max-w-lg mx-auto">
          Contactanos para una tasación gratuita. Te asesoramos sin compromiso
          sobre el mejor precio y estrategia de venta.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5491157942604?text=Hola!%20Quiero%20consultar%20por%20una%20tasación"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a href="tel:+5491157942604" className="btn-accent text-lg">
            <Phone size={20} />
            Llamar ahora
          </a>
          <a
            href="mailto:info@inmobel.com.ar"
            className="btn-outline text-lg border-white text-white"
          >
            <Mail size={20} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
