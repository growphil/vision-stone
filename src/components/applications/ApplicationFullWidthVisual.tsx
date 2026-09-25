import React from "react";
import Image from "next/image";

export default function ApplicationFullWidthVisual() {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] max-h-[760px] overflow-hidden bg-[#111111] flex items-center">
      {/* Background Image */}
      <Image
        src="/application/general-manufacturing.webp"
        alt="Vision Stones Industrial Raw Materials"
        fill
        sizes="100vw"
        className="object-cover object-center transition-transform duration-1000 ease-out hover:scale-105"
      />

      {/* Localized subtle dark gradient behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent pointer-events-none" />

      {/* Editorial Typography Overlay */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-12 lg:px-16">
        <div className="max-w-2xl space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[0.95]">
            MINERALS
            <br />
            FOR DIFFERENT
            <br />
            <span className="text-[#E52323]">INDUSTRIES.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#D4D4CE] max-w-lg font-normal pt-2 leading-relaxed">
            Mineral and raw-material supply across diverse industrial requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
