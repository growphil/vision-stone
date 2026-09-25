import React from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "icon-only" | "full" | "header";
  className?: string;
  size?: number;
}

export default function Logo({
  variant = "header",
  className = "",
  size = 32,
}: LogoProps) {
  if (variant === "icon-only") {
    return (
      <div className={`relative shrink-0 ${className}`} style={{ width: size, height: size }}>
        <Image
          src="/favicon.svg"
          alt="Vision Stones Logo"
          width={size}
          height={size}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    );
  }

  if (variant === "full") {
    return (
      <div className={`relative max-w-full ${className}`}>
        <Image
          src="/logo.svg"
          alt="Vision Stones - Natural Minerals"
          width={400}
          height={260}
          className="w-auto h-auto object-contain"
          priority
        />
      </div>
    );
  }

  // Header variant
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="rounded-[6px] bg-white border border-[#E8E8E4] p-1 flex items-center justify-center relative overflow-hidden shadow-xs group-hover:border-[#E52323] transition-colors"
        style={{ width: size + 6, height: size + 6 }}
      >
        <Image
          src="/favicon.svg"
          alt="Vision Stones Logo Emblem"
          width={size}
          height={size}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-display font-black text-base sm:text-lg tracking-[0.18em] text-[#111111] group-hover:text-[#E52323] transition-colors leading-tight">
          VISION STONES
        </span>
        <span className="text-[9px] font-mono-code tracking-[0.2em] text-[#777777] uppercase">
          NATURAL MINERALS &amp; SUPPLY
        </span>
      </div>
    </div>
  );
}
