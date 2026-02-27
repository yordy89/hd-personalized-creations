"use client";

import Link from "next/link";
import { useLanguage } from "@/components/Providers";

export default function AboutPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-12 bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-violet-50 to-white dark:from-gray-900 dark:to-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-6">
            {locale === "es" ? "Sobre" : "About"} <span className="text-gradient">{locale === "es" ? "Nosotros" : "Us"}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {locale === "es"
              ? "Detrás de cada creación hay pasión, dedicación, y mucho amor por lo que hacemos."
              : "Behind every creation there's passion, dedication, and a lot of love for what we do."}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-200 to-pink-200 dark:from-violet-900 dark:to-pink-900 flex items-center justify-center">
                <span className="text-8xl">✨</span>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white mb-4">
                  {locale === "es" ? "Hola, soy Grisel" : "Hi, I'm Grisel"}
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    {locale === "es"
                      ? "Mi pasión por las creaciones personalizadas comenzó cuando quise hacer un regalo único para alguien especial. Desde entonces, cada pieza que creo lleva un pedacito de mi corazón."
                      : "My passion for personalized creations began when I wanted to make a unique gift for someone special. Since then, every piece I create carries a little piece of my heart."}
                  </p>
                  <p>
                    {locale === "es"
                      ? <>En <strong>HD Personalized Creations</strong>, no solo hacemos vasos bonitos — creamos recuerdos. Cada tumbler, cada diseño, cada detalle está pensado para que cuando lo veas, te haga sonreír.</>
                      : <>At <strong>HD Personalized Creations</strong>, we don't just make pretty cups — we create memories. Every tumbler, every design, every detail is crafted to make you smile when you see it.</>}
                  </p>
                  <p>
                    {locale === "es"
                      ? "Me encanta trabajar con clientes para convertir sus ideas en realidad. Ya sea un vaso de Frozen para una niña, un tumbler de su equipo favorito, o un set especial para un baby shower — cada proyecto es una nueva aventura."
                      : "I love working with clients to turn their ideas into reality. Whether it's a Frozen cup for a little girl, a tumbler of your favorite team, or a special set for a baby shower — every project is a new adventure."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-violet-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white text-center mb-12">
            {locale === "es" ? "Lo que nos hace" : "What makes us"} <span className="text-gradient">{locale === "es" ? "diferentes" : "different"}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4">💜</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {locale === "es" ? "Hecho con Amor" : "Made with Love"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === "es"
                  ? "Cada pieza es creada a mano con dedicación y cariño. No somos una fábrica — somos artesanos."
                  : "Each piece is handcrafted with dedication and care. We're not a factory — we're artisans."}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {locale === "es" ? "100% Personalizado" : "100% Personalized"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === "es"
                  ? "Tu idea, tu diseño, tu pieza única. No hay dos creaciones iguales porque cada cliente es especial."
                  : "Your idea, your design, your unique piece. No two creations are the same because every client is special."}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {locale === "es" ? "Calidad Premium" : "Premium Quality"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === "es"
                  ? "Usamos los mejores materiales para que tu creación dure y luzca increíble por mucho tiempo."
                  : "We use the best materials so your creation lasts and looks amazing for a long time."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 dark:text-white text-center mb-12">
            {locale === "es" ? "Algunos" : "Some"} <span className="text-gradient">{locale === "es" ? "números" : "numbers"}</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                100+
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === "es" ? "Creaciones Felices" : "Happy Creations"}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                50+
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === "es" ? "Clientes Satisfechos" : "Satisfied Clients"}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                ∞
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === "es" ? "Diseños Posibles" : "Possible Designs"}
              </p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                1
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {locale === "es" ? "Misión: Hacerte Feliz" : "Mission: Make You Happy"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            {locale === "es" ? "¿Lista para crear algo juntas?" : "Ready to create something together?"}
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            {locale === "es"
              ? "Me encantaría escuchar tu idea y convertirla en realidad."
              : "I would love to hear your idea and make it a reality."}
          </p>
          <Link
            href="/quote"
            className="bg-white text-violet-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-all duration-300 shadow-xl inline-block"
          >
            {locale === "es" ? "Empezar Mi Proyecto" : "Start My Project"} ✨
          </Link>
        </div>
      </section>
    </div>
  );
}
