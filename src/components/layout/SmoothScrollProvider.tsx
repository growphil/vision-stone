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

    const initSmoothScroll = async () => {
      try {
        const { default: Lenis } = await import("lenis");
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");

        gsap.registerPlugin(ScrollTrigger);
        gsapInstance = gsap;

        const lenis = new Lenis({
          duration: 1.1,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          touchMultiplier: 1.5,
        });

        lenisInstance = lenis;

        lenis.on("scroll", ScrollTrigger.update);

        tickerCallback = (time: number) => {
          lenis.raf(time * 1000);
        };

        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);
      } catch (err) {
        console.warn("Smooth scroll initialization fallback:", err);
      }
    };

    initSmoothScroll();

    return () => {
      if (gsapInstance && tickerCallback) {
        gsapInstance.ticker.remove(tickerCallback);
      }
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return <>{children}</>;
}
