"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ImageSequenceProps {
  totalFrames?: number;
  folderPath?: string;
}

interface CinematicStage {
  id: string;
  step: string;
  totalSteps: string;
  range: [number, number];
  category: string;
  titleLine1: string;
  titleLine2?: string;
  titleHighlight?: string;
  description: string;
  position: "center-hero" | "top-left" | "right-center" | "bottom-left" | "center-right";
  href?: string;
  ctaText?: string;
}

const CINEMATIC_STAGES: CinematicStage[] = [
  {
    id: "opening",
    step: "01",
    totalSteps: "04",
    range: [0, 0.15],
    category: "MINERAL SERIES",
    titleLine1: "FROM NATURE",
    titleLine2: "TO PRECISION.",
    description: "Minerals engineered for industries that build tomorrow.",
    position: "center-hero",
  },
  {
    id: "natural",
    step: "01",
    totalSteps: "04",
    range: [0.15, 0.38],
    category: "NATURAL FORM",
    titleLine1: "DOLOMITE",
    description: "Raw mineral formation from natural geological seams.",
    position: "top-left",
  },
  {
    id: "processing",
    step: "02",
    totalSteps: "04",
    range: [0.38, 0.62],
    category: "PROCESSING",
    titleLine1: "DOLOMITE",
    titleLine2: "LUMP",
    description: "Selected mineral prepared for industrial metallurgy.",
    position: "right-center",
    href: "/products/dolomite-lump",
    ctaText: "EXPLORE LUMP",
  },
  {
    id: "refinement",
    step: "03",
    totalSteps: "04",
    range: [0.62, 0.82],
    category: "REFINEMENT",
    titleLine1: "PRECISION",
    titleLine2: "MINERAL",
    description: "Controlled multi-stage crushing & dynamic refinement.",
    position: "bottom-left",
  },
  {
    id: "product",
    step: "04",
    totalSteps: "04",
    range: [0.82, 1.0],
    category: "FINISHED PRODUCT",
    titleLine1: "DOLOMITE",
    titleLine2: "POWDER",
    titleHighlight: "POWDER",
    description: "High-purity fine mineral powder for industrial coatings.",
    position: "center-right",
    href: "/products/dolomite-powder",
    ctaText: "VIEW DOLOMITE POWDER",
  },
];

const TIMELINE_STAGES = [
  { id: "natural", step: "01", label: "NATURAL" },
  { id: "process", step: "02", label: "PROCESS" },
  { id: "refine", step: "03", label: "REFINE" },
  { id: "product", step: "04", label: "PRODUCT" },
];

