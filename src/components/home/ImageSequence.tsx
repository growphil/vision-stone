"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ImageSequenceProps {
  totalFrames?: number;
  folderPath?: string;
}

interface StageData {
  step: string;
  theme: string;
  title: React.ReactNode;
  supporting: string;
  hasCta?: boolean;
}

const STAGES: Record<number, StageData> = {
  1: {
    step: "01",
    theme: "RAW MATERIAL",
    title: (
      <>
        MINERAL.
        <br />
        BUILT FROM THE EARTH.
      </>
    ),
    supporting: "Mineral manufacturing rooted in experience.",
  },
  2: {
    step: "02",
    theme: "PROCESSING",
    title: (
      <>
        FROM RAW MATERIAL
        <br />
        TO REFINED PRODUCT.
      </>
    ),
    supporting: "Processing shaped by established manufacturing experience.",
  },
  3: {
    step: "03",
    theme: "REFINEMENT",
    title: (
      <>
        PRECISION
        <br />
        IN EVERY
        <br />
        PARTICLE.
      </>
    ),
    supporting:
      "Dolomite supplied in formats and particle sizes based on customer requirements.",
  },
  4: {
    step: "04",
    theme: "FINISHED PRODUCT",
    title: (
      <>
        DOLOMITE.
        <br />
        A CORE PRODUCT OF{" "}
        <span className="text-[#E52323]">VISION STONES.</span>
      </>
    ),
    supporting: "100 / 200 / 240 Mesh | Customised requirements from 0–240 Mesh",
    hasCta: true,
  },
};

/**
 * Single source of truth: frame index -> stage mapping
 * frames 1–50   (indices 0–49)    -> STAGE 1
 * frames 51–110 (indices 50–109)   -> STAGE 2
 * frames 111–206 (indices 110–205)  -> STAGE 3
 * frames 207–240 (indices 206–239)  -> STAGE 4 (Triggered at ezgif-frame-207)
 */
function getStageFromFrame(frameIndex: number): number {
  if (frameIndex < 50) return 1;
  if (frameIndex < 110) return 2;
  if (frameIndex < 206) return 3;
  return 4;
}

