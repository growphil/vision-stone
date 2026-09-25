import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { MANUFACTURING_PILLARS } from "@/data/manufacturing";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Manufacturing & Infrastructure | Processing Roots Since 1997 - VISION STONES",
  description:
    "Explore Vision Stones' mineral manufacturing and supply operations in Tirunelveli, Tamil Nadu. Crushing, grading, pulverization, packaging, and coordinated logistics.",
  openGraph: {
    title: "Manufacturing Built on Experience | VISION STONES",
    description: "Industrial infrastructure, mineral processing, and reliable supply coordination based in Tirunelveli, Tamil Nadu.",
  },
};

export default function ManufacturingPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#FFFFFF] text-[#111111] min-h-screen font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* PAGE HEADER */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
              OPERATIONS & INFRASTRUCTURE
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight sm:leading-none">
            MANUFACTURING
            <br />
            <span className="text-[#E52323]">BUILT ON EXPERIENCE.</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#555555] leading-relaxed pt-1 sm:pt-2">
            With manufacturing roots dating back to 1997 in Tirunelveli, Tamil Nadu, our processing facilities, industrial equipment, and coordinated supply logistics provide dependable mineral raw materials to over 450+ clients.
          </p>
        </div>

        {/* 6 MANUFACTURING PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4 sm:pt-6">
          {MANUFACTURING_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-[#FAF9F6] p-6 sm:p-8 lg:p-10 rounded-[10px] border border-[#E8E8E4] flex flex-col justify-between shadow-subtle hover:border-[#D0D0CA] transition-colors"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                    PILLAR {pillar.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#E52323]" />
                </div>

                <h2 className="text-lg sm:text-2xl font-black uppercase text-[#111111] leading-tight">
                  {pillar.title}
                </h2>

                <h3 className="text-xs font-bold uppercase tracking-wider text-[#777777]">
                  {pillar.headline}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {pillar.description}
                </p>

                {/* Specific Points */}
                <div className="pt-3 sm:pt-4 border-t border-[#E8E8E4] space-y-2">
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#444444]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-[#E8E8E4] flex items-center justify-between text-[11px] font-mono text-[#888888]">
                <span>TIRUNELVELI FACILITY</span>
                <span className="text-[#E52323] font-bold">SINCE 1997</span>
              </div>
            </div>
          ))}
        </div>

        {/* DOLOMITE FOCUS HIGHLIGHT */}
        <div className="bg-[#FAF9F6] p-6 sm:p-10 lg:p-12 rounded-[10px] border border-[#E8E8E4] shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8 space-y-2 sm:space-y-3">
              <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                PRODUCTION FOCUS
              </span>
              <h3 className="text-xl sm:text-3xl font-black uppercase text-[#111111]">
                SPECIALIZED DOLOMITE PROCESSING
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Our plant maintains dedicated crushing lines and pulverizing setups calibrated for Dolomite Powder (100, 200, 240 mesh and 0–240 mesh custom) and screened Dolomite Lumps. Every run is confirmed against customer mesh tolerances.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/products/dolomite-powder"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-[4px] transition-all shadow-sm text-center"
              >
                <span>VIEW DOLOMITE SPECIFICATIONS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
