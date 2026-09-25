import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ApplicationCTA() {
  return (
    <section className="py-16 sm:py-28 lg:py-40 bg-[#F7F6F2] font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <span className="text-xs font-mono-code font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#E52323] block">
              CUSTOM REQUIREMENTS
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-[0.95]">
              HAVE A SPECIFIC
              <br />
              APPLICATION
              <br />
              <span className="text-[#E52323]">REQUIREMENT?</span>
            </h2>
          </div>

          {/* Right Column: Copy & Plain Actions */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
              Tell us what material, quantity, specification, packaging and delivery requirement you are looking for.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 pt-1 sm:pt-2">
              <Link
                href="/contact?intent=quote"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E52323] hover:bg-[#C91A1A] text-white text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors group text-center py-2 sm:py-0"
              >
                <span>CONTACT OUR TEAM</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E52323] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
