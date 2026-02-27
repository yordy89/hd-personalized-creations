"use client";

import Link from "next/link";
import { useLanguage } from "@/components/Providers";

const steps = [
  {
    number: "01",
    title: "Tell Us Your Idea",
    titleEs: "Cuéntanos tu Idea",
    description:
      "Share your vision with us through our form. What character do you want? What colors? Is it for a special occasion? Tell us everything.",
    descriptionEs:
      "Comparte tu visión con nosotros a través de nuestro formulario. ¿Qué personaje quieres? ¿Qué colores? ¿Es para una ocasión especial? Cuéntanos todo.",
    tips: [
      "Send reference photos if you have them",
      "Tell us who the gift is for",
      "Mention favorite colors",
      "Indicate deadline if urgent",
    ],
    tipsEs: [
      "Envía fotos de referencia si las tienes",
      "Dinos para quién es el regalo",
      "Menciona colores favoritos",
      "Indica la fecha si es urgente",
    ],
    icon: "💭",
  },
  {
    number: "02",
    title: "Design & Quote",
    titleEs: "Diseño & Cotización",
    description:
      "We create a custom design based on your idea and send you the price. We show you a preview for approval before starting.",
    descriptionEs:
      "Creamos un diseño personalizado basado en tu idea y te enviamos el precio. Te mostramos una vista previa para que apruebes antes de empezar.",
    tips: [
      "Response in 24-48 hours",
      "No commitment until you approve",
      "Revisions included",
      "Final price with no surprises",
    ],
    tipsEs: [
      "Respuesta en 24-48 horas",
      "Sin compromiso hasta que apruebes",
      "Revisiones incluidas",
      "Precio final sin sorpresas",
    ],
    icon: "✏️",
  },
  {
    number: "03",
    title: "Approval & Payment",
    titleEs: "Aprobación & Pago",
    description:
      "Once you're happy with the design, confirm your order. We accept various payment methods for your convenience.",
    descriptionEs:
      "Una vez que estés feliz con el diseño, confirmas tu pedido. Aceptamos varios métodos de pago para tu comodidad.",
    tips: [
      "Zelle, PayPal, Cash App",
      "50% deposit on large orders",
      "Full payment before shipping",
      "Detailed invoice included",
    ],
    tipsEs: [
      "Zelle, PayPal, Cash App",
      "50% adelanto en pedidos grandes",
      "Pago completo antes de envío",
      "Factura detallada incluida",
    ],
    icon: "✅",
  },
  {
    number: "04",
    title: "Magical Creation",
    titleEs: "Creación Mágica",
    description:
      "This is where the magic happens. With dedication and love, we bring your idea to life. Every detail counts.",
    descriptionEs:
      "Aquí es donde sucede la magia. Con dedicación y amor, damos vida a tu idea. Cada detalle cuenta.",
    tips: [
      "Artisan process 5-7 days",
      "We send progress photos",
      "Premium quality materials",
      "Strict quality control",
    ],
    tipsEs: [
      "Proceso artesanal de 5-7 días",
      "Te enviamos fotos del progreso",
      "Materiales de primera calidad",
      "Control de calidad estricto",
    ],
    icon: "✨",
  },
  {
    number: "05",
    title: "Delivery!",
    titleEs: "¡Entrega!",
    description:
      "Your creation is ready. We pack it carefully and ship it to you (or you can pick it up in Tampa). Time to enjoy!",
    descriptionEs:
      "Tu creación está lista. La empacamos con cuidado y te la enviamos (o la recoges en Tampa). ¡Hora de disfrutar!",
    tips: [
      "Special protective packaging",
      "Insured shipping",
      "Local pickup available",
      "Care instructions included",
    ],
    tipsEs: [
      "Empaque protector especial",
      "Envío asegurado",
      "Pickup local disponible",
      "Instrucciones de cuidado incluidas",
    ],
    icon: "📦",
  },
];

