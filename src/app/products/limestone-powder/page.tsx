import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Package,
  Layers,
  Building2,
  Sprout,
  Factory,
  HardHat,
  Truck,
  FileText,
  BadgeAlert,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import LimestonePowderClient from "@/components/products/LimestonePowderClient";

export const metadata: Metadata = {
  title: "Limestone Powder Manufacturer & Supplier in India | VISION STONES",
  description:
    "Limestone supplied by Vision Stones for agriculture, manufacturing, construction and other applicable industrial requirements. Small, bulk & industrial supply from Tirunelveli, Tamil Nadu.",
  openGraph: {
    title: "Limestone Powder Manufacturer & Supplier | VISION STONES",
    description:
      "Limestone supplied by Vision Stones for agriculture, manufacturing, construction and other applicable industrial requirements. Established manufacturing experience since 1997.",
    images: [
      {
        url: "/Products/limestone-powder.webp",
        width: 1200,
        height: 800,
        alt: "Vision Stones Limestone Powder",
      },
    ],
  },
};

export default function LimestonePowderPage() {
  const product = getProductBySlug("limestone-powder");

  // Related products from Lime & Limestone or other categories
  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== "limestone-powder" && (p.categorySlug === "lime-limestone" || p.category === "LIME & LIMESTONE")
  ).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Limestone Powder",
        description:
          "Limestone supplied by Vision Stones for agriculture, manufacturing, construction and other applicable industrial requirements.",
        image: "https://visionstones.in/Products/limestone-powder.webp",
        brand: {
          "@type": "Brand",
          name: "Vision Stones",
        },
        manufacturer: {
          "@type": "Organization",
          name: "Vision Stones",
          url: "https://visionstones.in",
          address: {
            "@type": "PostalAddress",
            addressLocality: COMPANY_INFO.location.city,
            addressRegion: COMPANY_INFO.location.state,
            addressCountry: COMPANY_INFO.location.country,
          },
        },
        category: "Lime & Limestone",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is limestone powder?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Limestone powder is a processed mineral material derived from limestone and supplied for applicable agricultural, construction, manufacturing and industrial requirements.",
            },
          },
          {
            "@type": "Question",
            name: "What is limestone used for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Limestone products can be supplied for applicable agriculture, fertilizer and agri-input, construction and general manufacturing requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Do you supply limestone in bulk?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Vision Stones works with smaller, bulk and industrial requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can I discuss a specific limestone requirement?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Product specifications, quantity, packaging and supply arrangements can be discussed according to the requirement.",
            },
          },
          {
            "@type": "Question",
            name: "Can I request a sample?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Where applicable, product samples and technical information can be discussed before proceeding with larger requirements.",
            },
          },
          {
            "@type": "Question",
            name: "How can I request a quotation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Share your required product, quantity, application, packaging requirement and delivery location with the Vision Stones team.",
            },
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111] font-display selection:bg-[#E52323] selection:text-white pt-24 sm:pt-32 pb-20">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ========================================================
          00. BREADCRUMB
          ======================================================== */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mb-8 sm:mb-12">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono uppercase text-[#888888] overflow-x-auto no-scrollbar whitespace-nowrap"
        >
          <Link href="/" className="hover:text-[#111111] transition-colors">
            HOME
          </Link>
          <span className="text-[#D4D4CE]">/</span>
          <Link href="/products" className="hover:text-[#111111] transition-colors">
            PRODUCTS
          </Link>
          <span className="text-[#D4D4CE]">/</span>
          <Link
            href="/products?cat=lime-limestone"
            className="hover:text-[#111111] transition-colors"
          >
            LIME &amp; LIMESTONE
          </Link>
          <span className="text-[#D4D4CE]">/</span>
          <span className="text-[#E52323] font-bold">
            LIMESTONE POWDER
          </span>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* ========================================================
            1. HERO SECTION
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Eyebrow, Title, Copy, Highlights, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[4px] bg-[#FAF9F6] border border-[#E8E8E2]">
                <span className="w-2 h-2 rounded-full bg-[#E52323] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                  PREMIUM LIMESTONE MINERAL SOLUTIONS
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#111111] leading-[0.95]">
                Limestone Powder Manufacturer &amp; Supplier in India
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                Limestone supplied by Vision Stones for agriculture, manufacturing, construction and other applicable industrial requirements, with product and supply arrangements discussed according to customer requirements.
              </p>

              {/* Key Highlights */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block mb-3">
                  Key Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Established Manufacturing Experience Since 1997",
                    "Flexible Product & Supply Requirements",
                    "Small, Bulk & Industrial Supply",
                    "Direct Customer Communication",
                  ].map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs sm:text-sm text-[#333333] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#E52323] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center group"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contact?product=Limestone%20Powder&intent=sample"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#F2F1EC] text-[#111111] border border-[#E0E0DB] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all text-center"
                >
                  <span>REQUEST A SAMPLE</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Container */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-[#E8E8E2] bg-[#1A1A1A] shadow-md group">
                <Image
                  src={product?.image || "/Products/limestone-powder.webp"}
                  alt={product?.imageAlt || "Vision Stones Limestone Powder"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Visual Metadata Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[6px] bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-300">
                    <span className="font-bold text-[#E52323] uppercase tracking-wider">
                      PRODUCT #06
                    </span>
                    <span>TIRUNELVELI, TN</span>
                  </div>
                  <div className="text-base font-black uppercase text-white tracking-tight mt-1">
                    LIMESTONE POWDER
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    Vision Stones | Mineral Manufacturing &amp; Supply
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. WHAT IS LIMESTONE POWDER?
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
              ABOUT LIMESTONE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
            What Is Limestone Powder?
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
            <p>
              Limestone powder is a processed mineral material derived from limestone and supplied for applicable agricultural, manufacturing, construction and industrial requirements.
            </p>
            <p>
              The suitable product form, specifications, quantity and supply arrangement can be discussed according to the customer&apos;s intended application and requirements.
            </p>
            <p className="font-medium text-[#222222]">
              Vision Stones manufactures and supplies limestone along with other mineral and raw-material products as part of its broader product portfolio.
            </p>
          </div>
        </section>

        {/* ========================================================
            3. LIMESTONE POWDER PRODUCT INFORMATION
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                PRODUCT INFORMATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Limestone Powder for Different Requirements
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Vision Stones supplies limestone products based on customer requirements and applicable manufacturing capabilities. Depending on the requirement, product specifications, form, quantity, packaging and supply schedules can be discussed and confirmed before supply.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
              Information We Discuss
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {[
                {
                  title: "Product Requirement",
                  desc: "Understanding the type and intended use of the limestone product.",
                },
                {
                  title: "Application",
                  desc: "Understanding how the product will be used.",
                },
                {
                  title: "Quantity",
                  desc: "Discussing smaller, bulk or industrial requirements.",
                },
                {
                  title: "Packaging",
                  desc: "Confirming the appropriate packaging requirement.",
                },
                {
                  title: "Supply Schedule",
                  desc: "Coordinating availability and delivery according to the agreed requirement.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-[8px] border border-[#E8E8E2] flex items-start gap-3.5 shadow-2xs hover:border-[#D0D0CA] transition-colors"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#FAF9F6] border border-[#E8E8E2] flex items-center justify-center text-[#E52323] shrink-0 font-mono text-xs font-bold mt-0.5">
                    0{idx + 1}
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs sm:text-sm font-bold uppercase text-[#111111] tracking-wide block">
                      {item.title}
                    </span>
                    <p className="text-xs text-[#555555] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            4. LIMESTONE APPLICATIONS & INDUSTRIES
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                APPLICATIONS &amp; INDUSTRIES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Limestone for Agriculture, Construction &amp; Manufacturing
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Vision Stones serves customers across agriculture, fertilizer and agri-inputs, construction and general manufacturing, with mineral products supplied according to applicable requirements.
            </p>
          </div>

          {/* 4 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                sector: "01",
                name: "Agriculture & Soil Applications",
                desc: "Mineral products supplied for soil enrichment and agricultural conditioning requirements.",
                icon: Sprout,
              },
              {
                sector: "02",
                name: "Fertilizer & Agri-Inputs",
                desc: "Raw mineral supply supporting fertilizer formulation and agricultural inputs.",
                icon: Layers,
              },
              {
                sector: "03",
                name: "Construction",
                desc: "Material supply supporting construction, masonry, plaster and civil works.",
                icon: HardHat,
              },
              {
                sector: "04",
                name: "General Manufacturing",
                desc: "Mineral raw materials for general manufacturing and industrial processing applications.",
                icon: Factory,
              },
            ].map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-[#E52323] uppercase">
                        SECTOR {ind.sector}
                      </span>
                      <IconComp className="w-4 h-4 text-[#E52323]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#111111]">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Supporting Text Box */}
          <div className="p-5 sm:p-6 bg-[#FAF9F6] rounded-[8px] border border-[#E8E8E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <BadgeAlert className="w-5 h-5 text-[#E52323] shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed">
                For application-specific requirements, share your intended use with our team so the appropriate product and supply arrangement can be discussed.
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-1.5 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-[4px] transition-all whitespace-nowrap shrink-0"
            >
              <span>DISCUSS REQUIREMENT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* ========================================================
            5. WHY CHOOSE VISION STONES?
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                WHY VISION STONES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Why Choose Vision Stones for Limestone Supply?
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Vision Stones represents the next stage of an established mineral manufacturing and raw-material supply business, with manufacturing roots dating back to 1997. The business combines established manufacturing experience with a modern approach to customer communication, sales and supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-2xl font-black font-mono text-[#111111]">1997</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Manufacturing Roots Since 1997
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Decades of experience in the mineral and raw-material industry.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-2xl font-black font-mono text-[#E52323]">450+</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                450+ Client Relationships
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Customer relationships developed across the business&apos;s operating history.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">FACILITIES</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Manufacturing Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Established facilities and machinery supporting mineral processing and supply.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">ADAPTABLE</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Flexible Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Requirements can be discussed across different quantities and specifications.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">TRANSPARENT</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Customers can communicate directly regarding their product and supply requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">PARTNERSHIP</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Long-Term Relationships
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Focused on clear communication and dependable customer relationships.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. LIMESTONE POWDER PRICE
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                  PRICING &amp; SUPPLY
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
                Limestone Powder Price
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#555555] leading-relaxed">
                <p>
                  Limestone pricing depends on the specific product requirement, quantity, packaging and supply arrangements. Vision Stones discusses pricing and supply according to the product, specification, production availability and delivery requirements.
                </p>
                <p>
                  For current pricing, share your required product, quantity, application and delivery location with our team for review.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-4 shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                Pricing Factors
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#444444]">
                {[
                  "Product Requirement",
                  "Quantity",
                  "Packaging",
                  "Delivery Location",
                  "Supply Requirement",
                ].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#quote"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider py-3.5 rounded-[4px] transition-all shadow-sm text-center"
                >
                  <span>GET CURRENT PRICE →</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. SMALL, BULK & INDUSTRIAL SUPPLY
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                SUPPLY OPTIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Limestone Supply for Different Order Sizes
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Vision Stones works with customers across different order sizes, from smaller requirements to bulk and industrial quantities. Supply arrangements are discussed according to the product, quantity, production availability and delivery requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                OPTION 01
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Small Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                For customers with smaller product requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                OPTION 02
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Bulk Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                For larger quantity requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                OPTION 03
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Industrial Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                For industrial and ongoing requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                OPTION 04
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Requirement-Based Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Supply arrangements are coordinated according to the agreed product and customer requirements.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            8. QUALITY & CUSTOMER REQUIREMENTS
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                OUR QUALITY APPROACH
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Clear Specifications. Reliable Supply.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-4">
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Vision Stones focuses on supplying products according to agreed product specifications and customer requirements. Product form, particle size, packaging and other requirements are discussed and confirmed according to the product and intended application.
              </p>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Where applicable, product samples and technical information can be discussed before proceeding with larger requirements. Clear specifications and accurate communication form an important part of the supply process.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block mb-2">
                Our Approach
              </span>
              <div className="space-y-2 text-xs sm:text-sm text-[#333333]">
                {[
                  "Understand the Requirement",
                  "Confirm Product Details",
                  "Coordinate Supply",
                  "Communicate Clearly",
                  "Work Toward Dependable Supply",
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E52323] shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            9. HOW WE WORK
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                FROM REQUIREMENT TO SUPPLY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              How We Work With Our Customers
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              We follow a clear process to understand your requirement, confirm the appropriate product and coordinate supply according to the agreed arrangement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "We understand your application, product requirement, specification and quantity.",
              },
              {
                step: "02",
                title: "Confirm",
                desc: "Our team reviews product availability, specifications and production requirements.",
              },
              {
                step: "03",
                title: "Coordinate",
                desc: "We coordinate production, packaging and supply according to the agreed requirement.",
              },
              {
                step: "04",
                title: "Supply",
                desc: "The product is prepared and supplied according to the agreed arrangement.",
              },
              {
                step: "05",
                title: "Build",
                desc: "We aim to develop successful orders into long-term customer relationships.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] p-5 sm:p-6 rounded-[8px] border border-[#E8E8E2] flex flex-col justify-between space-y-4 hover:border-[#D0D0CA] transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 rounded-full bg-white border border-[#E52323] flex items-center justify-center text-xs font-mono font-black text-[#111111]">
                    {st.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-[#111111] leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E8E8E2] text-[10px] font-mono text-[#888888]">
                  STAGE {st.step} / 05
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            10. FREQUENTLY ASKED QUESTIONS (Client interactive accordion)
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Frequently Asked Questions About Limestone Powder
            </h2>
          </div>

          <LimestonePowderClient />
        </section>

        {/* ========================================================
            11. REQUEST A QUOTE & DIRECT CONTACT
            ======================================================== */}
        <section
          id="quote"
          className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-14 shadow-xs space-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: What to share */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                    TELL US WHAT YOU NEED
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111] leading-tight">
                  Let&apos;s Discuss Your Limestone Requirement
                </h2>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  Tell us your product requirement, quantity, specification, application, packaging and delivery location. Our team will review your requirement and discuss the appropriate product and supply arrangement.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-[8px] border border-[#E8E8E2] space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                  Requirement Fields:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#444444]">
                  {[
                    "Product Required",
                    "Quantity",
                    "Specification / Particle Size",
                    "Application",
                    "Packaging Requirement",
                    "Delivery Location",
                    "Required Delivery Date",
                    "One-Time or Recurring Requirement",
                  ].map((field, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                      <span>{field}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact?product=Limestone%20Powder&intent=quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center group"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact?product=Limestone%20Powder&intent=sample"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#F2F1EC] text-[#111111] border border-[#E0E0DB] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all text-center"
                >
                  <span>REQUEST A SAMPLE</span>
                </Link>
              </div>

              <p className="text-xs font-mono text-[#888888] uppercase tracking-wider pt-2">
                Small Requirements • Bulk Orders • Industrial Supply
              </p>
            </div>

            {/* Right: Company details box */}
            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-[#E52323] tracking-widest uppercase">
                  DIRECT CONTACT
                </span>
                <h3 className="text-xl font-black uppercase text-[#111111] mt-1">
                  Vision Stones
                </h3>
                <p className="text-xs text-[#777777] uppercase tracking-wider">
                  Mineral Manufacturing &amp; Supply
                </p>
                <p className="text-xs text-[#555555] mt-1">
                  {COMPANY_INFO.location.full}
                </p>
              </div>

              <div className="space-y-3.5 pt-4 border-t border-[#E8E8E2] text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#E52323] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#888888] block">Phone</span>
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="font-bold text-[#111111] hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#E52323] mt-0.5 shrink-0" />
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
                  <Globe className="w-4 h-4 text-[#E52323] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#888888] block">Website</span>
                    <span className="font-bold text-[#111111]">
                      {COMPANY_INFO.contact.website}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E8E2] text-[11px] font-mono text-[#777777] flex items-center justify-between">
                <span>ESTABLISHED 1997</span>
                <span className="text-[#E52323] font-bold">450+ CLIENTS</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            RELATED PRODUCTS
            ======================================================== */}
        <section className="space-y-8 pt-4">
          <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-4">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E52323]">
                CATALOGUE
              </span>
              <h3 className="text-xl sm:text-2xl font-black uppercase text-[#111111]">
                Other Lime &amp; Limestone Products
              </h3>
            </div>
            <Link
              href="/products?cat=lime-limestone"
              className="text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors"
            >
              VIEW ALL PRODUCTS →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.slug}`}
                className="group block bg-white rounded-[8px] border border-[#E8E8E2] overflow-hidden hover:border-[#D0D0CA] transition-colors p-4 space-y-3"
              >
                <div className="relative aspect-[4/3] bg-[#F0F0EB] rounded-[4px] overflow-hidden">
                  {rel.image ? (
                    <Image
                      src={rel.image}
                      alt={rel.imageAlt || rel.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-[#888888]">
                      IMAGE PENDING
                    </div>
                  )}
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#E52323] font-bold uppercase">
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-black uppercase text-[#111111] line-clamp-1 group-hover:text-[#E52323] transition-colors">
                    {rel.name}
                  </h4>
                  <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#888888] group-hover:text-[#111111] pt-1">
                    <span>VIEW PRODUCT</span>
                    <ArrowRight className="w-3 h-3 text-[#E52323]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
