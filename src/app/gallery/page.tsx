"use client";

import { useState } from "react";

const categories = [
  "All",
  "Tumblers",
  "Snow Globe",
  "Kids",
  "Sports",
  "Events",
  "Custom",
];

// Placeholder gallery items - will be replaced with actual images
const galleryItems = [
  {
    id: 1,
    title: "Frozen Snow Globe",
    category: "Kids",
    description: "Vaso con efecto snow globe temática Frozen",
  },
  {
    id: 2,
    title: "CR7 Tumbler",
    category: "Sports",
    description: "Tumbler personalizado Cristiano Ronaldo",
  },
  {
    id: 3,
    title: "Birthday Sparkle",
    category: "Events",
    description: "Set de vasos para fiesta de cumpleaños",
  },
  {
    id: 4,
    title: "Baby Shower Pink",
    category: "Events",
    description: "Vasos decorados para baby shower",
  },
  {
    id: 5,
    title: "Disney Princess",
    category: "Kids",
    description: "Colección princesas Disney",
  },
  {
    id: 6,
    title: "Glitter Magic",
    category: "Snow Globe",
    description: "Efecto glitter multicolor",
  },
  {
    id: 7,
    title: "Sports Fan",
    category: "Sports",
    description: "Tumbler temática deportiva",
  },
  {
    id: 8,
    title: "Wedding Elegance",
    category: "Events",
    description: "Vasos elegantes para boda",
  },
  {
    id: 9,
    title: "Custom Design",
    category: "Custom",
    description: "Diseño personalizado único",
  },
  {
    id: 10,
    title: "Kids Favorite",
    category: "Kids",
    description: "Personajes favoritos de los niños",
  },
  {
    id: 11,
    title: "Ocean Blue Globe",
    category: "Snow Globe",
    description: "Efecto snow globe azul océano",
  },
  {
    id: 12,
    title: "Classic Tumbler",
    category: "Tumblers",
    description: "Tumbler clásico personalizado",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
            Nuestra <span className="text-gradient">Galería</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada pieza cuenta una historia única. Explora nuestras creaciones y
            encuentra inspiración para tu próximo regalo.
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
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-200"
                  : "bg-white text-gray-600 hover:bg-violet-100 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-violet-200 to-pink-200 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder - will be replaced with actual images */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50 group-hover:opacity-30 transition-opacity">
                ✨
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-bold text-lg">{item.title}</p>
                <p className="text-white/80 text-sm">{item.description}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-white text-xs">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            ¿Te gustó algo? ¿Tienes una idea propia?
          </p>
          <a
            href="/quote"
            className="bg-violet-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 hover:shadow-xl inline-block"
          >
            Solicitar Cotización ✨
          </a>
        </div>
      </div>
    </div>
  );
}
