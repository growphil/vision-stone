import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Tag, Layers, ArrowRight } from "lucide-react";
import { BRANDS, getProductsForBrand } from "@/data/brands";

export const metadata: Metadata = {
  title: "Associated Mineral Brands & Product Lines | VISION STONE",
  description:
    "Explore Vision Stone's structured industrial mineral brands including VS Prime Mineral, VS Raw Mineral, VS UltraWhite, VS PureLime, and VS Heritage.",
  openGraph: {
    title: "Associated Mineral Brands | VISION STONE",
    description: "Product and brand architecture for high-purity industrial mineral lines.",
  },
};

export default function BrandsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#D62828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
            <span>BRAND ARCHITECTURE</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            OUR MINERAL BRANDS & PRODUCT LINES
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Vision Stone organizes specialized mineral outputs into dedicated product brands tailored for specific application sectors—from metallurgy and polymers to environmental engineering and sacred heritage.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="space-y-8">
          {BRANDS.map((brand) => {
            const associatedProducts = getProductsForBrand(brand.id);

            return (
              <div
                key={brand.id}
                className="mineral-card rounded-sm p-8 sm:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                {/* Side Accent line */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-1.5"
                  style={{ backgroundColor: brand.accentColor || "#D62828" }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Brand Summary (5 cols) */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono-code px-2.5 py-1 bg-white/5 border border-white/10 rounded text-neutral-300">
                        {brand.code}
                      </span>
                      <span className="text-xs font-mono-code text-[#D62828]">
                        {associatedProducts.length} Dedicated Mineral Line
                      </span>
                    </div>

                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {brand.name}
                    </h2>

                    <p className="text-xs font-mono-code text-neutral-400">
                      {brand.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                      {brand.description}
                    </p>
                  </div>

                  {/* Right Associated Products List (7 cols) */}
                  <div className="lg:col-span-7 space-y-4 lg:pl-6 lg:border-l lg:border-white/10">
                    <span className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-400 block">
                      Products Manufactured Under This Brand:
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {associatedProducts.map((prod) => (
                        <div
                          key={prod.id}
                          className="p-5 bg-black/40 border border-white/10 rounded-sm space-y-3 flex flex-col justify-between hover:border-white/25 transition-all group"
                        >
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono-code text-neutral-500 uppercase block">
                              {prod.category}
                            </span>
                            <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors">
                              {prod.name}
                            </h3>
                            <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                              {prod.tagline}
                            </p>
                          </div>

                          <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                            <span className="text-[11px] font-mono-code text-[#D62828]">
                              {prod.whiteness || prod.meshSize || "Engineered"}
                            </span>
                            <Link
                              href={`/products/${prod.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-mono-code text-white group-hover:text-[#D62828] font-bold transition-colors"
                            >
                              <span>Inspect</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Partnership Bottom CTA */}
        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-[#121216] via-[#16161C] to-[#121216] border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-xl text-white">
              Private Labeling & OEM Mineral Processing
            </h3>
            <p className="text-xs text-neutral-400 max-w-xl">
              We provide toll grinding, customized branded packaging, and dedicated batch supply for multinational corporations and distributors.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D62828] hover:bg-[#b52020] text-white text-xs font-mono-code uppercase tracking-widest font-bold rounded-sm transition-colors shrink-0 shadow-lg shadow-[#D62828]/20"
          >
            <span>Discuss OEM Supply</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
