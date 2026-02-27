import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HD Personalized Creations | Custom Tumblers & Personalized Gifts",
  description:
    "Creaciones personalizadas únicas. Vasos decorados, tumblers con efecto snow globe, y regalos customizados hechos con amor. Tampa, FL.",
  keywords: [
    "custom tumblers",
    "personalized gifts",
    "snow globe cups",
    "vasos personalizados",
    "Tampa FL",
    "custom creations",
    "glitter tumblers",
  ],
  openGraph: {
    title: "HD Personalized Creations",
    description: "Creaciones personalizadas únicas hechas con amor",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
