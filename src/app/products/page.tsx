import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Filter, Layers } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import ProductsCatalogueClient from "@/components/products/ProductsCatalogueClient";

export const metadata: Metadata = {
  title: "Industrial Mineral Products Catalogue | Dolomite, Calcite, Limestone & Lime",
  description:
    "Explore Vision Stone's comprehensive mineral product line including Dolomite Powder, Dolomite Lump, Calcite Powder, Calcite Stone, Limestone, Hydrated Lime, Calcium Carbonate, and Kola Maavu.",
  openGraph: {
    title: "Industrial Mineral Products Catalogue | VISION STONE",
    description: "High-purity industrial ores, limestone, calcite, and micronized powders.",
  },
};

export default function ProductsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#D62828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
            <span>PRODUCT CATALOGUE</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            ENGINEERED MINERALS & INDUSTRIAL PRODUCTS
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            High-purity mineral solutions processed to exacting chemical and physical tolerances. Screened lumps for direct furnace feeding and micronized powders for advanced polymer compounding and coatings.
          </p>
        </div>

        {/* Client-Side Interactive Filter & Grid */}
        <ProductsCatalogueClient />

      </div>
    </div>
  );
}
