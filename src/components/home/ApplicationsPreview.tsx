import React from "react";
import Link from "next/link";
import { ArrowUpRight, Flame, Building2, Beaker, Layers, Sparkles, Sprout, Hammer, ArrowRight } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

const APP_ICONS: Record<string, React.ReactNode> = {
  "steel-and-metallurgy": <Flame className="w-5 h-5 text-[#E52323]" />,
  "industrial-manufacturing": <Hammer className="w-5 h-5 text-[#E52323]" />,
  "construction": <Building2 className="w-5 h-5 text-[#E52323]" />,
  "chemical-processing": <Beaker className="w-5 h-5 text-[#E52323]" />,
  "ceramics-and-glass": <Layers className="w-5 h-5 text-[#E52323]" />,
  "agriculture-and-soil": <Sprout className="w-5 h-5 text-[#E52323]" />,
  "traditional-decorative": <Sparkles className="w-5 h-5 text-amber-700" />,
};

export default function ApplicationsPreview() {
  return (
    <section className="py-28 bg-[#F5F5F2] border-t border-[#E5E5E5] relative" id="applications-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E5] text-xs font-mono-code text-[#E52323] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span>INDUSTRIAL APPLICATIONS</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#111111] tracking-tight uppercase">
              POWERING ESSENTIAL SECTORS
            </h2>
            <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
              Our mineral compounds are integrated into basic oxygen steelmaking, civil infrastructure, chemical neutralizing, polymer compounding, and traditional sacred arts.
            </p>
          </div>

          <Link
            href="/applications"
            className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#111111] hover:text-[#E52323] font-bold transition-colors pb-1 border-b border-[#111111] hover:border-[#E52323] shrink-0"
          >
            <span>Explore All Sectors</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPLICATIONS.slice(0, 6).map((app) => (
            <div
              key={app.id}
              className="mineral-card-light rounded-sm p-7 flex flex-col justify-between space-y-6 group hover:border-[#D0D0CA] transition-all bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-[#F5F5F2] border border-[#EAEAE5] flex items-center justify-center">
                    {APP_ICONS[app.id] || <Layers className="w-5 h-5 text-[#E52323]" />}
                  </div>
                  <span className="text-[11px] font-mono-code text-[#888888] font-semibold">
                    SECTOR {app.categoryNumber}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-[#111111] group-hover:text-black transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-xs text-[#E52323] font-mono-code mt-0.5 font-semibold">
                    {app.specFocus}
                  </p>
                </div>

                <p className="text-xs text-[#555555] leading-relaxed line-clamp-3 font-normal">
                  {app.description}
                </p>

                {/* Key Roles */}
                <div className="space-y-1.5 pt-2 border-t border-[#F0F0EC] text-[11px] text-[#444444]">
                  {app.roleOfMinerals.slice(0, 2).map((role, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-[#E52323] mt-0.5 font-bold">&bull;</span>
                      <span className="line-clamp-1">{role}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Products */}
              <div className="pt-4 border-t border-[#F0F0EC] flex items-center justify-between text-xs font-mono-code">
                <span className="text-[#888888]">
                  {app.recommendedProducts.length} Key Minerals
                </span>
                <Link
                  href="/applications"
                  className="inline-flex items-center gap-1 text-[#111111] hover:text-[#E52323] font-bold transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
