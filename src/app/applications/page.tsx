import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Flame, Building2, Beaker, Layers, Sparkles, Sprout, Hammer, CheckCircle2 } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

export const metadata: Metadata = {
  title: "Industrial Applications & Mineral Use Cases | VISION STONE",
  description:
    "Discover how Vision Stone Dolomite, Calcite, Limestone, and Lime are applied across Steelmaking, Polymers, Paints, Construction, Water Treatment, and Agriculture.",
  openGraph: {
    title: "Industrial Mineral Applications | VISION STONE",
    description: "Detailed industry sectors and mineral applications for Vision Stone products.",
  },
};

const APP_ICONS: Record<string, React.ReactNode> = {
  "steel-and-metallurgy": <Flame className="w-6 h-6 text-[#D62828]" />,
  "industrial-manufacturing": <Hammer className="w-6 h-6 text-[#D62828]" />,
  "construction": <Building2 className="w-6 h-6 text-[#D62828]" />,
  "chemical-processing": <Beaker className="w-6 h-6 text-[#D62828]" />,
  "ceramics-and-glass": <Layers className="w-6 h-6 text-[#D62828]" />,
  "agriculture-and-soil": <Sprout className="w-6 h-6 text-[#D62828]" />,
  "traditional-decorative": <Sparkles className="w-6 h-6 text-amber-400" />,
};

export default function ApplicationsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#D62828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
            <span>INDUSTRIAL APPLICATION SECTORS</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            WHERE OUR MINERALS CREATE VALUE
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every industry demands distinct particle sizes, chemical basicities, and optical brightness parameters. Explore our target sectors and the exact role our minerals fulfill in industrial formulations.
          </p>
        </div>

        {/* In-depth Applications List */}
        <div className="space-y-10">
          {APPLICATIONS.map((app) => {
            const isTraditional = app.id === "traditional-decorative";

            return (
              <div
                key={app.id}
                id={app.slug}
                className={`mineral-card rounded-sm p-8 sm:p-10 border transition-all duration-300 relative overflow-hidden ${
                  isTraditional
                    ? "border-amber-500/25 bg-gradient-to-br from-[#121216] via-[#101014] to-[#0A0A0D]"
                    : "border-white/10"
                }`}
              >
                {/* Accent Top Line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] ${
                    isTraditional
                      ? "bg-gradient-to-r from-amber-400 to-white"
                      : "bg-gradient-to-r from-[#D62828] to-transparent"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  
                  {/* Left Column: Sector Info (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center">
                          {APP_ICONS[app.id] || <Layers className="w-6 h-6 text-[#D62828]" />}
                        </div>
                        <div>
                          <span className="text-[10px] font-mono-code text-[#D62828] uppercase tracking-widest block">
                            SECTOR {app.categoryNumber}
                          </span>
                          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                            {app.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs font-mono-code text-neutral-300">
                      {app.tagline}
                    </p>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                      {app.description}
                    </p>

                    {/* Roles of Minerals */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 block">
                        Functional Performance Impact:
                      </span>
                      <div className="space-y-2">
                        {app.roleOfMinerals.map((role, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isTraditional ? "text-amber-400" : "text-[#D62828]"
                              }`}
                            />
                            <span>{role}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Recommended Products & Specs (5 cols) */}
                  <div className="lg:col-span-5 space-y-5 lg:pl-6 lg:border-l lg:border-white/10">
                    <div className="p-4 bg-black/40 border border-white/10 rounded space-y-1.5">
                      <span className="text-[10px] font-mono-code text-neutral-400 uppercase tracking-widest block">
                        Target Technical Metric Focus:
                      </span>
                      <p className="text-xs font-mono-code text-white font-semibold">
                        {app.specFocus}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <span className="text-[11px] font-mono-code uppercase tracking-wider text-neutral-400 block">
                        Recommended Vision Stone Products:
                      </span>

                      <div className="space-y-2">
                        {app.recommendedProducts.map((prod, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3 bg-white/[0.03] border border-white/5 rounded flex flex-col justify-between hover:border-white/20 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <h4 className="font-display font-bold text-sm text-white">
                                {prod.name}
                              </h4>
                              <Link
                                href={`/products/${prod.slug}`}
                                className="inline-flex items-center gap-1 text-[11px] font-mono-code text-white hover:text-[#D62828] font-semibold transition-colors"
                              >
                                <span>Specs</span>
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                            <p className="text-[11px] text-neutral-400 mt-1">
                              {prod.benefit}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/contact?sector=${encodeURIComponent(app.title)}`}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-white/5 hover:bg-[#D62828] text-white text-xs font-mono-code uppercase tracking-wider font-bold rounded-sm border border-white/10 transition-colors"
                      >
                        <span>Enquire For This Sector</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
