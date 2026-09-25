import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function QuoteCTA() {
  return (
    <section className="w-full bg-[#FFFFFF] text-[#111111] py-24 sm:py-32 font-display border-t border-[#E8E8E4]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16">
        
        <div className="bg-[#FAF9F6] p-6 sm:p-12 lg:p-20 rounded-[12px] border border-[#E8E8E4] shadow-subtle relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Heading and Description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#E52323]">
                  COMMERCIAL ENGAGEMENT
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-none">
                TELL US
                <br />
                <span className="text-[#E52323]">WHAT YOU NEED.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl">
                Every mineral requirement can be different. Whether you need standard mesh grades, trial test samples, or continuous bulk dispatches, our team coordinates production directly to your specification.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-4">
                <Link
                  href="/contact?intent=quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all shadow-md hover:shadow-lg text-center"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact?intent=sample"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] hover:text-[#E52323] border border-[#D0D0CA] hover:border-[#E52323] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all text-center"
                >
                  <span>REQUEST A SAMPLE</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Direct Contact Info Box */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-10 rounded-[8px] border border-[#E8E8E4] space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase">
                  DIRECT COMMERCIAL CONTACT
                </span>
                <h3 className="text-xl font-black uppercase text-[#111111] mt-1">
                  VISION STONES
                </h3>
                <p className="text-xs text-[#777777] uppercase tracking-wider">
                  Mineral Manufacturing & Raw-Material Supply
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#F0F0EB]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#E52323] mt-1 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#888888] block">Location</span>
                    <span className="text-sm font-bold text-[#111111]">
                      {COMPANY_INFO.location.full}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#E52323] mt-1 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#888888] block">Direct Phone</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="text-sm font-bold text-[#111111] hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.phoneDisplay} ({COMPANY_INFO.contact.phone})
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#E52323] mt-1 shrink-0" />
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#888888] block">Official Email</span>
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="text-sm font-bold text-[#111111] hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0F0EB] text-xs text-[#888888]">
                <span>Official Web: </span>
                <strong className="text-[#111111]">{COMPANY_INFO.contact.website}</strong>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
