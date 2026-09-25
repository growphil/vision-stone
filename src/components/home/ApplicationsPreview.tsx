"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { APPLICATIONS, ApplicationItem } from "@/data/applications";

export default function ApplicationsPreview() {
  const [activeId, setActiveId] = useState<string>(APPLICATIONS[0]?.id || "01");

  const activeApp =
    APPLICATIONS.find((app) => app.id === activeId) || APPLICATIONS[0];

  return (
    <section className="w-full bg-[#FFFFFF] py-20 sm:py-28 border-b border-[#E8E8E2]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#E8E8E2]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-[42px] h-[2px] bg-[#E52323]" />
              <span className="text-[12px] sm:text-[13px] font-bold tracking-[0.14em] uppercase text-[#737373]">
                INDUSTRIES &amp; APPLICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight sm:leading-none">
              BUILT AROUND
              <br />
              <span className="text-[#E52323]">INDUSTRY REQUIREMENTS.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#555555] max-w-xl font-normal leading-relaxed">
              From metallurgy and civil infrastructure to specialized polymers, paints, and agriculture.
            </p>
          </div>

          <Link
            href="/applications"
            className="inline-flex items-center gap-3 text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111111] pb-1 border-b border-[#E52323] hover:text-[#E52323] transition-colors group self-start lg:self-end"
          >
            <span>VIEW ALL APPLICATIONS</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E52323] transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12 sm:mt-16">
          {/* Left Column: List */}
          <div className="lg:col-span-7 divide-y divide-[#E8E8E2] border-t border-b border-[#E8E8E2]">
            {APPLICATIONS.map((app: ApplicationItem, index: number) => {
              const isActive = activeId === app.id;
              const sectorNum =
                app.categoryNumber ||
                app.id ||
                String(index + 1).padStart(2, "0");

              return (
                <div
                  key={app.id}
                  onMouseEnter={() => setActiveId(app.id)}
                  className={`group py-6 px-4 transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-[#FAF9F6]" : "hover:bg-[#FAF9F6]/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-[11px] font-mono font-semibold text-[#888888]">
                        SECTOR {sectorNum}
                      </span>
                      <h3
                        className={`text-lg sm:text-xl font-black uppercase tracking-tight transition-colors ${
                          isActive
                            ? "text-[#E52323]"
                            : "text-[#111111] group-hover:text-[#E52323]"
                        }`}
                      >
                        {app.name}
                      </h3>
                    </div>
                    <Link
                      href={`/applications#${app.slug}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-opacity ${
                        isActive
                          ? "opacity-100 text-[#E52323]"
                          : "opacity-0 group-hover:opacity-100 text-[#888888]"
                      }`}
                    >
                      <span>EXPLORE</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                  {isActive && (
                    <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed max-w-2xl">
                      {app.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Preview */}
          <div className="lg:col-span-5 sticky top-32">
            <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-[#E8E8E2] bg-[#1A1A1A] shadow-lg">
              <Image
                src={activeApp.image}
                alt={activeApp.imageAlt || activeApp.name}
                fill
                sizes="(max-width: 1280px) 40vw, 35vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E52323] font-bold">
                  SECTOR {activeApp.categoryNumber || activeApp.id}
                </span>
                <h4 className="text-xl font-black uppercase tracking-tight text-white">
                  {activeApp.name}
                </h4>
                <p className="text-xs text-neutral-300 line-clamp-2">
                  {activeApp.headline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Grid (< 1024px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:hidden">
          {APPLICATIONS.map((app: ApplicationItem, index: number) => {
            const sectorNum =
              app.categoryNumber ||
              app.id ||
              String(index + 1).padStart(2, "0");

            return (
              <div
                key={app.id}
                className="bg-white rounded-[10px] border border-[#E8E8E2] p-6 space-y-4 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-semibold text-[#888888]">
                    SECTOR {sectorNum}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#E52323]" />
                </div>
                <div className="relative aspect-[16/9] rounded-[6px] overflow-hidden bg-neutral-100">
                  <Image
                    src={app.image}
                    alt={app.imageAlt || app.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-base font-black uppercase text-[#111111] tracking-tight">
                    {app.name}
                  </h3>
                  <p className="text-xs text-[#666666] leading-relaxed mt-1">
                    {app.description}
                  </p>
                </div>
                <div className="pt-2">
                  <Link
                    href={`/applications#${app.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-[#E52323]"
                  >
                    <span>EXPLORE SECTOR</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
