import React from "react";
import Link from "next/link";
import { ArrowUpRight, Factory, Truck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function CompanyCapability() {
  return (
    <section className="py-28 bg-[#F0F0EC] border-t border-[#E5E5E0] relative" id="company">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E0E0D8] text-xs font-mono-code text-[#E52323] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span>PROCESSING INFRASTRUCTURE</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#111111] tracking-tight leading-tight uppercase">
              SCALABLE PROCESSING.
              <br />
              <span className="text-[#555555]">UNCOMPROMISED PURITY.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#444444] leading-relaxed font-normal">
              Vision Stone operates an integrated mineral processing hub engineered for continuous high-tonnage output. From geological extraction and primary crushing to sub-micron air classification and automated moisture-proof packaging, we supply raw and refined minerals to manufacturing leaders across India and international markets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {COMPANY_INFO.coreValues.map((val, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#E2E2DC] rounded-sm space-y-1.5 shadow-subtle">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111111] uppercase tracking-wider font-mono-code">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                    {val.title}
                  </div>
                  <p className="text-xs text-[#555555] leading-relaxed font-normal">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-2 text-xs font-mono-code uppercase tracking-widest text-[#111111] hover:text-[#E52323] font-bold transition-colors pb-1 border-b border-[#111111] hover:border-[#E52323]"
              >
                <span>Tour Our Processing Plant & Testing Facilities</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Metrics Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-sm p-8 sm:p-10 space-y-8 border border-[#E2E2DC] shadow-card">
              <div className="flex items-center justify-between border-b border-[#F0F0EC] pb-4">
                <span className="text-xs font-mono-code text-[#666666] uppercase tracking-widest font-semibold">
                  Performance Metrics
                </span>
                <span className="text-[11px] font-mono-code text-[#E52323] font-bold">ANNUAL CAPACITY</span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {COMPANY_INFO.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111] block">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-mono-code text-[#666666] uppercase tracking-wider block font-semibold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F0F0EC] space-y-3 text-xs text-[#444444] font-mono-code">
                <div className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-[#E52323]" />
                  <span>Integrated Road, Rail & Sea Port Logistics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Factory className="w-4 h-4 text-[#E52323]" />
                  <span>Salem Industrial Mineral Corridor, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
