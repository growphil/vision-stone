import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

export default function ApplicationsContext() {
  return (
    <section className="py-16 sm:py-28 lg:py-40 bg-[#F7F6F2] border-t border-b border-[#E8E8E2]/60 font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 space-y-16 sm:space-y-28 lg:space-y-36">
        
        {/* SECTION 19: APPLICATIONS IN CONTEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-[0.95]">
              APPLICATIONS
              <br />
              <span className="text-[#E52323]">IN CONTEXT.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-lg font-normal">
              Different industrial requirements call for different mineral products, formats and supply arrangements.
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

        {/* SECTION 20: FROM APPLICATION TO MATERIAL (Editorial Relationship Rows) */}
        <div className="space-y-12">
          <div className="pb-6 border-b border-[#E0DFD8]">
            <span className="text-xs font-mono-code font-bold tracking-[0.25em] uppercase text-[#E52323] block mb-2">
              MATERIAL MATRIX
            </span>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111111]">
              FROM APPLICATION TO MATERIAL.
            </h3>
          </div>

          {/* Minimal Editorial Rows (No Cards, No Pills) */}
          <div className="divide-y divide-[#E0DFD8] border-b border-[#E0DFD8]">
            {APPLICATIONS.map((app) => (
              <div
                key={app.id}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center"
              >
                {/* Industry Name */}
                <div className="md:col-span-5 flex items-center gap-4">
                  <span className="text-xs font-mono-code font-bold text-[#888888]">
                    {app.id}
                  </span>
                  <h4 className="text-base sm:text-lg font-black uppercase text-[#111111] tracking-tight">
                    {app.name}
                  </h4>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex md:col-span-1 justify-center">
                  <ArrowRight className="w-4 h-4 text-[#E52323]" />
                </div>

                {/* Plain Typography Products */}
                <div className="md:col-span-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                  {app.relatedProducts.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#444444] hover:text-[#E52323] transition-colors group/p"
                    >
                      <span>{prod.name}</span>
                      <ArrowRight className="w-3 h-3 text-[#E52323] group-hover/p:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
