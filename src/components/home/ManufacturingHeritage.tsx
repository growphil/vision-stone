"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

// Factual timeline stages strictly based on company data
const TIMELINE_STAGES = [
  {
    stage: "01",
    year: "1997",
    title: "MANUFACTURING JOURNEY BEGINS",
    description:
      "Our industrial roots commenced with core mineral sourcing, local crushing, and commercial dispatches in Tamil Nadu.",
    highlights: ["Raw Mineral Sourcing", "Local Crushing", "Commercial Dispatches"],
  },
  {
    stage: "02",
    year: "PROCESSING",
    title: "MINERAL PROCESSING & MACHINERY EXPANSION",
    description:
      "Invested in dedicated crushing, pulverizing, and mechanical air-classification machinery to process multi-mineral product lines with strict mesh specifications.",
    highlights: ["Industrial Pulverizers", "Air Classification", "Mesh Sizing Control"],
  },
  {
    stage: "03",
    year: "PRODUCTION",
    title: "PRODUCTION EXPERIENCE & WORKFORCE MANAGEMENT",
    description:
      "Over two decades of continuous floor operations refining particle distribution, bulk material handling, and skilled workforce management.",
    highlights: ["Quality Supervision", "Consistent Sizing", "Workforce Expertise"],
  },
  {
    stage: "04",
    year: "FACILITY",
    title: "MANUFACTURING INFRASTRUCTURE CONSOLIDATION",
    description:
      "Consolidation of dedicated processing yards, covered warehousing, and dispatch handling infrastructure located in Tirunelveli.",
    highlights: ["Processing Yards", "Covered Storage", "Dispatch Logistics"],
  },
  {
    stage: "05",
    year: "450+ CLIENTS",
    title: "CUSTOMER REQUIREMENTS & EXPANDING SUPPLY",
    description:
      "Expanded long-term supply agreements to over 450 industrial accounts spanning steel metallurgy, paints, polymer compounding, and agriculture.",
    highlights: ["450+ Active Clients", "Multi-Sector Supply", "Custom Packaging"],
  },
  {
    stage: "06",
    year: "TODAY",
    title: "VISION STONES — MODERN BRAND DIRECTION",
    description:
      "Unifying our 27+ years of manufacturing roots, processing infrastructure, and client trust under the modern Vision Stones brand with clear digital communication.",
    highlights: ["Digital Transparency", "Direct Coordination", "Enduring Partnerships"],
  },
];

export default function ManufacturingHeritage() {
  return (
    <section
      id="heritage"
      className="w-full bg-[#FAFAF8] text-[#111111] py-20 sm:py-28 lg:py-32 font-display border-t border-[#E8E8E2]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ========================================================
            SECTION HEADER
            Editorial headline + capability link
            ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E8E8E2]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-[42px] h-[2px] bg-[#E52323]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#737373]">
                MANUFACTURING ROOTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-none">
              FROM ESTABLISHED MANUFACTURING
              <br />
              <span className="text-[#E52323]">TO A MODERN BRAND.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-xl font-normal leading-relaxed">
              Over two decades of mineral processing experience, physical production infrastructure, and dependable industrial supply.
            </p>
          </div>

          <Link
            href="/manufacturing"
            className="inline-flex items-center gap-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111111] pb-1 border-b border-[#E52323] hover:text-[#E52323] transition-colors group self-start lg:self-end"
          >
            <span>EXPLORE OUR CAPABILITY</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* ========================================================
            PREMIUM EDITORIAL TIMELINE
            Left: Sticky vertical year & journey anchor
            Center: Continuous vertical timeline axis with markers
            Right: Progressive narrative timeline entries (NO CARDS)
            ======================================================== */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Large Vertical Timeline Anchor (Sticky on desktop) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="border-l-2 border-[#E52323] pl-4 sm:pl-6 space-y-2 sm:space-y-3">
              <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#E52323] uppercase block">
                TIMELINE / EST. 1997
              </span>
              <div className="text-6xl sm:text-8xl lg:text-[100px] font-black font-mono tracking-tighter text-[#111111] leading-none">
                1997
              </div>
              <div className="text-sm sm:text-base font-bold uppercase tracking-[0.12em] text-[#111111]">
                MANUFACTURING JOURNEY BEGINS
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-sm">
              From early mineral crushing operations in Tirunelveli, Tamil Nadu, to a multi-product manufacturing capability serving over 450 industrial accounts across diverse sectors.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[#888888]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E52323]" />
                <span>27+ YEARS EXPERIENCE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E52323]" />
                <span>TIRUNELVELI, TN</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Continuous Chronological Timeline Line & Entries */}
          <div className="lg:col-span-8 relative">
            {/* The vertical timeline spine */}
            <div
              className="absolute left-[7px] sm:left-[11px] top-3 bottom-6 w-[2px] bg-[#E5E5DE]"
              aria-hidden="true"
            />

            <div className="space-y-10 sm:space-y-16 pl-8 sm:pl-12">
              {TIMELINE_STAGES.map((item, idx) => (
                <div
                  key={item.stage}
                  className="relative group transition-all duration-300"
                >
                  {/* Timeline Node Marker */}
                  <div
                    className="absolute -left-[32px] sm:-left-[44px] top-1 w-4 h-4 rounded-full bg-[#FAFAF8] border-2 border-[#CCCCCC] group-hover:border-[#E52323] group-hover:bg-[#E52323] transition-all duration-300 flex items-center justify-center ring-4 ring-[#FAFAF8]"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-white transition-colors" />
                  </div>

                  {/* Stage Meta Header */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold tracking-[0.16em] uppercase text-[#E52323]">
                      STAGE {item.stage}
                    </span>
                    <span className="w-6 sm:w-8 h-[1px] bg-[#D4D4CE]" />
                    <span className="text-xs font-mono font-medium text-[#888888] uppercase">
                      {item.year}
                    </span>
                  </div>

                  {/* Main Narrative Headline */}
                  <h3 className="text-xl sm:text-2xl lg:text-[32px] font-black uppercase tracking-tight text-[#111111] leading-tight mt-2 transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  {/* Narrative Body */}
                  <p className="text-sm sm:text-base text-[#555555] leading-relaxed mt-2.5 sm:mt-3 max-w-2xl font-normal">
                    {item.description}
                  </p>

                  {/* Key Capabilities / Milestones */}
                  <div className="flex flex-wrap items-center gap-2 mt-4 pt-2">
                    {item.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] sm:text-xs font-medium text-[#555555] bg-white border border-[#E8E8E2] px-3 py-1 rounded-[4px] tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom hairline divider (except last) */}
                  {idx !== TIMELINE_STAGES.length - 1 && (
                    <div className="mt-12 sm:mt-16 border-b border-[#EAEAE4]" />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
