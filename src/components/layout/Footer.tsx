import React from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { BRANDS } from "@/data/brands";
import { APPLICATIONS } from "@/data/applications";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#111114] border-t border-black/20 text-[#A0A0AA] text-sm relative overflow-hidden" aria-label="Footer">
      {/* Top Accent Line */}
      <div className="h-[2px] w-full bg-[#E52323] opacity-80" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm bg-white border border-white/20 flex items-center justify-center relative overflow-hidden">
                <span className="font-display font-black text-sm text-[#111111] tracking-widest pl-0.5">VS</span>
                <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#E52323]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg tracking-[0.16em] text-white">
                  VISION STONE
                </span>
                <span className="text-[9px] font-mono-code tracking-[0.2em] text-[#888899]">
                  MINERALS &bull; INDUSTRIAL
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#9999A5] leading-relaxed max-w-sm">
              {COMPANY_INFO.description}
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-[#C0C0CC]">
                <MapPin className="w-4 h-4 text-[#E52323] shrink-0" />
                <span>{COMPANY_INFO.contact.address.line1}, {COMPANY_INFO.contact.address.state}</span>
              </div>
              <div className="flex items-center gap-2 text-[#C0C0CC]">
                <Mail className="w-4 h-4 text-[#E52323] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-[#C0C0CC]">
                <Phone className="w-4 h-4 text-[#E52323] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono-code uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              Industrial Products
            </h3>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((prod) => (
                <li key={prod.id}>
                  <Link
                    href={`/products/${prod.slug}`}
                    className="hover:text-white transition-colors flex items-center justify-between group text-[#A0A0AA]"
                  >
                    <span>{prod.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#666677] group-hover:text-[#E52323] transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Applications & Brands (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code uppercase tracking-widest text-white font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                Industry Sectors
              </h3>
              <ul className="space-y-2 text-xs">
                {APPLICATIONS.slice(0, 5).map((app) => (
                  <li key={app.id}>
                    <Link href={`/applications`} className="hover:text-white transition-colors text-[#A0A0AA]">
                      {app.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <h3 className="text-xs font-mono-code uppercase tracking-widest text-white font-bold">
                Associated Brands
              </h3>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {BRANDS.map((brand) => (
                  <Link
                    key={brand.id}
                    href={`/brands`}
                    className="text-[10px] font-mono-code bg-white/5 hover:bg-white/10 text-[#C0C0CC] px-2 py-1 rounded border border-white/10 transition-colors"
                  >
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-mono-code uppercase tracking-widest text-white font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="hover:text-white transition-colors text-[#A0A0AA]">
                  About Vision Stone
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="hover:text-white transition-colors text-[#A0A0AA]">
                  Processing Plant
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white transition-colors text-[#A0A0AA]">
                  Brand Architecture
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-white transition-colors text-[#A0A0AA]">
                  Industrial Applications
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors text-[#E52323] font-bold">
                  Commercial Enquiry
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <div className="p-3 bg-white/[0.04] border border-white/10 rounded text-[11px] space-y-1">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E52323]" />
                  <span>Certified QA Assay</span>
                </div>
                <p className="text-[#888899] text-[10px] leading-tight">
                  XRF verified chemical purity & laser diffraction mesh sizing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#777788]">
          <div className="flex items-center gap-2">
            <span>&copy; {currentYear} {COMPANY_INFO.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono-code">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
            <span className="text-[#444455]">&bull;</span>
            <span className="text-[#9999AA]">Salem / India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
