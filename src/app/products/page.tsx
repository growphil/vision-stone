import React from "react";
import type { Metadata } from "next";
import ProductsCatalogueClient from "@/components/products/ProductsCatalogueClient";

export const metadata: Metadata = {
  title: "Product Catalogue | VISION STONES",
  description:
    "Explore the complete Vision Stones product catalogue — 21 mineral products including charcoal, limestone, lime, dolomite, calcium carbonate, gypsum, and more. Tirunelveli, Tamil Nadu.",
  openGraph: {
    title: "Product Catalogue | VISION STONES",
    description:
      "Complete mineral product catalogue — charcoal, limestone, lime, dolomite, calcium carbonate, gypsum, and industrial mineral supply.",
  },
};

export default function ProductsPage() {
  return (
    <main className="pt-28 sm:pt-36 pb-24 bg-[#FAFAF8] text-[#111111] min-h-screen font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <ProductsCatalogueClient />
      </div>
    </main>
  );
}
