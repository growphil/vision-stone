import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Factory, CheckCircle2, Target, Compass, Award, Users } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Industrial Mineral Processing Leader - VISION STONE",
  description:
    "Learn about Vision Stone, a premier industrial mineral processor in Salem, Tamil Nadu, supplying high-purity Dolomite, Calcite, and Limestone to global industries.",
  openGraph: {
    title: "About VISION STONE | Premium Industrial Minerals",
    description: "Our history, processing capability, laboratory standards, and corporate vision.",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Section 1: Hero */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#D62828]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
            <span>ABOUT VISION STONE</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight">
            ENGINEERING NATURAL MINERALS FOR MODERN INDUSTRY.
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
            Founded with a commitment to geological precision and high-throughput pulverization, Vision Stone transforms natural rock formations into essential, high-purity mineral materials that power steel furnaces, civil structures, advanced polymers, and clean water treatment.
          </p>
        </div>

        {/* Section 2: Stats & Key Facts */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="mineral-card rounded-sm p-6 sm:p-8 space-y-2 border border-white/10"
            >
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-white block">
                {stat.value}
              </span>
              <span className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Section 3: Who We Are & Our Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
              Who We Are
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              A Strategic Mineral Partner from Quarry to Industrial Plant
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Located in the mineral-rich processing belt of Salem, Tamil Nadu, Vision Stone bridges raw geological resources and precision industrial requirements. We operate heavy-duty crushing circuits, ceramic-lined ball mills, and dynamic air classifiers that ensure particle consistency across millions of kilograms of product every month.
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              Unlike generic mineral traders, we control each transformation step—ensuring chemical uniformity, minimal acid-insoluble residue, and reliable long-term bulk supply agreements.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="mineral-card p-6 rounded-sm space-y-3 border border-white/15">
              <div className="flex items-center gap-3 text-white font-display font-bold text-lg">
                <Target className="w-5 h-5 text-[#D62828]" />
                <span>Our Mission</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {COMPANY_INFO.mission}
              </p>
            </div>

            <div className="mineral-card p-6 rounded-sm space-y-3 border border-white/15">
              <div className="flex items-center gap-3 text-white font-display font-bold text-lg">
                <Compass className="w-5 h-5 text-[#D62828]" />
                <span>Our Vision</span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                {COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: 4 Core Pillars of Capability */}
        <div className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
              Core Competencies
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
              Why Leading Industries Choose Vision Stone
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPANY_INFO.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="mineral-card p-8 rounded-sm space-y-3 border border-white/10 hover:border-white/25 transition-all"
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-mono-code text-xs text-[#D62828] font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    {val.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light pl-11">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Quality & Supply Integrity */}
        <div className="p-8 sm:p-12 bg-gradient-to-br from-[#121216] via-[#15151B] to-[#0E0E12] border border-white/15 rounded-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
                Continuous Assurance
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Traceable Batch Certification & Nationwide Dispatch
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Every shipment is backed by internal laboratory spectrometry and Malvern Mastersizer granulometry data. Combined with our covered warehouse storage and dedicated transport agreements, your factory never faces material shortages or out-of-spec production halts.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                href="/infrastructure"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-mono-code text-xs uppercase tracking-widest font-semibold rounded-sm border border-white/15 transition-all"
              >
                <span>View Infrastructure</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D62828] hover:bg-[#b52020] text-white font-mono-code text-xs uppercase tracking-widest font-bold rounded-sm transition-all shadow-lg shadow-[#D62828]/20"
              >
                <span>Contact Commercial Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
