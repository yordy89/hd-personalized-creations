import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-violet-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-6">
            Sobre <span className="text-gradient">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Detrás de cada creación hay pasión, dedicación, y mucho amor por lo
            que hacemos.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-200 to-pink-200 flex items-center justify-center">
                <span className="text-8xl">✨</span>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 mb-4">
                  Hola, soy Grisel
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Mi pasión por las creaciones personalizadas comenzó cuando
                    quise hacer un regalo único para alguien especial. Desde
                    entonces, cada pieza que creo lleva un pedacito de mi
                    corazón.
                  </p>
                  <p>
                    En <strong>HD Personalized Creations</strong>, no solo
                    hacemos vasos bonitos — creamos recuerdos. Cada tumbler,
                    cada diseño, cada detalle está pensado para que cuando lo
                    veas, te haga sonreír.
                  </p>
                  <p>
                    Me encanta trabajar con clientes para convertir sus ideas en
                    realidad. Ya sea un vaso de Frozen para una niña, un
                    tumbler de su equipo favorito, o un set especial para un
                    baby shower — cada proyecto es una nueva aventura.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 text-center mb-12">
            Lo que nos hace <span className="text-gradient">diferentes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">💜</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Hecho con Amor
              </h3>
              <p className="text-gray-600">
                Cada pieza es creada a mano con dedicación y cariño. No somos
                una fábrica — somos artesanos.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                100% Personalizado
              </h3>
              <p className="text-gray-600">
                Tu idea, tu diseño, tu pieza única. No hay dos creaciones
                iguales porque cada cliente es especial.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Calidad Premium
              </h3>
              <p className="text-gray-600">
                Usamos los mejores materiales para que tu creación dure y luzca
                increíble por mucho tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] text-gray-900 text-center mb-12">
            Algunos <span className="text-gradient">números</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                100+
              </div>
              <p className="text-gray-600">Creaciones Felices</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                50+
              </div>
              <p className="text-gray-600">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                ∞
              </div>
              <p className="text-gray-600">Diseños Posibles</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-violet-600 mb-2">
                1
              </div>
              <p className="text-gray-600">Misión: Hacerte Feliz</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            ¿Lista para crear algo juntas?
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Me encantaría escuchar tu idea y convertirla en realidad.
          </p>
          <Link
            href="/quote"
            className="bg-white text-violet-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-violet-50 transition-all duration-300 shadow-xl inline-block"
          >
            Empezar Mi Proyecto ✨
          </Link>
        </div>
      </section>
    </div>
  );
}
