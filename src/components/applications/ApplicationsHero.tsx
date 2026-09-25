import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ApplicationsHero() {
  return (
    <section className="pt-24 sm:pt-36 lg:pt-40 pb-12 sm:pb-20 bg-[#F7F6F2] border-b border-[#E8E8E2]/60 overflow-hidden font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16">
        
        {/* Top Micro Label (Far Right on desktop) */}
        <div className="flex justify-between items-start pb-4 sm:pb-8">
          <div className="inline-flex items-center gap-2">
            <span className="w-4 h-[2px] bg-[#E52323]" />
            <span className="text-[11px] sm:text-xs font-mono-code font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#E52323]">
              APPLICATIONS
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="w-6 h-[2px] bg-[#E52323]" />
            <span className="text-[11px] font-mono-code font-bold tracking-[0.2em] uppercase text-[#777777]">
              MINERALS FOR A WIDER INDUSTRIAL WORLD.
            </span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-end">
          
          {/* Large Editorial Heading */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[100px] font-black uppercase tracking-tight text-[#111111] leading-[0.9] sm:leading-[0.88]">
              MEET
              <br />
              <span className="text-[#E52323]">PRODUCTS.</span>
            </h1>
          </div>

          {/* Supporting Copy and Plain Text Link */}
          <div className="lg:col-span-5 space-y-6 lg:pb-2">
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-[460px] font-normal">
              Different industries require different mineral characteristics, formats and supply arrangements. Our products support a wide variety of industrial applications.
            </p>

            <div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#111111] pb-1 border-b border-[#111111] hover:text-[#E52323] hover:border-[#E52323] transition-colors group"
              >
                <span>EXPLORE OUR PRODUCTS</span>
                <ArrowRight className="w-4 h-4 text-[#E52323] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
