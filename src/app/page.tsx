import Link from "next/link";
import Image from "next/image";

// Sparkle component for decorative elements
function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50 pt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-violet-200 animate-float">
          <Sparkle className="w-8 h-8" />
        </div>
        <div
          className="absolute top-40 right-20 text-pink-200 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkle className="w-6 h-6" />
        </div>
        <div
          className="absolute bottom-40 left-1/4 text-violet-300 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Sparkle className="w-10 h-10" />
        </div>
        <div
          className="absolute bottom-20 right-1/3 text-pink-300 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Sparkle className="w-5 h-5" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6">
          <span className="text-gradient">Personalized</span>
          <br />
          <span className="text-gray-900">Creations</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8">
          Transformamos tus ideas en regalos únicos y mágicos. Cada pieza es
          creada con amor, especialmente para ti. ✨
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300 hover:-translate-y-1"
          >
            Pide tu Cotización ✨
          </Link>
          <Link
            href="/gallery"
            className="bg-white text-violet-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-violet-200 hover:border-violet-400 transition-all duration-300 hover:-translate-y-1"
          >
            Ver Galería
          </Link>
        </div>
      </div>
    </section>
  );
}

// Services Preview Section
function ServicesPreview() {
  const services = [
    {
      title: "Custom Tumblers",
      description:
        "Vasos personalizados con efecto snow globe, glitter, y diseños únicos para cada ocasión.",
      icon: "🥤",
      color: "from-violet-500 to-purple-600",
    },
    {
      title: "Snow Globe Cups",
      description:
        "Nuestros famosos vasos con efecto bola de nieve. ¡Mágicos y únicos!",
      icon: "❄️",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: "Personalized Gifts",
      description:
        "Regalos customizados para cumpleaños, baby showers, bodas, y más.",
      icon: "🎁",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Coming Soon",
      description:
        "Pullovers, ropa personalizada, y muchas sorpresas más. ¡Próximamente!",
      icon: "👕",
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Creamos piezas únicas que capturan momentos especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="text-violet-600 font-semibold hover:text-violet-700 inline-flex items-center gap-2 group"
          >
            Ver todos los servicios
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Gallery Preview Section
function GalleryPreview() {
  // Placeholder images - will be replaced with actual work
  const galleryItems = [
    { id: 1, title: "Frozen Snow Globe", category: "Kids" },
    { id: 2, title: "CR7 Tumbler", category: "Sports" },
    { id: 3, title: "Birthday Special", category: "Celebrations" },
    { id: 4, title: "Baby Shower", category: "Events" },
    { id: 5, title: "Disney Magic", category: "Kids" },
    { id: 6, title: "Custom Design", category: "Custom" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
            Nuestro <span className="text-gradient">Trabajo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada pieza cuenta una historia. Mira algunas de nuestras creaciones
            favoritas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-200 to-pink-200 cursor-pointer"
            >
              {/* Placeholder - replace with actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                ✨
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 hover:shadow-xl inline-block"
          >
            Ver Galería Completa
          </Link>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Cuéntanos tu idea",
      description:
        "Comparte tu visión con nosotros. ¿Qué personaje? ¿Qué colores? ¿Para quién es?",
    },
    {
      number: "02",
      title: "Diseño & Cotización",
      description:
        "Creamos un diseño personalizado y te enviamos el precio. Sin compromisos.",
    },
    {
      number: "03",
      title: "Creación Mágica",
      description:
        "Nuestras manos expertas dan vida a tu idea con amor y atención al detalle.",
    },
    {
      number: "04",
      title: "¡Entrega!",
      description:
        "Recibe tu pieza única lista para regalar o disfrutar. ¡Magia garantizada!",
    },
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            ¿Cómo <span className="text-violet-400">Funciona</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Un proceso simple para crear algo extraordinario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-violet-600/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-violet-600/50 to-transparent -translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote:
        "¡El vaso de Frozen que hizo para mi hija fue increíble! El efecto snow globe es mágico. Ella no para de usarlo.",
      author: "María G.",
      location: "Tampa, FL",
    },
    {
      quote:
        "Pedí un tumbler de CR7 para mi esposo y quedó perfecto. La atención al detalle es impresionante.",
      author: "Ana R.",
      location: "Miami, FL",
    },
    {
      quote:
        "Ya he pedido 5 vasos para diferentes regalos. Siempre quedan hermosos y únicos. ¡Super recomendado!",
      author: "Carlos M.",
      location: "Orlando, FL",
    },
  ];

  return (
    <section className="py-20 bg-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
            Lo que dicen nuestros <span className="text-gradient">clientes</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-violet-400 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
          ¿Listo para crear algo mágico?
        </h2>
        <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
          Cuéntanos tu idea y hagámosla realidad. Cada pieza es única, como tú.
        </p>
        <Link
          href="/quote"
          className="bg-white text-violet-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block"
        >
          Solicitar Cotización ✨
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <GalleryPreview />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
}
