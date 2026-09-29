"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MobileHeroOverlayProps {
  progress: number;
}

export default function MobileHeroOverlay({ progress }: MobileHeroOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Zone A refs ("FROM THE EARTH")
  const zoneATopRightRef = useRef<HTMLDivElement>(null);
  const zoneALine1Ref = useRef<HTMLSpanElement>(null);
  const zoneALine2Ref = useRef<HTMLSpanElement>(null);
  const zoneADescRef = useRef<HTMLParagraphElement>(null);

  // Zone B refs ("RAW MATERIAL")
  const zoneBMiddleRef = useRef<HTMLDivElement>(null);
  const zoneBLine1Ref = useRef<HTMLSpanElement>(null);
  const zoneBLine2Ref = useRef<HTMLSpanElement>(null);
  const zoneBDescRef = useRef<HTMLParagraphElement>(null);

  // Zone C (Main Hero) refs ("MINERAL. BUILT FROM THE EARTH.")
  const zoneCLowerLeftRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const lineDescRef = useRef<HTMLParagraphElement>(null);

  // Zone D refs ("ENGINEERED THROUGH PRECISION.")
  const zoneDMiddleRef = useRef<HTMLDivElement>(null);
  const zoneDLine1Ref = useRef<HTMLSpanElement>(null);
  const zoneDLine2Ref = useRef<HTMLSpanElement>(null);
  const zoneDLine3Ref = useRef<HTMLSpanElement>(null);
  const zoneDDescRef = useRef<HTMLParagraphElement>(null);

  // Zone E refs (Final Product + CTAs)
  const zoneEFinalRef = useRef<HTMLDivElement>(null);

  // Floating abstract particles
  const particleLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Clamped linear interpolation helper
    const lerp = (p: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
      if (p <= inMin) return outMin;
      if (p >= inMax) return outMax;
      return outMin + ((p - inMin) / (inMax - inMin)) * (outMax - outMin);
    };

    // ========================================================
    // PHASE 01 / ZONE A: HUGE EDITORIAL "FROM THE EARTH" [0.07 - 0.26]
    // ========================================================
    if (zoneATopRightRef.current) {
      const isVisible = progress >= 0.06 && progress <= 0.27;
      zoneATopRightRef.current.style.visibility = isVisible ? "visible" : "hidden";

      let opacity = 0;
      let x = 30;
      let y = 25;
      let scale = 0.96;

      if (progress >= 0.07 && progress <= 0.16) {
        opacity = lerp(progress, 0.07, 0.16, 0, 1);
        x = lerp(progress, 0.07, 0.16, 30, 0);
        y = lerp(progress, 0.07, 0.16, 25, 0);
        scale = lerp(progress, 0.07, 0.16, 0.96, 1);
      } else if (progress > 0.16 && progress < 0.21) {
        opacity = 1;
        x = 0;
        y = 0;
        scale = 1;
      } else if (progress >= 0.21 && progress <= 0.26) {
        opacity = lerp(progress, 0.21, 0.26, 1, 0);
        x = lerp(progress, 0.21, 0.26, 0, -20);
        y = lerp(progress, 0.21, 0.26, 0, -10);
        scale = lerp(progress, 0.21, 0.26, 1, 0.98);
      }
      zoneATopRightRef.current.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      zoneATopRightRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

      // Line 1: "FROM THE"
      if (zoneALine1Ref.current) {
        let op = 0;
        let lineY = 25;
        if (progress >= 0.07 && progress <= 0.14) {
          op = lerp(progress, 0.07, 0.14, 0, 1);
          lineY = lerp(progress, 0.07, 0.14, 25, 0);
        } else if (progress > 0.14 && progress < 0.21) {
          op = 1;
          lineY = 0;
        } else if (progress >= 0.21 && progress <= 0.26) {
          op = lerp(progress, 0.21, 0.26, 1, 0);
          lineY = lerp(progress, 0.21, 0.26, 0, -15);
        }
        zoneALine1Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneALine1Ref.current.style.transform = `translate3d(0, ${lineY}px, 0)`;
      }

      // Line 2: "EARTH"
      if (zoneALine2Ref.current) {
        let op = 0;
        let lineY = 35;
        if (progress >= 0.10 && progress <= 0.17) {
          op = lerp(progress, 0.10, 0.17, 0, 1);
          lineY = lerp(progress, 0.10, 0.17, 35, 0);
        } else if (progress > 0.17 && progress < 0.21) {
          op = 1;
          lineY = 0;
        } else if (progress >= 0.21 && progress <= 0.26) {
          op = lerp(progress, 0.21, 0.26, 1, 0);
          lineY = lerp(progress, 0.21, 0.26, 0, -15);
        }
        zoneALine2Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneALine2Ref.current.style.transform = `translate3d(0, ${lineY}px, 0)`;
      }

      // Subtitle
      if (zoneADescRef.current) {
        let op = 0;
        let descY = 15;
        if (progress >= 0.13 && progress <= 0.18) {
          op = lerp(progress, 0.13, 0.18, 0, 1);
          descY = lerp(progress, 0.13, 0.18, 15, 0);
        } else if (progress > 0.18 && progress < 0.21) {
          op = 1;
          descY = 0;
        } else if (progress >= 0.21 && progress <= 0.26) {
          op = lerp(progress, 0.21, 0.26, 1, 0);
          descY = lerp(progress, 0.21, 0.26, 0, -10);
        }
        zoneADescRef.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneADescRef.current.style.transform = `translate3d(0, ${descY}px, 0)`;
      }
    }

    // ========================================================
    // PHASE 02 / ZONE B: HUGE EDITORIAL "RAW MATERIAL" [0.25 - 0.44]
    // ========================================================
    if (zoneBMiddleRef.current) {
      const isVisible = progress >= 0.24 && progress <= 0.45;
      zoneBMiddleRef.current.style.visibility = isVisible ? "visible" : "hidden";

      let opacity = 0;
      let x = 30;
      let y = 25;
      let scale = 0.96;

      if (progress >= 0.25 && progress <= 0.33) {
        opacity = lerp(progress, 0.25, 0.33, 0, 1);
        x = lerp(progress, 0.25, 0.33, 30, 0);
        y = lerp(progress, 0.25, 0.33, 25, 0);
        scale = lerp(progress, 0.25, 0.33, 0.96, 1);
      } else if (progress > 0.33 && progress < 0.39) {
        opacity = 1;
        x = 0;
        y = 0;
        scale = 1;
      } else if (progress >= 0.39 && progress <= 0.44) {
        opacity = lerp(progress, 0.39, 0.44, 1, 0);
        x = lerp(progress, 0.39, 0.44, 0, -20);
        y = lerp(progress, 0.39, 0.44, 0, -10);
        scale = lerp(progress, 0.39, 0.44, 1, 0.98);
      }
      zoneBMiddleRef.current.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      zoneBMiddleRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

      // Line 1: "RAW"
      if (zoneBLine1Ref.current) {
        let op = 0;
        let lineY = 25;
        if (progress >= 0.25 && progress <= 0.31) {
          op = lerp(progress, 0.25, 0.31, 0, 1);
          lineY = lerp(progress, 0.25, 0.31, 25, 0);
        } else if (progress > 0.31 && progress < 0.39) {
          op = 1;
          lineY = 0;
        } else if (progress >= 0.39 && progress <= 0.44) {
          op = lerp(progress, 0.39, 0.44, 1, 0);
          lineY = lerp(progress, 0.39, 0.44, 0, -15);
        }
        zoneBLine1Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneBLine1Ref.current.style.transform = `translate3d(0, ${lineY}px, 0)`;
      }

      // Line 2: "MATERIAL"
      if (zoneBLine2Ref.current) {
        let op = 0;
        let lineY = 35;
        if (progress >= 0.28 && progress <= 0.34) {
          op = lerp(progress, 0.28, 0.34, 0, 1);
          lineY = lerp(progress, 0.28, 0.34, 35, 0);
        } else if (progress > 0.34 && progress < 0.39) {
          op = 1;
          lineY = 0;
        } else if (progress >= 0.39 && progress <= 0.44) {
          op = lerp(progress, 0.39, 0.44, 1, 0);
          lineY = lerp(progress, 0.39, 0.44, 0, -15);
        }
        zoneBLine2Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneBLine2Ref.current.style.transform = `translate3d(0, ${lineY}px, 0)`;
      }

      // Subtitle
      if (zoneBDescRef.current) {
        let op = 0;
        let descY = 15;
        if (progress >= 0.30 && progress <= 0.35) {
          op = lerp(progress, 0.30, 0.35, 0, 1);
          descY = lerp(progress, 0.30, 0.35, 15, 0);
        } else if (progress > 0.35 && progress < 0.39) {
          op = 1;
          descY = 0;
        } else if (progress >= 0.39 && progress <= 0.44) {
          op = lerp(progress, 0.39, 0.44, 1, 0);
          descY = lerp(progress, 0.39, 0.44, 0, -10);
        }
        zoneBDescRef.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneBDescRef.current.style.transform = `translate3d(0, ${descY}px, 0)`;
      }
    }

    // ========================================================
    // PHASE 03 / ZONE C: MAIN HERO FULL-WIDTH EDITORIAL [0.45 - 0.74]
    // Individual line-by-line staggered reveal:
    // Line 1: "MINERAL." (progress 0.46 -> 0.52)
    // Line 2: "BUILT FROM" (progress 0.51 -> 0.57)
    // Line 3: "THE EARTH." (progress 0.56 -> 0.62)
    // ========================================================
    if (zoneCLowerLeftRef.current) {
      const isVisible = progress >= 0.44 && progress <= 0.74;
      zoneCLowerLeftRef.current.style.visibility = isVisible ? "visible" : "hidden";

      // Line 1: "MINERAL."
      if (line1Ref.current) {
        let op = 0;
        let y = 45;
        let scale = 0.97;
        if (progress >= 0.46 && progress <= 0.52) {
          op = lerp(progress, 0.46, 0.52, 0, 1);
          y = lerp(progress, 0.46, 0.52, 45, 0);
          scale = lerp(progress, 0.46, 0.52, 0.97, 1);
        } else if (progress > 0.52 && progress < 0.67) {
          op = 1;
          y = 0;
          scale = 1;
        } else if (progress >= 0.67 && progress <= 0.73) {
          op = lerp(progress, 0.67, 0.73, 1, 0);
          y = lerp(progress, 0.67, 0.73, 0, -25);
          scale = lerp(progress, 0.67, 0.73, 1, 0.98);
        }
        line1Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        line1Ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      }

      // Line 2: "BUILT FROM"
      if (line2Ref.current) {
        let op = 0;
        let y = 55;
        let scale = 0.97;
        if (progress >= 0.51 && progress <= 0.57) {
          op = lerp(progress, 0.51, 0.57, 0, 1);
          y = lerp(progress, 0.51, 0.57, 55, 0);
          scale = lerp(progress, 0.51, 0.57, 0.97, 1);
        } else if (progress > 0.57 && progress < 0.67) {
          op = 1;
          y = 0;
          scale = 1;
        } else if (progress >= 0.67 && progress <= 0.73) {
          op = lerp(progress, 0.67, 0.73, 1, 0);
          y = lerp(progress, 0.67, 0.73, 0, -25);
          scale = lerp(progress, 0.67, 0.73, 1, 0.98);
        }
        line2Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        line2Ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      }

      // Line 3: "THE EARTH."
      if (line3Ref.current) {
        let op = 0;
        let y = 65;
        let scale = 0.97;
        if (progress >= 0.56 && progress <= 0.62) {
          op = lerp(progress, 0.56, 0.62, 0, 1);
          y = lerp(progress, 0.56, 0.62, 65, 0);
          scale = lerp(progress, 0.56, 0.62, 0.97, 1);
        } else if (progress > 0.62 && progress < 0.67) {
          op = 1;
          y = 0;
          scale = 1;
        } else if (progress >= 0.67 && progress <= 0.73) {
          op = lerp(progress, 0.67, 0.73, 1, 0);
          y = lerp(progress, 0.67, 0.73, 0, -25);
          scale = lerp(progress, 0.67, 0.73, 1, 0.98);
        }
        line3Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        line3Ref.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      }

      // Supporting Line & Label
      if (lineDescRef.current) {
        let op = 0;
        let y = 20;
        if (progress >= 0.59 && progress <= 0.64) {
          op = lerp(progress, 0.59, 0.64, 0, 1);
          y = lerp(progress, 0.59, 0.64, 20, 0);
        } else if (progress > 0.64 && progress < 0.67) {
          op = 1;
          y = 0;
        } else if (progress >= 0.67 && progress <= 0.73) {
          op = lerp(progress, 0.67, 0.73, 1, 0);
          y = lerp(progress, 0.67, 0.73, 0, -15);
        }
        lineDescRef.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        lineDescRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    }

    // ========================================================
    // PHASE 04 / ZONE D: MIDDLE-LEFT PRECISION [0.72 - 0.85]
    // "ENGINEERED THROUGH PRECISION."
    // ========================================================
    if (zoneDMiddleRef.current) {
      const isVisible = progress >= 0.71 && progress <= 0.86;
      zoneDMiddleRef.current.style.visibility = isVisible ? "visible" : "hidden";

      // Line 1: "ENGINEERED"
      if (zoneDLine1Ref.current) {
        let op = 0;
        let y = 35;
        if (progress >= 0.72 && progress <= 0.76) {
          op = lerp(progress, 0.72, 0.76, 0, 1);
          y = lerp(progress, 0.72, 0.76, 35, 0);
        } else if (progress > 0.76 && progress < 0.81) {
          op = 1;
          y = 0;
        } else if (progress >= 0.81 && progress <= 0.85) {
          op = lerp(progress, 0.81, 0.85, 1, 0);
          y = lerp(progress, 0.81, 0.85, 0, -20);
        }
        zoneDLine1Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneDLine1Ref.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }

      // Line 2: "THROUGH"
      if (zoneDLine2Ref.current) {
        let op = 0;
        let y = 40;
        if (progress >= 0.74 && progress <= 0.78) {
          op = lerp(progress, 0.74, 0.78, 0, 1);
          y = lerp(progress, 0.74, 0.78, 40, 0);
        } else if (progress > 0.78 && progress < 0.81) {
          op = 1;
          y = 0;
        } else if (progress >= 0.81 && progress <= 0.85) {
          op = lerp(progress, 0.81, 0.85, 1, 0);
          y = lerp(progress, 0.81, 0.85, 0, -20);
        }
        zoneDLine2Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneDLine2Ref.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }

      // Line 3: "PRECISION."
      if (zoneDLine3Ref.current) {
        let op = 0;
        let y = 45;
        if (progress >= 0.76 && progress <= 0.80) {
          op = lerp(progress, 0.76, 0.80, 0, 1);
          y = lerp(progress, 0.76, 0.80, 45, 0);
        } else if (progress > 0.80 && progress < 0.81) {
          op = 1;
          y = 0;
        } else if (progress >= 0.81 && progress <= 0.85) {
          op = lerp(progress, 0.81, 0.85, 1, 0);
          y = lerp(progress, 0.81, 0.85, 0, -20);
        }
        zoneDLine3Ref.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneDLine3Ref.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }

      // Subtitle
      if (zoneDDescRef.current) {
        let op = 0;
        let y = 15;
        if (progress >= 0.78 && progress <= 0.81) {
          op = lerp(progress, 0.78, 0.81, 0, 1);
          y = lerp(progress, 0.78, 0.81, 15, 0);
        } else if (progress > 0.81 && progress < 0.82) {
          op = 1;
          y = 0;
        } else if (progress >= 0.82 && progress <= 0.85) {
          op = lerp(progress, 0.82, 0.85, 1, 0);
          y = lerp(progress, 0.82, 0.85, 0, -15);
        }
        zoneDDescRef.current.style.opacity = String(Math.max(0, Math.min(1, op)));
        zoneDDescRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    }

    // ========================================================
    // PHASE 05 / ZONE E: FINAL PRODUCT & CTAs [0.84 - 1.00]
    // "MINERALS. REFINED FOR MODERN INDUSTRY."
    // ========================================================
    if (zoneEFinalRef.current) {
      let opacity = 0;
      let y = 25;
      let scale = 0.97;
      if (progress >= 0.83 && progress <= 0.91) {
        opacity = lerp(progress, 0.83, 0.91, 0, 1);
        y = lerp(progress, 0.83, 0.91, 25, 0);
        scale = lerp(progress, 0.83, 0.91, 0.97, 1);
      } else if (progress > 0.91) {
        opacity = 1;
        y = 0;
        scale = 1;
      }
      zoneEFinalRef.current.style.opacity = String(Math.max(0, Math.min(1, opacity)));
      zoneEFinalRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(${scale})`;
      zoneEFinalRef.current.style.visibility = opacity > 0.01 ? "visible" : "hidden";
    }

    // Abstract particles drift
    if (particleLayerRef.current) {
      const y = lerp(progress, 0, 1, 0, -70);
      particleLayerRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
    }
  }, [progress]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-20 font-display select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* ========================================================
          SUBTLE LOCALIZED SOFT BASE GRADIENT BEHIND BOTTOM AREA ONLY
          (Image remains 100% naturally bright, clear & uncluttered)
          ======================================================== */}
      <div
        className="absolute inset-x-0 bottom-0 h-[48vh] pointer-events-none z-1"
        style={{
          background:
            "linear-gradient(to top, rgba(7,7,9,0.72) 0%, rgba(7,7,9,0.30) 55%, rgba(7,7,9,0) 100%)",
        }}
      />

      {/* ========================================================
          ABSTRACT FLOATING CRYSTALLINE DUST & PARTICLES
          ======================================================== */}
      <div
        ref={particleLayerRef}
        className="absolute inset-0 pointer-events-none z-5 will-change-transform"
      >
        <span className="absolute right-[12%] top-[22%] w-1.5 h-1.5 rotate-45 border border-white/50 bg-white/20 shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
        <span className="absolute right-[25%] top-[40%] w-1 h-1 rotate-45 border border-white/40 bg-white/15 shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
        <span className="absolute right-[8%] top-[58%] w-2 h-2 rotate-45 border border-[#E52323]/60 bg-[#E52323]/30 shadow-[0_0_6px_rgba(229,35,35,0.7)]" />
        <span className="absolute right-[20%] top-[70%] w-1 h-1 rounded-full bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.5)]" />
      </div>

      {/* ========================================================
          PHASE 01 / ZONE A: HUGE EDITORIAL "FROM THE EARTH" [0.07 - 0.26]
          Occupies 75% - 90% mobile viewport width with large typography
          ======================================================== */}
      <div
        ref={zoneATopRightRef}
        className="absolute top-[16%] left-[5vw] right-[5vw] w-[90%] text-right z-20 will-change-transform flex flex-col items-end"
        style={{ visibility: "hidden" }}
      >
        {/* Small Label */}
        <div className="flex items-center justify-end gap-1.5 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">STAGE 01</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span>DEPOSIT ORIGIN</span>
        </div>

        {/* Huge Main Headline (75% - 90% Viewport Width) */}
        <h3 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-2.5 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-end text-[clamp(44px,12.8vw,74px)]">
          <span
            ref={zoneALine1Ref}
            className="will-change-transform inline-block whitespace-nowrap"
          >
            FROM THE
          </span>
          <span
            ref={zoneALine2Ref}
            className="will-change-transform inline-block whitespace-nowrap text-[#F3F4F6]"
          >
            EARTH
          </span>
        </h3>

        {/* Small Description */}
        <p
          ref={zoneADescRef}
          className="text-xs xs:text-sm text-white/90 font-normal leading-snug mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] will-change-transform max-w-xs"
        >
          Natural minerals shaped across geological time.
        </p>
      </div>

      {/* ========================================================
          PHASE 02 / ZONE B: HUGE EDITORIAL "RAW MATERIAL" [0.25 - 0.44]
          Occupies 75% - 90% mobile viewport width with large typography
          ======================================================== */}
      <div
        ref={zoneBMiddleRef}
        className="absolute top-[32%] left-[5vw] right-[5vw] w-[90%] text-right z-20 will-change-transform flex flex-col items-end"
        style={{ visibility: "hidden" }}
      >
        {/* Small Label */}
        <div className="flex items-center justify-end gap-1.5 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">STAGE 02</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span>UNREFINED MINERAL</span>
        </div>

        {/* Huge Main Headline (75% - 90% Viewport Width) */}
        <h3 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-2.5 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-end text-[clamp(44px,12.8vw,74px)]">
          <span
            ref={zoneBLine1Ref}
            className="will-change-transform inline-block whitespace-nowrap"
          >
            RAW
          </span>
          <span
            ref={zoneBLine2Ref}
            className="will-change-transform inline-block whitespace-nowrap text-[#F3F4F6]"
          >
            MATERIAL
          </span>
        </h3>

        {/* Small Description */}
        <p
          ref={zoneBDescRef}
          className="text-xs xs:text-sm text-white/90 font-normal leading-snug mt-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] will-change-transform max-w-xs"
        >
          High-purity calcium &amp; dolomite stone extracted for processing.
        </p>
      </div>

      {/* ========================================================
          PHASE 03 / ZONE C: MAIN HERO EDITORIAL HEADING [0.45 - 0.74]
          Spans ~90% mobile viewport width with large fluid typography
          ======================================================== */}
      <div
        ref={zoneCLowerLeftRef}
        className="absolute left-[5vw] right-[5vw] bottom-[calc(7vh+env(safe-area-inset-bottom,0px))] w-[90%] z-20 will-change-transform"
        style={{ visibility: "hidden" }}
      >
        {/* Label Header */}
        <div className="flex items-center gap-2 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">01</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span className="text-white/90">MINERAL ORIGINS</span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-3 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-start w-full text-[clamp(40px,12.2vw,68px)]">
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
        </h2>

        {/* Secondary Subtitle */}
        <p
          ref={lineDescRef}
          className="text-xs xs:text-sm text-white/90 font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] will-change-transform max-w-sm"
        >
          Mineral manufacturing rooted in experience since 1997.
        </p>
      </div>

      {/* ========================================================
          PHASE 04 / ZONE D: MIDDLE-LEFT PROCESSING [0.72 - 0.85]
          "ENGINEERED THROUGH PRECISION."
          ======================================================== */}
      <div
        ref={zoneDMiddleRef}
        className="absolute left-[5vw] right-[5vw] top-[30%] w-[90%] z-20 will-change-transform"
        style={{ visibility: "hidden" }}
      >
        <div className="flex items-center gap-2 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">03</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span className="text-white/90">PROCESSING</span>
        </div>

        <h2 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-2.5 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-start w-full text-[clamp(34px,10.2vw,56px)]">
          <span ref={zoneDLine1Ref} className="will-change-transform inline-block whitespace-nowrap">
            ENGINEERED
          </span>
          <span ref={zoneDLine2Ref} className="will-change-transform inline-block whitespace-nowrap text-[#F3F4F6]">
            THROUGH
          </span>
          <span ref={zoneDLine3Ref} className="will-change-transform inline-block whitespace-nowrap text-white">
            PRECISION.
          </span>
        </h2>

        <p
          ref={zoneDDescRef}
          className="text-xs xs:text-sm text-white/90 font-normal leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] will-change-transform max-w-sm"
        >
          Custom mesh sizes engineered for consistent industrial chemistry.
        </p>
      </div>

      {/* ========================================================
          PHASE 05 / ZONE E: LOWER-LEFT FINAL PRODUCT [0.84 - 1.00]
          "MINERALS. REFINED FOR MODERN INDUSTRY." + CTAs
          ======================================================== */}
      <div
        ref={zoneEFinalRef}
        className="absolute left-[5vw] right-[5vw] bottom-[calc(7vh+env(safe-area-inset-bottom,0px))] w-[90%] z-20 will-change-transform"
        style={{ visibility: "hidden" }}
      >
        <div className="flex items-center gap-2 text-[11px] xs:text-xs font-bold uppercase tracking-[0.14em] text-[#E52323] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          <span className="text-white/90">04</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span className="text-white/90">FINISHED PRODUCT</span>
        </div>

        <h2 className="font-display font-black text-white uppercase tracking-tighter leading-[0.88] mb-2.5 drop-shadow-[0_6px_28px_rgba(0,0,0,0.98)] flex flex-col items-start w-full text-[clamp(32px,9.5vw,52px)]">
          <span className="whitespace-nowrap">MINERALS.</span>
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


