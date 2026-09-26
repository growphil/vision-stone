"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS, getFeaturedProducts, type ProductItem } from "@/data/products";

// ============================================================
// HOMEPAGE — PRODUCT UNIVERSE SECTION
// ============================================================
// Curated featured products with real images.
// CTA leads to the full /products catalogue.
//
// The homepage does NOT display all 21 products.
// It remains visually curated.
// ============================================================

export default function ProductUniverse() {
  const featured = getFeaturedProducts();
  const hero = PRODUCTS.find((p) => p.id === "dolomite-powder");
  const gridProducts = featured.filter((p) => p.id !== "dolomite-powder").slice(0, 6);

  return (
    <section
      id="products"
      className="w-full bg-[#FAFAF8] text-[#111111] py-16 sm:py-24 lg:py-28 font-display"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#E8E8E2]">
          <div className="flex items-center gap-3 shrink-0">
            <span className="w-[42px] h-[2px] bg-[#E52323] inline-block" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#737373]">
              OUR PRODUCTS
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#888888]">
              FULL CATALOGUE:
            </span>
            <span className="text-lg font-black font-mono text-[#111111]">
              {PRODUCTS.length}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-[#888888]">
              PRODUCTS
            </span>
          </div>

          <Link
            href="/products"
            className="group inline-flex items-center gap-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111111] pb-1 border-b border-[#E52323] transition-colors shrink-0"
          >
            <span>EXPLORE ALL PRODUCTS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* GRID */}
        <div className="mt-8 sm:mt-10 lg:mt-12 space-y-4 lg:space-y-6">
          {/* ROW 1: Intro + Hero Dolomite Powder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">
            {/* Intro */}
            <div className="lg:col-span-4 flex flex-col justify-between py-2 sm:py-4 pr-0 lg:pr-4">
              <div className="space-y-3 sm:space-y-5">
                <h2 className="text-[36px] xs:text-[42px] sm:text-[54px] lg:text-[44px] xl:text-[52px] 2xl:text-[58px] font-black uppercase tracking-tight leading-[0.92] text-[#111111]">
                  PRODUCT
                  <br />
                  <span className="text-[#E52323]">UNIVERSE</span>
                </h2>
                <p className="text-[#666666] text-sm sm:text-[17px] lg:text-[18px] leading-snug font-normal max-w-sm">
                  Minerals refined for
                  <br />
                  modern industry.
                </p>
              </div>

              <div className="pt-6 lg:pt-0">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111111] pb-1 border-b border-[#E52323] transition-colors"
                >
                  <span>EXPLORE ALL PRODUCTS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </div>

            {/* Hero: Dolomite Powder */}
            {hero && hero.image && (
              <Link
                href={`/products/${hero.slug}`}
                aria-label={`View ${hero.name}`}
                className="lg:col-span-8 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[440px] rounded-[10px] overflow-hidden group cursor-pointer border border-[#E8E8E2] bg-white flex flex-col justify-between p-5 sm:p-10 lg:p-12 shadow-sm"
              >
                <Image
                  src={hero.image}
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover object-left md:object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-white/60 sm:to-white/95 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative z-10 self-end max-w-sm ml-auto text-left w-full sm:w-auto">
                  <div className="flex items-center gap-3 text-xs font-mono font-medium text-[#888888]">
                    <span>{hero.number}</span>
                    <span className="w-10 h-[1px] bg-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#E52323] mt-2 sm:mt-3">
                    {hero.category}
                  </div>
                  <h3 className="text-2xl sm:text-4xl lg:text-[46px] font-black uppercase tracking-tight leading-[0.92] text-[#111111] mt-2 transition-transform duration-300 group-hover:-translate-y-0.5">
                    DOLOMITE
                    <br />
                    <span className="text-[#E52323]">POWDER</span>
                  </h3>
                  <div className="mt-4 sm:mt-6 flex items-center gap-3">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.12em] text-[#111111]">
                      VIEW PRODUCT
                    </span>
                    <span className="w-8 sm:w-12 h-[1px] bg-[#E52323]/40" />
                    <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full border border-[#E52323]/50 flex items-center justify-center text-[#E52323] transition-all duration-300 group-hover:bg-[#E52323] group-hover:border-[#E52323] group-hover:text-white group-hover:scale-105">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            )}
          </div>

          {/* ROW 2: Featured product tiles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {gridProducts.map((product) => (
              <FeaturedTile key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[#E8E8E2]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E52323]" />
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#737373]">
                  COMPLETE PRODUCT CATALOGUE
                </span>
              </div>
              <p className="text-sm text-[#555555] max-w-lg">
                Vision Stones supplies {PRODUCTS.length} mineral products including
                charcoal, limestone, lime, dolomite, calcium carbonate, gypsum, and more.
              </p>
            </div>

            <Link
              href="/products"
              className="w-full sm:w-auto text-center justify-center group inline-flex items-center gap-3 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all shadow-sm hover:shadow-md shrink-0"
            >
              <span>EXPLORE ALL {PRODUCTS.length} PRODUCTS</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FEATURED TILE (Homepage product card)
// ============================================================

function FeaturedTile({ product }: { product: ProductItem }) {
  if (!product.image) return null;

  return (
    <Link
      href={`/products/${product.slug}`}
      aria-label={`View ${product.name}`}
      className="relative min-h-[320px] sm:min-h-[350px] rounded-[10px] overflow-hidden group cursor-pointer border border-[#E8E8E2] bg-white flex flex-col justify-start p-6 sm:p-8 shadow-sm transition-all duration-300"
    >
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-10 text-left">
        <div className="flex items-center gap-2.5 text-xs font-mono font-medium text-[#888888]">
          <span>{product.number}</span>
          <span className="w-8 h-[1px] bg-[#CCCCCC]" />
        </div>
        <div className="text-[11px] sm:text-xs font-bold tracking-[0.14em] uppercase text-[#E52323] mt-2">
          {product.category}
        </div>
        <h3 className="text-2xl sm:text-[26px] font-black uppercase tracking-tight leading-[0.95] text-[#111111] mt-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
          {product.name}
        </h3>
        <div className="w-9 h-9 rounded-full border border-[#E52323]/50 flex items-center justify-center text-[#E52323] mt-5 transition-all duration-300 group-hover:bg-[#E52323] group-hover:border-[#E52323] group-hover:text-white group-hover:scale-105">
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
