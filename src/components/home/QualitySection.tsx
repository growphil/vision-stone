import React from "react";
import Link from "next/link";
import { ShieldCheck, Activity, Gauge, Microscope, ArrowRight, Award } from "lucide-react";

export default function QualitySection() {
  const QA_PILLARS = [
    {
      icon: <Microscope className="w-5 h-5 text-[#E52323]" />,
      title: "Laser Particle Granulometry",
      desc: "Every micronized batch is analyzed on Malvern Mastersizer diffraction instruments to verify tight span, D50 diameter, and elimination of oversized gritty top-cuts.",
      metric: "D50 Accuracy ±0.2µm",
    },
    {
      icon: <Activity className="w-5 h-5 text-[#E52323]" />,
      title: "X-Ray Fluorescence (XRF)",
      desc: "Spectrometric elemental assays verify stoichiometric purity of CaCO₃, MgCO₃, and CaO while monitoring silica (SiO₂) to ensure less than 1.0% insolubles.",
      metric: "Purity up to 98.8%",
    },
    {
      icon: <Gauge className="w-5 h-5 text-[#E52323]" />,
      title: "Spectrophotometer Brightness",
      desc: "Precision CIE L*a*b* optical whiteness and Y brightness measurements guarantee batch-to-batch consistency for architectural paints, plastics, and paper.",
      metric: "Brightness > 96.0%",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E52323]" />,
      title: "Batch COA Certification",
      desc: "Every outbound dispatch is accompanied by a standardized Certificate of Analysis (COA) detailing physical, chemical, and sieve parameters.",
      metric: "100% Traceability",
    },
  ];

  return (
    <section className="py-28 bg-[#FFFFFF] border-t border-[#E5E5E5] relative" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F5F2] border border-[#E5E5E5] text-xs font-mono-code text-[#E52323] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span>PRECISION &bull; QUALITY ASSURANCE</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#111111] tracking-tight uppercase">
            LABORATORY TESTED. BATCH VERIFIED.
          </h2>
          <p className="text-[#555555] text-sm sm:text-base leading-relaxed">
            Industrial processes tolerate zero chemical drift. Our quality control testing protocols ensure every truckload and container matches your exact technical specifications.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QA_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="mineral-card-light rounded-sm p-7 flex flex-col justify-between space-y-6 group hover:border-[#D0D0CA] transition-all bg-white"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm bg-[#F5F5F2] border border-[#EAEAE5] flex items-center justify-center">
                  {pillar.icon}
                </div>

                <h3 className="font-display font-bold text-lg text-[#111111] group-hover:text-black transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F0F0EC] flex items-center justify-between">
                <span className="text-[10px] font-mono-code text-[#888888] uppercase font-semibold">
                  Target Spec
                </span>
                <span className="text-xs font-mono-code text-[#111111] font-bold">
                  {pillar.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Callout Banner */}
        <div className="mt-14 bg-[#F5F5F2] border border-[#E5E5E5] rounded-sm p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-white border border-[#E5E5E5] flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#E52323]" />
            </div>
            <div>
              <h4 className="font-display font-bold text-base text-[#111111]">
                Request Custom Technical Specsheet & Laboratory Sample
              </h4>
              <p className="text-xs text-[#555555]">
                Receive certified COA and material testing samples for your factory trials.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111111] hover:bg-[#E52323] text-white font-bold text-xs font-mono-code uppercase tracking-widest rounded-sm transition-all shrink-0 shadow-sm"
          >
            <span>Request Sample & COA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
