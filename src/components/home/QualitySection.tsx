import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function QualitySection() {
  const qualityPillars = [
    {
      title: "Product Form",
      description: "Clarifying physical state whether natural sized rock lumps, coarse crushed aggregates, or fine micronized powders.",
    },
    {
      title: "Particle Size",
      description: "Confirming exact mesh distribution (e.g. 100, 200, 240 mesh or custom 0–240 mesh) to match target industrial formulations.",
    },
    {
      title: "Packaging Format",
      description: "Selecting moisture-sealed small bags, bulk jumbo bags with liners, or loose vehicle shipments to protect material in transit.",
    },
    {
      title: "Intended Application",
      description: "Understanding furnace, kiln, paint, polymer, or agricultural parameters to ensure compatibility with client processes.",
    },
    {
      title: "Representative Samples",
      description: "Supplying test sample batches for customer laboratory trial and physical verification prior to full-scale dispatch.",
    },
    {
      title: "Requirement Confirmation",
      description: "Reviewing specifications and delivery timelines in advance so commercial commitments are fulfilled without compromise.",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 font-display border-t border-[#E8E8E4]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="space-y-4 max-w-3xl mb-16">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
              QUALITY ASSURANCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight">
            QUALITY
            <br />
            <span className="text-[#E52323]">STARTS WITH CLARITY.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed pt-2">
            Vision Stones focuses on supplying products according to agreed product specifications and customer requirements. We achieve consistency through detailed requirement confirmation rather than unverified claims.
          </p>
        </div>

        {/* 6 QUALITY PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualityPillars.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#FAF9F6] p-8 rounded-[10px] border border-[#E8E8E4] flex flex-col justify-between shadow-subtle hover:border-[#D0D0CA] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                    CRITERION 0{idx + 1}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#E52323]" />
                </div>

                <h3 className="text-xl font-black uppercase text-[#111111] tracking-tight">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E8E4] text-[11px] font-mono text-[#888888] flex items-center justify-between">
                <span>SPECIFICATION CONTROL</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              </div>
            </div>
          ))}
        </div>

        {/* SAMPLE REQUEST CTA */}
        <div className="mt-14 p-8 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E4] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs sm:text-sm text-[#555555]">
            Need to evaluate a product before placing a bulk order? We provide representative samples across all mineral grades.
          </p>
          <Link
            href="/contact?intent=sample"
            className="inline-flex items-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-all whitespace-nowrap"
          >
            <span>REQUEST TRIAL SAMPLES</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
