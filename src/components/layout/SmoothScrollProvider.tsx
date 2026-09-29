"use client";

import React, { useEffect } from "react";

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let lenisInstance: any = null;
    let tickerCallback: any = null;
    let gsapInstance: any = null;
    let isCleanedUp = false;

    const initSmoothScroll = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);
        gsapInstance = gsap;

        // Only activate virtualized smooth scroll (Lenis) on desktop viewports.
        // Mobile touch devices MUST use 100% native browser momentum scrolling for 1:1 responsiveness.
        const isTouchOrMobile =
          window.innerWidth < 768 ||
          ("ontouchstart" in window && window.matchMedia("(pointer: coarse)").matches && window.innerWidth < 1024);

        if (!isTouchOrMobile) {
          const { default: Lenis } = await import("lenis");
          if (isCleanedUp) return;

          const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            touchMultiplier: 1.0,
          });

          lenisInstance = lenis;

          lenis.on("scroll", ScrollTrigger.update);

          tickerCallback = (time: number) => {
            lenis.raf(time * 1000);
          };

          gsap.ticker.add(tickerCallback);
          gsap.ticker.lagSmoothing(0);
        } else {
          // On mobile, ensure lagSmoothing is kept default for responsive frame drops
          gsap.ticker.lagSmoothing(500, 33);
        }
      } catch (err) {
        console.warn("Smooth scroll initialization fallback:", err);
      }
    };

    initSmoothScroll();

    return () => {
      isCleanedUp = true;
      if (gsapInstance && tickerCallback) {
        gsapInstance.ticker.remove(tickerCallback);
      }
      if (lenisInstance) {
        lenisInstance.destroy();
        lenisInstance = null;
      }
    };
  }, []);

  return <>{children}</>;
}
