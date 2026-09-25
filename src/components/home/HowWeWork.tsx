import React from "react";
import { COMPANY_INFO } from "@/data/company";

export default function HowWeWork() {
  return (
    <section className="w-full bg-[#FAF9F6] text-[#111111] py-24 sm:py-32 font-display border-t border-[#E8E8E4]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* EDITORIAL HEADER */}
        <div className="space-y-3 max-w-3xl mb-16">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
              ENGAGEMENT MODEL
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-none">
            HOW WE WORK
          </h2>
          <p className="text-base sm:text-lg text-[#555555] leading-relaxed pt-2">
            A transparent five-step process designed to confirm requirement clarity, guarantee production feasibility, and ensure reliable delivery.
          </p>
        </div>

        {/* HORIZONTAL TIMELINE ON DESKTOP / VERTICAL ON MOBILE */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          
          {/* Subtle timeline track line across desktop */}
          <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-[#E0E0DB] z-0" />

          {COMPANY_INFO.howWeWork.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white p-5 sm:p-7 rounded-[10px] border border-[#E8E8E4] flex flex-col justify-between shadow-subtle relative z-10 hover:border-[#D0D0CA] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border-2 border-[#E52323] flex items-center justify-center text-xs font-mono font-black text-[#111111]">
                    {step.step}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-[#888888] uppercase">
                    STEP 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase text-[#111111] tracking-tight">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F5F5F2] flex items-center justify-between text-[10px] font-mono text-[#888888]">
                <span>PROCESS 0{idx + 1}/05</span>
                <span className="w-1 h-1 rounded-full bg-[#E52323]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
