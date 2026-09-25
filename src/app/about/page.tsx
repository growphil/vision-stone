import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Factory, History, Target, Compass, Award } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Manufacturing Roots Since 1997 - VISION STONES",
  description:
    "Learn about Vision Stones. Manufacturing roots dating back to 1997 in Tirunelveli, Tamil Nadu. Supplying high-purity industrial minerals to 450+ clients across India.",
  openGraph: {
    title: "About VISION STONES | Manufacturing Roots Since 1997",
    description: "Our industrial roots, processing capabilities, corporate mission, vision, and core values.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#FFFFFF] text-[#111111] min-h-screen font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 space-y-16 sm:space-y-24">
        
        {/* ========================================================
            SECTION 01: HERO & MAIN HEADING
            ======================================================== */}
        <div className="max-w-4xl space-y-5 sm:space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
              ABOUT VISION STONES
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-[#111111] leading-[1.05]">
            FROM ESTABLISHED MANUFACTURING
            <br />
            <span className="text-[#E52323]">TO A MODERN BRAND</span>
          </h1>

          <p className="text-base sm:text-xl text-[#555555] leading-relaxed max-w-3xl">
            Vision Stones is the current brand being taken forward. Our manufacturing roots date back to 1997. Over more than two decades, the business operated under different company and operating names. Today, that underlying manufacturing capability, infrastructure, and hard-earned processing experience now support the Vision Stones brand.
          </p>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-2 sm:pt-4 text-xs sm:text-sm font-mono uppercase text-[#777777]">
            <div className="flex items-center gap-2 bg-[#FAF9F6] sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-[4px] border border-[#E8E8E4] sm:border-0">
              <span className="w-2 h-2 rounded-full bg-[#E52323]" />
              <strong className="text-[#111111]">Roots Since 1997</strong>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="flex items-center gap-2 bg-[#FAF9F6] sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-[4px] border border-[#E8E8E4] sm:border-0">
              <strong className="text-[#E52323]">450+</strong>
              <span className="text-[#111111]">Clients Served</span>
            </div>
            <span className="hidden sm:inline">|</span>
            <div className="bg-[#FAF9F6] sm:bg-transparent px-2.5 py-1 sm:p-0 rounded-[4px] border border-[#E8E8E4] sm:border-0">
              <span>Location: </span>
              <strong className="text-[#111111]">Tirunelveli, Tamil Nadu, India</strong>
            </div>
          </div>
        </div>

        {/* ========================================================
            SECTION 02: WHO WE ARE & OUR MANUFACTURING ROOTS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 border-t border-[#E8E8E4]">
          
          {/* Who We Are (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
              COMPANY BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#111111]">
              WHO WE ARE
            </h2>
            <div className="space-y-4 text-base text-[#555555] leading-relaxed">
              <p>
                Vision Stones is an industrial mineral manufacturing and raw-material supply firm based in Tirunelveli, Tamil Nadu. We specialize in processing, grading, and distributing high-purity minerals with an acute focus on Dolomite, Limestone, Lime, Calcite, Calcium Carbonate, and traditional mineral products.
              </p>
              <p>
                Our enterprise is built to deliver clarity, reliability, and responsiveness. Rather than operating as an impersonal broker, we manage processing and supply coordination directly, ensuring every order matches agreed particle sizes, packaging formats, and delivery timelines.
              </p>
            </div>
          </div>

          {/* Our Manufacturing Roots (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
              HERITAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#111111]">
              OUR MANUFACTURING ROOTS
            </h2>
            <div className="space-y-4 text-base text-[#555555] leading-relaxed">
              <p>
                Our manufacturing roots began in 1997 with foundational mineral processing installations in southern Tamil Nadu. Over 25+ years of daily industrial operations, our technical knowledge expanded across crushing, pulverizing, screening, and handling varied mineral densities.
              </p>
              <p>
                Having navigated diverse market cycles and technological transitions under earlier operating entities, the enterprise has accumulated deep logistical knowledge and enduring client trust, serving over 450+ companies across India.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================
            SECTION 03: VISION STONES TODAY & OUR APPROACH
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 border-t border-[#E8E8E4]">
          
          {/* Vision Stones Today (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
              MODERN BRAND
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#111111]">
              VISION STONES TODAY
            </h2>
            <div className="space-y-4 text-base text-[#555555] leading-relaxed">
              <p>
                Today, Vision Stones represents a modernized, forward-looking commercial entity that brings traditional manufacturing dependability into digital transparency.
              </p>
              <p>
                With Dolomite as our flagship focus product, we supply standard mesh sizes (100, 200, 240 mesh) and customized top-cuts from 0–240 mesh for paints, polymers, metallurgy, and agriculture, alongside an expanding multi-mineral raw material catalogue.
              </p>
            </div>
          </div>

          {/* Our Approach (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#111111]">
              OUR APPROACH
            </h2>
            <div className="space-y-4 text-base text-[#555555] leading-relaxed">
              <p>
                Our approach centers on absolute clarity before production begins. We believe quality starts with understanding the exact application, processing requirements, and physical properties needed by the client.
              </p>
              <p>
                By providing trial test samples, confirming specifications in advance, and coordinating dispatch logistics transparently, we protect our clients from processing downtime and inconsistent raw material feed.
              </p>
            </div>
          </div>

        </div>

        {/* ========================================================
            SECTION 04: MISSION, VISION, AND CORE VALUES
            ======================================================== */}
        <div className="pt-16 pb-12 border-t border-[#E8E8E4] space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-[#FAF9F6] p-8 sm:p-12 rounded-[10px] border border-[#E8E8E4] space-y-4 shadow-subtle">
              <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                PURPOSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                OUR MISSION
              </h3>
              <p className="text-base sm:text-lg text-[#44444F] leading-relaxed font-normal">
                &ldquo;{COMPANY_INFO.mission}&rdquo;
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#FAF9F6] p-8 sm:p-12 rounded-[10px] border border-[#E8E8E4] space-y-4 shadow-subtle">
              <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                ASPIRATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                OUR VISION
              </h3>
              <p className="text-base sm:text-lg text-[#44444F] leading-relaxed font-normal">
                &ldquo;{COMPANY_INFO.vision}&rdquo;
              </p>
            </div>

          </div>

          {/* Core Values */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                GUIDING PRINCIPLES
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                CORE VALUES
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPANY_INFO.coreValues.map((val) => (
                <div
                  key={val.name}
                  className="bg-white p-7 rounded-[8px] border border-[#E8E8E4] shadow-subtle space-y-2 hover:border-[#D0D0CA] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                    <h4 className="text-base font-black uppercase text-[#111111]">
                      {val.name}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================
            SECTION 05: EDITORIAL TIMELINE (Section 13)
            1997 -> MINERAL PROCESSING -> PRODUCTION EXPERIENCE ->
            MANUFACTURING INFRASTRUCTURE -> CUSTOMER RELATIONSHIPS ->
            VISION STONES: THE NEXT STAGE
            ======================================================== */}
        <div className="pt-16 pb-12 border-t border-[#E8E8E4] space-y-12">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
              EDITORIAL TIMELINE
            </span>
            <h3 className="text-3xl sm:text-4xl font-black uppercase text-[#111111]">
              OUR HISTORICAL PROGRESSION
            </h3>
            <p className="text-sm text-[#555555]">
              Tracing our continuous evolution from foundational manufacturing roots in 1997 to the modern Vision Stones brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COMPANY_INFO.historyTimeline.map((item, idx) => (
              <div
                key={item.title}
                className="bg-[#FAF9F6] p-8 rounded-[10px] border border-[#E8E8E4] flex flex-col justify-between shadow-subtle"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                      PHASE 0{idx + 1}
                    </span>
                    {item.year && (
                      <span className="text-sm font-black font-mono text-[#111111] bg-white px-2.5 py-1 border border-[#E8E8E4]">
                        {item.year}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xl font-black uppercase text-[#111111] tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E8E4] flex items-center justify-between text-xs text-[#888888] font-mono">
                  <span>STAGE 0{idx + 1} OF 06</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* BOTTOM CALLOUT */}
        <div className="p-6 sm:p-10 rounded-[10px] bg-[#FAF9F6] border border-[#E8E8E4] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 shadow-subtle">
          <div>
            <h3 className="text-xl sm:text-2xl font-black uppercase text-[#111111]">
              LOOKING FOR DEPENDABLE MINERAL RAW MATERIALS?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] mt-1">
              Contact our supply team in Tirunelveli for product specifications, pricing, and samples.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-[4px] transition-all whitespace-nowrap shadow-sm text-center"
          >
            <span>DISCUSS REQUIREMENTS</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
