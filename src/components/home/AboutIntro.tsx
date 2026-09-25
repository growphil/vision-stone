import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function AboutIntro() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 font-display border-t border-[#E8E8E4]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* TOP EDITORIAL BADGE */}
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
            ABOUT VISION STONES
          </span>
        </div>

        {/* MAIN EDITORIAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Brand Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-[1.05]">
              FROM ESTABLISHED MANUFACTURING
              <br />
              <span className="text-[#E52323]">TO A MODERN BRAND</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#44444F] leading-relaxed font-normal">
              <p>
                Vision Stones is the current brand being taken forward. Our manufacturing roots date back to 1997.
              </p>
              <p>
                The business operated under different company and operating names over the years. Today, that underlying manufacturing capability, industrial infrastructure, and decades of processing experience support the Vision Stones brand.
              </p>
              <p>
                Operating from our manufacturing base in Tirunelveli, Tamil Nadu, we supply high-purity minerals and raw materials to over 450+ clients across India, maintaining direct communication and dependable bulk supply.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors group"
              >
                <span className="border-b-2 border-[#111111] group-hover:border-[#E52323] pb-0.5 transition-colors">
                  READ OUR FULL JOURNEY
                </span>
                <ArrowRight className="w-4 h-4 text-[#E52323] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Key Pillar Metrics & Foundation */}
          <div className="lg:col-span-5 bg-[#FAF9F6] p-8 sm:p-10 rounded-[10px] border border-[#E8E8E4] space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                ESTABLISHED FOUNDATION
              </span>
              <h3 className="text-2xl font-black uppercase text-[#111111]">
                BUILT ON INDUSTRIAL EXPERIENCE
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#E8E8E4]">
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black font-display text-[#111111]">
                  1997
                </span>
                <p className="text-xs uppercase tracking-wider font-bold text-[#666666]">
                  Manufacturing Roots
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-black font-display text-[#E52323]">
                  450+
                </span>
                <p className="text-xs uppercase tracking-wider font-bold text-[#666666]">
                  Clients Served
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#E8E8E4]">
              <div className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                CORE VALUES IN PRACTICE
              </div>
              {COMPANY_INFO.coreValues.slice(0, 4).map((val) => (
                <div key={val.name} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E52323] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-[#111111] uppercase tracking-wide">
                      {val.name}:{" "}
                    </span>
                    <span className="text-xs text-[#555555]">
                      {val.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs text-[#777777] border-t border-[#E8E8E4]">
              <span>Location: </span>
              <strong className="text-[#111111]">{COMPANY_INFO.location.full}</strong>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
