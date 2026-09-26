"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Users,
  Building2,
  Compass,
  Truck,
  Boxes,
  MessageSquare,
  Handshake,
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const PILLAR_ICONS = [
  Factory,        // 01: MANUFACTURING ROOTS SINCE 1997
  Users,          // 02: 450+ CLIENTS
  Building2,      // 03: MANUFACTURING INFRASTRUCTURE
  Compass,        // 04: MODERN BRAND DIRECTION
  Truck,          // 05: FLEXIBLE SUPPLY
  Boxes,          // 06: MULTIPLE PRODUCTS
  MessageSquare,  // 07: DIRECT COMMUNICATION
  Handshake,      // 08: LONG-TERM RELATIONSHIPS
];

export default function WhyVisionStones() {
  return (
    <section
      id="why-us"
      className="w-full bg-[#FAFAF8] text-[#111111] py-20 sm:py-28 lg:py-32 font-display border-t border-[#E8E8E2]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            EDITORIAL BRAND STATEMENT & HERO IMAGE SPLIT
            Left ~55%: Large Typography + Core Value Proposition
            Right ~45%: Hero Industrial Image with 450+ Clients Overlay
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT ~55% (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-6">
            <div className="flex items-center gap-3">
              <span className="w-[42px] h-[2px] bg-[#E52323]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#737373]">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-black uppercase tracking-tight leading-[0.92] text-[#111111]">
              WHY
              <br />
              VISION
              <br />
              <span className="text-[#E52323]">STONES?</span>
            </h2>

            <p className="text-base sm:text-xl lg:text-[23px] text-[#222222] font-normal leading-relaxed max-w-xl">
              Our value is built on established manufacturing experience, manufacturing infrastructure, flexible supply and long-term customer relationships.
            </p>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-lg">
              Headquartered in Tirunelveli, Tamil Nadu, we bridge direct quarrying and processing capabilities with disciplined mesh specifications for over 450 industrial accounts across India.
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111111] pb-1 border-b border-[#E52323] hover:text-[#E52323] transition-colors group"
              >
                <span>WORK WITH VISION STONES</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT ~45% (5 columns on desktop): Premium Industrial Visual + Stats Overlay */}
          <div className="lg:col-span-5 relative min-h-[340px] sm:min-h-[440px] lg:min-h-[480px] rounded-[10px] overflow-hidden border border-[#E8E8E2] bg-[#1A1A1A] shadow-sm">
            <Image
              src="/Products/Dolomite Lump.webp"
              alt="Vision Stones Quarry and Manufacturing Heritage"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />

            {/* Dark Dramatic Gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 pointer-events-none"
              aria-hidden="true"
            />

            {/* Overlaid Factual Indicators */}
            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-between text-white">
              <div className="self-end">
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-white/90 bg-white/10 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-[4px] border border-white/20">
                  EST. 1997 · TAMIL NADU
                </span>
              </div>

              <div className="space-y-2 sm:space-y-3">
                <div className="text-5xl sm:text-7xl lg:text-8xl font-black font-mono tracking-tighter text-white leading-none">
                  450<span className="text-[#E52323]">+</span>
                </div>
                <div className="text-xs sm:text-base font-bold uppercase tracking-[0.16em] text-white">
                  CLIENTS
                </div>
                <div className="text-[11px] sm:text-[13px] font-mono text-[#D4D4CE] uppercase tracking-wider">
                  PROVEN INDUSTRIAL SUPPLY ACROSS INDIA
                </div>
                <p className="text-xs text-white/70 max-w-sm leading-relaxed pt-1">
                  Long-term supply agreements spanning metallurgy, coatings, polymers, agriculture, and construction.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            ICON-ENHANCED CAPABILITY PILLARS LIST
            8 Factual points with modern Lucide React icons
            ======================================================== */}
        <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-[#E8E8E2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {COMPANY_INFO.whyUs.map((pillar, index) => {
              const IconComponent = PILLAR_ICONS[index % PILLAR_ICONS.length];

              return (
                <div
                  key={pillar.number}
                  className="group space-y-3.5 border-b border-[#EAEAE4] pb-6 sm:border border-transparent sm:hover:border-[#E8E8E2] sm:p-5 sm:rounded-[8px] sm:hover:bg-white sm:hover:shadow-sm sm:pb-5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-[6px] bg-white group-hover:bg-[#E52323] border border-[#E8E8E2] group-hover:border-[#E52323] flex items-center justify-center text-[#E52323] group-hover:text-white transition-all duration-300 shadow-xs">
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-[#E52323]">
                        {pillar.number}
                      </span>
                      <span className="w-4 h-[1px] bg-[#D4D4CE]" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-[17px] font-black uppercase tracking-tight text-[#111111] leading-snug group-hover:text-[#E52323] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#666666] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
