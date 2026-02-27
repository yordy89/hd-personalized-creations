"use client";

import Link from "next/link";
import { useLanguage } from "@/components/Providers";

export default function ContactPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-violet-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
            <span className="text-gradient">{locale === "es" ? "Contáctanos" : "Contact Us"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {locale === "es"
              ? "¿Tienes preguntas? ¿Quieres hacer un pedido? Estamos aquí para ayudarte."
              : "Have questions? Want to place an order? We're here to help."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {locale === "es" ? "Información de Contacto" : "Contact Information"}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {locale === "es" ? "Ubicación" : "Location"}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">Tampa, Florida</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                    <a
                      href="mailto:hello@hdpersonalized.com"
                      className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
                    >
                      hello@hdpersonalized.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {locale === "es" ? "Teléfono" : "Phone"}
                    </h3>
                    <a
                      href="tel:+1234567890"
                      className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
                    >
                      (123) 456-7890
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {locale === "es" ? "Síguenos" : "Follow Us"}
              </h2>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-black dark:bg-white dark:text-black flex items-center justify-center text-white hover:shadow-lg transition-shadow"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {locale === "es" ? "Horario de Atención" : "Business Hours"}
              </h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p className="flex justify-between">
                  <span>{locale === "es" ? "Lunes - Viernes" : "Monday - Friday"}</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>{locale === "es" ? "Sábado" : "Saturday"}</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>{locale === "es" ? "Domingo" : "Sunday"}</span>
                  <span className="font-medium">{locale === "es" ? "Cerrado" : "Closed"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-violet-600 to-purple-700 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">
                {locale === "es" ? "¿Listo para ordenar?" : "Ready to order?"}
              </h2>
              <p className="text-violet-100 mb-6">
                {locale === "es"
                  ? "La forma más rápida de empezar es llenar nuestro formulario de cotización. Te responderemos en menos de 24 horas."
                  : "The quickest way to start is by filling out our quote form. We'll respond within 24 hours."}
              </p>
              <Link
                href="/quote"
                className="bg-white text-violet-600 px-8 py-3 rounded-full font-semibold hover:bg-violet-50 transition-colors inline-block"
              >
                {t.nav.getQuote} ✨
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {locale === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
              </h2>
              <div className="space-y-4">
                <details className="group">
                  <summary className="cursor-pointer font-medium text-gray-900 dark:text-white flex justify-between items-center">
                    {locale === "es" ? "¿Cuánto tiempo tarda un pedido?" : "How long does an order take?"}
                    <span className="group-open:rotate-180 transition-transform text-violet-600">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    {locale === "es"
                      ? "Generalmente entre 5-7 días hábiles, dependiendo del diseño y la cantidad."
                      : "Generally between 5-7 business days, depending on design and quantity."}
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-medium text-gray-900 dark:text-white flex justify-between items-center">
                    {locale === "es" ? "¿Hacen envíos?" : "Do you ship?"}
                    <span className="group-open:rotate-180 transition-transform text-violet-600">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    {locale === "es"
                      ? "Sí, enviamos a todo Estados Unidos. También ofrecemos pickup local en Tampa."
                      : "Yes, we ship throughout the United States. We also offer local pickup in Tampa."}
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer font-medium text-gray-900 dark:text-white flex justify-between items-center">
                    {locale === "es" ? "¿Puedo ver el diseño antes?" : "Can I see the design first?"}
                    <span className="group-open:rotate-180 transition-transform text-violet-600">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-2 text-gray-600 dark:text-gray-300 pl-4">
                    {locale === "es"
                      ? "¡Claro! Siempre enviamos una vista previa del diseño para tu aprobación antes de empezar."
                      : "Of course! We always send a design preview for your approval before starting."}
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
