"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Package } from "lucide-react";
import { PRODUCTS, FILTER_CATEGORIES, type ProductItem } from "@/data/products";

// ============================================================
// PRODUCT CATALOGUE CLIENT
// ============================================================
// Premium editorial product catalogue.
// All data consumed from data/products.ts.
// ============================================================

export default function ProductsCatalogueClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const isSearchActive = searchQuery.trim().length > 0;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.categorySlug === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        item.name.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const showEditorialLayout =
    activeCategory === "all" && !isSearchActive;

  return (
    <div className="space-y-0 font-display">
      {/* ========================================================
          PAGE HEADER
          ======================================================== */}
      <div className="relative overflow-hidden pt-4 pb-14 border-b border-[#E8E8E2]">
        {/* Subtle right-side background mineral texture */}
        <div className="absolute right-0 top-0 bottom-0 w-[40%] max-w-[480px] pointer-events-none hidden md:block">
          <Image
            src="/Products/dolomite-powder.webp"
            alt=""
            fill
            sizes="480px"
            className="object-cover object-right opacity-[0.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAF8] via-[#FAFAF8]/80 to-[#FAFAF8]/40" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left: Title */}
          <div className="lg:col-span-8 space-y-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-[#E52323]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E52323]">
                PRODUCT CATALOGUE
              </span>
            </div>

            <h1 className="text-[38px] sm:text-[68px] lg:text-[82px] font-black uppercase tracking-[-0.02em] text-[#111111] leading-[0.9] sm:leading-[0.88]">
              MINERAL
              <br />
              <span className="text-[#E52323]">PRODUCTS.</span>
            </h1>

            <p className="text-[14px] sm:text-base text-[#666666] font-normal leading-relaxed max-w-xl">
              Explore our range of mineral, lime, charcoal, gypsum and
              industrial raw material products.
            </p>
          </div>

          {/* Right: Product count + meta */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end space-y-3 sm:space-y-5">
            <div className="flex items-baseline gap-2">
              <span className="text-[36px] sm:text-[56px] font-black font-mono text-[#111111] leading-none tracking-tight">
                {PRODUCTS.length}
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#888888]">
                PRODUCTS
              </span>
            </div>

            <div className="space-y-0.5 sm:space-y-1 lg:text-right">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#111111]">
                VISION STONES
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wider text-[#999999]">
                TIRUNELVELI, TAMIL NADU • EST. 1997
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          SEARCH + FILTERS
          ======================================================== */}
      <div className="pt-6 sm:pt-8 pb-4 sm:pb-6 space-y-5 sm:space-y-6">
        {/* Search */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#999999] absolute left-0 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b border-[#DDDDD8] text-[#111111] placeholder-[#AAAAAA] text-sm pl-7 pr-7 py-2.5 focus:outline-none focus:border-[#E52323] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-[#888888] hover:text-[#111111] transition-colors cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Category Filters */}
        <nav
          aria-label="Product Categories"
          className="flex items-center gap-5 sm:gap-8 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {FILTER_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSearchQuery("");
                }}
                className={`text-[11px] sm:text-xs font-bold uppercase tracking-[0.1em] transition-colors relative pb-2.5 whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "text-[#E52323]"
                    : "text-[#888888] hover:text-[#111111]"
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E52323]" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* ========================================================
          RESULTS COUNT
          ======================================================== */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-6 sm:pb-8 border-b border-[#EEEEE8]">
        <div className="text-[11px] font-mono text-[#999999] uppercase tracking-wider">
          {isSearchActive ? (
            <>
              <span className="font-bold text-[#111111]">{filteredProducts.length}</span>
              {" "}{filteredProducts.length === 1 ? "result" : "results"} for &ldquo;{searchQuery}&rdquo;
            </>
          ) : activeCategory !== "all" ? (
            <>
              <span className="font-bold text-[#111111]">{filteredProducts.length}</span>
              {" "}{filteredProducts.length === 1 ? "product" : "products"}
            </>
          ) : (
            <>
              <span className="font-bold text-[#111111]">{PRODUCTS.length}</span>
              {" "}products in catalogue
            </>
          )}
        </div>
        {(isSearchActive || activeCategory !== "all") && (
          <button
            onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
            className="text-[11px] font-bold uppercase tracking-wider text-[#E52323] hover:underline cursor-pointer"
          >
            SHOW ALL →
          </button>
        )}
      </div>

      {/* ========================================================
          PRODUCT GRID
          ======================================================== */}
      {filteredProducts.length > 0 ? (
        showEditorialLayout ? (
          <EditorialGrid products={filteredProducts} />
        ) : (
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 3} />
            ))}
          </div>
        )
      ) : (
        <div className="py-28 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#F0F0EB] flex items-center justify-center">
            <Search className="w-5 h-5 text-[#AAAAAA]" />
          </div>
          <p className="text-sm text-[#777777]">
            No products matched your search.
          </p>
          <button
            onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
            className="text-[11px] font-bold uppercase tracking-wider text-[#E52323] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* ========================================================
          BOTTOM CTA
          ======================================================== */}
      <div className="mt-20 pt-12 pb-4 border-t border-[#E8E8E2]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-md">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] leading-tight">
              NEED A SPECIFIC
              <br />
              MINERAL PRODUCT?
            </h2>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              Contact us to discuss your specific requirements, custom specifications,
              or bulk supply arrangements.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-8 py-4 transition-all shrink-0 self-start md:self-center group"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// EDITORIAL GRID (Default "ALL PRODUCTS" view)
// ============================================================
// Uses a 12-column grid with varying spans for visual hierarchy.
// First product is featured (span 8), rest alternate between
// span 4 and span 6 to create an editorial catalogue feel.
// ============================================================

function EditorialGrid({ products }: { products: ProductItem[] }) {
  if (products.length === 0) return null;

  const hero = products[0];
  const remaining = products.slice(1);

  // Split remaining products into rows for editorial layout
  // Row patterns: [4,4,4], [6,6], [4,4,4], [6,6], ...
  const rows: { products: ProductItem[]; pattern: number[] }[] = [];
  let idx = 0;
  let rowIndex = 0;
  while (idx < remaining.length) {
    if (rowIndex % 2 === 0) {
      // 3 products, span-4 each
      const chunk = remaining.slice(idx, idx + 3);
      rows.push({ products: chunk, pattern: [4, 4, 4] });
      idx += chunk.length;
    } else {
      // 2 products, span-6 each
      const chunk = remaining.slice(idx, idx + 2);
      rows.push({ products: chunk, pattern: [6, 6] });
      idx += chunk.length;
    }
    rowIndex++;
  }

  return (
    <div className="pt-10 space-y-10 lg:space-y-12">
      {/* HERO PRODUCT — Large Featured Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Hero Image (span 8) */}
        <Link
          href={`/products/${hero.slug}`}
          className="lg:col-span-8 relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px] overflow-hidden group bg-[#F0F0EB]"
        >
          {hero.image ? (
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <ProductPlaceholder />
          )}
        </Link>

        {/* Hero Info (span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between py-2 lg:py-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-mono font-medium text-[#999999]">
              <span>{hero.number}</span>
              <span className="w-6 h-[1px] bg-[#D4D4CE]" />
              <span className="text-[#E52323] font-bold uppercase tracking-widest">
                {hero.category}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase tracking-tight text-[#111111] leading-[0.92]">
              {hero.name.toUpperCase()}
            </h2>

            {hero.description && (
              <p className="text-sm text-[#666666] leading-relaxed">
                {hero.description}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 pt-8 lg:pt-0">
            <Link
              href={`/products/${hero.slug}`}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors group/link"
            >
              <span>VIEW PRODUCT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover/link:translate-x-1" />
            </Link>
            <Link
              href={`/contact?product=${encodeURIComponent(hero.name)}`}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E52323] hover:text-[#C91A1A] transition-colors"
            >
              <span>REQUEST QUOTE</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* REMAINING PRODUCTS — Alternating row patterns */}
      {rows.map((row, rIdx) => (
        <div
          key={rIdx}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8"
        >
          {row.products.map((product, pIdx) => {
            const span = row.pattern[pIdx] || 4;
            return (
              <div
                key={product.id}
                className={`${
                  span === 6
                    ? "lg:col-span-6"
                    : "lg:col-span-4"
                }`}
              >
                <ProductCard
                  product={product}
                  priority={rIdx === 0}
                  aspectClass={span === 6 ? "aspect-[3/2]" : "aspect-[4/3]"}
                />
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

// ============================================================
// PRODUCT CARD
// ============================================================

function ProductCard({
  product,
  priority = false,
  aspectClass = "aspect-[4/3]",
}: {
  product: ProductItem;
  priority?: boolean;
  aspectClass?: string;
}) {
  const hasImage = product.image !== null;

  return (
    <div className="group">
      {/* Image */}
      <Link
        href={`/products/${product.slug}`}
        className={`relative block w-full ${aspectClass} overflow-hidden bg-[#F0F0EB]`}
      >
        {hasImage ? (
          <Image
            src={product.image!}
            alt={product.imageAlt}
            fill
            priority={priority}
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <ProductPlaceholder />
        )}
      </Link>

      {/* Content */}
      <div className="pt-4 space-y-1.5">
        {/* Number + Category */}
        <div className="flex items-center gap-2 text-[10px] font-mono font-medium text-[#999999]">
          <span>{product.number}</span>
          <span className="w-5 h-[1px] bg-[#D4D4CE]" />
          <span className="text-[#E52323] font-bold uppercase tracking-widest">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#111111] leading-[1.05]">
          <Link
            href={`/products/${product.slug}`}
            className="transition-colors hover:text-[#E52323]"
          >
            {product.name}
          </Link>
        </h3>

        {/* View Product Link */}
        <div className="pt-1">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors group/link"
          >
            <span>VIEW PRODUCT</span>
            <ArrowRight className="w-3 h-3 text-[#E52323] transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// PRODUCT PLACEHOLDER (for products with no image)
// ============================================================

function ProductPlaceholder() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F0F0EB]">
      <Package className="w-8 h-8 text-[#C8C8C0] mb-2" strokeWidth={1} />
      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-[#B0B0A8]">
        IMAGE TO BE SUPPLIED
      </span>
    </div>
  );
}
