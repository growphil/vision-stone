import React from "react";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CompanyCapability() {
  return (
    <section className="w-full bg-[#FAFAF8] py-20 sm:py-28 border-b border-[#E8E8E2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="space-y-3 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <span className="w-[42px] h-[2px] bg-[#E52323]" />
            <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#737373]">
              CORE VALUES &amp; CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight sm:leading-none">
            ENGINEERED FOR
            <br />
            <span className="text-[#E52323]">DEPENDABLE SUPPLY.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#555555] max-w-xl font-normal leading-relaxed">
            Built on strict quality controls, direct customer communication, and over two decades of mineral processing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-[10px] bg-white border border-[#E8E8E2] space-y-4 hover:border-[#D0D0CA] transition-colors shadow-2xs"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-[4px] bg-[#FAF9F6] border border-[#E8E8E2] flex items-center justify-center text-[#E52323] font-mono text-xs font-bold">
                  0{idx + 1}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#E52323]" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-black uppercase text-[#111111] tracking-tight">
                  {val.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
