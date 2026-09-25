"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { INDUSTRIES, IndustryItem } from "@/data/industries";

// Visual image mapping for each industry based on primary mineral supplied
const INDUSTRY_IMAGES: Record<string, string> = {
  "agriculture-soil": "/application/agriculture-soil-applications.webp",
  "fertilizer-agri-inputs": "/application/fertilizer-agri-inputs.webp",
  "rubber-polymer": "/application/rubber-polymer-manufacturing.webp",
  "paint-manufacturing": "/application/paint-manufacturing.webp",
  "tiles-ceramics": "/application/tiles-ceramics.webp",
  "construction": "/application/construction.webp",
  "pipeline-applications": "/application/pipeline-applications.webp",
  "general-manufacturing": "/application/general-manufacturing.webp",
};

export default function IndustriesPreview() {
  const [activeId, setActiveId] = useState<string>(INDUSTRIES[0].id);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>(INDUSTRIES[0].id);

  const activeIndustry =
    INDUSTRIES.find((item) => item.id === activeId) || INDUSTRIES[0];

  const toggleMobileAccordion = (id: string) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
    <section
      id="industries"
      className="w-full bg-[#FFFFFF] text-[#111111] py-20 sm:py-28 lg:py-32 font-display border-t border-[#E8E8E2]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            SECTION HEADER
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E8E8E2]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-[42px] h-[2px] bg-[#E52323]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#737373]">
                INDUSTRIES & APPLICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight sm:leading-none">
              BUILT AROUND
              <br />
              <span className="text-[#E52323]">INDUSTRY REQUIREMENTS.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-xl font-normal leading-relaxed">
              From metallurgy and civil infrastructure to specialized polymers, paints, and agriculture.
            </p>
          </div>

          <Link
            href="/applications"
            className="inline-flex items-center gap-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111111] pb-1 border-b border-[#E52323] hover:text-[#E52323] transition-colors group self-start lg:self-end"
          >
            <span>VIEW ALL APPLICATIONS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* ========================================================
            DESKTOP INTERACTIVE EDITORIAL LIST (>= 1024px)
            Left: 8 Full-width interactive rows with hover transitions
            Right: Sticky editorial visual preview of active industry
            ======================================================== */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 sm:mt-16">
          {/* Left Column: Interactive Editorial Rows */}
          <div className="lg:col-span-7 divide-y divide-[#E8E8E2] border-t border-b border-[#E8E8E2]">
            {INDUSTRIES.map((ind) => {
              const isActive = activeId === ind.id;
              return (
                <div
                  key={ind.id}
                  onMouseEnter={() => setActiveId(ind.id)}
                  onClick={() => setActiveId(ind.id)}
                  className={`group relative py-6 px-6 sm:px-8 flex items-center justify-between cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#FAF9F6] pl-10"
                      : "hover:bg-[#FCFCFA] hover:pl-9"
                  }`}
                >
                  {/* Active Red Left Indicator */}
                  <span
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-[#E52323] transition-all duration-300 ${
                      isActive ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-75"
                    }`}
                  />

                  {/* Left: Number + Industry Name */}
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span
                      className={`text-sm sm:text-base font-mono font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-[#E52323]"
                          : "text-[#888888] group-hover:text-[#111111]"
                      }`}
                    >
                      {ind.number}
                    </span>

                    <h3
                      className={`text-xl sm:text-2xl font-black uppercase tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-[#E52323] translate-x-1"
                          : "text-[#111111] group-hover:text-[#E52323] group-hover:translate-x-1"
                      }`}
                    >
                      {ind.name}
                    </h3>
                  </div>

                  {/* Right: Circular CTA Arrow */}
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-[#E52323] border-[#E52323] text-white scale-105"
                        : "border-[#D8D8D2] text-[#888888] group-hover:border-[#E52323] group-hover:text-[#E52323]"
                    }`}
                  >
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Live Visual Preview Panel (No generic card grid) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="relative min-h-[300px] rounded-[10px] overflow-hidden border border-[#E8E8E2] bg-[#1A1A1A] shadow-sm">
              <Image
                key={activeIndustry.id}
                src={INDUSTRY_IMAGES[activeIndustry.id] || "/Products/Dolomite Powder.webp"}
                alt={activeIndustry.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-all duration-700 ease-out"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 pointer-events-none"
                aria-hidden="true"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#E52323] uppercase bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-[4px] border border-white/10">
                    SECTOR {activeIndustry.number}
                  </span>
                  <span className="text-xs font-mono text-white/70 uppercase">
                    ACTIVE PREVIEW
                  </span>
                </div>

                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight text-white leading-tight">
                    {activeIndustry.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed mt-2.5 line-clamp-3">
                    {activeIndustry.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Supplied Minerals Pill List */}
            <div className="p-6 rounded-[10px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#737373]">
                  RECOMMENDED MINERALS:
                </span>
                <span className="text-xs font-mono text-[#888888]">
                  {activeIndustry.recommendedProducts.length} PRODUCTS
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {activeIndustry.recommendedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="text-xs font-semibold text-[#111111] bg-white hover:bg-[#E52323] hover:text-white px-3 py-1.5 rounded-[4px] border border-[#E5E5DE] transition-colors"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/applications"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E52323] hover:text-[#B81414] transition-colors group"
                >
                  <span>SEE DETAILED APPLICATION SPECS</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            MOBILE / TABLET EDITORIAL ACCORDION (< 1024px)
            Clean sequential rows that expand on touch
            ======================================================== */}
        <div className="lg:hidden mt-8 divide-y divide-[#E8E8E2] border-t border-b border-[#E8E8E2]">
          {INDUSTRIES.map((ind) => {
            const isExpanded = mobileExpandedId === ind.id;
            return (
              <div key={ind.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(ind.id)}
                  aria-expanded={isExpanded}
                  className="w-full py-5 px-3 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-[#E52323]">
                      {ind.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#111111] group-hover:text-[#E52323] transition-colors">
                      {ind.name}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full border border-[#D8D8D2] flex items-center justify-center text-[#888888] transition-transform duration-300 ${
                      isExpanded ? "rotate-180 text-[#E52323] border-[#E52323]" : ""
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-3 pb-6 pt-1 space-y-4 animate-fadeIn">
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {ind.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#888888] block">
                        Supplied Minerals:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {ind.recommendedProducts.map((p) => (
                          <Link
                            key={p.slug}
                            href={`/products/${p.slug}`}
                            className="text-xs font-medium text-[#111111] bg-[#FAF9F6] px-2.5 py-1 rounded-[4px] border border-[#E8E8E2]"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/applications"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E52323]"
                      >
                        <span>VIEW FULL APPLICATION</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
