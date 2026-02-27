# HD Personalized Creations 🎨

Website presentacional para **HD Personalized Creations** - un negocio de vasos personalizados, tumblers con efecto snow globe, y merchandise custom ubicado en Tampa, FL.

## 🚀 Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Fonts**: Inter + Playfair Display (Google Fonts)

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── page.tsx          # Home - Hero, Services, Gallery preview, How it works
│   ├── gallery/          # Galería de trabajos con filtros
│   ├── services/         # Servicios y precios
│   ├── quote/            # Formulario de cotización
│   ├── about/            # Sobre el negocio
│   ├── contact/          # Información de contacto
│   ├── how-it-works/     # Proceso paso a paso
│   └── layout.tsx        # Layout principal con Navbar + Footer
├── components/
│   ├── Navbar.tsx        # Navegación responsive
│   └── Footer.tsx        # Footer con links y social
└── globals.css           # Estilos globales + animaciones
```

## 🎨 Paleta de Colores

- **Primario**: Violet (#7c3aed, #8b5cf6)
- **Secundario**: Black (#000)
- **Accent**: Pink, Teal, Gold
- **Background**: White, Violet-50

## 🛠️ Desarrollo Local

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Build para producción
pnpm build

# Preview del build
pnpm start
```

## 📝 Páginas

1. **Home** (`/`) - Landing page con hero animado, preview de servicios, galería, testimonios, y CTA
2. **Gallery** (`/gallery`) - Portafolio de trabajos con filtros por categoría
3. **Services** (`/services`) - Lista de servicios con precios y features
4. **Quote** (`/quote`) - Formulario de cotización completo
5. **About** (`/about`) - Historia y valores del negocio
6. **Contact** (`/contact`) - Info de contacto, horarios, FAQ
7. **How It Works** (`/how-it-works`) - Proceso paso a paso

## 🔜 Próximos Pasos (TODO)

- [ ] Integrar formulario de cotización con servicio de email (Brevo/Resend)
- [ ] Agregar imágenes reales del portafolio
- [ ] Conectar Instagram feed
- [ ] Configurar Google Analytics
- [ ] Setup de dominio y hosting (Vercel)
- [ ] SEO optimizations (sitemap, robots.txt)
- [ ] Agregar página de blog/noticias (opcional)
- [ ] Sistema de reviews de clientes

## 📦 Deployment

Optimizado para deployment en Vercel:

```bash
# Deploy a Vercel
vercel
```

O conecta el repo de GitHub directamente a Vercel para deploys automáticos.

## 💜 Créditos

Creado con amor para HD Personalized Creations por AlbeTech Solution.
