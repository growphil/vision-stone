import React from "react";
import Image from "next/image";

export default function ApplicationStory() {
  const stats = [
    { value: "08", label: "INDUSTRIES SERVED", detail: "Across core manufacturing sectors" },
    { value: "450+", label: "CLIENTS SERVED", detail: "Trusted supply relationships" },
    { value: "CONSISTENT", label: "SUPPLY CAPABILITY", detail: "Uniform particle grades & packing" },
    { value: "TRUSTED", label: "INDUSTRIAL PARTNER", detail: "Roots dating back to 1997" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FFFFFF] overflow-hidden border-b border-[#E8E8E4]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Mineral Texture / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full aspect-[4/3] rounded-[10px] overflow-hidden border border-[#E8E8E4] shadow-md bg-[#FAF9F6]">
              <Image
                src="/application/general-manufacturing.webp"
                alt="Vision Stones Industrial Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono-code font-bold uppercase tracking-widest text-white/90 bg-black/60 px-2.5 py-1 rounded backdrop-blur-sm">
                  PROCESSING FACILITY • TIRUNELVELI
                </span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Overview & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-[2px] bg-[#E52323]" />
              <span className="text-xs sm:text-sm font-mono-code font-bold tracking-[0.25em] uppercase text-[#E52323]">
                MINERALS FOR REAL INDUSTRIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111] leading-none">
              DIVERSE APPLICATIONS.
              <br />
              <span className="text-[#E52323]">ONE RELIABLE PARTNER.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed pt-2">
              Vision Stones supplies mineral and raw-material products for customers across agriculture, fertilizer and agri-inputs, rubber and polymers, paints, tiles and ceramics, construction, pipeline applications, and general manufacturing.
            </p>
          </div>

        </div>

        {/* 4 Pillars / Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-16 mt-16 border-t border-[#E8E8E4]">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-[6px] bg-[#FAF9F6] border border-[#E8E8E4]/60">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-[#111111] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold font-mono-code uppercase tracking-wider text-[#E52323]">
                {stat.label}
              </div>
              <p className="text-[11px] text-[#777777] leading-normal pt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
