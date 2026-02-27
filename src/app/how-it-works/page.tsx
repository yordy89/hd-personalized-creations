import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Cuéntanos tu Idea",
    description:
      "Comparte tu visión con nosotros a través de nuestro formulario. ¿Qué personaje quieres? ¿Qué colores? ¿Es para una ocasión especial? Cuéntanos todo.",
    tips: [
      "Envía fotos de referencia si las tienes",
      "Dinos para quién es el regalo",
      "Menciona colores favoritos",
      "Indica la fecha si es urgente",
    ],
    icon: "💭",
  },
  {
    number: "02",
    title: "Diseño & Cotización",
    description:
      "Creamos un diseño personalizado basado en tu idea y te enviamos el precio. Te mostramos una vista previa para que apruebes antes de empezar.",
    tips: [
      "Respuesta en 24-48 horas",
      "Sin compromiso hasta que apruebes",
      "Revisiones incluidas",
      "Precio final sin sorpresas",
    ],
    icon: "✏️",
  },
  {
    number: "03",
    title: "Aprobación & Pago",
    description:
      "Una vez que estés feliz con el diseño, confirmas tu pedido. Aceptamos varios métodos de pago para tu comodidad.",
    tips: [
      "Zelle, PayPal, Cash App",
      "50% adelanto en pedidos grandes",
      "Pago completo antes de envío",
      "Factura detallada incluida",
    ],
    icon: "✅",
  },
  {
    number: "04",
    title: "Creación Mágica",
    description:
      "Aquí es donde sucede la magia. Con dedicación y amor, damos vida a tu idea. Cada detalle cuenta.",
    tips: [
      "Proceso artesanal de 5-7 días",
      "Te enviamos fotos del progreso",
      "Materiales de primera calidad",
      "Control de calidad estricto",
    ],
    icon: "✨",
  },
  {
    number: "05",
    title: "¡Entrega!",
    description:
      "Tu creación está lista. La empacamos con cuidado y te la enviamos (o la recoges en Tampa). ¡Hora de disfrutar!",
    tips: [
      "Empaque protector especial",
      "Envío asegurado",
      "Pickup local disponible",
      "Instrucciones de cuidado incluidas",
    ],
    icon: "📦",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Header */}
      <section className="bg-gradient-to-b from-violet-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-6">
            ¿Cómo <span className="text-gradient">Funciona</span>?
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y transparente para convertir tu idea en una
            creación única.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-violet-200 hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-violet-200">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-violet-600 font-bold text-sm">
                        PASO {step.number}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    <div className="bg-violet-50 rounded-xl p-4">
                      <p className="text-sm font-semibold text-violet-700 mb-2">
                        💡 Tips:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {step.tips.map((tip, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 flex items-center gap-2"
                          >
                            <span className="text-violet-400">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 text-center mb-12">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "¿Cuánto tiempo tarda el proceso completo?",
                a: "Desde la aprobación del diseño hasta la entrega, generalmente toma entre 7-10 días. Pedidos urgentes pueden completarse más rápido con un cargo adicional.",
              },
              {
                q: "¿Puedo pedir cambios después de aprobar el diseño?",
                a: "Cambios menores son posibles antes de empezar la creación. Cambios mayores después de empezar pueden tener un costo adicional.",
              },
              {
                q: "¿Los vasos son seguros para lavar?",
                a: "Recomendamos lavado a mano para preservar el diseño. No son aptos para microondas ni lavavajillas.",
              },
              {
                q: "¿Hacen pedidos grandes para eventos?",
                a: "¡Sí! Ofrecemos descuentos por volumen. Contáctanos con anticipación para eventos grandes.",
              },
              {
                q: "¿Qué pasa si no me gusta el resultado?",
                a: "Trabajamos contigo hasta que estés 100% satisfecho con el diseño ANTES de crear. Una vez aprobado y creado, no hay devoluciones por cambio de opinión.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl shadow-md group"
              >
                <summary className="cursor-pointer p-6 font-semibold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <span className="text-violet-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            El primer paso es contarnos tu idea. ¡Estamos emocionados de crear
            algo especial para ti!
          </p>
          <Link
            href="/quote"
            className="bg-white text-violet-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-all duration-300 shadow-xl inline-block"
          >
            Solicitar Cotización ✨
          </Link>
        </div>
      </section>
    </div>
  );
}
