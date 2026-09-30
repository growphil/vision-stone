"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

interface ImageSequenceProps {
  desktopFolderPath?: string;
  mobileFolderPath?: string;
  mobileVideoPath?: string;
  desktopTotalFrames?: number;
  mobileTotalFrames?: number;
  /** Legacy fallback props */
  totalFrames?: number;
  folderPath?: string;
}

interface StageLine {
  text: string;
  highlight?: boolean;
}

interface StageData {
  step: string;
  theme: string;
  lines: StageLine[];
  supporting?: string;
  hasCta?: boolean;
}

const STAGES: Record<number, StageData> = {
  1: {
    step: "01",
    theme: "MINERAL ORIGIN",
    lines: [{ text: "MINERAL" }, { text: "MANUFACTURING." }],
    supporting: "Built on experience since 1997. Mineral manufacturing & supply.",
  },
  2: {
    step: "02",
    theme: "PROCESSING",
    lines: [{ text: "FROM RAW MATERIAL" }, { text: "TO REFINED PRODUCT." }],
    supporting: "Processing shaped by established manufacturing experience.",
  },
  3: {
    step: "03",
    theme: "REFINEMENT",
    lines: [{ text: "0–240 MESH" }, { text: "PRECISION IN EVERY PARTICLE." }],
    supporting: "Standard mesh options: 100 / 200 / 240 Mesh | Customised up to 240 Mesh.",
  },
  4: {
    step: "04",
    theme: "FINISHED PRODUCT",
    lines: [{ text: "BUILT FOR INDUSTRY." }, { text: "VISION STONES.", highlight: true }],
    supporting: "Dolomite is a key focus product. Customised particle sizes from 0–240 Mesh.",
    hasCta: true,
  },
};

/**
 * Proportional stage calculation for desktop sequence
 */
function getStageFromFrame(frameIndex: number, totalFrames: number = 192): number {
  const progress = frameIndex / Math.max(1, totalFrames - 1);
  if (progress < 0.22) return 1;
  if (progress < 0.48) return 2;
  if (progress < 0.82) return 3;
  return 4;
}

/**
 * Animated Typography Component with Staged Line-by-Line Fade-Up & Exit transitions
 */
