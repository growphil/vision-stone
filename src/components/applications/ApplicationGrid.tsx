import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";

// Asymmetric column spans for desktop (12-column grid)
const TILE_CONFIG = [
  { id: "01", span: "lg:col-span-5 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]" },
  { id: "02", span: "lg:col-span-4 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]" },
  { id: "03", span: "lg:col-span-3 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]" },
  { id: "04", span: "lg:col-span-4 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]" },
  { id: "05", span: "lg:col-span-4 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]" },
  { id: "06", span: "lg:col-span-4 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]" },
  { id: "07", span: "lg:col-span-6 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]" },
  { id: "08", span: "lg:col-span-6 min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]" },
];

export default function ApplicationGrid() {
  return (
    <section className="bg-[#F7F6F2] py-4 sm:py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric Masonry Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-2 sm:gap-3">
          {APPLICATIONS.map((app, idx) => {
            const config = TILE_CONFIG[idx] || { span: "lg:col-span-6 min-h-[320px]" };

            return (
              <div
                key={app.id}
                className={`group relative overflow-hidden rounded-[2px] bg-[#111111] flex flex-col justify-between p-5 sm:p-8 ${config.span}`}
              >
                {/* Full-Bleed Background Image */}
                <Image
                  src={app.image}
                  alt={app.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  priority={idx < 3}
                />

                {/* Dark Gradient Overlay (Transparent top, darker bottom, subtle darkening on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 group-hover:from-black/95 group-hover:via-black/50 transition-colors duration-500 pointer-events-none" />

                {/* Top-Left: Application Number & Red Accent Line */}
                <div className="relative z-10">
                  <span className="text-base sm:text-lg font-mono-code font-bold text-white tracking-widest block">
                    {app.id}
                  </span>
                  <div className="w-6 h-[2px] bg-[#E52323] mt-1.5 transition-all duration-300 group-hover:w-10" />
                </div>

                {/* Bottom-Left: Large White Title & Related Products Text Links */}
                <div className="relative z-10 space-y-4 pt-20">
                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl xl:text-[32px] font-black uppercase tracking-tight text-white leading-[0.95] drop-shadow-md transition-transform duration-300 group-hover:-translate-y-1">
                    {app.name}
                  </h2>

                  {/* Related Products: Plain Text Links (No white pills, No product images) */}
                  <div className="space-y-1.5 pt-1">
                    {app.relatedProducts.map((prod) => (
                      <Link
                        key={prod.slug}
                        href={`/products/${prod.slug}`}
                        className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90 hover:text-white group/link transition-colors"
                      >
                        <span className="tracking-wide">{prod.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover/link:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