const faqs = [
  {
    q: "How long does the complete process take?",
    qEs: "¿Cuánto tiempo tarda el proceso completo?",
    a: "From design approval to delivery, it generally takes between 7-10 days. Rush orders can be completed faster with an additional charge.",
    aEs: "Desde la aprobación del diseño hasta la entrega, generalmente toma entre 7-10 días. Pedidos urgentes pueden completarse más rápido con un cargo adicional.",
  },
  {
    q: "Can I request changes after approving the design?",
    qEs: "¿Puedo pedir cambios después de aprobar el diseño?",
    a: "Minor changes are possible before starting creation. Major changes after starting may have an additional cost.",
    aEs: "Cambios menores son posibles antes de empezar la creación. Cambios mayores después de empezar pueden tener un costo adicional.",
  },
  {
    q: "Are the cups safe to wash?",
    qEs: "¿Los vasos son seguros para lavar?",
    a: "We recommend hand washing to preserve the design. They are not microwave or dishwasher safe.",
    aEs: "Recomendamos lavado a mano para preservar el diseño. No son aptos para microondas ni lavavajillas.",
  },
  {
    q: "Do you take large orders for events?",
    qEs: "¿Hacen pedidos grandes para eventos?",
    a: "Yes! We offer volume discounts. Contact us in advance for large events.",
    aEs: "¡Sí! Ofrecemos descuentos por volumen. Contáctanos con anticipación para eventos grandes.",
  },
  {
    q: "What if I don't like the result?",
    qEs: "¿Qué pasa si no me gusta el resultado?",
    a: "We work with you until you're 100% satisfied with the design BEFORE creating. Once approved and created, there are no returns for change of mind.",
    aEs: "Trabajamos contigo hasta que estés 100% satisfecho con el diseño ANTES de crear. Una vez aprobado y creado, no hay devoluciones por cambio de opinión.",
  },
];

export default function HowItWorksPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-gray-950">
      {/* Header */}
      <section className="bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-6">
            {locale === "es" ? "¿Cómo" : "How Does It"} <span className="text-gradient">{locale === "es" ? "Funciona" : "Work"}?</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {locale === "es"
              ? "Un proceso simple y transparente para convertir tu idea en una creación única."
              : "A simple and transparent process to turn your idea into a unique creation."}
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
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-violet-400 to-violet-200 dark:from-violet-600 dark:to-violet-800 hidden md:block" />
                )}

                <div className="flex gap-6 md:gap-8">
                  {/* Step number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-violet-200 dark:shadow-violet-900/30">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-violet-600 font-bold text-sm">
                        {locale === "es" ? "PASO" : "STEP"} {step.number}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {locale === "es" ? step.titleEs : step.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {locale === "es" ? step.descriptionEs : step.description}
                    </p>

                    <div className="bg-violet-50 dark:bg-violet-900/30 rounded-xl p-4">
                      <p className="text-sm font-semibold text-violet-700 dark:text-violet-300 mb-2">
                        💡 Tips:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {(locale === "es" ? step.tipsEs : step.tips).map((tip, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2"
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white text-center mb-12">
            {locale === "es" ? "Preguntas" : "Frequently Asked"} <span className="text-gradient">{locale === "es" ? "Frecuentes" : "Questions"}</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md group border border-gray-100 dark:border-gray-700"
              >
                <summary className="cursor-pointer p-6 font-semibold text-gray-900 dark:text-white flex justify-between items-center">
                  {locale === "es" ? faq.qEs : faq.q}
                  <span className="text-violet-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                  {locale === "es" ? faq.aEs : faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            {locale === "es" ? "¿Listo para empezar?" : "Ready to start?"}
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            {locale === "es"
              ? "El primer paso es contarnos tu idea. ¡Estamos emocionados de crear algo especial para ti!"
              : "The first step is telling us your idea. We're excited to create something special for you!"}
          </p>
          <Link
            href="/quote"
            className="bg-white text-violet-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-all duration-300 shadow-xl inline-block"
          >
            {t.nav.getQuote} ✨
          </Link>
        </div>
      </section>
    </div>
  );
}
