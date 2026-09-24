import React from "react";
import dynamic from "next/dynamic";
import ProductUniverse from "@/components/home/ProductUniverse";
import ApplicationsPreview from "@/components/home/ApplicationsPreview";
import QualitySection from "@/components/home/QualitySection";
import CompanyCapability from "@/components/home/CompanyCapability";
import FinalCTA from "@/components/home/FinalCTA";

// Dynamic client-side import for the heavy 240-frame sequence
const ImageSequence = dynamic(() => import("@/components/home/ImageSequence"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen bg-[#070709] flex items-center justify-center">
      <div className="text-xs font-mono-code text-neutral-400">
        INITIALIZING CINEMATIC SEQUENCE...
      </div>
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#FFFFFF] text-[#111111]">
      {/* 
        SECTION 01 & 02: 
        The Core 240-Frame Cinematic Scroll-Driven Mineral Transformation Sequence
        (Uses the existing ~240 JPEG frames from the Dolomite Powder folder)
      */}
      <ImageSequence totalFrames={240} folderPath="/dolomite-powder" />

      {/* SECTION 03: Product Universe */}
      <ProductUniverse />

      {/* SECTION 04: Industrial Applications */}
      <ApplicationsPreview />

      {/* SECTION 05: Quality & Precision Laboratory Verification */}
      <QualitySection />

      {/* SECTION 06: Company Processing Infrastructure & Capacity */}
      <CompanyCapability />

      {/* SECTION 07: Commercial Engagement & Final CTA */}
      <FinalCTA />
    </div>
  );
}
