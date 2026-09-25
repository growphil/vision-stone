"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPLICATIONS, ApplicationItem } from "@/data/applications";

export default function ApplicationIndex() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeApp: ApplicationItem = APPLICATIONS[activeIdx];

  return (
    <section
      id="application-atlas"
      className="py-20 sm:py-28 lg:py-32 bg-[#FAF9F6] border-b border-[#E8E8E2]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* SECTION HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pb-12 sm:pb-16 border-b border-[#E0DFD8] items-end">
          <div className="lg:col-span-7 space-y-2">
            <span className="text-xs font-mono-code font-bold tracking-[0.25em] uppercase text-[#777777] block">
              08 INDUSTRIES
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#111111] tracking-tight leading-none">
              APPLICATION
              <br />
              <span className="text-[#E52323]">ATLAS</span>
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-md">
              Our minerals and raw materials are used across a wide range of industries, supporting essential processes and products in everyday life.
            </p>
          </div>
        </div>

        {/* DESKTOP EDITORIAL ATLAS (>= 1024px) */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 pt-8 items-start">
          
          {/* LEFT 7 COLS: Continuous Editorial Rows (No cards, No box containers) */}
          <div className="lg:col-span-7 divide-y divide-[#E0DFD8] border-b border-[#E0DFD8]">
            {APPLICATIONS.map((app, idx) => {
              const isActive = activeIdx === idx;

              return (
                <div
                  key={app.id}
                  role="button"
                  tabIndex={0}
                  aria-selected={isActive}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setActiveIdx(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveIdx(idx);
                    }
                  }}
                  className="group w-full py-8 xl:py-9 px-2 flex items-center justify-between cursor-pointer transition-all duration-300 focus:outline-none"
                >
                  <div className="flex items-center gap-8 xl:gap-12">
                    {/* Number */}
                    <span
                      className={`text-sm sm:text-base font-mono-code font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-[#E52323]"
                          : "text-[#888888] group-hover:text-[#E52323]"
                      }`}
                    >
                      {app.id}
                    </span>

                    {/* Title */}
                    <h3
                      className={`text-xl sm:text-2xl xl:text-[26px] font-black uppercase tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-[#E52323] translate-x-2"
                          : "text-[#111111] group-hover:text-[#E52323] group-hover:translate-x-2"
                      }`}
                    >
                      {app.name}
                    </h3>
                  </div>

                  {/* Clean Minimalist Arrow */}
                  <div
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-[#E52323] translate-x-2"
                        : "text-[#888888] group-hover:text-[#E52323] group-hover:translate-x-2"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT 5 COLS: Floating Editorial Image & Information Experience */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            {/* Editorial Image (No outer card border, No heavy padding) */}
            <div className="relative w-full aspect-[16/10] rounded-[8px] overflow-hidden bg-[#E8E8E2]">
              {APPLICATIONS.map((app, idx) => (
                <div
                  key={app.id}
                  className={`absolute inset-0 transition-all duration-400 ease-in-out ${
                    activeIdx === idx
                      ? "opacity-100 scale-100 z-10"
                      : "opacity-0 scale-[0.96] z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={app.image}
                    alt={app.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-mono-code font-bold tracking-widest text-[#FF8A8A] uppercase block">
                      {app.id} / 08
                    </span>
                    <h4 className="text-xl xl:text-2xl font-black uppercase tracking-tight text-white mt-0.5">
                      {app.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Factual Description */}
            <p className="text-sm text-[#555555] leading-relaxed pt-1">
              {activeApp.description}
            </p>

            {/* Related Products: Clean Typography Links (No pills, No product cards) */}
            <div className="pt-4 border-t border-[#E0DFD8] space-y-3">
              <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#111111] block">
                RELATED PRODUCTS
              </span>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {activeApp.relatedProducts.map((prod) => (
                  <Link
                    key={prod.slug}
                    href={`/products/${prod.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors group"
                  >
                    <span>{prod.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#E52323] group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Explore Products Link */}
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E52323] hover:text-[#C91A1A] group"
              >
                <span>EXPLORE ALL PRODUCTS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

        {/* MOBILE & TABLET LAYOUT (< 1024px): Stacked Large Editorial Sections */}
        <div className="lg:hidden space-y-12 pt-10">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              className="space-y-5 pb-10 border-b border-[#E0DFD8]"
            >
              {/* Header */}
              <div className="space-y-1">
                <span className="text-xs font-mono-code font-bold text-[#E52323] tracking-widest uppercase">
                  {app.id} / 08
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111] leading-tight">
                  {app.name}
                </h3>
              </div>

              {/* 100% Width Large Image */}
              <div className="relative w-full aspect-[4/3] rounded-[8px] overflow-hidden bg-[#E8E8E2]">
                <Image
                  src={app.image}
                  alt={app.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-[#555555] leading-relaxed">
                {app.description}
              </p>

              {/* Related Products as Clean Typography Links */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#111111] block">
                  RELATED PRODUCTS:
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {app.relatedProducts.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323]"
                    >
                      <span>{prod.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#E52323]" />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
