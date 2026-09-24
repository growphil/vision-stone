import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Terms of Mineral Supply | VISION STONE",
  description: "Standard terms and conditions for industrial mineral contracts, dispatch, and sampling.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-3">
          <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest">
            COMMERCIAL TERMS
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white">
            Terms of Supply & Quotation
          </h1>
          <p className="text-xs font-mono-code text-neutral-400">
            Effective: September 2026 &bull; {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="mineral-card rounded-sm p-8 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light border border-white/10">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">1. Contract Supply & Purchase Orders</h2>
            <p>
              All mineral supply contracts, proforma invoices, and dispatch schedules issued by Vision Stone are subject to agreed technical specifications, moisture limits, and delivery terms (Ex-Works Salem, FOR Destination, or FOB Indian Ports).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">2. Quality Assurance & Sampling</h2>
            <p>
              Material purity, mesh distributions, and loss-on-ignition parameters are tested on representative lot samples per standard ASTM/IS analytical procedures. A Certificate of Analysis (COA) is issued for each batch.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">3. Packaging & Transport</h2>
            <p>
              Unless otherwise specified, products are packed in standard 25kg / 50kg laminated HDPE bags or 1 MT / 1.25 MT heavy-duty jumbo bags. Transport logistics via tippers, covered trailers, or container rakes must adhere to gross weight highway regulations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">4. Commercial Enquiries</h2>
            <p>
              For long-term supply agreements and formal tenders, please contact our commercial desk at{" "}
              <a href={`mailto:${COMPANY_INFO.contact.salesEmail}`} className="text-[#D62828] hover:underline font-mono-code">
                {COMPANY_INFO.contact.salesEmail}
              </a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
