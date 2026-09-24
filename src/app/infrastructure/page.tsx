import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Factory, ShieldCheck, Microscope, Package, Truck, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { INFRASTRUCTURE_PILLARS } from "@/data/infrastructure";

export const metadata: Metadata = {
  title: "Processing Infrastructure & Manufacturing Plant | VISION STONE",
  description:
    "Explore Vision Stone's integrated mineral processing plant in Salem, featuring primary crushing, closed-circuit ball mills, turbo air classification, and automated packaging.",
  openGraph: {
    title: "Mineral Processing Infrastructure | VISION STONE",
    description: "Multi-stage crushing, micronizing, air classification, and automated dispatch operations.",
  },
};

const STEP_ICONS: Record<string, React.ReactNode> = {
  "01": <Layers className="w-5 h-5 text-[#D62828]" />,
  "02": <Factory className="w-5 h-5 text-[#D62828]" />,
  "03": <Microscope className="w-5 h-5 text-[#D62828]" />,
  "04": <ShieldCheck className="w-5 h-5 text-[#D62828]" />,
  "05": <Truck className="w-5 h-5 text-[#D62828]" />,
};

export default function InfrastructurePage() {
  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#D62828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
            <span>PROCESSING HUB & LOGISTICS</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            INTEGRATED MINERAL INFRASTRUCTURE
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Our Salem processing facility houses multi-stage crushing, ceramic-lined pulverizers, dynamic air classifiers, and moisture-controlled packaging lines engineered to supply consistent industrial minerals at high scale.
          </p>
        </div>

        {/* Process Steps Timeline / Grid */}
        <div className="space-y-12">
          {INFRASTRUCTURE_PILLARS.map((pillar) => (
            <div
              key={pillar.step}
              className="mineral-card rounded-sm p-8 sm:p-10 border border-white/10 relative overflow-hidden"
            >
              {/* Pillar Number Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                    {STEP_ICONS[pillar.step]}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-code text-[#D62828] uppercase tracking-widest block">
                      STAGE {pillar.step}
                    </span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                      {pillar.title}
                    </h2>
                  </div>
                </div>

                <span className="hidden sm:block text-xs font-mono-code text-neutral-500">
                  {pillar.subtitle}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Description & Equipment (7 cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {pillar.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 block">
                      Key Machinery & Systems Deployed:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {pillar.equipment.map((eq, eIdx) => (
                        <div key={eIdx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono-code">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D62828] shrink-0" />
                          <span>{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics / Key Specs (5 cols) */}
                <div className="lg:col-span-5 space-y-3 lg:pl-6 lg:border-l lg:border-white/10">
                  <span className="text-[11px] font-mono-code uppercase tracking-widest text-neutral-400 block">
                    Operational Tolerances & Capabilities:
                  </span>

                  <div className="space-y-2">
                    {pillar.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-3.5 bg-black/40 border border-white/5 rounded flex items-center justify-between"
                      >
                        <span className="text-xs font-mono-code text-neutral-400">{m.label}</span>
                        <span className="text-xs font-mono-code text-white font-bold">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Location & Contact Block */}
        <div className="p-8 sm:p-12 bg-gradient-to-r from-[#121216] via-[#16161C] to-[#121216] border border-white/10 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="font-display font-bold text-xl text-white">
              Schedule a Technical Plant Audit
            </h3>
            <p className="text-xs text-neutral-400 max-w-xl">
              We welcome client technical representatives and procurement managers to inspect our Salem processing plant, analytical laboratory, and bulk storage facilities.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#D62828] hover:bg-[#b52020] text-white text-xs font-mono-code uppercase tracking-widest font-bold rounded-sm transition-colors shrink-0 shadow-lg shadow-[#D62828]/20"
          >
            <span>Arrange Plant Visit</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