export default function ImageSequence({
  totalFrames = 240,
  folderPath = "/dolomite-powder",
}: ImageSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [initialReady, setInitialReady] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Images cache
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameIndexRef = useRef<number>(0);

  // Frame URL formatter (e.g. 1 -> "/dolomite-powder/0001.jpg")
  const getFrameUrl = useCallback(
    (index: number) => {
      const paddedIndex = String(index).padStart(4, "0");
      return `${folderPath}/${paddedIndex}.jpg`;
    },
    [folderPath]
  );

  // Exact Canvas Draw Function with COVER math
  const renderFrame = useCallback((frameIndex: number) => {
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

    // Exact cover scaling
    const scale = Math.max(
      canvasWidth / imageWidth,
      canvasHeight / imageHeight
    );

    const drawWidth = imageWidth * scale;
    const drawHeight = imageHeight * scale;

    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Subtle cinematic vignette at top & bottom edges to ensure pure contrast for white typography
    const edgeGradient = ctx.createLinearGradient(0, 0, 0, canvasHeight);
    edgeGradient.addColorStop(0, "rgba(0, 0, 0, 0.28)");
    edgeGradient.addColorStop(0.18, "rgba(0, 0, 0, 0)");
    edgeGradient.addColorStop(0.75, "rgba(0, 0, 0, 0)");
    edgeGradient.addColorStop(1, "rgba(0, 0, 0, 0.35)");
    ctx.fillStyle = edgeGradient;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }, [totalFrames]);

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

    // Safety timeout: ensure hero is ready within 1.5s regardless of network speed
    const safetyTimer = setTimeout(() => {
      if (!isCancelled) {
        setInitialReady(true);
        resizeCanvas();
      }
    }, 1500);

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
      // Fallback to product image if sequence frame fails to load
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
        const scrollDistance = isMobile ? "+=5000" : "+=7000";

        triggerInstance = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: scrollDistance,
          pin: true,
          pinSpacing: true, // Product Universe section appears only after frame 240
          scrub: 0.25,
          anticipatePin: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            setScrollProgress(progress);

            // 0% -> 0, 100% -> 239
            const targetFrame = Math.min(
              totalFrames - 1,
              Math.max(0, Math.round(progress * (totalFrames - 1)))
            );

            if (targetFrame !== currentFrameIndexRef.current) {
              currentFrameIndexRef.current = targetFrame;
              requestAnimationFrame(() => renderFrame(targetFrame));
            }
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

  // Determine active timeline stage index (0 to 3)
  const timelineIndex =
    scrollProgress < 0.38
      ? 0
      : scrollProgress < 0.62
      ? 1
      : scrollProgress < 0.82
      ? 2
      : 3;

  return (
    <section
      ref={containerRef}
      className="cinematic-sequence relative w-full h-screen bg-[#0A0A0C] overflow-hidden select-none font-display"
      style={{ minHeight: "100vh" }}
      aria-label="Vision Stone Dolomite mineral transformation cinematic sequence"
    >
      {/* FULLSCREEN CANVAS (100vw × 100vh) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-label="Cinematic 240-frame scroll-driven Dolomite mineral transformation"
      />

      {/* ========================================================
          TOP SUBTLE STATUS LABEL (Minimal & Editorial)
          ======================================================== */}
      <div className="absolute top-24 left-6 sm:left-12 lg:left-16 z-20 pointer-events-none">
        <div className="flex items-center gap-2.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323] animate-pulse" />
          <span className="text-[11px] font-display uppercase tracking-[0.2em] text-white/75 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            VISION STONE® <span className="text-white/40">/</span> MINERAL TRANSFORMATION
          </span>
        </div>
      </div>

      {/* ========================================================
          DYNAMIC CINEMATIC STAGES (NO RECTANGULAR CARDS)
          Animated, 110px display typography
          ======================================================== */}
      {CINEMATIC_STAGES.map((stage) => {
        const isActive =
          scrollProgress >= stage.range[0] && scrollProgress < stage.range[1];

        // Position classes for each stage
        let positionClasses = "";
        let textAlignmentClasses = "";

        if (stage.position === "center-hero") {
          positionClasses =
            "top-[38%] -translate-y-1/2 left-6 sm:left-12 lg:left-16 max-w-4xl";
          textAlignmentClasses = "text-left";
        } else if (stage.position === "top-left") {
          positionClasses =
            "top-32 sm:top-36 left-6 sm:left-12 lg:left-16 max-w-2xl";
          textAlignmentClasses = "text-left";
        } else if (stage.position === "right-center") {
          positionClasses =
            "top-1/2 -translate-y-1/2 right-6 sm:right-12 lg:right-16 max-w-2xl text-left sm:text-right";
          textAlignmentClasses = "text-left sm:text-right";
        } else if (stage.position === "bottom-left") {
          positionClasses =
            "bottom-28 sm:bottom-32 left-6 sm:left-12 lg:left-16 max-w-2xl";
          textAlignmentClasses = "text-left";
        } else if (stage.position === "center-right") {
          positionClasses =
            "top-1/2 -translate-y-1/2 right-6 sm:right-12 lg:right-16 max-w-2xl text-left sm:text-right";
          textAlignmentClasses = "text-left sm:text-right";
        }

        return (
          <div
            key={stage.id}
            className={`absolute z-20 transition-all duration-700 pointer-events-none ${positionClasses} ${
              isActive
                ? "opacity-100 translate-y-0 filter blur-0"
                : "opacity-0 -translate-y-6 filter blur-[6px] pointer-events-none"
            }`}
          >
            <div className={`space-y-2.5 ${textAlignmentClasses}`}>
              
              {/* Stage Counter & Category (Tiny & Sharp) */}
              <div className="flex items-center gap-2 text-[11px] font-display font-bold uppercase tracking-[0.25em] text-[#E52323] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                {stage.position === "right-center" || stage.position === "center-right" ? (
                  <div className="flex items-center gap-2 sm:ml-auto">
                    <span className="text-white/60">{stage.step} / {stage.totalSteps}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                    <span>{stage.category}</span>
                  </div>
                ) : (
                  <>
                    <span className="text-white/60">{stage.step} / {stage.totalSteps}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                    <span>{stage.category}</span>
                  </>
                )}
              </div>

              {/* Exact 110px Display Title on Desktop */}
              <div className="space-y-0">
                <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[110px] text-white uppercase tracking-tighter leading-[0.88] drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]">
                  {stage.titleLine1}
                  {stage.titleLine2 && (
                    <>
                      <br />
                      {stage.titleHighlight === "POWDER" ? (
                        <span className="text-[#E52323]">{stage.titleLine2}</span>
                      ) : (
                        <span className="text-white/90">{stage.titleLine2}</span>
                      )}
                    </>
                  )}
                </h1>
              </div>

              {/* 1 Short Description Line */}
              <p className={`text-sm sm:text-base lg:text-lg text-white/80 font-display font-medium max-w-md leading-relaxed drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] ${
                stage.position === "right-center" || stage.position === "center-right"
                  ? "sm:ml-auto"
                  : ""
              }`}>
                {stage.description}
              </p>

              {/* Minimal Editorial CTA (Appears when relevant) */}
              {stage.href && stage.ctaText && (
                <div className={`pt-2 pointer-events-auto ${
                  stage.position === "right-center" || stage.position === "center-right"
                    ? "sm:flex sm:justify-end"
                    : ""
                }`}>
                  <Link
                    href={stage.href}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-display font-bold uppercase tracking-widest text-white hover:text-[#E52323] transition-colors group cursor-pointer drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]"
                  >
                    <span className="border-b-2 border-[#E52323] pb-0.5">{stage.ctaText}</span>
                    <ArrowRight className="w-4 h-4 text-[#E52323] transition-transform group-hover:translate-x-1.5" />
                  </Link>
                </div>
              )}

            </div>
          </div>
        );
      })}

      {/* ========================================================
          OPENING SCROLL PROMPT (Only at Frame 0 - 30)
          ======================================================== */}
      <div
        className={`absolute right-6 sm:right-12 lg:right-16 bottom-24 z-20 flex items-center gap-2 text-white/75 animate-bounce text-xs font-display font-bold tracking-widest uppercase transition-opacity duration-500 pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] ${
          scrollProgress < 0.15 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span>Scroll to Transform</span>
        <ChevronDown className="w-4 h-4 text-[#E52323]" />
      </div>

      {/* ========================================================
          MINIMAL EDITORIAL PROCESS TIMELINE (Bottom Bar)
          01 NATURAL ───── 02 PROCESS ───── 03 REFINE ───── 04 PRODUCT
          ======================================================== */}
      <div className="absolute bottom-6 inset-x-6 sm:inset-x-12 lg:inset-x-16 z-20 pointer-events-none">
        <div className="flex items-center justify-between gap-4 max-w-xl mx-auto sm:mx-0">
          {TIMELINE_STAGES.map((stage, idx) => {
            const isActive = timelineIndex === idx;
            const isCompleted = timelineIndex > idx;

            return (
              <div key={stage.id} className="flex-1 flex flex-col space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-display tracking-widest uppercase font-bold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                  <span className={isActive ? "text-[#E52323]" : "text-white/45"}>
                    {stage.step}
                  </span>
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : isCompleted
                        ? "text-white/70"
                        : "text-white/40"
                    }`}
                  >
                    {stage.label}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E52323] ml-auto" />}
                </div>

                {/* Thin Line */}
                <div className="h-[1.5px] w-full bg-white/20 overflow-hidden rounded-full">
                  <div
                    className={`h-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-[#E52323]"
                        : isCompleted
                        ? "w-full bg-white/70"
                        : "w-0 bg-transparent"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Initializing Spinner */}
      {!initialReady && (
        <div className="absolute inset-0 z-50 bg-[#0A0A0C] flex flex-col items-center justify-center space-y-3 px-6 font-display">
          <div className="w-10 h-10 rounded-none bg-[#111111] border border-white/20 flex items-center justify-center relative overflow-hidden">
            <span className="font-display font-extrabold text-sm text-white tracking-widest">VS</span>
            <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#E52323] animate-ping" />
          </div>

          <span className="text-xs font-display text-white/70 tracking-widest uppercase font-bold">
            LOADING CINEMATIC SEQUENCE...
          </span>

          <div className="w-32 h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#E52323] animate-pulse w-2/3 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}
