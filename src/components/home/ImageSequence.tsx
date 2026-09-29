"use client";

import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

import MobileHeroOverlay from "./MobileHeroOverlay";

interface ImageSequenceProps {
  desktopFolderPath?: string;
  mobileFolderPath?: string;
  desktopTotalFrames?: number;
  mobileTotalFrames?: number;
  /** Legacy fallback props */
  totalFrames?: number;
  folderPath?: string;
}

interface StageData {
  step: string;
  theme: string;
  desktopTitle: React.ReactNode;
  mobileTitle: React.ReactNode;
  supporting: string;
  hasCta?: boolean;
}

const STAGES: Record<number, StageData> = {
  1: {
    step: "01",
    theme: "RAW MATERIAL",
    desktopTitle: (
      <>
        MINERAL.
        <br />
        BUILT FROM THE EARTH.
      </>
    ),
    mobileTitle: (
      <>
        MINERAL.
        <br />
        BUILT FROM
        <br />
        THE EARTH.
      </>
    ),
    supporting: "Mineral manufacturing rooted in experience.",
  },
  2: {
    step: "02",
    theme: "PROCESSING",
    desktopTitle: (
      <>
        FROM RAW MATERIAL
        <br />
        TO REFINED PRODUCT.
      </>
    ),
    mobileTitle: (
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
    desktopTitle: (
      <>
        PRECISION
        <br />
        IN EVERY
        <br />
        PARTICLE.
      </>
    ),
    mobileTitle: (
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
    desktopTitle: (
      <>
        DOLOMITE.
        <br />
        A CORE PRODUCT OF{" "}
        <span className="text-[#E52323]">VISION STONES.</span>
      </>
    ),
    mobileTitle: (
      <>
        DOLOMITE.
        <br />
        A CORE PRODUCT OF
        <br />
        <span className="text-[#E52323]">VISION STONES.</span>
      </>
    ),
    supporting: "100 / 200 / 240 Mesh | Customised requirements from 0–240 Mesh",
    hasCta: true,
  },
};

/**
 * Proportional stage calculation
 */
function getStageFromFrame(frameIndex: number, totalFrames: number = 120): number {
  const progress = frameIndex / Math.max(1, totalFrames - 1);
  if (progress < 0.21) return 1;
  if (progress < 0.46) return 2;
  if (progress < 0.86) return 3;
  return 4;
}

export default function ImageSequence({
  desktopFolderPath = "/dolomite -powder 2",
  mobileFolderPath = "/mobile hero",
  desktopTotalFrames = 192,
  mobileTotalFrames = 120,
  totalFrames: legacyTotalFrames,
  folderPath: legacyFolderPath,
}: ImageSequenceProps) {
  // Resolve paths with backwards compatibility
  const resolvedDesktopFolder = legacyFolderPath || desktopFolderPath;
  const resolvedDesktopFrames = legacyTotalFrames || desktopTotalFrames;
  const resolvedMobileFolder = mobileFolderPath;
  const resolvedMobileFrames = mobileTotalFrames;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Viewport mode: mobile (<768px) vs desktop (>=768px)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  const activeFolder = isMobile ? resolvedMobileFolder : resolvedDesktopFolder;
  const activeTotalFrames = isMobile ? resolvedMobileFrames : resolvedDesktopFrames;

  const [initialReady, setInitialReady] = useState<boolean>(false);
  const [activeStage, setActiveStage] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showScrollPrompt, setShowScrollPrompt] = useState<boolean>(true);

  // Images cache & active frame index
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameIndexRef = useRef<number>(0);

  // Safe Frame URL formatter
  const getFrameUrl = useCallback((index: number, folder: string) => {
    const safeFolder = encodeURI(folder);
    if (folder.includes("mobile")) {
      const paddedIndex = String(index).padStart(3, "0");
      return `${safeFolder}/frame_${paddedIndex}.jpg`;
    }
    const paddedIndex = String(index).padStart(4, "0");
    return `${safeFolder}/frame-${paddedIndex}.jpg`;
  }, []);

  // Cache for the last successfully rendered image to provide instant O(1) fallback
  const lastRenderedImgRef = useRef<HTMLImageElement | null>(null);

  // Exact Canvas Draw Function with COVER math
  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let img = imagesRef.current[frameIndex];

      // Fast O(1) fallback: if target frame isn't ready yet, use the last rendered image
      if (!img || !img.complete || img.naturalWidth === 0) {
        img = lastRenderedImgRef.current;
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      lastRenderedImgRef.current = img;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imageWidth = img.naturalWidth;
      const imageHeight = img.naturalHeight;

      // Exact cover scaling preserving natural aspect ratio (mobile 9:16, desktop 16:9)
      const scale = Math.max(
        canvasWidth / imageWidth,
        canvasHeight / imageHeight
      );

      const drawWidth = imageWidth * scale;
      const drawHeight = imageHeight * scale;

      // Balanced center focal positioning
      const focalX = 0.5;
      const focalY = 0.5;

      const offsetX = (canvasWidth - drawWidth) * focalX;
      const offsetY = (canvasHeight - drawHeight) * focalY;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    },
    []
  );

  // Handle high-DPI canvas resizing with mobile DPR capped at 1.5
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mobile DPR capped at 1.5 to reduce memory & GPU fill-rate pressure; desktop retains 2.0
    const maxDpr = isMobile ? 1.5 : 2;
    const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
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
  }, [isMobile, renderFrame]);

  // Window resize & breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => (prev !== mobile ? mobile : prev));
      resizeCanvas();
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [resizeCanvas]);

  // On-demand priority frame requester for fast scrolling / jumps
  const requestFrameLoad = useCallback(
    (frameIndex: number) => {
      if (frameIndex < 0 || frameIndex >= activeTotalFrames) return;
      if (imagesRef.current[frameIndex]) return;

      const img = new Image();
      img.src = getFrameUrl(frameIndex + 1, activeFolder);
      img.onload = () => {
        if (typeof img.decode === "function") {
          img
            .decode()
            .then(() => {
              imagesRef.current[frameIndex] = img;
              if (currentFrameIndexRef.current === frameIndex) {
                renderFrame(frameIndex);
              }
            })
            .catch(() => {
              imagesRef.current[frameIndex] = img;
              if (currentFrameIndexRef.current === frameIndex) {
                renderFrame(frameIndex);
              }
            });
        } else {
          imagesRef.current[frameIndex] = img;
          if (currentFrameIndexRef.current === frameIndex) {
            renderFrame(frameIndex);
          }
        }
      };
    },
    [activeFolder, activeTotalFrames, getFrameUrl, renderFrame]
  );

  // Frame Preloading Engine (Strictly loads only the active sequence with async decode)
  useEffect(() => {
    imagesRef.current = new Array(activeTotalFrames).fill(null);
    let isCancelled = false;
    setInitialReady(false);

    // Safety timer
    const safetyTimer = setTimeout(() => {
      if (!isCancelled) {
        setInitialReady(true);
        resizeCanvas();
      }
    }, 1200);

    // Load Frame 1 immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(1, activeFolder);

    const onFirstImageReady = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      lastRenderedImgRef.current = firstImg;
      setInitialReady(true);
      resizeCanvas();
      renderFrame(0);
      startProgressiveLoading();
    };

    firstImg.onload = () => {
      if (typeof firstImg.decode === "function") {
        firstImg.decode().then(onFirstImageReady).catch(onFirstImageReady);
      } else {
        onFirstImageReady();
      }
    };

    firstImg.onerror = () => {
      const productFallback = new Image();
      productFallback.src = `/Products/Dolomite Powder.webp`;
      productFallback.onload = () => {
        if (isCancelled) return;
        imagesRef.current[0] = productFallback;
        lastRenderedImgRef.current = productFallback;
        setInitialReady(true);
        resizeCanvas();
        renderFrame(0);
      };
      productFallback.onerror = () => {
        if (!isCancelled) setInitialReady(true);
      };
    };

    // Preload the final frame early in background to ensure 100% completion readiness
    const finalImg = new Image();
    finalImg.src = getFrameUrl(activeTotalFrames, activeFolder);
    finalImg.onload = () => {
      if (isCancelled) return;
      if (typeof finalImg.decode === "function") {
        finalImg
          .decode()
          .then(() => {
            if (!isCancelled) imagesRef.current[activeTotalFrames - 1] = finalImg;
          })
          .catch(() => {
            if (!isCancelled) imagesRef.current[activeTotalFrames - 1] = finalImg;
          });
      } else {
        imagesRef.current[activeTotalFrames - 1] = finalImg;
      }
    };

    const startProgressiveLoading = () => {
      const priorityFrames: number[] = [];
      const remainingFrames: number[] = [];

      // Immediate early frames
      for (let i = 2; i <= Math.min(6, activeTotalFrames); i++) {
        priorityFrames.push(i);
      }

      // Keyframes distributed throughout sequence
      for (let i = 7; i <= activeTotalFrames; i++) {
        if (i % (isMobile ? 2 : 3) === 0) {
          priorityFrames.push(i);
        } else {
          remainingFrames.push(i);
        }
      }

      const queue = [...priorityFrames, ...remainingFrames];
      // On mobile, use 3 concurrent streams to avoid main thread & memory bus saturation; desktop uses 6
      const concurrency = isMobile ? 3 : 6;

      const loadNext = (index: number) => {
        if (isCancelled || index >= queue.length) return;
        const frameNum = queue[index];
        const img = new Image();
        img.src = getFrameUrl(frameNum, activeFolder);

        const handleImageReady = () => {
          if (isCancelled) return;
          imagesRef.current[frameNum - 1] = img;

          if (currentFrameIndexRef.current === frameNum - 1) {
            renderFrame(frameNum - 1);
          }

          loadNext(index + concurrency);
        };

        img.onload = () => {
          if (typeof img.decode === "function") {
            img.decode().then(handleImageReady).catch(handleImageReady);
          } else {
            handleImageReady();
          }
        };

        img.onerror = () => {
          loadNext(index + concurrency);
        };
      };

      for (let stream = 0; stream < concurrency; stream++) {
        loadNext(stream);
      }
    };

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimer);
    };
  }, [activeFolder, activeTotalFrames, getFrameUrl, isMobile, renderFrame, resizeCanvas]);

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

        // Mobile target: ~3 viewport heights (window.innerHeight * 3). Desktop: "+=6000".
        const scrollDistance = isMobile
          ? () => `+=${Math.round(window.innerHeight * 3)}`
          : "+=6000";

        // Touch devices: scrub: true for instant 1:1 finger tracking without lag.
        // Desktop mouse wheel: scrub: 0.2 for smooth interpolation.
        triggerInstance = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: scrollDistance,
          pin: true,
          pinSpacing: true,
          scrub: isMobile ? true : 0.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            setScrollProgress(progress);

            // Compute frame from scroll (0 to activeTotalFrames - 1)
            const targetFrame = Math.min(
              activeTotalFrames - 1,
              Math.max(0, Math.round(progress * (activeTotalFrames - 1)))
            );

            // On-demand load if user scrolled past non-loaded frame
            if (!imagesRef.current[targetFrame]) {
              requestFrameLoad(targetFrame);
            }

            // Hide initial scroll prompt as soon as user begins scrolling (first 2 frames)
            const shouldShowPrompt = targetFrame <= 2;
            setShowScrollPrompt((prev) => (prev !== shouldShowPrompt ? shouldShowPrompt : prev));

            // Render canvas frame
            if (targetFrame !== currentFrameIndexRef.current) {
              currentFrameIndexRef.current = targetFrame;
              requestAnimationFrame(() => renderFrame(targetFrame));
            }

            // SINGLE SOURCE OF TRUTH: update stage based on frame index
            const calculatedStage = getStageFromFrame(targetFrame, activeTotalFrames);
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
  }, [activeTotalFrames, initialReady, isMobile, renderFrame, requestFrameLoad]);

  // Active Stage Content Definition (Desktop)
  const currentStage = STAGES[activeStage] || STAGES[1];

  return (
    <section
      ref={containerRef}
      id="cinematic-hero"
      className="cinematic-sequence relative w-full h-screen bg-[#070709] overflow-hidden select-none font-display"
      style={{ minHeight: "100vh" }}
      aria-label="Vision Stones Dolomite mineral transformation cinematic sequence"
    >
      {/* LAYER 1: FULLSCREEN CANVAS (z-0) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-label="Cinematic scroll-driven Dolomite mineral transformation"
      />

      {/* HARDWARE-ACCELERATED VIGNETTE OVERLAY (z-10, Desktop only) */}
      {!isMobile && (
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 20%, rgba(0, 0, 0, 0.20) 60%, rgba(0, 0, 0, 0.70) 100%)",
          }}
        />
      )}

      {/* TOP BRAND INDICATOR (z-30) */}
      <div className="absolute top-20 sm:top-24 left-4 sm:left-12 lg:left-16 z-30 pointer-events-none">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323] animate-pulse shrink-0" />
          <span className="text-[11px] sm:text-xs font-display uppercase tracking-[0.12em] sm:tracking-[0.22em] text-white/90 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            VISION STONES <span className="text-white/40">/</span> MINERAL TRANSFORMATION
          </span>
        </div>
      </div>

      {/* ========================================================
          MOBILE CINEMATIC 3D OVERLAY (Mobile Viewport ONLY)
          Layers 2, 3, 4, 5 (Atmosphere, 3D Minerals, Particles, Typography)
          ======================================================== */}
      {isMobile ? (
        <MobileHeroOverlay progress={scrollProgress} />
      ) : (
        /* ========================================================
            DESKTOP STAGE CONTENT CONTAINER (Desktop Viewport ONLY)
            100% UNCHANGED and Preserved
            ======================================================== */
        <div
          className="hero-content absolute left-4 sm:left-12 lg:left-16 bottom-6 sm:bottom-14 lg:bottom-24 w-[calc(100%-2rem)] sm:max-w-xl lg:max-w-2xl xl:max-w-3xl z-20 pointer-events-none"
        >
          <div
            key={`stage-${activeStage}`}
            className="cinematic-stage-content animate-stage-fade text-left"
          >
            {/* STAGE LABEL */}
            <div className="flex items-center gap-2 sm:gap-2.5 text-[10px] xs:text-xs sm:text-xs font-display font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#E52323] mb-2 sm:mb-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              <span className="text-white/70">STAGE {currentStage.step}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span>{currentStage.theme}</span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="hero-title font-display font-black text-2xl xs:text-3xl sm:text-5xl lg:text-[72px] xl:text-[80px] text-white uppercase tracking-tighter leading-[1.02] sm:leading-[0.92] mb-2.5 sm:mb-6 drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)]">
              {currentStage.desktopTitle}
            </h1>

            {/* DESCRIPTION */}
            <p className="hero-description text-xs xs:text-sm sm:text-base lg:text-lg text-white/90 font-display font-normal max-w-xs sm:max-w-xl leading-relaxed mb-3 sm:mb-7 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
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
      )}

      {/* OPENING SCROLL PROMPT (Minimalist Mouse Icon Only, center on mobile, bottom on desktop) */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-[44%] -translate-y-1/2 md:top-auto md:bottom-8 md:translate-y-0 z-30 flex items-center justify-center transition-all duration-400 pointer-events-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] ${
          showScrollPrompt ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* Mild White Blinking Mouse Icon Only (No background) */}
        <div className="w-6 h-10 sm:w-7 sm:h-11 rounded-full border-2 border-white/85 flex items-start justify-center p-1.5 shadow-[0_0_20px_rgba(255,255,255,0.35)] animate-pulse">
          <div className="w-1.5 h-2.5 bg-white rounded-full animate-bounce shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
        </div>
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
