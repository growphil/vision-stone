import type { Metadata } from "next";
import { Inter, Outfit, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { COMPANY_INFO } from "@/data/company";

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
    default: "VISION STONES | Mineral Manufacturing & Raw-Material Supply",
    template: "%s | VISION STONES",
  },
  description:
    "Vision Stones: Mineral Manufacturing & Raw-Material Supply. Manufacturing roots dating back to 1997. Supplying high-purity Dolomite, Limestone, Lime, Calcite, and Calcium Carbonate to 450+ clients across India from Tirunelveli, Tamil Nadu.",
  keywords: [
    "Vision Stones",
    "Dolomite Powder",
    "Limestone Powder",
    "Limestone Lumps",
    "Hydrated Lime Powder",
    "Quick Lime",
    "Calcium Carbonate Powder",
    "Charcoal Powder",
    "Coconutshell Charcoal",
    "Gypsum Powder",
    "Marine Gypsum",
    "Magnesite Powder",
    "Industrial Minerals India",
    "Mineral Manufacturing Tirunelveli",
    "Tamil Nadu Industrial Minerals",
    "Lime Limestone Supplier",
    "Dolomite Supplier India",
  ],
  authors: [{ name: "Vision Stones" }],
  creator: "Vision Stones",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://visionstone.in",
    siteName: "VISION STONES",
    title: "VISION STONES | Mineral Manufacturing & Raw-Material Supply",
    description:
      "Manufacturing roots dating back to 1997. High-purity Dolomite, Limestone, Lime, Calcite, and Calcium Carbonate supplied to 450+ clients across India.",
    images: [
      {
        url: "/Products/Dolomite Powder.webp",
        width: 1200,
        height: 630,
        alt: "Vision Stones Industrial Minerals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VISION STONES | Mineral Manufacturing & Raw-Material Supply",
    description: "Manufacturing roots dating back to 1997. Tirunelveli, Tamil Nadu, India.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
    name: "VISION STONES",
    url: "https://visionstone.in",
    description:
      "Vision Stones: Mineral Manufacturing & Raw-Material Supply. Manufacturing roots dating back to 1997 in Tirunelveli, Tamil Nadu. Serving 450+ clients across India.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tirunelveli",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-83006-85057",
      email: "visionstones.22@gmail.com",
      contactType: "sales",
      availableLanguage: ["English", "Tamil", "Hindi"],
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} ${spaceMono.variable}`}>
      <head>
        <link rel="canonical" href="https://visionstone.in" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="antialiased bg-[#FFFFFF] text-[#111111] selection:bg-[#E52323] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
