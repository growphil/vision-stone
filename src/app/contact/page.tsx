import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, CheckCircle2 } from "lucide-react";
import ContactFormClient from "@/components/contact/ContactFormClient";
import { COMPANY_INFO } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact & Request a Quote | Mineral Supply - VISION STONES",
  description:
    "Request quotations and trial samples for Dolomite, Limestone, Lime, and Calcite directly from Vision Stones in Tirunelveli, Tamil Nadu. Phone: 8300685057, Email: visionstones.22@gmail.com.",
  openGraph: {
    title: "Contact & Request a Quote | VISION STONES",
    description: "Every mineral requirement can be different. Request a quote or sample today.",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-[#FFFFFF] text-[#111111] min-h-screen font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-12 lg:px-16 space-y-12 sm:space-y-16">
        
        {/* PAGE HEADER */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
              COMMERCIAL INQUIRIES
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight sm:leading-none">
            TELL US
            <br />
            <span className="text-[#E52323]">WHAT YOU NEED.</span>
          </h1>

          <p className="text-sm sm:text-lg text-[#555555] leading-relaxed pt-1 sm:pt-2">
            Every mineral requirement can be different. Whether your process demands specific mesh sizing, controlled packaging, or continuous bulk dispatches, our team confirms production feasibility and delivers dependable pricing.
          </p>
        </div>

        {/* 2-COLUMN LAYOUT: FORM (7 COLS) + COMPANY CONTACT (5 COLS) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-8 lg:p-12 rounded-[10px] border border-[#E8E8E4] shadow-subtle">
            <React.Suspense fallback={<div className="p-8 text-center text-xs font-mono text-[#888888]">Loading inquiry form...</div>}>
              <ContactFormClient />
            </React.Suspense>
          </div>

          {/* Right Column: Verified Company Contact Details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            
            {/* Primary Details Box */}
            <div className="bg-[#FAF9F6] p-6 sm:p-10 rounded-[10px] border border-[#E8E8E4] space-y-5 sm:space-y-6 shadow-subtle">
              <div>
                <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                  DIRECT CONTACT
                </span>
                <h2 className="text-2xl font-black uppercase text-[#111111] mt-1">
                  VISION STONES
                </h2>
                <p className="text-xs text-[#777777] uppercase tracking-wider">
                  Mineral Manufacturing & Supply
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#E8E8E4] text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E52323] mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#888888] block">Location</span>
                    <span className="font-bold text-[#111111]">
                      {COMPANY_INFO.location.full}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#E52323] mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#888888] block">Phone</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="font-bold text-[#111111] hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#E52323] mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#888888] block">Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="font-bold text-[#111111] hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#E52323] mt-1 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#888888] block">Website</span>
                    <span className="font-bold text-[#111111]">
                      {COMPANY_INFO.contact.website}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E8E4] flex items-center justify-between text-xs text-[#777777] font-mono">
                <span>MANUFACTURING SINCE 1997</span>
                <span className="text-[#E52323] font-bold">450+ CLIENTS</span>
              </div>
            </div>

            {/* Supply Assurance Note */}
            <div className="bg-[#FAF9F6] p-8 rounded-[10px] border border-[#E8E8E4] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block">
                WHAT TO EXPECT NEXT:
              </span>
              <div className="space-y-2 text-xs text-[#555555]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323] mt-0.5 shrink-0" />
                  <span>Technical feasibility and mesh confirmation within business hours</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323] mt-0.5 shrink-0" />
                  <span>Dispatch of product test samples upon request</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323] mt-0.5 shrink-0" />
                  <span>Direct freight and logistics coordination from Tirunelveli</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
