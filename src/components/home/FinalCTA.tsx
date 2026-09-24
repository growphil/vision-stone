import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-[#FFFFFF] border-t border-[#E5E5E5] relative" id="enquiry">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5F5F2] border border-[#E5E5E5] text-xs font-mono-code text-[#E52323] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span>COMMERCIAL SUPPLY & CONTRACTS</span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-tight uppercase">
          SECURE YOUR INDUSTRIAL
          <br />
          <span className="text-[#E52323]">MINERAL SUPPLY CHAIN</span>
        </h2>

        <p className="text-[#555555] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-normal">
          Whether you require high-tonnage recurring monthly contract dispatches of metallurgical dolomite or customized micronized grades for polymer compounding, our sales engineering team provides instant quotes, samples, and technical datasheets.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#111111] hover:bg-[#E52323] text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-sm transition-all shadow-md group"
          >
            <span>Start Commercial Enquiry</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#F5F5F2] hover:bg-[#EAEAE5] text-[#111111] font-bold text-xs sm:text-sm uppercase tracking-widest rounded-sm border border-[#E5E5E5] transition-all"
          >
            <span>Browse Catalogue</span>
          </Link>
        </div>

        {/* Quick Contact Bar */}
        <div className="pt-8 border-t border-[#F0F0EC] flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-mono-code text-[#666666]">
          <a
            href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
            className="hover:text-[#111111] flex items-center gap-2 transition-colors font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-[#E52323]" />
            <span>{COMPANY_INFO.contact.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.contact.email}`}
            className="hover:text-[#111111] flex items-center gap-2 transition-colors font-bold"
          >
            <Mail className="w-3.5 h-3.5 text-[#E52323]" />
            <span>{COMPANY_INFO.contact.email}</span>
          </a>

          <div className="flex items-center gap-2 text-[#444444] font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Response within 4 business hours</span>
          </div>
        </div>

      </div>
    </section>
  );
}
