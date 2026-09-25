import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Supply | VISION STONES",
  description: "Standard terms and conditions for industrial mineral contracts, dispatch, and sampling with Vision Stones.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#FFFFFF] text-[#111111] min-h-screen font-display">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
        
        <div className="space-y-2 sm:space-y-3">
          <span className="text-xs font-mono font-bold text-[#E52323] uppercase tracking-widest">
            COMMERCIAL POLICIES
          </span>
          <h1 className="text-2xl sm:text-5xl font-black uppercase text-[#111111]">
            Terms of Supply & Quotation
          </h1>
          <p className="text-xs font-mono text-[#777777]">
            {COMPANY_INFO.name} &bull; {COMPANY_INFO.location.full}
          </p>
        </div>

        <div className="bg-[#FAF9F6] p-6 sm:p-10 rounded-[10px] border border-[#E8E8E4] space-y-6 sm:space-y-8 text-xs sm:text-sm text-[#555555] leading-relaxed shadow-subtle">
          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">1. Quotation & Supply Arrangements</h2>
            <p>
              All mineral supply arrangements, proforma quotations, and dispatch schedules issued by Vision Stones are confirmed based on agreed product specifications, packaging types, production capability, and freight logistics from Tirunelveli, Tamil Nadu.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">2. Product Specifications & Sampling</h2>
            <p>
              Particle size, mesh grading, and physical forms are prepared according to agreed customer requirements. Test samples can be requested for trial verification prior to commercial bulk dispatch.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">3. Packaging & Logistics</h2>
            <p>
              Packaging is arranged per client order, including standard 25kg/50kg bags, bulk jumbo bags, or loose tipper deliveries. Transit schedules and road transport coordination are managed in direct communication with the buyer.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">4. Inquiries & Supply Coordination</h2>
            <p>
              For recurring supply agreements or customized mesh requirements, contact our commercial coordination desk at{" "}
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#E52323] hover:underline font-mono">
                {COMPANY_INFO.contact.email}
              </a>{" "}
              or call{" "}
              <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-[#E52323] hover:underline font-mono">
                {COMPANY_INFO.contact.phone}
              </a>.
            </p>
          </section>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors"
          >
            ← Return to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
