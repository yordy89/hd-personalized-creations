"use client";

import Link from "next/link";
import { useLanguage } from "@/components/Providers";

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
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-pink-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950 pt-16">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-violet-200 dark:text-violet-800 animate-float">
          <Sparkle className="w-8 h-8" />
        </div>
        <div
          className="absolute top-40 right-20 text-pink-200 dark:text-pink-800 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Sparkle className="w-6 h-6" />
        </div>
        <div
          className="absolute bottom-40 left-1/4 text-violet-300 dark:text-violet-700 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Sparkle className="w-10 h-10" />
        </div>
        <div
          className="absolute bottom-20 right-1/3 text-pink-300 dark:text-pink-700 animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <Sparkle className="w-5 h-5" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-playfair)] mb-6">
          <span className="text-gradient">{t.home.heroTitle1}</span>
          <br />
          <span className="text-gray-900 dark:text-white">{t.home.heroTitle2}</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          {t.home.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/quote"
            className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 dark:shadow-violet-900/30 hover:shadow-xl hover:shadow-violet-300 dark:hover:shadow-violet-800/40 hover:-translate-y-1"
          >
            {t.home.ctaQuote}
          </Link>
          <Link
            href="/gallery"
            className="bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-400 px-8 py-4 rounded-full text-lg font-semibold border-2 border-violet-200 dark:border-violet-700 hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-300 hover:-translate-y-1"
          >
            {t.home.ctaGallery}
          </Link>
        </div>
      </div>
    </section>
  );
}

// Services Preview Section
function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    {
      title: t.services.customTumblers,
      description: t.services.customTumblersDesc,
      icon: "🥤",
      color: "from-violet-500 to-purple-600",
    },
    {
      title: t.services.snowGlobeCups,
      description: t.services.snowGlobeCupsDesc,
      icon: "❄️",
      color: "from-blue-400 to-cyan-500",
    },
    {
      title: t.services.personalizedGifts,
      description: t.services.personalizedGiftsDesc,
      icon: "🎁",
      color: "from-pink-500 to-rose-500",
    },
    {
      title: t.services.comingSoon,
      description: t.services.comingSoonDesc,
      icon: "👕",
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            {t.home.servicesTitle.split(" ")[0]}{" "}
            <span className="text-gradient">{t.home.servicesTitle.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.home.servicesSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-800"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="text-violet-600 dark:text-violet-400 font-semibold hover:text-violet-700 dark:hover:text-violet-300 inline-flex items-center gap-2 group"
          >
            {t.common.viewAllServices}
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
  const { t } = useLanguage();

  const galleryItems = [
    { id: 1, title: "Frozen Snow Globe", category: "Kids" },
    { id: 2, title: "CR7 Tumbler", category: "Sports" },
    { id: 3, title: "Birthday Special", category: "Celebrations" },
    { id: 4, title: "Baby Shower", category: "Events" },
    { id: 5, title: "Disney Magic", category: "Kids" },
    { id: 6, title: "Custom Design", category: "Custom" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-violet-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            {t.home.galleryTitle.split(" ")[0]}{" "}
            <span className="text-gradient">{t.home.galleryTitle.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.home.gallerySubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-900 dark:to-pink-900 cursor-pointer"
            >
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
            className="bg-violet-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 dark:shadow-violet-900/30 hover:shadow-xl inline-block"
          >
            {t.home.viewFullGallery}
          </Link>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      title: t.steps.step1Title,
      description: t.steps.step1Desc,
    },
    {
      number: "02",
      title: t.steps.step2Title,
      description: t.steps.step2Desc,
    },
    {
      number: "03",
      title: t.steps.step3Title,
      description: t.steps.step3Desc,
    },
    {
      number: "04",
      title: t.steps.step4Title,
      description: t.steps.step4Desc,
    },
  ];

  return (
    <section className="py-20 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            {t.home.howItWorksTitle.split("?")[0]}
            <span className="text-violet-400">?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t.home.howItWorksSubtitle}
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
  const { t, locale } = useLanguage();

  const testimonials = locale === "es" ? [
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
  ] : [
    {
      quote:
        "The Frozen cup she made for my daughter was incredible! The snow globe effect is magical. She uses it all the time.",
      author: "María G.",
      location: "Tampa, FL",
    },
    {
      quote:
        "I ordered a CR7 tumbler for my husband and it was perfect. The attention to detail is impressive.",
      author: "Ana R.",
      location: "Miami, FL",
    },
    {
      quote:
        "I've ordered 5 cups for different gifts. They always turn out beautiful and unique. Highly recommended!",
      author: "Carlos M.",
      location: "Orlando, FL",
    },
  ];

  return (
    <section className="py-20 bg-violet-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            {t.home.testimonialsTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-violet-400 text-4xl mb-4">"</div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</p>
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
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6">
          {t.home.ctaTitle}
        </h2>
        <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
          {t.home.ctaSubtitle}
        </p>
        <Link
          href="/quote"
          className="bg-white text-violet-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block"
        >
          {t.home.requestQuote}
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