function HeroStageTypography({
  stageNumber,
  isMobile,
}: {
  stageNumber: number;
  isMobile: boolean;
}) {
  const [displayedStageNum, setDisplayedStageNum] = useState<number>(stageNumber);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef<boolean>(false);
  const queuedStageRef = useRef<number>(stageNumber);

  // Stage change animation (Exit: y -20, opacity 0 -> Enter: y 35 to 0, opacity 0 to 1)
  useEffect(() => {
    queuedStageRef.current = stageNumber;
    if (stageNumber === displayedStageNum || isAnimatingRef.current) return;

    const el = containerRef.current;
    if (!el) {
      setDisplayedStageNum(stageNumber);
      return;
    }

    isAnimatingRef.current = true;

    import("gsap").then(({ default: gsap }) => {
      // Animate out current active title group
      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.28,
        ease: "power2.in",
        onComplete: () => {
          const nextStage = queuedStageRef.current;
          setDisplayedStageNum(nextStage);

          // Reset container transform
          gsap.set(el, { opacity: 1, y: 0 });

          // Animate in individual lines & supporting text with controlled stagger
          const label = el.querySelector(".hero-anim-label");
          const lines = el.querySelectorAll(".hero-anim-line");
          const supporting = el.querySelector(".hero-anim-supporting");
          const cta = el.querySelector(".hero-anim-cta");

          const targets = [label, ...Array.from(lines), supporting, cta].filter(Boolean);

          gsap.fromTo(
            targets,
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: "auto",
              onComplete: () => {
                isAnimatingRef.current = false;
                if (queuedStageRef.current !== nextStage) {
                  setDisplayedStageNum(queuedStageRef.current);
                }
              },
            }
          );
        },
      });
    });
  }, [stageNumber, displayedStageNum]);

  // Initial mount fade-up
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    import("gsap").then(({ default: gsap }) => {
      const label = el.querySelector(".hero-anim-label");
      const lines = el.querySelectorAll(".hero-anim-line");
      const supporting = el.querySelector(".hero-anim-supporting");
      const cta = el.querySelector(".hero-anim-cta");
      const targets = [label, ...Array.from(lines), supporting, cta].filter(Boolean);

      gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power3.out",
          overwrite: "auto",
        }
      );
    });
  }, []);

  const stage = STAGES[displayedStageNum] || STAGES[1];

  return (
    <div
      ref={containerRef}
      className={`hero-stage-content will-change-transform ${
        isMobile
          ? "space-y-3 xs:space-y-3.5 flex flex-col items-center text-center w-full max-w-[94vw] mx-auto"
          : "space-y-3 sm:space-y-4 lg:space-y-5 text-left max-w-full"
      }`}
    >
      {/* EYEBROW / SMALL STAGE LABEL */}
      <div
        className={`hero-anim-label flex items-center gap-2 sm:gap-2.5 text-[10px] xs:text-xs sm:text-xs font-display font-bold uppercase tracking-[0.16em] sm:tracking-[0.25em] text-[#E52323] drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] ${
          isMobile ? "justify-center" : "justify-start"
        }`}
      >
        <span className="text-white/80">STAGE {stage.step}</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
        <span>{stage.theme}</span>
      </div>

      {/* MAIN TITLE (Animated Line by Line) */}
      <h1
        className={`hero-title font-display font-black text-white uppercase tracking-tight sm:tracking-tighter drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)] ${
          isMobile
            ? "text-[clamp(1.85rem,8.4vw,3.2rem)] leading-[0.93] text-center w-full"
            : "text-[clamp(3.5rem,5.6vw,6.5rem)] leading-[0.90] text-left"
        }`}
      >
        {stage.lines.map((line, idx) => (
          <span
            key={idx}
            className={`hero-anim-line block ${
              line.highlight ? "text-[#E52323]" : "text-white"
            }`}
          >
            {line.text}
          </span>
        ))}
      </h1>

      {/* SUPPORTING TEXT */}
      {stage.supporting && (
        <p
          className={`hero-anim-supporting font-display font-normal text-white/90 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] ${
            isMobile
              ? "text-xs xs:text-sm max-w-[92%] leading-relaxed text-center mx-auto"
              : "text-xs xs:text-sm sm:text-base lg:text-lg max-w-xl xl:max-w-2xl leading-relaxed text-left"
          }`}
        >
          {stage.supporting}
        </p>
      )}

      {/* STAGE 4 CTAs & TRUST TAG */}
      {stage.hasCta && (
        <div
          className={`hero-anim-cta hero-cta pointer-events-auto space-y-2.5 sm:space-y-4 pt-1 w-full ${
            isMobile ? "flex flex-col items-center max-w-[94%]" : ""
          }`}
        >
          {/* Trust Tag */}
          <div
            className={`flex flex-wrap items-center gap-2 sm:gap-5 text-[9px] xs:text-[10px] sm:text-xs font-display uppercase tracking-widest text-white/85 font-bold border-t border-white/20 pt-2.5 sm:pt-4 ${
              isMobile ? "justify-center" : ""
            }`}
          >
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
          <div
            className={`flex flex-wrap items-center gap-2.5 sm:gap-4 pt-0.5 ${
              isMobile ? "justify-center" : ""
            }`}
          >
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
              className="inline-flex items-center gap-1.5 bg-[#E52323] text-white hover:bg-[#C91A1A] active:bg-[#A81414] text-[11px] sm:text-sm font-display font-bold uppercase tracking-wider px-3.5 sm:px-5 py-2 sm:py-2.5 transition-all shadow-lg hover:shadow-[#E52323]/25"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ImageSequence({
  desktopFolderPath = "/dolomite -powder 2",
  mobileFolderPath = "/mobile hero",
  mobileVideoPath = "/mobile hero/Mobile-video.mp4",
  desktopTotalFrames = 192,
  mobileTotalFrames = 120,
  totalFrames: legacyTotalFrames,
  folderPath: legacyFolderPath,
}: ImageSequenceProps) {
  // Resolve paths with backwards compatibility
  const resolvedDesktopFolder = legacyFolderPath || desktopFolderPath;
  const resolvedDesktopFrames = legacyTotalFrames || desktopTotalFrames;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Viewport mode: mobile (<768px) vs desktop (>=768px)
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  const [initialReady, setInitialReady] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });

  const [activeStage, setActiveStage] = useState<number>(1);
  const [mobileStage, setMobileStage] = useState<number>(1);
  const [showScrollPrompt, setShowScrollPrompt] = useState<boolean>(true);

  // Desktop images cache & active frame index
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const currentFrameIndexRef = useRef<number>(0);
  const lastRenderedImgRef = useRef<HTMLImageElement | null>(null);

  // Frame URL formatter for Desktop
  const getDesktopFrameUrl = useCallback((index: number, folder: string) => {
    const safeFolder = encodeURI(folder);
    const paddedIndex = String(index).padStart(4, "0");
    return `${safeFolder}/frame-${paddedIndex}.jpg`;
  }, []);

  // Exact Canvas Draw Function with COVER math (Desktop only)
  const renderFrame = useCallback((frameIndex: number) => {
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

    // Exact cover scaling preserving natural aspect ratio (desktop 16:9)
    const scale = Math.max(
      canvasWidth / imageWidth,
      canvasHeight / imageHeight
    );

    const drawWidth = imageWidth * scale;
    const drawHeight = imageHeight * scale;

    const focalX = 0.5;
    const focalY = 0.5;

    const offsetX = (canvasWidth - drawWidth) * focalX;
    const offsetY = (canvasHeight - drawHeight) * focalY;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Handle high-DPI canvas resizing for Desktop
  const resizeCanvas = useCallback(() => {
    if (isMobile) return;
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
  }, [isMobile, renderFrame]);

  // Window resize & breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile((prev) => {
        if (prev !== mobile) {
          if (mobile) {
            setInitialReady(true);
          }
          return mobile;
        }
        return prev;
      });

      if (!mobile) {
        resizeCanvas();
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("orientationchange", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [resizeCanvas]);

  // Priority frame requester for Desktop fast scrolling
  const requestFrameLoad = useCallback(
    (frameIndex: number) => {
      if (frameIndex < 0 || frameIndex >= resolvedDesktopFrames) return;
      if (imagesRef.current[frameIndex]) return;

      const img = new Image();
      img.src = getDesktopFrameUrl(frameIndex + 1, resolvedDesktopFolder);
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
    [getDesktopFrameUrl, renderFrame, resolvedDesktopFolder, resolvedDesktopFrames]
  );

  // Desktop Frame Preloading Engine (Strictly loads only when on Desktop)
  useEffect(() => {
    if (isMobile) {
      setInitialReady(true);
      return;
    }

    imagesRef.current = new Array(resolvedDesktopFrames).fill(null);
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
    firstImg.src = getDesktopFrameUrl(1, resolvedDesktopFolder);

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
    finalImg.src = getDesktopFrameUrl(resolvedDesktopFrames, resolvedDesktopFolder);
    finalImg.onload = () => {
      if (isCancelled) return;
      if (typeof finalImg.decode === "function") {
        finalImg
          .decode()
          .then(() => {
            if (!isCancelled) imagesRef.current[resolvedDesktopFrames - 1] = finalImg;
          })
          .catch(() => {
            if (!isCancelled) imagesRef.current[resolvedDesktopFrames - 1] = finalImg;
          });
      } else {
        imagesRef.current[resolvedDesktopFrames - 1] = finalImg;
      }
    };

    const startProgressiveLoading = () => {
      const priorityFrames: number[] = [];
      const remainingFrames: number[] = [];

      for (let i = 2; i <= Math.min(6, resolvedDesktopFrames); i++) {
        priorityFrames.push(i);
      }

      for (let i = 7; i <= resolvedDesktopFrames; i++) {
        if (i % 3 === 0) {
          priorityFrames.push(i);
        } else {
          remainingFrames.push(i);
        }
      }

      const queue = [...priorityFrames, ...remainingFrames];
      const concurrency = 6;

      const loadNext = (index: number) => {
        if (isCancelled || index >= queue.length) return;
        const frameNum = queue[index];
        const img = new Image();
        img.src = getDesktopFrameUrl(frameNum, resolvedDesktopFolder);

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
  }, [getDesktopFrameUrl, isMobile, renderFrame, resizeCanvas, resolvedDesktopFolder, resolvedDesktopFrames]);

  // Desktop GSAP ScrollTrigger Pinned Cinematic Sequence
  useEffect(() => {
    if (isMobile || !initialReady) return;

    let triggerInstance: any = null;

    const initScrollTrigger = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const container = containerRef.current;
        if (!container) return;

        triggerInstance = ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "+=6000",
          pin: true,
          pinSpacing: true,
          scrub: 0.2,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;

            const targetFrame = Math.min(
              resolvedDesktopFrames - 1,
              Math.max(0, Math.round(progress * (resolvedDesktopFrames - 1)))
            );

            if (!imagesRef.current[targetFrame]) {
              requestFrameLoad(targetFrame);
            }

            const shouldShowPrompt = targetFrame <= 2;
            setShowScrollPrompt((prev) => (prev !== shouldShowPrompt ? shouldShowPrompt : prev));

            if (targetFrame !== currentFrameIndexRef.current) {
              currentFrameIndexRef.current = targetFrame;
              requestAnimationFrame(() => renderFrame(targetFrame));
            }

            const calculatedStage = getStageFromFrame(targetFrame, resolvedDesktopFrames);
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
  }, [initialReady, isMobile, renderFrame, requestFrameLoad, resolvedDesktopFrames]);

  // Mobile Video Playback & Stage Timeline Synchronization
  useEffect(() => {
    if (!isMobile) return;

    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Instant autoplay trigger
    const attemptPlay = () => {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };

    attemptPlay();

    // Map video playback progress to stages 1 -> 2 -> 3 -> 4
    const handleTimeUpdate = () => {
      const duration = video.duration;
      if (!duration || isNaN(duration) || duration <= 0) return;
      const progress = video.currentTime / duration;
      let s = 1;
      if (progress < 0.25) s = 1;
      else if (progress < 0.50) s = 2;
      else if (progress < 0.75) s = 3;
      else s = 4;

      setMobileStage((prev) => (prev !== s ? s : prev));
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    // IntersectionObserver to pause when hero is scrolled out of view and resume when in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            attemptPlay();
          } else {
            video.pause();
          }
        });
      },
      {
        root: null,
        threshold: 0.15,
      }
    );

    observer.observe(container);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        const rect = container.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          attemptPlay();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isMobile]);

  return (
    <section
      ref={containerRef}
      id="cinematic-hero"
      className="cinematic-sequence relative w-full h-screen min-h-[100svh] bg-[#070709] overflow-hidden select-none font-display"
      aria-label="Vision Stones Dolomite mineral transformation cinematic sequence"
    >
      {/* ========================================================
          BACKGROUND LAYER: VIDEO ON MOBILE, CANVAS ON DESKTOP
          ======================================================== */}
      {isMobile ? (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-[#070709]">
          <video
            ref={videoRef}
            src={mobileVideoPath}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-0"
            aria-label="Vision Stones Mobile Hero Video"
          />
          {/* Balanced soft vignette for centered text readability while keeping video vibrant */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(7, 7, 9, 0.6) 0%, rgba(7, 7, 9, 0.45) 45%, rgba(7, 7, 9, 0.55) 70%, rgba(7, 7, 9, 0.9) 100%)",
            }}
          />
        </div>
      ) : (
        <>
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover z-0"
            aria-label="Cinematic scroll-driven Dolomite mineral transformation"
          />
          {/* HARDWARE-ACCELERATED VIGNETTE OVERLAY (Desktop only) */}
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.15) 20%, rgba(0, 0, 0, 0.20) 60%, rgba(0, 0, 0, 0.70) 100%)",
            }}
          />
        </>
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
          STAGED TYPOGRAPHY CONTAINER (Mobile Centered & Desktop Left)
          ======================================================== */}
      {isMobile ? (
        <div className="hero-content absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center px-4 xs:px-5 pt-16 pb-12 w-full">
          <HeroStageTypography stageNumber={mobileStage} isMobile={true} />
        </div>
      ) : (
        <div className="hero-content absolute left-4 sm:left-10 lg:left-16 bottom-6 sm:bottom-12 lg:bottom-20 w-[calc(100%-2rem)] sm:w-[85vw] md:w-[75vw] lg:w-[68vw] xl:w-[62vw] max-w-[min(960px,70vw)] z-20 pointer-events-none">
          <HeroStageTypography stageNumber={activeStage} isMobile={false} />
        </div>
      )}

      {/* OPENING SCROLL PROMPT (Desktop Only) */}
      {!isMobile && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 bottom-8 z-30 flex items-center justify-center transition-all duration-400 pointer-events-none drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] ${
            showScrollPrompt ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
          }`}
        >
          <div className="w-7 h-11 rounded-full border-2 border-white/85 flex items-start justify-center p-1.5 shadow-[0_0_20px_rgba(255,255,255,0.35)] animate-pulse">
            <div className="w-1.5 h-2.5 bg-white rounded-full animate-bounce shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
          </div>
        </div>
      )}

      {/* Desktop Loading Overlay */}
      {!initialReady && !isMobile && (
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
