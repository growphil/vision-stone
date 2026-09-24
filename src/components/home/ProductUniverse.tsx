"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductItem {
  number: string;
  nameLine1: string;
  nameLine2?: string;
  nameHighlight?: boolean;
  category: string;
  categorySlug: "ores-and-minerals" | "lime-and-limestone" | "calcium-carbonate" | "traditional-and-decorative";
  image: string;
  description: string;
  slug: string;
  isDarkTheme?: boolean;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    number: "01",
    nameLine1: "DOLOMITE",
    nameLine2: "POWDER",
    nameHighlight: true,
    category: "ORES & MINERALS",
    categorySlug: "ores-and-minerals",
    image: "/Products/Dolomite Powder.webp",
    description: "High-purity mineral powder for industrial applications.",
    slug: "dolomite-powder",
  },
  {
    number: "02",
    nameLine1: "DOLOMITE",
    nameLine2: "LUMP",
    category: "ORES & MINERALS",
    categorySlug: "ores-and-minerals",
    image: "/Products/Dolomite Lump.webp",
    description: "Selected natural mineral lumps for steel, fluxing, and refractory applications.",
    slug: "dolomite-lump",
    isDarkTheme: true,
  },
  {
    number: "03",
    nameLine1: "CALCITE",
    nameLine2: "POWDER",
    category: "ORES & MINERALS",
    categorySlug: "ores-and-minerals",
    image: "/Products/Caltie Powder.webp",
    description: "Fine crystalline mineral powder with excellent brightness and purity.",
    slug: "calcite-powder",
  },
  {
    number: "04",
    nameLine1: "CALCITE",
    nameLine2: "STONE",
    category: "ORES & MINERALS",
    categorySlug: "ores-and-minerals",
    image: "/Products/Caltie Stone.webp",
    description: "Natural high-purity calcite stones for optical, chemical, and mineral grinding applications.",
    slug: "calcite-stone",
  },
  {
    number: "05",
    nameLine1: "LIMESTONE",
    nameLine2: "LUMP",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-and-limestone",
    image: "/Products/Limiestone Lump.webp",
    description: "Dense, high-calcium natural limestone for industrial use.",
    slug: "limestone-lump",
  },
  {
    number: "06",
    nameLine1: "HYDRATED",
    nameLine2: "LIME POWDER",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-and-limestone",
    image: "/Products/Hydrated Lime Powder.webp",
    description: "Industrial-grade slaked lime with high reactivity and consistent quality.",
    slug: "hydrated-lime-powder",
  },
  {
    number: "07",
    nameLine1: "CALCIUM",
    nameLine2: "CARBONATE POWDER",
    category: "CALCIUM CARBONATE",
    categorySlug: "calcium-carbonate",
    image: "/Products/Calcium Carbonate Powder.webp",
    description: "Versatile mineral powder for industrial applications.",
    slug: "calcium-carbonate-powder",
  },
  {
    number: "08",
    nameLine1: "KOLA MAAVU /",
    nameLine2: "KOLAM POWDER",
    category: "TRADITIONAL & DECORATIVE",
    categorySlug: "traditional-and-decorative",
    image: "/Products/KolaMaavu.webp",
    description: "Traditional mineral powder for kolam and cultural applications.",
    slug: "kola-podi-powder",
  },
];

const FILTER_CATEGORIES = [
  { id: "all", label: "ALL PRODUCTS" },
  { id: "ores-and-minerals", label: "ORES & MINERALS" },
  { id: "lime-and-limestone", label: "LIME & LIMESTONE" },
  { id: "calcium-carbonate", label: "CALCIUM CARBONATE" },
  { id: "traditional-and-decorative", label: "TRADITIONAL & DECORATIVE" },
];

