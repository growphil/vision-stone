"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MobileHeroOverlayProps {
  progress: number;
}

export default function MobileHeroOverlay({ progress }: MobileHeroOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Phase 01: Initial Title before scroll ("MINERAL. BUILT FROM THE EARTH.") - BOTTOM
  const stage1Ref = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const lineDescRef = useRef<HTMLParagraphElement>(null);

  // Phase 02: ("RAW MATERIAL") - CENTER
  const stage2Ref = useRef<HTMLDivElement>(null);
  const stage2Line1Ref = useRef<HTMLSpanElement>(null);
  const stage2Line2Ref = useRef<HTMLSpanElement>(null);
  const stage2DescRef = useRef<HTMLParagraphElement>(null);

  // Phase 03: ("ENGINEERED THROUGH PRECISION.") - BOTTOM
  const stage3Ref = useRef<HTMLDivElement>(null);
  const stage3Line1Ref = useRef<HTMLSpanElement>(null);
  const stage3Line2Ref = useRef<HTMLSpanElement>(null);
  const stage3Line3Ref = useRef<HTMLSpanElement>(null);
  const stage3DescRef = useRef<HTMLParagraphElement>(null);

  // Phase 04: (Final Product + CTAs) - BOTTOM
  const stage4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clamped linear interpolation helper
    const lerp = (p: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
      if (p <= inMin) return outMin;
      if (p >= inMax) return outMax;
      return outMin + ((p - inMin) / (inMax - inMin)) * (outMax - outMin);
    };

    // ========================================================
    // PHASE 01: INITIAL TITLE AT BOTTOM (Visible BEFORE scroll [0.00 - 0.23])
    // "MINERAL. BUILT FROM THE EARTH."
    // ========================================================
    if (stage1Ref.current) {
      const isVisible = progress <= 0.23;
      stage1Ref.current.style.visibility = isVisible ? "visible" : "hidden";

      let opacity = 1;
      let y = 0;
      let scale = 1;

      if (progress <= 0.14) {
        opacity = 1;
        y = 0;
        scale = 1;
      } else if (progress > 0.14 && progress <= 0.23) {
        opacity = lerp(progress, 0.14, 0.23, 1, 0);
        y = lerp(progress, 0.14, 0.23, 0, -25);
        scale = lerp(progress, 0.14, 0.23, 1, 0.98);
      } else {
        opacity = 0;
      }

      stage1Ref.current.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      stage1Ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
    }

    // ========================================================
    // PHASE 02: STAGE 02 IN CENTER OF SCREEN [0.22 - 0.48]
    // "RAW MATERIAL."
    // ========================================================
    if (stage2Ref.current) {
      const isVisible = progress >= 0.21 && progress <= 0.49;
      stage2Ref.current.style.visibility = isVisible ? "visible" : "hidden";

      let opacity = 0;
      let y = 25;
      let scale = 0.96;

      if (progress >= 0.22 && progress <= 0.30) {
        opacity = lerp(progress, 0.22, 0.30, 0, 1);
        y = lerp(progress, 0.22, 0.30, 25, 0);
        scale = lerp(progress, 0.22, 0.30, 0.96, 1);
      } else if (progress > 0.30 && progress < 0.40) {
        opacity = 1;
        y = 0;
        scale = 1;
      } else if (progress >= 0.40 && progress <= 0.48) {
        opacity = lerp(progress, 0.40, 0.48, 1, 0);
        y = lerp(progress, 0.40, 0.48, 0, -25);
        scale = lerp(progress, 0.40, 0.48, 1, 0.98);
      }

      stage2Ref.current.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      stage2Ref.current.style.transform = `translate3d(0, calc(-50% + ${y}px), 0) scale(${scale})`;
    }

    // ========================================================
    // PHASE 03: STAGE 03 AT BOTTOM [0.46 - 0.72]
    // "ENGINEERED THROUGH PRECISION."
    // ========================================================
    if (stage3Ref.current) {
      const isVisible = progress >= 0.45 && progress <= 0.73;
      stage3Ref.current.style.visibility = isVisible ? "visible" : "hidden";

      let opacity = 0;
      let y = 25;
      let scale = 0.97;

      if (progress >= 0.46 && progress <= 0.54) {
        opacity = lerp(progress, 0.46, 0.54, 0, 1);
        y = lerp(progress, 0.46, 0.54, 25, 0);
        scale = lerp(progress, 0.46, 0.54, 0.97, 1);
      } else if (progress > 0.54 && progress < 0.64) {
        opacity = 1;
        y = 0;
        scale = 1;
      } else if (progress >= 0.64 && progress <= 0.72) {
        opacity = lerp(progress, 0.64, 0.72, 1, 0);
        y = lerp(progress, 0.64, 0.72, 0, -20);
        scale = lerp(progress, 0.64, 0.72, 1, 0.98);
      }

      stage3Ref.current.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      stage3Ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
    }

    // ========================================================
    // PHASE 04: STAGE 04 AT BOTTOM [0.70 - 1.00]
    // FINAL PRODUCT & CTAs
    // ========================================================
    if (stage4Ref.current) {
      let opacity = 0;
      let y = 25;
      let scale = 0.97;

      if (progress >= 0.70 && progress <= 0.80) {
        opacity = lerp(progress, 0.70, 0.80, 0, 1);
        y = lerp(progress, 0.70, 0.80, 25, 0);
        scale = lerp(progress, 0.70, 0.80, 0.97, 1);
      } else if (progress > 0.80) {
        opacity = 1;
        y = 0;
        scale = 1;
      }

      stage4Ref.current.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      stage4Ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      stage4Ref.current.style.visibility = opacity > 0.01 ? "visible" : "hidden";
    }
  }, [progress]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-20 font-display select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ========================================================
          SUBTLE LOCALIZED SOFT BASE GRADIENTS FOR CONTRAST
          ======================================================== */}
      {/* Bottom Atmosphere Gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-[52vh] pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(to top, rgba(7,7,9,0.88) 0%, rgba(7,7,9,0.45) 55%, rgba(7,7,9,0) 100%)",
        }}
      />
      {/* Center Subtle Atmosphere Vignette for Stage 02 */}
      <div
        className="absolute inset-0 pointer-events-none z-1"
        style={{
          background:
            "radial-gradient(circle at center, rgba(7,7,9,0.45) 0%, rgba(7,7,9,0.15) 50%, rgba(7,7,9,0) 75%)",
        }}
      />

      {/* ========================================================
          PHASE 01: INITIAL HERO TITLE AT BOTTOM [0.00 - 0.23]
          Visible immediately before scrolling begins
          ======================================================== */}
      <div
        ref={stage1Ref}
        className="absolute left-[5vw] right-[5vw] bottom-[calc(9.5vh+env(safe-area-inset-bottom,0px))] w-[90%] z-20 will-change-transform"
      >
        {/* Label Header */}
        <div className="flex items-center gap-2 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">STAGE 01</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span className="text-white/90">MINERAL ORIGIN</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-3 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-start w-full text-[clamp(40px,12.2vw,68px)]">
          <span
            ref={line1Ref}
            className="will-change-transform inline-block whitespace-nowrap"
          >
            MINERAL.
          </span>
          <span
            ref={line2Ref}
            className="will-change-transform inline-block whitespace-nowrap text-[#F3F4F6]"
          >
            BUILT FROM
          </span>
          <span
            ref={line3Ref}
            className="will-change-transform inline-block whitespace-nowrap text-white"
          >
            THE EARTH.
          </span>
        </h1>

        {/* Secondary Subtitle */}
        <p
          ref={lineDescRef}
          className="text-xs xs:text-sm text-white/90 font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] will-change-transform max-w-sm"
        >
          Mineral manufacturing rooted in experience since 1997.
        </p>
      </div>

      {/* ========================================================
          PHASE 02: STAGE 02 IN THE CENTER OF SCREEN [0.22 - 0.48]
          Appears right in the middle as user starts scrolling
          ======================================================== */}
      <div
        ref={stage2Ref}
        className="absolute left-[5vw] right-[5vw] top-1/2 w-[90%] z-20 will-change-transform flex flex-col items-center text-center"
        style={{ visibility: "hidden" }}
      >
        <div className="flex items-center justify-center gap-1.5 text-[11px] xs:text-xs font-bold uppercase tracking-[0.16em] text-[#E52323] mb-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">STAGE 02</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span>UNREFINED MINERAL</span>
        </div>

        <h2 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-3 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-center w-full text-[clamp(40px,12.2vw,68px)]">
          <span
            ref={stage2Line1Ref}
            className="will-change-transform inline-block whitespace-nowrap"
          >
            RAW
          </span>
          <span
            ref={stage2Line2Ref}
            className="will-change-transform inline-block whitespace-nowrap text-[#F3F4F6]"
          >
            MATERIAL.
          </span>
        </h2>

        <p
          ref={stage2DescRef}
          className="text-xs xs:text-sm text-white/90 font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] will-change-transform max-w-xs mx-auto"
        >
          High-purity calcium &amp; dolomite stone extracted for processing.
        </p>
      </div>

      {/* ========================================================
          PHASE 03: STAGE 03 AT BOTTOM [0.46 - 0.72]
          ======================================================== */}
      <div
        ref={stage3Ref}
        className="absolute left-[5vw] right-[5vw] bottom-[calc(9.5vh+env(safe-area-inset-bottom,0px))] w-[90%] z-20 will-change-transform"
        style={{ visibility: "hidden" }}
      >
        <div className="flex items-center gap-2 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">STAGE 03</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span className="text-white/90">PROCESSING</span>
        </div>

        <h2 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-3 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-start w-full text-[clamp(34px,10.2vw,56px)]">
          <span ref={stage3Line1Ref} className="will-change-transform inline-block whitespace-nowrap">
            ENGINEERED
          </span>
          <span ref={stage3Line2Ref} className="will-change-transform inline-block whitespace-nowrap text-[#F3F4F6]">
            THROUGH
          </span>
          <span ref={stage3Line3Ref} className="will-change-transform inline-block whitespace-nowrap text-white">
            PRECISION.
          </span>
        </h2>

        <p
          ref={stage3DescRef}
          className="text-xs xs:text-sm text-white/90 font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] will-change-transform max-w-sm"
        >
          Custom mesh sizes from 0–240 mesh engineered for consistent industrial chemistry.
        </p>
      </div>

      {/* ========================================================
          PHASE 04: STAGE 04 AT BOTTOM [0.70 - 1.00]
          ======================================================== */}
      <div
        ref={stage4Ref}
        className="absolute left-[5vw] right-[5vw] bottom-[calc(9.5vh+env(safe-area-inset-bottom,0px))] w-[90%] z-20 will-change-transform"
        style={{ visibility: "hidden" }}
      >
        <div className="flex items-center gap-2 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">STAGE 04</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span className="text-white/90">FINISHED PRODUCT</span>
        </div>

        <h2 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-2.5 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-start w-full text-[clamp(32px,9.5vw,52px)]">
          <span className="whitespace-nowrap">DOLOMITE.</span>
          <span className="whitespace-nowrap text-[#F3F4F6]">REFINED FOR</span>
          <span className="whitespace-nowrap">MODERN INDUSTRY.</span>
        </h2>

        <p className="text-xs xs:text-sm text-white/90 font-normal leading-snug mb-3.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-sm">
          From earth to high-purity industrial supply across India.
        </p>

        {/* Action CTAs */}
        <div className="pointer-events-auto space-y-2.5 pt-1">
          <div className="flex items-center gap-2 text-[10px] xs:text-[11px] font-bold uppercase tracking-[0.12em] text-white/90 border-t border-white/20 pt-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span>SINCE 1997 &bull; 450+ CLIENTS</span>
          </div>

          <div className="flex items-center gap-3 pt-0.5">
            <Link
              href="#products"
              className="text-[12px] font-bold uppercase tracking-wider text-white hover:text-[#E52323] border-b-2 border-white pb-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
            >
              VIEW PRODUCTS
            </Link>
            <span className="text-white/40">&bull;</span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-[#E52323] text-white text-[12px] font-bold uppercase tracking-wider px-3.5 py-1.5 shadow-md active:bg-[#c91a1a]"
            >
              <span>GET QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}



