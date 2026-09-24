"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search, Sparkles, SlidersHorizontal, Check } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES, Product } from "@/data/products";

export default function ProductsCatalogueClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filtered = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.categorySlug === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Category Pills & Search Controls */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 bg-[#0E0E12] border border-white/10 rounded-sm">
        
        {/* Filter Categories */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 text-xs font-mono-code uppercase tracking-wider rounded-sm transition-all ${
              selectedCategory === "all"
                ? "bg-[#D62828] text-white font-bold"
                : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>
          {PRODUCT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-mono-code uppercase tracking-wider rounded-sm transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#D62828] text-white font-bold"
                  : "bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white"
              }`}
            >
              {cat.name} ({cat.count})
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[260px]">
          <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by mineral, spec, or app..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#16161B] border border-white/10 text-white placeholder-neutral-500 text-xs px-9 py-2 rounded-sm focus:outline-none focus:border-[#D62828] transition-colors font-mono-code"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Summaries when specific category is chosen */}
      {selectedCategory !== "all" && (
        <div className="p-5 bg-white/[0.02] border border-white/10 rounded-sm">
          {PRODUCT_CATEGORIES.filter((c) => c.id === selectedCategory).map((cat) => (
            <div key={cat.id} className="space-y-1">
              <span className="text-[10px] font-mono-code text-[#D62828] tracking-widest uppercase">
                {cat.badge}
              </span>
              <h2 className="text-xl font-display font-bold text-white">{cat.name}</h2>
              <p className="text-xs text-neutral-400">{cat.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Products Grid */}
      {filtered.length === 0 ? (
        <div className="py-20 text-center space-y-3 bg-white/[0.02] border border-white/5 rounded-sm">
          <p className="text-neutral-400 text-sm font-mono-code">No mineral products match your filter criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-xs text-[#D62828] font-bold font-mono-code uppercase hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => {
            const isTraditional = product.categorySlug === "traditional-and-decorative";

            return (
              <div
                key={product.id}
                className={`mineral-card rounded-sm p-7 flex flex-col justify-between space-y-6 group hover:border-white/25 transition-all duration-300 relative ${
                  isTraditional ? "border-amber-500/30 hover:border-amber-400/60" : ""
                }`}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    isTraditional
                      ? "bg-gradient-to-r from-amber-400 to-white"
                      : "bg-gradient-to-r from-[#D62828] to-transparent opacity-70 group-hover:opacity-100"
                  }`}
                />

                <div className="space-y-5">
                  {/* Top metadata */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-code uppercase tracking-wider text-neutral-400">
                      {product.category}
                    </span>
                    <span
                      className={`text-[9px] font-mono-code px-2 py-0.5 rounded uppercase font-bold tracking-wider ${
                        isTraditional
                          ? "bg-amber-500/10 text-amber-300 border border-amber-500/20"
                          : "bg-white/5 text-neutral-300 border border-white/10"
                      }`}
                    >
                      {product.accentBadge}
                    </span>
                  </div>

                  {/* Title & Brand */}
                  <div>
                    <h3 className="font-display font-bold text-2xl text-white group-hover:text-white transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-mono-code text-[#D62828] mt-1">
                      Brand: {product.brand}
                    </p>
                    <p className="text-[11px] font-mono-code text-neutral-500">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Specifications snapshot */}
                  <div className="p-3 bg-black/40 border border-white/5 rounded space-y-2">
                    <span className="text-[10px] font-mono-code uppercase text-neutral-400 block">
                      Key Technical Specs:
                    </span>
                    <div className="space-y-1">
                      {product.specifications.slice(0, 3).map((spec, i) => (
                        <div key={i} className="flex items-center justify-between text-[11px] font-mono-code">
                          <span className="text-neutral-400">{spec.parameter}:</span>
                          <span className="text-white font-semibold">{spec.typical || spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Packaging */}
                  <div className="text-[11px] text-neutral-400">
                    <span className="font-mono-code text-neutral-500 block text-[10px]">PACKAGING:</span>
                    <span>{product.packaging.types.join(" &bull; ")}</span>
                  </div>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono-code text-neutral-500">
                    {product.chemicalFormula || "Natural Mineral"}
                  </span>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-[#D62828] text-white text-xs font-mono-code uppercase tracking-wider font-bold rounded-sm transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bulk Enquiry Bottom Banner */}
      <div className="p-8 bg-gradient-to-r from-[#121216] via-[#16161C] to-[#121216] border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-display font-bold text-xl text-white">
            Custom Mesh Grinding or Special Sizing Required?
          </h3>
          <p className="text-xs text-neutral-400">
            We offer custom milling curves from 200 to 1500 mesh and tailored stearic acid coatings for bulk manufacturing contracts.
          </p>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#D62828] hover:bg-[#b52020] text-white text-xs font-mono-code uppercase tracking-widest font-bold rounded-sm transition-colors shrink-0 shadow-lg shadow-[#D62828]/20"
        >
          <span>Request Custom Milling</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </div>
  );
}