export default function ProductUniverse() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const isFiltered = activeFilter !== "all";
  const filteredProducts = isFiltered
    ? PRODUCTS_DATA.filter((p) => p.categorySlug === activeFilter)
    : PRODUCTS_DATA;

  return (
    <section className="py-20 lg:py-24 bg-[#FAFAF8] text-[#111111] font-display" id="product-universe">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* ========================================================
            TOP SECTION HEADER & EDITORIAL FILTER NAVIGATION
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 border-b border-[#EAEAE6]">
          
          {/* Left: Section Indicator */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-[42px] h-[2px] bg-[#E52323]" />
            <span className="text-xs font-display font-bold uppercase tracking-[0.14em] text-[#777777]">
              OUR PRODUCTS
            </span>
          </div>

          {/* Center: Editorial Filter Navigation */}
          <nav className="flex items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto no-scrollbar py-1">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`text-xs font-display font-bold uppercase tracking-[0.08em] whitespace-nowrap pb-1 transition-all relative cursor-pointer ${
                    isActive
                      ? "text-[#E52323]"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  <span>{cat.label}</span>
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E52323]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Total Count */}
          <div className="hidden lg:block shrink-0">
            <span className="text-xs font-display font-bold uppercase tracking-[0.14em] text-[#777777]">
              08 PRODUCTS
            </span>
          </div>

        </div>


        {/* ========================================================
            MAIN EDITORIAL GRID (EXACT REFERENCE ASYMMETRIC LAYOUT)
            ======================================================== */}
        {!isFiltered ? (
          <div className="pt-10 space-y-5">
            
            {/* ----------------------------------------------------
                ROW 1: LEFT INTRO (3 cols) + DOLOMITE POWDER (9 cols)
                ---------------------------------------------------- */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Column: Product Universe Title & Intro */}
              <div className="lg:col-span-3 flex flex-col justify-between py-2 sm:py-4 lg:pr-4">
                <div>
                  <h2 className="font-display font-black text-5xl sm:text-6xl lg:text-[68px] uppercase tracking-tight leading-[0.92] text-[#111111]">
                    PRODUCT
                    <br />
                    <span className="text-[#E52323]">UNIVERSE</span>
                  </h2>
                  <p className="mt-4 text-[#666666] text-base lg:text-[18px] font-display font-normal leading-snug">
                    Minerals refined for
                    <br />
                    modern industry.
                  </p>
                </div>

                <div className="pt-8 lg:pt-0">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2.5 text-xs font-display font-bold uppercase tracking-[0.12em] text-[#111111] hover:text-[#E52323] group transition-colors pb-0.5 border-b border-[#111111] hover:border-[#E52323]"
                  >
                    <span>EXPLORE ALL PRODUCTS</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: 01 DOLOMITE POWDER (Feature Card) */}
              <Link
                href={`/products/${PRODUCTS_DATA[0].slug}`}
                className="lg:col-span-9 relative rounded-[10px] overflow-hidden group min-h-[380px] lg:min-h-[440px] flex flex-col justify-center bg-white shadow-xs cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={PRODUCTS_DATA[0].image}
                  alt={PRODUCTS_DATA[0].nameLine1}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-cover object-left lg:object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Localized Gradient for Text Contrast on the Right */}
                <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-transparent via-white/30 to-white/95 lg:via-white/50 lg:to-white/95 pointer-events-none" />

                {/* Content Overlay (Right-aligned) */}
                <div className="relative z-10 ml-auto max-w-md lg:max-w-lg p-6 sm:p-10 lg:pr-14 text-left space-y-3.5">
                  {/* Number line */}
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-display font-semibold text-[#888888]">
                      {PRODUCTS_DATA[0].number}
                    </span>
                    <div className="w-10 h-[1px] bg-[#CCCCCC]" />
                  </div>

                  {/* Category */}
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[0].category}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-[46px] uppercase tracking-tight leading-[0.94] text-[#111111]">
                    {PRODUCTS_DATA[0].nameLine1}
                    <br />
                    <span className="text-[#E52323]">{PRODUCTS_DATA[0].nameLine2}</span>
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#555555] font-display leading-relaxed max-w-xs">
                    {PRODUCTS_DATA[0].description}
                  </p>

                  {/* CTA */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-3 text-xs font-display font-bold uppercase tracking-wider text-[#111111] group-hover:text-[#E52323] transition-colors">
                      <span className="border-b border-black/30 group-hover:border-[#E52323] pb-0.5">
                        VIEW PRODUCT
                      </span>
                      <div className="w-8 h-8 rounded-full border border-[#E52323] flex items-center justify-center text-[#E52323] group-hover:bg-[#E52323] group-hover:text-white transition-all duration-300">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

            </div>


            {/* ----------------------------------------------------
                ROW 2: DOLOMITE LUMP (6 cols) + CALCITE POWDER (3 cols) + CALCITE STONE (3 cols)
                ---------------------------------------------------- */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              
              {/* 02 DOLOMITE LUMP (50% / 6 cols) */}
              <Link
                href={`/products/${PRODUCTS_DATA[1].slug}`}
                className="md:col-span-6 relative rounded-[10px] overflow-hidden group min-h-[340px] sm:min-h-[380px] p-7 sm:p-9 flex flex-col justify-between bg-black cursor-pointer shadow-xs"
              >
                <Image
                  src={PRODUCTS_DATA[1].image}
                  alt={PRODUCTS_DATA[1].nameLine1}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top: Number & Category */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-display font-semibold text-white/70">
                      {PRODUCTS_DATA[1].number}
                    </span>
                    <div className="w-8 h-[1px] bg-white/30" />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[1].category}
                  </div>
                </div>

                {/* Bottom: Title, Description, Circular CTA */}
                <div className="relative z-10 space-y-3 max-w-sm">
                  <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-[38px] uppercase tracking-tight leading-[0.95] text-white">
                    {PRODUCTS_DATA[1].nameLine1}
                    <br />
                    {PRODUCTS_DATA[1].nameLine2}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/80 font-display leading-relaxed">
                    {PRODUCTS_DATA[1].description}
                  </p>

                  <div className="pt-1">
                    <div className="w-9 h-9 rounded-full border border-white/50 group-hover:border-[#E52323] group-hover:bg-[#E52323] flex items-center justify-center text-white transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>

              {/* 03 CALCITE POWDER (25% / 3 cols) */}
              <Link
                href={`/products/${PRODUCTS_DATA[2].slug}`}
                className="md:col-span-3 relative rounded-[10px] overflow-hidden group min-h-[340px] sm:min-h-[380px] p-6 sm:p-7 flex flex-col justify-between bg-white cursor-pointer shadow-xs"
              >
                <Image
                  src={PRODUCTS_DATA[2].image}
                  alt={PRODUCTS_DATA[2].nameLine1}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle Light Top Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />

                {/* Top: Number, Category, Title, Description */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-display font-semibold text-[#888888]">
                      {PRODUCTS_DATA[2].number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[2].category}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-[26px] uppercase tracking-tight leading-[0.95] text-[#111111]">
                    {PRODUCTS_DATA[2].nameLine1}
                    <br />
                    {PRODUCTS_DATA[2].nameLine2}
                  </h3>
                  <p className="text-xs text-[#555555] font-display leading-relaxed pt-1">
                    {PRODUCTS_DATA[2].description}
                  </p>
                </div>

                {/* Bottom: Circular CTA */}
                <div className="relative z-10 pt-4">
                  <div className="w-9 h-9 rounded-full border border-[#E52323] group-hover:bg-[#E52323] text-[#E52323] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>

              {/* 04 CALCITE STONE (25% / 3 cols) */}
              <Link
                href={`/products/${PRODUCTS_DATA[3].slug}`}
                className="md:col-span-3 relative rounded-[10px] overflow-hidden group min-h-[340px] sm:min-h-[380px] p-6 sm:p-7 flex flex-col justify-between bg-white cursor-pointer shadow-xs"
              >
                <Image
                  src={PRODUCTS_DATA[3].image}
                  alt={PRODUCTS_DATA[3].nameLine1}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {/* Subtle Light Top Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />

                {/* Top: Number, Category, Title, Description */}
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-display font-semibold text-[#888888]">
                      {PRODUCTS_DATA[3].number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[3].category}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-[26px] uppercase tracking-tight leading-[0.95] text-[#111111]">
                    {PRODUCTS_DATA[3].nameLine1}
                    <br />
                    {PRODUCTS_DATA[3].nameLine2}
                  </h3>
                  <p className="text-xs text-[#555555] font-display leading-relaxed pt-1">
                    {PRODUCTS_DATA[3].description}
                  </p>
                </div>

                {/* Bottom: Circular CTA */}
                <div className="relative z-10 pt-4">
                  <div className="w-9 h-9 rounded-full border border-[#E52323] group-hover:bg-[#E52323] text-[#E52323] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>

            </div>


            {/* ----------------------------------------------------
                ROW 3: 4 EQUAL PRODUCTS (05 LIMESTONE, 06 HYDRATED LIME, 07 CALCIUM CARBONATE, 08 KOLA MAAVU)
                ---------------------------------------------------- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* 05 LIMESTONE LUMP */}
              <Link
                href={`/products/${PRODUCTS_DATA[4].slug}`}
                className="relative rounded-[10px] overflow-hidden group min-h-[340px] sm:min-h-[380px] p-6 sm:p-7 flex flex-col justify-between bg-white cursor-pointer shadow-xs"
              >
                <Image
                  src={PRODUCTS_DATA[4].image}
                  alt={PRODUCTS_DATA[4].nameLine1}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-display font-semibold text-[#888888]">
                      {PRODUCTS_DATA[4].number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[4].category}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-[26px] uppercase tracking-tight leading-[0.95] text-[#111111]">
                    {PRODUCTS_DATA[4].nameLine1}
                    <br />
                    {PRODUCTS_DATA[4].nameLine2}
                  </h3>
                  <p className="text-xs text-[#555555] font-display leading-relaxed pt-1">
                    {PRODUCTS_DATA[4].description}
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <div className="w-9 h-9 rounded-full border border-[#E52323] group-hover:bg-[#E52323] text-[#E52323] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>

              {/* 06 HYDRATED LIME POWDER */}
              <Link
                href={`/products/${PRODUCTS_DATA[5].slug}`}
                className="relative rounded-[10px] overflow-hidden group min-h-[340px] sm:min-h-[380px] p-6 sm:p-7 flex flex-col justify-between bg-white cursor-pointer shadow-xs"
              >
                <Image
                  src={PRODUCTS_DATA[5].image}
                  alt={PRODUCTS_DATA[5].nameLine1}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-display font-semibold text-[#888888]">
                      {PRODUCTS_DATA[5].number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[5].category}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-[26px] uppercase tracking-tight leading-[0.95] text-[#111111]">
                    {PRODUCTS_DATA[5].nameLine1}
                    <br />
                    {PRODUCTS_DATA[5].nameLine2}
                  </h3>
                  <p className="text-xs text-[#555555] font-display leading-relaxed pt-1">
                    {PRODUCTS_DATA[5].description}
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <div className="w-9 h-9 rounded-full border border-[#E52323] group-hover:bg-[#E52323] text-[#E52323] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>

              {/* 07 CALCIUM CARBONATE POWDER */}
              <Link
                href={`/products/${PRODUCTS_DATA[6].slug}`}
                className="relative rounded-[10px] overflow-hidden group min-h-[340px] sm:min-h-[380px] p-6 sm:p-7 flex flex-col justify-between bg-white cursor-pointer shadow-xs"
              >
                <Image
                  src={PRODUCTS_DATA[6].image}
                  alt={PRODUCTS_DATA[6].nameLine1}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-display font-semibold text-[#888888]">
                      {PRODUCTS_DATA[6].number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[6].category}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-[26px] uppercase tracking-tight leading-[0.95] text-[#111111]">
                    {PRODUCTS_DATA[6].nameLine1}
                    <br />
                    {PRODUCTS_DATA[6].nameLine2}
                  </h3>
                  <p className="text-xs text-[#555555] font-display leading-relaxed pt-1">
                    {PRODUCTS_DATA[6].description}
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <div className="w-9 h-9 rounded-full border border-[#E52323] group-hover:bg-[#E52323] text-[#E52323] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>

              {/* 08 KOLA MAAVU / KOLAM POWDER */}
              <Link
                href={`/products/${PRODUCTS_DATA[7].slug}`}
                className="relative rounded-[10px] overflow-hidden group min-h-[340px] sm:min-h-[380px] p-6 sm:p-7 flex flex-col justify-between bg-white cursor-pointer shadow-xs"
              >
                <Image
                  src={PRODUCTS_DATA[7].image}
                  alt={PRODUCTS_DATA[7].nameLine1}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-display font-semibold text-[#888888]">
                      {PRODUCTS_DATA[7].number}
                    </span>
                    <div className="w-8 h-[1px] bg-[#CCCCCC]" />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {PRODUCTS_DATA[7].category}
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-[26px] uppercase tracking-tight leading-[0.95] text-[#111111]">
                    {PRODUCTS_DATA[7].nameLine1}
                    <br />
                    {PRODUCTS_DATA[7].nameLine2}
                  </h3>
                  <p className="text-xs text-[#555555] font-display leading-relaxed pt-1">
                    {PRODUCTS_DATA[7].description}
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <div className="w-9 h-9 rounded-full border border-[#E52323] group-hover:bg-[#E52323] text-[#E52323] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>

            </div>

          </div>
        ) : (
          /* ========================================================
              FILTERED VIEW (CLEAN EQUAL CARDS FOR FILTERED ITEMS)
              ======================================================== */
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className={`relative rounded-[10px] overflow-hidden group min-h-[360px] p-6 sm:p-7 flex flex-col justify-between shadow-xs cursor-pointer ${
                  p.isDarkTheme ? "bg-black" : "bg-white"
                }`}
              >
                <Image
                  src={p.image}
                  alt={p.nameLine1}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-bottom group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                {p.isDarkTheme ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </>
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/70 to-transparent pointer-events-none" />
                )}

                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-display font-semibold ${
                        p.isDarkTheme ? "text-white/70" : "text-[#888888]"
                      }`}
                    >
                      {p.number}
                    </span>
                    <div
                      className={`w-8 h-[1px] ${
                        p.isDarkTheme ? "bg-white/30" : "bg-[#CCCCCC]"
                      }`}
                    />
                  </div>
                  <div className="text-[11px] font-display font-bold uppercase tracking-[0.15em] text-[#E52323]">
                    {p.category}
                  </div>
                  <h3
                    className={`font-display font-black text-2xl uppercase tracking-tight leading-[0.95] ${
                      p.isDarkTheme ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {p.nameLine1}
                    {p.nameLine2 && (
                      <>
                        <br />
                        <span className={p.nameHighlight ? "text-[#E52323]" : ""}>
                          {p.nameLine2}
                        </span>
                      </>
                    )}
                  </h3>
                  <p
                    className={`text-xs font-display leading-relaxed pt-1 ${
                      p.isDarkTheme ? "text-white/80" : "text-[#555555]"
                    }`}
                  >
                    {p.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <div className="w-9 h-9 rounded-full border border-[#E52323] group-hover:bg-[#E52323] text-[#E52323] group-hover:text-white flex items-center justify-center transition-all duration-300">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
