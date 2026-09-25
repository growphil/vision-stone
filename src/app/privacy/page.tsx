import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | VISION STONES",
  description: "Privacy policy and client data handling policies of Vision Stones.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#FFFFFF] text-[#111111] min-h-screen font-display">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
        
        <div className="space-y-2 sm:space-y-3">
          <span className="text-xs font-mono font-bold text-[#E52323] uppercase tracking-widest">
            LEGAL & PRIVACY
          </span>
          <h1 className="text-2xl sm:text-5xl font-black uppercase text-[#111111]">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[#777777]">
            {COMPANY_INFO.name} &bull; {COMPANY_INFO.location.full}
          </p>
        </div>

        <div className="bg-[#FAF9F6] p-6 sm:p-10 rounded-[10px] border border-[#E8E8E4] space-y-6 sm:space-y-8 text-xs sm:text-sm text-[#555555] leading-relaxed shadow-subtle">
          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">1. Scope of Policy</h2>
            <p>
              This Privacy Policy explains how Vision Stones (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and safeguards information submitted through our website and commercial communication channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">2. Information We Collect</h2>
            <p>
              We collect corporate and commercial contact information when you request quotations, product specifications, or trial samples. This includes your name, company name, email address, telephone number, delivery location, and specific mineral requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">3. Use of Information</h2>
            <p>
              Your information is solely used to process commercial enquiries, generate material quotations, coordinate freight logistics, and provide technical support regarding our mineral products. We do not sell or rent commercial contact details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">4. Data Security</h2>
            <p>
              Commercial transaction records and communications are securely handled by authorized supply coordination personnel.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-black uppercase text-[#111111]">5. Contact Information</h2>
            <p>
              For any questions regarding our privacy practices, contact us at{" "}
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
