import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function DolomiteFocus() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 font-display border-t border-[#E8E8E4]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <div className="space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
              KEY FOCUS PRODUCT
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight">
            DOLOMITE.
            <br />
            <span className="text-[#E52323]">A CORE PRODUCT OF VISION STONES.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed pt-2">
            Dolomite is the key focus product of our processing operations. We manufacture and supply high-purity Dolomite in both micronized powder and sized lump formats, prepared strictly according to customer specifications and agreed supply arrangements.
          </p>
        </div>

        {/* 2-COLUMN EDITORIAL FORMAT CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* FORMAT 01: DOLOMITE POWDER */}
          <div className="bg-[#FAF9F6] p-6 sm:p-10 lg:p-12 rounded-[10px] border border-[#E8E8E4] flex flex-col justify-between shadow-subtle relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                  FORMAT 01 / MICRONIZED
                </span>
                <span className="text-xs font-mono text-[#888888]">
                  0–240 MESH
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black uppercase text-[#111111]">
                DOLOMITE POWDER
              </h3>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Pulverized and classified to exact particle distributions. Sourced for consistent magnesium-to-calcium composition, natural brightness, and excellent dispersion in industrial compounds.
              </p>

              {/* Supported Mesh Specifications */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  AVAILABLE SPECIFICATIONS:
                </span>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="bg-white p-2.5 sm:p-3 rounded-[6px] border border-[#E0E0DB] text-center">
                    <span className="block text-base sm:text-lg font-black text-[#111111]">100</span>
                    <span className="text-[10px] font-mono text-[#777777] uppercase">Mesh</span>
                  </div>
                  <div className="bg-white p-2.5 sm:p-3 rounded-[6px] border border-[#E0E0DB] text-center">
                    <span className="block text-base sm:text-lg font-black text-[#111111]">200</span>
                    <span className="text-[10px] font-mono text-[#777777] uppercase">Mesh</span>
                  </div>
                  <div className="bg-white p-2.5 sm:p-3 rounded-[6px] border border-[#E0E0DB] text-center">
                    <span className="block text-base sm:text-lg font-black text-[#E52323]">240</span>
                    <span className="text-[10px] font-mono text-[#777777] uppercase">Mesh</span>
                  </div>
                </div>
                <p className="text-xs text-[#777777] pt-1">
                  Customised requirements available from <strong className="text-[#111111]">0–240 Mesh</strong> upon customer consultation.
                </p>
              </div>

              {/* Applications bullet points */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  PRIMARY INDUSTRIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555555]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Paints & Industrial Coatings</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Plastics & PVC Compounding</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Ceramic Tile Glazes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Agriculture & Soil Buffer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#E8E8E4] flex items-center justify-between">
              <Link
                href="/products/dolomite-powder"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors group"
              >
                <span>VIEW DOLOMITE POWDER DETAILS</span>
                <ArrowRight className="w-4 h-4 text-[#E52323] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* FORMAT 02: DOLOMITE LUMP */}
          <div className="bg-[#FAF9F6] p-6 sm:p-10 lg:p-12 rounded-[10px] border border-[#E8E8E4] flex flex-col justify-between shadow-subtle relative overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                  FORMAT 02 / SIZED LUMPS
                </span>
                <span className="text-xs font-mono text-[#888888]">
                  SIZED ROCK FRACTIONS
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black uppercase text-[#111111]">
                DOLOMITE LUMP
              </h3>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                Selected natural crystalline dolomite rock graded for blast furnaces, ferroalloy smelting, and refractory calcination. Excavated and screened for high mechanical hardness and low decrepitation.
              </p>

              {/* Supply Options */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  SUPPLY FORMATS & ARRANGEMENTS:
                </span>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="bg-white p-2.5 sm:p-3 rounded-[6px] border border-[#E0E0DB] text-center">
                    <span className="block text-xs sm:text-sm font-black text-[#111111]">SMALL</span>
                    <span className="text-[10px] font-mono text-[#777777] uppercase">Trial Batches</span>
                  </div>
                  <div className="bg-white p-2.5 sm:p-3 rounded-[6px] border border-[#E0E0DB] text-center">
                    <span className="block text-xs sm:text-sm font-black text-[#111111]">BULK</span>
                    <span className="text-[10px] font-mono text-[#777777] uppercase">Regular Loads</span>
                  </div>
                  <div className="bg-white p-2.5 sm:p-3 rounded-[6px] border border-[#E0E0DB] text-center">
                    <span className="block text-xs sm:text-sm font-black text-[#E52323]">INDUSTRIAL</span>
                    <span className="text-[10px] font-mono text-[#777777] uppercase">Contract Supply</span>
                  </div>
                </div>
                <p className="text-xs text-[#777777] pt-1">
                  Supplied in bulk tipper truckloads, loose containers, or heavy-duty jumbo bags.
                </p>
              </div>

              {/* Applications bullet points */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  PRIMARY INDUSTRIES:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#555555]">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Steel Plant Blast Furnaces</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Ferroalloy Smelting Flux</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Refractory Calcination</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#E52323] shrink-0" />
                    <span>Secondary Mineral Grinding</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#E8E8E4] flex items-center justify-between">
              <Link
                href="/products/dolomite-lump"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors group"
              >
                <span>VIEW DOLOMITE LUMP DETAILS</span>
                <ArrowRight className="w-4 h-4 text-[#E52323] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
