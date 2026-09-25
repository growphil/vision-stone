import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Globe } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  return (
    <footer className="w-full bg-[#111114] text-white font-display border-t border-white/10">
      
      {/* UPPER FOOTER: B2B INQUIRY BAR */}
      <div className="border-b border-white/10 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#E52323] font-bold">
              ESTABLISHED 1997 / 450+ CLIENTS
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              REQUIRE BULK MINERAL RAW MATERIALS?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg">
              Direct consultation, custom mesh specifications, trial test samples, and industrial contract dispatches.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <Link
              href="/contact?intent=quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all shadow-md hover:shadow-lg"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-[4px] bg-white border border-white/20 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/favicon.svg"
                  alt="Vision Stones Logo Emblem"
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="font-display font-black text-lg tracking-[0.18em] text-white">
                VISION STONES
              </span>
            </div>

            <p className="text-xs uppercase tracking-wider text-[#E52323] font-bold font-mono">
              Mineral Manufacturing & Supply
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Manufacturing roots dating back to 1997. Sourcing, pulverizing, and supplying high-purity industrial minerals to over 450+ clients across India.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E52323]" />
                <span>{COMPANY_INFO.location.full}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E52323]">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-neutral-300 hover:text-white transition-colors">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-neutral-300 hover:text-white transition-colors">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products Portfolio (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E52323]">
              PRODUCTS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <Link href="/products/dolomite-powder" className="hover:text-white transition-colors">
                  Dolomite (Powder & Lump)
                </Link>
              </li>
              <li>
                <Link href="/products/limestone-lump" className="hover:text-white transition-colors">
                  Limestone
                </Link>
              </li>
              <li>
                <Link href="/products/hydrated-lime-powder" className="hover:text-white transition-colors">
                  Lime (Hydrated Lime)
                </Link>
              </li>
              <li>
                <Link href="/products/calcite-powder" className="hover:text-white transition-colors">
                  Calcite (Powder & Stone)
                </Link>
              </li>
              <li>
                <Link href="/products/calcium-carbonate-powder" className="hover:text-white transition-colors">
                  Calcium Carbonate
                </Link>
              </li>
              <li>
                <Link href="/products/kola-maavu" className="hover:text-white transition-colors">
                  Kola Maavu / Kolam Powder
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/products#additional" className="text-[#E52323] hover:underline text-xs">
                  + Additional Mineral Products →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#E52323]">
              CONTACT DETAILS
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E52323] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block">Phone</span>
                  <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-white transition-colors font-bold">
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E52323] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block">Email</span>
                  <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#E52323] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block">Website</span>
                  <span>{COMPANY_INFO.contact.website}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E52323] hover:underline"
              >
                <span>REQUEST A QUOTE →</span>
              </Link>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} VISION STONES. All rights reserved. Tirunelveli, Tamil Nadu, India.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Supply
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
