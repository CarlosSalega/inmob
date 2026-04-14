import { Building2, TrendingUp, Clock, CheckCircle } from "lucide-react";

export default function SellYourProperty() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 px-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-inmob-accent/10 text-inmob-accent-dark text-sm font-medium px-4 py-2 rounded-full mb-6">
              <TrendingUp size={16} />
              ¿Querés vender?
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-inmob-primary mb-4">
              Tasación gratuita de tu propiedad
            </h2>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Conocemos el mercado de nuestra zona como nadie. Te damos un valor
              justo basado en operaciones reales, no en estimaciones genéricas
              de portales.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Building2 size={18} />,
                  title: "Tasación basada en datos reales",
                  desc: "Analizamos ventas recientes en tu zona",
                },
                {
                  icon: <TrendingUp size={18} />,
                  title: "Estrategia de difusión",
                  desc: "Tu propiedad en nuestra web + portales + redes",
                },
                {
                  icon: <Clock size={18} />,
                  title: "Venta en tiempo récord",
                  desc: "Promedio de 45 días desde la publicación",
                },
                {
                  icon: <CheckCircle size={18} />,
                  title: "Acompañamiento legal",
                  desc: "Te guiamos en cada paso hasta la escritura",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-inmob-primary/10 rounded-lg flex items-center justify-center text-inmob-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-inmob-primary">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5491157942604?text=Hola!%20Quiero%20una%20tasación%20gratuita%20de%20mi%20propiedad"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full mx-auto"
            >
              Solicitar tasación gratuita
            </a>
          </div>

          {/* Visual */}
          <div className="bg-gradient-to-br from-inmob-primary/5 via-white to-inmob-accent/10 rounded-xl p-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                ¿Cómo funciona?
              </p>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Contactanos",
                    desc: "WhatsApp, email o teléfono",
                  },
                  {
                    step: "2",
                    title: "Visitamos tu propiedad",
                    desc: "Evaluamos en persona",
                  },
                  {
                    step: "3",
                    title: "Tasación gratuita",
                    desc: "Valor de mercado real",
                  },
                  {
                    step: "4",
                    title: "Publicación",
                    desc: "Tu propiedad en todos los canales",
                  },
                  {
                    step: "5",
                    title: "Venta exitosa",
                    desc: "Te acompañamos hasta el final",
                  },
                ].map((item, i) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-inmob-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-inmob-primary">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                    {i < 4 && (
                      <div className="absolute left-4 w-px h-4 bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
