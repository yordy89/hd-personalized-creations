"use client";

import Link from "next/link";
import { useLanguage } from "@/components/Providers";

const services = [
  {
    title: "Custom Tumblers",
    titleEs: "Tumblers Personalizados",
    description:
      "Personalized cups with any design you want. From favorite characters to family photos.",
    descriptionEs:
      "Vasos personalizados con los diseños que tú quieras. Desde personajes favoritos hasta fotos familiares.",
    features: [
      "100% custom designs",
      "High durability",
      "Various sizes",
      "Bamboo lid included",
    ],
    featuresEs: [
      "Diseños 100% personalizados",
      "Alta durabilidad",
      "Variedad de tamaños",
      "Tapa de bambú incluida",
    ],
    priceRange: "$25 - $45",
    icon: "🥤",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Snow Globe Cups",
    titleEs: "Vasos Snow Globe",
    description:
      "Our famous snow globe effect cups. Floating glitter creates a magical effect with every movement.",
    descriptionEs:
      "Nuestros famosos vasos con efecto bola de nieve. Glitter flotante que crea un efecto mágico con cada movimiento.",
    features: [
      "Real snow globe effect",
      "High quality glitter",
      "3D designs",
      "Decorative crystals",
    ],
    featuresEs: [
      "Efecto snow globe real",
      "Glitter de alta calidad",
      "Diseños 3D",
      "Cristales decorativos",
    ],
    priceRange: "$35 - $60",
    icon: "❄️",
    gradient: "from-blue-400 to-cyan-500",
    popular: true,
  },
  {
    title: "Event Sets",
    titleEs: "Sets para Eventos",
    description:
      "Special packages for baby showers, birthdays, weddings, and any celebration. Volume discounts available.",
    descriptionEs:
      "Paquetes especiales para baby showers, cumpleaños, bodas, y cualquier celebración. Descuentos por cantidad.",
    features: [
      "Volume discounts",
      "Unified design",
      "Special packaging",
      "Per-guest customization",
    ],
    featuresEs: [
      "Descuentos por volumen",
      "Diseño unificado",
      "Empaque especial",
      "Personalización por invitado",
    ],
    priceRange: "$20 - $35 ea",
    priceRangeEs: "$20 - $35 c/u",
    icon: "🎉",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "Themed Cups",
    titleEs: "Vasos Temáticos",
    description:
      "Disney, superheroes, sports, anime... If it exists, we can create it. Perfect for unique gifts.",
    descriptionEs:
      "Disney, superhéroes, deportes, anime... Si existe, lo podemos crear. Perfecto para regalos únicos.",
    features: [
      "Any theme or character",
      "Precise details",
      "Vibrant colors",
      "Professional finish",
    ],
    featuresEs: [
      "Cualquier tema o personaje",
      "Detalles precisos",
      "Colores vibrantes",
      "Acabado profesional",
    ],
    priceRange: "$30 - $50",
    icon: "🎬",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    title: "Corporate Gifts",
    titleEs: "Regalos Corporativos",
    description:
      "Cups with company logo, employee gifts, personalized merchandise for your business.",
    descriptionEs:
      "Vasos con logo de empresa, regalos para empleados, merchandise personalizado para tu negocio.",
    features: [
      "Company logo",
      "Volume orders",
      "Corporate packaging",
      "Coordinated delivery",
    ],
    featuresEs: [
      "Logo empresarial",
      "Pedidos por volumen",
      "Empaque corporativo",
      "Entrega coordinada",
    ],
    priceRange: "Quote",
    priceRangeEs: "Cotizar",
    icon: "💼",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    title: "Coming Soon: Apparel",
    titleEs: "Próximamente: Ropa",
    description:
      "Coming soon: Pullovers, t-shirts, and more personalized products with the same unique designs.",
    descriptionEs:
      "Próximamente: Pullovers, camisetas, y más productos personalizados con los mismos diseños únicos.",
    features: [
      "Custom pullovers",
      "Unique t-shirts",
      "Accessories",
      "Same quality level",
    ],
    featuresEs: [
      "Pullovers personalizados",
      "Camisetas únicas",
      "Accesorios",
      "Mismo nivel de calidad",
    ],
    priceRange: "Coming Soon",
    priceRangeEs: "Próximamente",
    icon: "👕",
    gradient: "from-emerald-400 to-teal-500",
    comingSoon: true,
  },
];

export default function ServicesPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            {locale === "es" ? "Nuestros" : "Our"} <span className="text-gradient">{locale === "es" ? "Servicios" : "Services"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {locale === "es"
              ? "Creamos piezas únicas para cada ocasión. Desde vasos personalizados hasta sets completos para eventos."
              : "We create unique pieces for every occasion. From personalized cups to complete event sets."}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${
                service.comingSoon ? "opacity-75" : ""
              }`}
            >
              {/* Popular badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-violet-600 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ {locale === "es" ? "Más Popular" : "Most Popular"}
                </div>
              )}

              {/* Coming Soon badge */}
              {service.comingSoon && (
                <div className="absolute -top-3 -right-3 bg-gray-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {locale === "es" ? "Próximamente" : "Coming Soon"}
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-6`}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                {locale === "es" ? service.titleEs : service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {locale === "es" ? service.descriptionEs : service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {(locale === "es" ? service.featuresEs : service.features).map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg
                      className="w-5 h-5 text-violet-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="border-t border-gray-100 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {locale === "es" ? "Precio desde" : "Starting at"}
                </p>
                <p className="text-2xl font-bold text-violet-600">
                  {locale === "es" ? (service.priceRangeEs || service.priceRange) : service.priceRange}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-violet-600 to-purple-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            {locale === "es" ? "¿Tienes algo especial en mente?" : "Have something special in mind?"}
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            {locale === "es"
              ? "Si no ves exactamente lo que buscas, ¡no te preocupes! Podemos crear cualquier diseño personalizado."
              : "Don't see exactly what you're looking for? No worries! We can create any custom design."}
          </p>
          <Link
            href="/quote"
            className="bg-white text-violet-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-all duration-300 shadow-xl inline-block"
          >
            {locale === "es" ? "Solicitar Cotización Personalizada" : "Request Custom Quote"} ✨
          </Link>
        </div>
      </div>
    </div>
  );
}