export default function ImageSequence({
  totalFrames = 240,
  folderPath = "/dolomite -powder 2",
}: ImageSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [initialReady, setInitialReady] = useState<boolean>(false);
  const [activeStage, setActiveStage] = useState<number>(1);
  const [showScrollPrompt, setShowScrollPrompt] = useState<boolean>(true);

  // Images cache & active frame index
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameIndexRef = useRef<number>(0);

  // Frame URL formatter (e.g. 1 -> "/dolomite -powder 2/ezgif-frame-001.jpg")
  const getFrameUrl = useCallback(
    (index: number) => {
      if (folderPath.includes("dolomite -powder 2")) {
        const paddedIndex = String(index).padStart(3, "0");
        return `${folderPath}/ezgif-frame-${paddedIndex}.jpg`;
      }
      const paddedIndex = String(index).padStart(4, "0");
      return `${folderPath}/${paddedIndex}.jpg`;
    },
    [folderPath]
  );

  // Exact Canvas Draw Function with COVER math and subtle vignette
  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let img = imagesRef.current[frameIndex];

      // Fallback to nearest available loaded frame
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset < totalFrames; offset++) {
          const prev = imagesRef.current[frameIndex - offset];
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }
          const next = imagesRef.current[frameIndex + offset];
          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imageWidth = img.naturalWidth;
      const imageHeight = img.naturalHeight;

      // Detect mobile viewport
      const isMobile = window.innerWidth < 768;

      // Exact cover scaling
      const scale = Math.max(
        canvasWidth / imageWidth,
        canvasHeight / imageHeight
      );

      const drawWidth = imageWidth * scale;
      const drawHeight = imageHeight * scale;

      // Balanced focal positioning for desktop and mobile
      const focalX = isMobile ? 0.50 : 0.50;
      const focalY = isMobile ? 0.50 : 0.50;

      const offsetX = (canvasWidth - drawWidth) * focalX;
      const offsetY = (canvasHeight - drawHeight) * focalY;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      // Subtle editorial vignette (enhanced bottom gradient on mobile for text legibility)
      const edgeGradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
      if (isMobile) {
        edgeGradient.addColorStop(0, "rgba(0, 0, 0, 0.55)");
        edgeGradient.addColorStop(0.25, "rgba(0, 0, 0, 0.15)");
        edgeGradient.addColorStop(0.55, "rgba(0, 0, 0, 0.35)");
        edgeGradient.addColorStop(1, "rgba(0, 0, 0, 0.85)");
      } else {
        edgeGradient.addColorStop(0, "rgba(0, 0, 0, 0.45)");
        edgeGradient.addColorStop(0.2, "rgba(0, 0, 0, 0.15)");
        edgeGradient.addColorStop(0.6, "rgba(0, 0, 0, 0.20)");
        edgeGradient.addColorStop(1, "rgba(0, 0, 0, 0.70)");
      }
      ctx.fillStyle = edgeGradient;
      ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    },
    [totalFrames]
  );

  // Handle high-DPI canvas resizing
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
    }

    renderFrame(currentFrameIndexRef.current);
  }, [renderFrame]);

  // Frame Preloading Engine
  useEffect(() => {
    imagesRef.current = new Array(totalFrames).fill(null);
    let isCancelled = false;

    // Safety timer
    const safetyTimer = setTimeout(() => {
      if (!isCancelled) {
        setInitialReady(true);
        resizeCanvas();
      }
    }, 1200);

    // Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      setInitialReady(true);
      resizeCanvas();
      renderFrame(0);

      startProgressiveLoading();
    };

    firstImg.onerror = () => {
      const productFallback = new Image();
      productFallback.src = `/Products/Dolomite Powder.webp`;
      productFallback.onload = () => {
        if (isCancelled) return;
        imagesRef.current[0] = productFallback;
        setInitialReady(true);
        resizeCanvas();
        renderFrame(0);
      };
      productFallback.onerror = () => {
        if (!isCancelled) setInitialReady(true);
      };
    };

    const startProgressiveLoading = () => {
      const priorityFrames: number[] = [];
      const remainingFrames: number[] = [];

      for (let i = 2; i <= totalFrames; i++) {
        if (i % 3 === 0) {
          priorityFrames.push(i);
        } else {
          remainingFrames.push(i);
        }
      }

      const queue = [...priorityFrames, ...remainingFrames];

      const loadNext = (index: number) => {
        if (isCancelled || index >= queue.length) return;
        const frameNum = queue[index];
        const img = new Image();
        img.src = getFrameUrl(frameNum);

        img.onload = () => {
          if (isCancelled) return;
          imagesRef.current[frameNum - 1] = img;

          if (currentFrameIndexRef.current === frameNum - 1) {
            renderFrame(frameNum - 1);
          }

          loadNext(index + 6);
        };

        img.onerror = () => {
          loadNext(index + 6);
        };
      };

      for (let stream = 0; stream < 6; stream++) {
        loadNext(stream);
      }
    };

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("orientationchange", resizeCanvas, { passive: true });

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimer);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
    };
  }, [getFrameUrl, renderFrame, resizeCanvas, totalFrames]);

  // GSAP ScrollTrigger Pinned Cinematic Sequence
  useEffect(() => {
    if (!initialReady) return;

    let triggerInstance: any = null;

    const initScrollTrigger = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        const isMobile = window.innerWidth < 768;
        const scrollDistance = isMobile ? "+=4500" : "+=6000";

        triggerInstance = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: scrollDistance,
          pin: true,
          pinSpacing: true,
          scrub: 0.2,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Compute frame from scroll (0 to 239)
            const targetFrame = Math.min(
              totalFrames - 1,
              Math.max(0, Math.round(progress * (totalFrames - 1)))
            );

            // Hide initial scroll prompt after user moves past first 6 frames
            if (targetFrame > 6) {
              setShowScrollPrompt(false);
            } else {
              setShowScrollPrompt(true);
            }

            // Render canvas frame
            if (targetFrame !== currentFrameIndexRef.current) {
              currentFrameIndexRef.current = targetFrame;
              requestAnimationFrame(() => renderFrame(targetFrame));
            }

            // SINGLE SOURCE OF TRUTH: update stage based on frame index
            const calculatedStage = getStageFromFrame(targetFrame);
            setActiveStage((prev) => (prev !== calculatedStage ? calculatedStage : prev));
          },
        });

        ScrollTrigger.refresh();
      } catch (err) {
        console.warn("GSAP ScrollTrigger Error:", err);
      }
    };

    initScrollTrigger();

    return () => {
      if (triggerInstance) {
        triggerInstance.kill();
      }
    };
  }, [initialReady, renderFrame, totalFrames]);

  // Active Stage Content Definition (Strict single-stage rendering)
  const currentStage = STAGES[activeStage] || STAGES[1];

  return (
    <section
      ref={containerRef}
      id="cinematic-hero"
      className="cinematic-sequence relative w-full h-screen bg-[#070709] overflow-hidden select-none font-display"
      style={{ minHeight: "100vh" }}
      aria-label="Vision Stones Dolomite mineral transformation cinematic sequence"
    >
      {/* FULLSCREEN CANVAS (z-0) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-label="Cinematic 240-frame scroll-driven Dolomite mineral transformation"
      />

      {/* TOP BRAND INDICATOR (z-30) */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-12 lg:left-16 z-30 pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323] animate-pulse shrink-0" />
          <span className="text-[9px] xs:text-[10px] sm:text-xs font-display uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white/90 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            VISION STONES <span className="text-white/40">/</span> MINERAL TRANSFORMATION
          </span>
        </div>
      </div>

      {/* ========================================================
          SINGLE ACTIVE STAGE CONTENT CONTAINER (z-20)
          Zero text overlap. Only one stage is ever rendered in the DOM.
          Positioned as ONE unified editorial block.
          ======================================================== */}
      <div
        className="hero-content absolute left-4 sm:left-12 lg:left-16 bottom-6 sm:bottom-14 lg:bottom-24 w-[calc(100%-2rem)] sm:max-w-xl lg:max-w-2xl xl:max-w-3xl z-20 pointer-events-none"
      >
        <div
          key={`stage-${activeStage}`}
          className="cinematic-stage-content animate-stage-fade text-left"
        >
          {/* STAGE LABEL */}
          <div className="flex items-center gap-2 sm:gap-2.5 text-[9px] xs:text-[10px] sm:text-xs font-display font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E52323] mb-2 sm:mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            <span className="text-white/70">STAGE {currentStage.step}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span>{currentStage.theme}</span>
          </div>

          {/* MAIN HEADLINE */}
          <h1 className="hero-title font-display font-black text-xl xs:text-2xl sm:text-5xl lg:text-[72px] xl:text-[80px] text-white uppercase tracking-tighter leading-[1.0] sm:leading-[0.92] mb-2.5 sm:mb-6 drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)]">
            {currentStage.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description text-[11px] xs:text-xs sm:text-base lg:text-lg text-white/90 font-display font-normal max-w-xs sm:max-w-xl leading-relaxed mb-3 sm:mb-7 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
            {currentStage.supporting}
          </p>

          {/* STAGE 4 EXCLUSIVE CTAS (ONLY ON FINISHED PRODUCT) */}
          {currentStage.hasCta && (
            <div className="hero-cta pointer-events-auto space-y-2.5 sm:space-y-4 pt-1">
              {/* Trust Tag */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-5 text-[9px] xs:text-[10px] sm:text-xs font-display uppercase tracking-widest text-white/85 font-bold border-t border-white/20 pt-2.5 sm:pt-4">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                  <span>MANUFACTURING ROOTS SINCE 1997</span>
                </div>
                <span className="text-white/30 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-[#E52323] font-black">450+</span>
                  <span>CLIENTS</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-0.5">
                <Link
                  href="#products"
                  className="inline-flex items-center gap-1.5 text-[11px] sm:text-sm font-display font-bold uppercase tracking-widest text-white hover:text-[#E52323] transition-colors py-1.5 cursor-pointer group"
                >
                  <span className="border-b-2 border-white group-hover:border-[#E52323] pb-0.5 transition-colors">
                    VIEW PRODUCTS →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 bg-[#E52323] text-white hover:bg-[#C91A1A] text-[11px] sm:text-sm font-display font-bold uppercase tracking-wider px-3.5 sm:px-5 py-2 sm:py-2.5 transition-all shadow-lg hover:shadow-[#E52323]/25"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* OPENING SCROLL PROMPT (Fades out immediately when scrolling begins) */}
      <div
        className={`absolute right-4 sm:right-12 lg:right-16 bottom-4 sm:bottom-20 z-20 flex items-center gap-1.5 sm:gap-2 text-white/80 animate-bounce text-[10px] sm:text-xs font-display font-bold tracking-widest uppercase transition-opacity duration-300 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
          showScrollPrompt ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span>Scroll to Transform</span>
        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E52323]" />
      </div>

      {/* Loading Overlay */}
      {!initialReady && (
        <div className="absolute inset-0 z-50 bg-[#070709] flex flex-col items-center justify-center space-y-3 px-6 font-display">
          <div className="w-10 h-10 bg-[#111111] border border-white/20 flex items-center justify-center relative overflow-hidden">
            <span className="font-display font-extrabold text-sm text-white tracking-widest">VS</span>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#E52323] animate-ping" />
          </div>

          <span className="text-xs font-display text-white/70 tracking-widest uppercase font-bold">
            INITIALIZING CINEMATIC SEQUENCE...
          </span>

          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#E52323] animate-pulse w-2/3 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}
