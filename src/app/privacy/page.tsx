import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Privacy Policy | VISION STONE",
  description: "Privacy policy and client data handling policies of Vision Stone Minerals.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="space-y-3">
          <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest">
            LEGAL & COMPLIANCE
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono-code text-neutral-400">
            Last Updated: September 2026 &bull; {COMPANY_INFO.legalName}
          </p>
        </div>

        <div className="mineral-card rounded-sm p-8 sm:p-10 space-y-8 text-xs sm:text-sm text-neutral-300 leading-relaxed font-light border border-white/10">
          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">1. Scope of Policy</h2>
            <p>
              This Privacy Policy explains how Vision Stone Minerals & Industrial Solutions (&quot;Vision Stone&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and safeguards information submitted through our website and commercial communication channels.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">2. Information We Collect</h2>
            <p>
              We collect corporate and commercial contact information when you request quotations, technical spec sheets, laboratory certificates, or factory samples. This includes your name, company name, corporate email address, telephone/WhatsApp number, delivery location, and technical mineral requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">3. Use of Information</h2>
            <p>
              Your information is solely used to process commercial enquiries, generate material quotations, coordinate freight logistics, and provide technical support regarding our mineral products. We do not sell, rent, or monetize your corporate contact details.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">4. Data Security & Storage</h2>
            <p>
              Commercial transaction records and communications are securely stored with restricted access to authorized sales and quality control personnel.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display font-bold text-lg text-white">5. Contact Information</h2>
            <p>
              If you have any questions regarding our privacy practices or wish to update your business records, please contact our administrative desk at{" "}
              <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#D62828] hover:underline font-mono-code">
                {COMPANY_INFO.contact.email}
              </a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
