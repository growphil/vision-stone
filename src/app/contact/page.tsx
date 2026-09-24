import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Truck, 
  ArrowRight,
  HelpCircle
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import ContactFormClient from "@/components/contact/ContactFormClient";

export const metadata: Metadata = {
  title: "Commercial Enquiry & Procurement Desk | VISION STONE Industrial Minerals",
  description:
    "Direct commercial procurement desk for Vision Stone. Request bulk volume pricing, customized mesh sizing (100–1500 Mesh), certified laboratory trial samples, and road/port dispatch schedules.",
  openGraph: {
    title: "Commercial Enquiry & Procurement Desk | VISION STONE",
    description: "Request mineral pricing, testing certificates, and bulk supply quotes.",
  },
};

const FAQS = [
  {
    q: "What is the standard turnaround time for commercial pricing & COA dispatch?",
    a: "Our commercial and technical sales desk provides formalized price quotations, complete batch specifications, and Certificate of Analysis (COA) within 4 business hours of inquiry submission.",
  },
  {
    q: "Can we request complimentary laboratory trial samples before issuing a bulk PO?",
    a: "Yes. Vision Stone dispatches certified 5 kg to 25 kg pilot trial packs via express courier for laboratory formulation and plant compatibility trials at no material cost for industrial enterprises.",
  },
  {
    q: "What particle sizes and customized mesh top-cuts can you mill?",
    a: "We mill and air-classify minerals from coarse uncrushed lumps (25mm–100mm) down to 200, 300, 500, 700, 1000, and 1500 Mesh (sub-micron top cuts) tailored to specific industrial application curves.",
  },
  {
    q: "What packaging configurations and palletization options are available?",
    a: "We provide 25 kg multi-wall paper bags, 50 kg HDPE woven moisture-barrier bags, and 1,000 kg (1 MT) heavy-duty jumbo sling bags with shrink-wrapped wooden palletization for domestic or ocean export.",
  },
  {
    q: "How are freight dispatches coordinated across India and international ports?",
    a: "Our logistics team manages dedicated multi-axle truckloads directly to plants across Southern, Western, and Northern India, as well as containerized stuffing for FOB/CIF export via Tuticorin (V.O.C.) and Chennai Ports.",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#FFFFFF] text-[#111111] min-h-screen font-display">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="pt-32 pb-16 bg-[#F5F5F2] border-b border-[#E5E5E5] font-display">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#E5E5E5] text-xs font-display text-[#E52323] uppercase tracking-wider font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span>COMMERCIAL PROCUREMENT & DIRECT DESK</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[1.1]">
              DIRECT ACCESS TO MINERAL ENGINEERING & SUPPLY.
            </h1>

            <p className="text-[#555555] text-sm sm:text-base leading-relaxed font-display">
              Connect directly with our process metallurgists and supply chain desk for bulk volume contracts, customized mesh size formulations (100–1500 Mesh), complimentary laboratory samples, and guaranteed domestic/export dispatch.
            </p>

            {/* Quick Commitments Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#444444] font-display">
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 border border-[#E5E5E5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323]" />
                <strong className="text-[#111111] font-bold">4-Hour</strong> Quote Turnaround
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 border border-[#E5E5E5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323]" />
                <strong className="text-[#111111] font-bold">Certified</strong> Batch COA & XRF
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 border border-[#E5E5E5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323]" />
                <strong className="text-[#111111] font-bold">Free</strong> Lab Trial Samples
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 border border-[#E5E5E5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E52323]" />
                <strong className="text-[#111111] font-bold">Pan-India</strong> & Global Export
              </span>
            </div>

          </div>
        </div>
      </section>


      {/* 2. DIRECT CONTACT CHANNELS (3-GRID) */}
      <section className="py-12 bg-white border-b border-[#E5E5E5] font-display">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone / WhatsApp */}
            <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all group font-display">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-white border border-[#E5E5E5] flex items-center justify-center text-[#E52323]">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-display px-2.5 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-200 uppercase font-bold">
                  Desk Online
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-[#111111] mb-1">
                Direct Sales & Engineering Desk
              </h3>
              <p className="text-xs text-[#666666] mb-3 font-display">
                For urgent truckload dispatches, price agreements, and immediate inquiries.
              </p>
              <div className="space-y-1 font-display text-xs">
                <a 
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`} 
                  className="block font-bold text-[#111111] hover:text-[#E52323] transition-colors"
                >
                  {COMPANY_INFO.contact.phone}
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.contact.phoneSecondary.replace(/\s+/g, "")}`} 
                  className="block text-[#555555] hover:text-[#E52323] transition-colors font-medium"
                >
                  {COMPANY_INFO.contact.phoneSecondary}
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E5E5E5]">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-display text-[#E52323] font-bold group-hover:underline"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Email Channels */}
            <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all group font-display">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-white border border-[#E5E5E5] flex items-center justify-center text-[#E52323]">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-display px-2.5 py-0.5 bg-[#F0F0EC] text-[#555555] uppercase font-bold">
                  4h SLA
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-[#111111] mb-1">
                Commercial RFQ & Specifications
              </h3>
              <p className="text-xs text-[#666666] mb-3 font-display">
                Send tender documents, tender RFQs, customized mesh specs, and contracts.
              </p>
              <div className="space-y-1 font-display text-xs">
                <a 
                  href={`mailto:${COMPANY_INFO.contact.salesEmail}`} 
                  className="block font-bold text-[#111111] hover:text-[#E52323] transition-colors"
                >
                  {COMPANY_INFO.contact.salesEmail}
                </a>
                <a 
                  href={`mailto:${COMPANY_INFO.contact.email}`} 
                  className="block text-[#555555] hover:text-[#E52323] transition-colors font-medium"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E5E5E5]">
                <a
                  href={`mailto:${COMPANY_INFO.contact.salesEmail}`}
                  className="inline-flex items-center gap-1.5 text-xs font-display text-[#E52323] font-bold group-hover:underline"
                >
                  <span>Send RFQ Directly</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Processing Works / Facility */}
            <div className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#111111] transition-all group font-display">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-white border border-[#E5E5E5] flex items-center justify-center text-[#E52323]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-display px-2.5 py-0.5 bg-[#F0F0EC] text-[#555555] uppercase font-bold">
                  Salem Hub
                </span>
              </div>
              <h3 className="font-display font-bold text-base text-[#111111] mb-1">
                Processing Complex & Weighbridge
              </h3>
              <p className="text-xs text-[#666666] mb-3 font-display">
                {COMPANY_INFO.contact.address.line1}, {COMPANY_INFO.contact.address.city}, {COMPANY_INFO.contact.address.state} - {COMPANY_INFO.contact.address.postalCode}
              </p>
              <div className="text-xs font-display text-[#555555] space-y-0.5">
                <div><strong className="text-[#333333]">HOURS:</strong> Mon–Sat 08:30 – 18:30 IST</div>
                <div><strong className="text-[#333333]">DISPATCH:</strong> 24/7 Automated Weighbridge</div>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E5E5E5]">
                <Link
                  href="/infrastructure"
                  className="inline-flex items-center gap-1.5 text-xs font-display text-[#E52323] font-bold group-hover:underline"
                >
                  <span>View Facility & Lab</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 3. CORE INTERACTIVE PROCUREMENT STUDIO & FACILITY DETAILS */}
      <section className="py-16 bg-[#FAFAFA] font-display">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Interactive Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-[#111111]">
                    Commercial RFQ & Sample Request
                  </h2>
                  <p className="text-xs text-[#666666] font-display">
                    Configure your mineral specifications, order volume, and packaging format.
                  </p>
                </div>
                <span className="hidden sm:inline-block text-xs font-display font-semibold text-[#888888]">
                  SECURE • SSL ENCRYPTED
                </span>
              </div>

              <Suspense fallback={<div className="p-12 text-center text-xs font-display text-[#666666] bg-white border border-[#E5E5E5]">Loading Procurement Studio...</div>}>
                <ContactFormClient />
              </Suspense>
            </div>

            {/* Right: Operational Details & Assurance (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Quality & Dispatch SLA Card */}
              <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 space-y-5 font-display">
                <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
                  <ShieldCheck className="w-5 h-5 text-[#E52323]" />
                  <h3 className="font-display font-bold text-base text-[#111111]">
                    Procurement & Quality Guarantees
                  </h3>
                </div>

                <div className="space-y-4 text-xs text-[#555555] font-display">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block font-bold">Batch-Specific Certificate of Analysis (COA)</strong>
                      <span>Every shipment includes chemical assays (CaO, MgO, SiO₂, LOI) and laser diffraction particle distribution curves.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block font-bold">Calibrated Weighbridge Accuracy</strong>
                      <span>Fully automated digital weighbridge with verified gross/tare slips eliminates volume discrepancy.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block font-bold">Weatherproof Sealed Packaging</strong>
                      <span>High-grade UV-stabilized, moisture-locked HDPE bags prevent ambient clumping or contamination during transit.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#111111] block font-bold">Guaranteed Buffer Stocking</strong>
                      <span>Contract clients benefit from dedicated silo reserves (500+ MT) ensuring zero downtime in continuous plant operations.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Logistics & Multi-Modal Corridors Card */}
              <div className="bg-white border border-[#E5E5E5] p-6 sm:p-8 space-y-5 font-display">
                <div className="flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
                  <Truck className="w-5 h-5 text-[#E52323]" />
                  <h3 className="font-display font-bold text-base text-[#111111]">
                    Logistics & Strategic Corridors
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-display">
                  <div className="p-3 bg-[#F5F5F2] border border-[#E5E5E5]">
                    <div className="font-bold text-[#111111] text-xs mb-0.5">ROAD FREIGHT</div>
                    <p className="text-xs text-[#666666]">Direct NH-44 & NH-544 highway fleet access across India.</p>
                  </div>
                  <div className="p-3 bg-[#F5F5F2] border border-[#E5E5E5]">
                    <div className="font-bold text-[#111111] text-xs mb-0.5">PORT EXPORT</div>
                    <p className="text-xs text-[#666666]">Tuticorin (V.O.C.) & Chennai Port container stuffing.</p>
                  </div>
                  <div className="p-3 bg-[#F5F5F2] border border-[#E5E5E5]">
                    <div className="font-bold text-[#111111] text-xs mb-0.5">CONTAINER SIZES</div>
                    <p className="text-xs text-[#666666]">20ft FCL (up to 28 MT) & 40ft High Cube containers.</p>
                  </div>
                  <div className="p-3 bg-[#F5F5F2] border border-[#E5E5E5]">
                    <div className="font-bold text-[#111111] text-xs mb-0.5">BULK RAKES</div>
                    <p className="text-xs text-[#666666]">Industrial rail siding coordination for mega-volume steelworks.</p>
                  </div>
                </div>
              </div>

              {/* Direct Emergency Dispatch Hotline */}
              <div className="p-6 bg-[#111111] text-white space-y-3 font-display">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-display uppercase tracking-wider text-[#E52323] font-bold">
                    URGENT PLANT DISPATCH
                  </span>
                  <Clock className="w-4 h-4 text-[#888888]" />
                </div>
                <h4 className="font-display font-bold text-lg text-white">
                  Need Immediate Truckload Allocation?
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-display">
                  Call our duty dispatch officer directly for same-day weighing and vehicle gate-pass issuance.
                </p>
                <div className="pt-2">
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E52323] hover:bg-[#c91d1d] text-white text-xs font-display font-bold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Duty Officer Now</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 4. PROCUREMENT FAQ SECTION */}
      <section className="py-16 bg-white border-t border-[#E5E5E5] font-display">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F5F5F2] border border-[#E5E5E5] text-xs font-display text-[#E52323] uppercase tracking-wider font-bold mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>COMMERCIAL INQUIRIES & SOURCING FAQ</span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-[#111111] tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] mt-2 font-display">
              Essential details regarding minimum orders, customized mesh processing, and freight coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FAQS.map((faq, index) => (
              <div key={index} className="p-6 bg-[#FAFAFA] border border-[#E5E5E5] space-y-2 font-display">
                <div className="flex items-start gap-3">
                  <span className="font-display text-xs font-extrabold text-[#E52323] shrink-0 mt-0.5">
                    0{index + 1}.
                  </span>
                  <h3 className="font-display font-bold text-sm text-[#111111]">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs text-[#555555] pl-6 leading-relaxed font-display">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
