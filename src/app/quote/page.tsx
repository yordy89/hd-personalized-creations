"use client";

import { useState } from "react";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productType: "",
    description: "",
    occasion: "",
    budget: "",
    deadline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Integrate with email service
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">✨</div>
          <h1 className="text-4xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
            ¡Gracias por tu mensaje!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Recibimos tu solicitud. Te contactaremos pronto con tu cotización
            personalizada.
          </p>
          <a
            href="/"
            className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition-colors inline-block"
          >
            Volver al Inicio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
            Solicita tu <span className="text-gradient">Cotización</span>
          </h1>
          <p className="text-xl text-gray-600">
            Cuéntanos tu idea y te enviaremos un presupuesto personalizado
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
                placeholder="(123) 456-7890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Producto *
              </label>
              <select
                required
                value={formData.productType}
                onChange={(e) =>
                  setFormData({ ...formData, productType: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="tumbler">Tumbler / Vaso</option>
                <option value="snowglobe">Snow Globe Cup</option>
                <option value="set">Set de Vasos</option>
                <option value="other">Otro (especificar abajo)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Describe tu idea *
            </label>
            <textarea
              required
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors resize-none"
              placeholder="Cuéntanos qué tienes en mente: personajes, colores, tema, para quién es..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ocasión
              </label>
              <select
                value={formData.occasion}
                onChange={(e) =>
                  setFormData({ ...formData, occasion: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
              >
                <option value="">Selecciona una opción</option>
                <option value="birthday">Cumpleaños</option>
                <option value="babyshower">Baby Shower</option>
                <option value="wedding">Boda</option>
                <option value="christmas">Navidad</option>
                <option value="mothersday">Día de las Madres</option>
                <option value="gift">Regalo General</option>
                <option value="personal">Uso Personal</option>
                <option value="other">Otra</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                ¿Para cuándo lo necesitas?
              </label>
              <input
                type="date"
                value={formData.deadline}
                onChange={(e) =>
                  setFormData({ ...formData, deadline: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Presupuesto aproximado
            </label>
            <select
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-colors"
            >
              <option value="">Selecciona un rango</option>
              <option value="under30">Menos de $30</option>
              <option value="30-50">$30 - $50</option>
              <option value="50-75">$50 - $75</option>
              <option value="75-100">$75 - $100</option>
              <option value="over100">Más de $100</option>
              <option value="flexible">Flexible / No estoy seguro</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-violet-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-violet-700 transition-all duration-300 shadow-lg shadow-violet-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "Enviar Solicitud ✨"}
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm">
            Te responderemos dentro de 24-48 horas con tu cotización
            personalizada.
          </p>
        </form>
      </div>
    </div>
  );
}
