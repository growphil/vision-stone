import React from "react";
import dynamic from "next/dynamic";
import ProductUniverse from "@/components/home/ProductUniverse";
import AboutIntro from "@/components/home/AboutIntro";
import ManufacturingHeritage from "@/components/home/ManufacturingHeritage";
import DolomiteFocus from "@/components/home/DolomiteFocus";
import IndustriesPreview from "@/components/home/IndustriesPreview";
import WhyVisionStones from "@/components/home/WhyVisionStones";
import HowWeWork from "@/components/home/HowWeWork";
import QuoteCTA from "@/components/home/QuoteCTA";

// Dynamic client-side import for the heavy 240-frame sequence
const ImageSequence = dynamic(() => import("@/components/home/ImageSequence"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-[#070709] flex items-center justify-center font-display">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 bg-[#111111] border border-white/20 flex items-center justify-center relative overflow-hidden">
          <span className="font-extrabold text-sm text-white tracking-widest">VS</span>
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#E52323] animate-ping" />
        </div>
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          INITIALIZING CINEMATIC SEQUENCE...
        </div>
      </div>
    </div>
  ),
});

export default function HomePage() {
  return (
    <main className="flex flex-col w-full bg-[#FFFFFF] text-[#111111]">
      {/* 01: CINEMATIC HERO (240-frame scroll-driven Dolomite sequence) */}
      <ImageSequence totalFrames={240} folderPath="/dolomite-powder" />

      {/* 02: PRODUCT UNIVERSE */}
      <ProductUniverse />

      {/* 03: ABOUT VISION STONES */}
      <AboutIntro />

      {/* 04: MANUFACTURING ROOTS SINCE 1997 */}
      <ManufacturingHeritage />

      {/* 05: DOLOMITE FOCUS */}
      <DolomiteFocus />

      {/* 06: INDUSTRIES / APPLICATIONS */}
      <IndustriesPreview />

      {/* 07: WHY VISION STONES */}
      <WhyVisionStones />

      {/* 08: HOW WE WORK */}
      <HowWeWork />

      {/* 09: REQUEST A QUOTE */}
      <QuoteCTA />

      {/* 10: FOOTER is mounted in RootLayout */}
    </main>
  );
}
