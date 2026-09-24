import type { Metadata } from "next";
import { Inter, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://visionstone.in"),
  title: {
    default: "VISION STONE | Premium Mineral & Industrial Products",
    template: "%s | VISION STONE",
  },
  description:
    "Vision Stone manufactures high-purity Dolomite Powder, Dolomite Lump, Calcite Powder, Calcite Stone, Limestone, Hydrated Lime, Calcium Carbonate, and Kola Maavu for heavy metallurgy, construction, polymers, and manufacturing.",
  keywords: [
    "Vision Stone",
    "Dolomite Powder",
    "Dolomite Lump",
    "Calcite Powder",
    "Calcite Stone",
    "Limestone Lump",
    "Hydrated Lime Powder",
    "Calcium Carbonate Powder",
    "Kola Maavu",
    "Industrial Minerals India",
    "Mineral Processing Salem",
    "Metallurgical Dolomite",
    "Micronized Mineral Powders"
  ],
  authors: [{ name: "Vision Stone Minerals" }],
  creator: "Vision Stone",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://visionstone.in",
    siteName: "VISION STONE Minerals",
    title: "VISION STONE | Premium Mineral & Industrial Products",
    description:
      "Minerals engineered for industries that build tomorrow. High-purity Dolomite, Calcite, Limestone, Hydrated Lime & Calcium Carbonate.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vision Stone Industrial Minerals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VISION STONE | Premium Mineral & Industrial Products",
    description: "Minerals engineered for industries that build tomorrow.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VISION STONE",
    url: "https://visionstone.in",
    logo: "https://visionstone.in/logo.png",
    description:
      "Premier industrial mineral processing company producing high-purity Dolomite, Calcite, Limestone, Hydrated Lime, and Calcium Carbonate.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Vision Stone Industrial Complex, Mineral Processing Zone",
      addressLocality: "Salem Region",
      addressRegion: "Tamil Nadu",
      postalCode: "636001",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-98765-43210",
      contactType: "sales",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FFFFFF] text-[#111111] antialiased selection:bg-[#E52323] selection:text-white">
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
