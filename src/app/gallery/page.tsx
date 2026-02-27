"use client";

import { useState } from "react";
import { useLanguage } from "@/components/Providers";

const categories = [
  "All",
  "Tumblers",
  "Snow Globe",
  "Kids",
  "Sports",
  "Events",
  "Custom",
];

const categoriesEs: Record<string, string> = {
  All: "Todos",
  Tumblers: "Vasos",
  "Snow Globe": "Snow Globe",
  Kids: "Niños",
  Sports: "Deportes",
  Events: "Eventos",
  Custom: "Personalizados",
};

// Placeholder gallery items - will be replaced with actual images
const galleryItems = [
  {
    id: 1,
    title: "Frozen Snow Globe",
    titleEs: "Snow Globe Frozen",
    category: "Kids",
    description: "Vaso con efecto snow globe temática Frozen",
    descriptionEs: "Snow globe cup with Frozen theme",
  },
  {
    id: 2,
    title: "CR7 Tumbler",
    titleEs: "Tumbler CR7",
    category: "Sports",
    description: "Tumbler personalizado Cristiano Ronaldo",
    descriptionEs: "Personalized Cristiano Ronaldo tumbler",
  },
  {
    id: 3,
    title: "Birthday Sparkle",
    titleEs: "Brillos de Cumpleaños",
    category: "Events",
    description: "Set de vasos para fiesta de cumpleaños",
    descriptionEs: "Cup set for birthday party",
  },
  {
    id: 4,
    title: "Baby Shower Pink",
    titleEs: "Baby Shower Rosa",
    category: "Events",
    description: "Vasos decorados para baby shower",
    descriptionEs: "Decorated cups for baby shower",
  },
  {
    id: 5,
    title: "Disney Princess",
    titleEs: "Princesas Disney",
    category: "Kids",
    description: "Colección princesas Disney",
    descriptionEs: "Disney princess collection",
  },
  {
    id: 6,
    title: "Glitter Magic",
    titleEs: "Magia de Glitter",
    category: "Snow Globe",
    description: "Efecto glitter multicolor",
    descriptionEs: "Multicolor glitter effect",
  },
  {
    id: 7,
    title: "Sports Fan",
    titleEs: "Fan Deportivo",
    category: "Sports",
    description: "Tumbler temática deportiva",
    descriptionEs: "Sports themed tumbler",
  },
  {
    id: 8,
    title: "Wedding Elegance",
    titleEs: "Elegancia de Boda",
    category: "Events",
    description: "Vasos elegantes para boda",
    descriptionEs: "Elegant cups for wedding",
  },
  {
    id: 9,
    title: "Custom Design",
    titleEs: "Diseño Personalizado",
    category: "Custom",
    description: "Diseño personalizado único",
    descriptionEs: "Unique custom design",
  },
  {
    id: 10,
    title: "Kids Favorite",
    titleEs: "Favorito de los Niños",
    category: "Kids",
    description: "Personajes favoritos de los niños",
    descriptionEs: "Kids favorite characters",
  },
  {
    id: 11,
    title: "Ocean Blue Globe",
    titleEs: "Snow Globe Azul Océano",
    category: "Snow Globe",
    description: "Efecto snow globe azul océano",
    descriptionEs: "Ocean blue snow globe effect",
  },
  {
    id: 12,
    title: "Classic Tumbler",
    titleEs: "Tumbler Clásico",
    category: "Tumblers",
    description: "Tumbler clásico personalizado",
    descriptionEs: "Classic personalized tumbler",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { locale, t } = useLanguage();

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            {locale === "es" ? "Nuestra" : "Our"} <span className="text-gradient">{locale === "es" ? "Galería" : "Gallery"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {locale === "es" 
              ? "Cada pieza cuenta una historia única. Explora nuestras creaciones y encuentra inspiración para tu próximo regalo."
              : "Each piece tells a unique story. Explore our creations and find inspiration for your next gift."}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200 dark:shadow-violet-900/30"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {locale === "es" ? categoriesEs[category] : category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-900 dark:to-pink-900 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder - will be replaced with actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:opacity-30 transition-opacity">
                ✨
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">
                  {locale === "es" ? item.titleEs : item.title}
                </p>
                <p className="text-white/80 text-sm">
                  {locale === "es" ? item.descriptionEs : item.description}
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                  {locale === "es" ? categoriesEs[item.category] : item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {locale === "es" 
              ? "¿Te gustó algo? ¿Tienes una idea propia?"
              : "Liked something? Have your own idea?"}
          </p>
          <a
            href="/quote"
            className="bg-violet-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 dark:shadow-violet-900/30 hover:shadow-xl inline-block"
          >
            {t.nav.getQuote} ✨
          </a>
        </div>
      </div>
    </div>
  );
}
