import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Globe,
  Sprout,
  Layers,
  HardHat,
  Factory,
  Building2,
  Package,
  Truck,
  Paintbrush,
  Pipette,
  BadgeAlert,
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import QuickLimeLumpsClient from "@/components/products/QuickLimeLumpsClient";

export const metadata: Metadata = {
  title: "Quick Lime Lumps Manufacturer & Supplier in India | VISION STONES",
  description:
    "Vision Stones supplies lime and mineral/raw-material products for customer-specific requirements from Tirunelveli, Tamil Nadu. Small, bulk & industrial supply.",
  openGraph: {
    title: "Quick Lime Lumps Manufacturer & Supplier | VISION STONES",
    description:
      "Vision Stones supplies lime and mineral/raw-material products for customer-specific requirements. Manufacturing experience since 1997.",
    images: [
      {
        url: "/Products/quick-lime-lumps.webp",
        width: 1200,
        height: 800,
        alt: "Vision Stones Quick Lime Lumps",
      },
    ],
  },
};

export default function QuickLimeLumpsPage() {
  const product = getProductBySlug("quick-lime-lumps");

  // Related products from Lime & Limestone
  const relatedProducts = PRODUCTS.filter(
    (p) => p.slug !== "quick-lime-lumps" && (p.categorySlug === "lime-limestone" || p.category === "LIME & LIMESTONE")
  ).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Quick Lime Lumps",
        description:
          "Vision Stones supplies lime and mineral/raw-material products for customer-specific requirements, with product specifications, quantities, packaging and delivery arrangements discussed according to the intended application and supply requirements.",
        image: "https://visionstones.in/Products/quick-lime-lumps.webp",
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
            name: "What are Quick Lime Lumps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Quick Lime Lumps are a lime-based raw material supplied in lump form. Specific product characteristics and suitability should be confirmed according to the intended application and customer requirement.",
            },
          },
          {
            "@type": "Question",
            name: "Does Vision Stones supply Quick Lime Lumps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vision Stones includes lime within its mineral and raw-material product portfolio. Quick Lime Lumps-specific availability should be confirmed based on the customer's requirement.",
            },
          },
          {
            "@type": "Question",
            name: "What industries can enquire about Quick Lime Lumps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vision Stones serves customers across agriculture, fertilizer & agri-inputs, rubber & polymers, paints, tiles & ceramics, construction, pipeline applications and general manufacturing. Specific suitability should be confirmed according to the intended application.",
            },
          },
          {
            "@type": "Question",
            name: "Can I order Quick Lime Lumps in bulk?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Vision Stones supports small, bulk and industrial requirements depending on the product and customer requirement.",
            },
          },
          {
            "@type": "Question",
            name: "Can I request a specific lump size?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Customers can share their required specification or lump size for discussion, where applicable.",
            },
          },
          {
            "@type": "Question",
            name: "Can I request a sample?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Samples and technical information can be discussed where applicable, depending on the product and requirement.",
            },
          },
          {
            "@type": "Question",
            name: "How is the price determined?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing can depend on the required product, quantity, specifications, packaging and delivery location.",
            },
          },
          {
            "@type": "Question",
            name: "How can I get a quotation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Share your required quantity, specification, application, packaging requirement and delivery location with Vision Stones.",
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
            QUICK LIME LUMPS
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
                  QUICK LIME LUMPS SUPPLIER
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#111111] leading-[0.95]">
                Quick Lime Lumps Manufacturer &amp; Supplier in India
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                Vision Stones supplies lime and mineral/raw-material products for customer-specific requirements, with product specifications, quantities, packaging and delivery arrangements discussed according to the intended application and supply requirements.
              </p>

              {/* Key Highlights */}
              <div className="pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block mb-3">
                  Key Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Manufacturing Experience Since 1997",
                    "Small, Bulk & Industrial Supply",
                    "Requirement-Based Product Supply",
                    "Flexible Customer Requirements",
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
                <Link
                  href="/contact?product=Quick%20Lime%20Lumps&intent=quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center group"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact?product=Quick%20Lime%20Lumps"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#F2F1EC] text-[#111111] border border-[#E0E0DB] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all text-center"
                >
                  <span>ENQUIRE NOW</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Container */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-[#E8E8E2] bg-[#1A1A1A] shadow-md group">
                <Image
                  src={product?.image || "/Products/quick-lime-lumps.webp"}
                  alt={product?.imageAlt || "Vision Stones Quick Lime Lumps"}
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
                      PRODUCT #09
                    </span>
                    <span>TIRUNELVELI, TN</span>
                  </div>
                  <div className="text-base font-black uppercase text-white tracking-tight mt-1">
                    QUICK LIME LUMPS
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
            2. WHAT IS QUICK LIME LUMPS?
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
              OVERVIEW
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
            What Is Quick Lime Lumps?
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
            <p>
              Quick Lime Lumps are a lime-based raw material supplied in lump form for applicable customer requirements.
            </p>
            <p>
              The exact product requirements can vary depending on the intended application, quantity and customer specifications. Vision Stones discusses the required product details before confirming supply.
            </p>
            <p className="font-medium text-[#222222]">
              Vision Stones includes lime within its mineral and raw-material product portfolio and supports customer-specific supply requirements.
            </p>
          </div>
        </section>

        {/* ========================================================
            3. QUICK LIME LUMPS PRODUCT INFORMATION
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                SPECIFICATIONS &amp; SCOPE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Quick Lime Lumps Product Information
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Quick Lime Lumps requirements can vary according to the customer&apos;s intended application and purchasing requirements.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
              Product Requirements Can Include:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {[
                { title: "Product requirement" },
                { title: "Required quantity" },
                { title: "Specification / lump size, if applicable" },
                { title: "Intended application" },
                { title: "Packaging requirement" },
                { title: "Delivery location" },
                { title: "Required delivery schedule" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-5 rounded-[8px] border border-[#E8E8E2] flex items-center gap-3.5 shadow-2xs hover:border-[#D0D0CA] transition-colors"
                >
                  <div className="w-8 h-8 rounded-[4px] bg-[#FAF9F6] border border-[#E8E8E2] flex items-center justify-center text-[#E52323] shrink-0 font-mono text-xs font-bold">
                    0{idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase text-[#111111] tracking-wide">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 sm:p-5 bg-white rounded-[8px] border-l-4 border-[#E52323] border border-[#E8E8E2]">
            <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed">
              Product availability and supply arrangements are confirmed according to the customer&apos;s requirement and Vision Stones&apos; supply capability.
            </p>
          </div>
        </section>

        {/* ========================================================
            4. QUICK LIME LUMPS APPLICATIONS & INDUSTRIES
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                APPLICATION SUPPORT
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Quick Lime Lumps Applications &amp; Industries
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Quick Lime Lumps requirements should be discussed according to the intended application and required product specifications.
            </p>
          </div>

          {/* 9 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                sector: "01",
                name: "Agriculture & Agri-Related Requirements",
                desc: "Customers with agriculture-related raw-material requirements can discuss their lime-related requirements, intended application and quantity with Vision Stones.",
                icon: Sprout,
              },
              {
                sector: "02",
                name: "Fertilizer & Agri-Inputs",
                desc: "Vision Stones serves the fertilizer and agri-input sector. Customers can discuss applicable lime-related material requirements based on their intended use and required specification.",
                icon: Layers,
              },
              {
                sector: "03",
                name: "Construction",
                desc: "Construction is among the industries served by Vision Stones. Customers can share their specific lime or raw-material requirement and intended application for discussion.",
                icon: HardHat,
              },
              {
                sector: "04",
                name: "Tiles & Ceramics",
                desc: "Customers in tiles and ceramics can discuss their raw-material requirements with Vision Stones, including applicable lime-related requirements.",
                icon: Building2,
              },
              {
                sector: "05",
                name: "General Manufacturing",
                desc: "Manufacturing customers can enquire about Quick Lime Lumps based on their production or raw-material requirements.",
                icon: Factory,
              },
              {
                sector: "06",
                name: "Industrial Requirements",
                desc: "Industrial customers can discuss their required quantity, product specification, packaging and delivery schedule with Vision Stones.",
                icon: Package,
              },
              {
                sector: "07",
                name: "Rubber & Polymers",
                desc: "Vision Stones serves customers in the rubber and polymers sector. Any Quick Lime Lumps requirement for this industry should be discussed based on the specific application and required specification.",
                icon: Layers,
              },
              {
                sector: "08",
                name: "Paints",
                desc: "Vision Stones serves customers in the paints sector. Customers can discuss their specific raw-material requirement and determine the applicable product requirement.",
                icon: Paintbrush,
              },
              {
                sector: "09",
                name: "Pipeline Applications",
                desc: "Pipeline applications are among the industries served by Vision Stones. Customers can share their specific material requirement and application for discussion.",
                icon: Pipette,
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

          {/* Requirement-Based Application Support Info Box */}
          <div className="p-6 sm:p-8 bg-[#FAF9F6] rounded-[10px] border border-[#E8E8E2] space-y-5">
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-black uppercase text-[#111111]">
                Requirement-Based Application Support
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                The suitability of Quick Lime Lumps for a particular application should be confirmed according to the customer&apos;s specific requirement.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                Customers are encouraged to provide:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  "Intended application",
                  "Required quantity",
                  "Product specification / lump size, if applicable",
                  "Packaging requirement",
                  "Delivery location",
                  "Required delivery date",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#333333] bg-white p-2.5 rounded-[4px] border border-[#E8E8E2]"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Note */}
            <div className="p-4 bg-white rounded-[6px] border border-[#E0E0DB] text-xs text-[#666666] leading-relaxed flex items-start gap-2.5">
              <BadgeAlert className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#111111]">Content note:</strong> The Vision Stones source confirms lime as part of the product portfolio and confirms the industries served by the company. It does not provide separate Quick Lime Lumps-specific technical specifications or confirmed applications for each industry. Those details should therefore be confirmed before publishing technical product claims.
              </p>
            </div>
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
                OUR HERITAGE &amp; CAPABILITY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Why Choose Vision Stones?
            </h2>
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#E52323]">
              A Manufacturing &amp; Supply Partner for Your Requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-2xl font-black font-mono text-[#111111]">1997</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Manufacturing Experience Since 1997
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Vision Stones&apos; manufacturing roots date back to 1997, providing long-term experience in mineral and raw-material supply.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-2xl font-black font-mono text-[#E52323]">450+</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                450+ Customers
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Vision Stones serves more than 450 customers across different industries and requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">FORMATS</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Small, Bulk &amp; Industrial Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Vision Stones supports small, bulk and industrial requirements depending on the product and customer requirement.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">FLEXIBLE</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Requirement-Based Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Product specifications, quantities, packaging and delivery requirements are discussed according to customer needs.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">DIRECT</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Direct Customer Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Customers can directly communicate their product and supply requirements with the Vision Stones team.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">VERSATILE</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Multiple Industry Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Vision Stones serves customers across agriculture, fertilizer &amp; agri-inputs, rubber &amp; polymers, paints, tiles &amp; ceramics, construction, pipeline applications and general manufacturing.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. QUICK LIME LUMPS PRICE
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                  COMMERCIAL PRICING
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
                Quick Lime Lumps Price in India
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#555555] leading-relaxed">
                <p>
                  Pricing can vary depending on the required product, quantity, specifications, packaging and delivery location.
                </p>
                <p>
                  Vision Stones can provide a quotation based on the customer&apos;s specific requirement rather than displaying an unsupported fixed price.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-4 shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                For a Price Quote, Share:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#444444]">
                {[
                  "Required quantity",
                  "Product specification / lump size",
                  "Intended application",
                  "Packaging requirement",
                  "Delivery location",
                  "Required delivery date",
                  "One-time or recurring requirement",
                ].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href="/contact?product=Quick%20Lime%20Lumps&intent=quote"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider py-3.5 rounded-[4px] transition-all shadow-sm text-center"
                >
                  <span>GET QUICK LIME LUMPS PRICE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
                SUPPLY ARRANGEMENTS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Quick Lime Lumps Supply Based on Your Requirement
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Vision Stones supports small, bulk and industrial requirements, depending on the product and customer requirement.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                FORMAT 01
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Small Quantity Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Suitable for customers with smaller or initial requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                FORMAT 02
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Bulk Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Customers requiring larger quantities can discuss volume, packaging and delivery requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                FORMAT 03
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Industrial Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Industrial customers can discuss their regular lime-related material requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                SCHEDULE 01
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                One-Time Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Customers with project-specific or one-time requirements can share their quantity and delivery requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2 sm:col-span-2 lg:col-span-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                SCHEDULE 02
              </span>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Recurring Supply
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Businesses with regular requirements can discuss recurring supply arrangements based on product availability and supply capability.
              </p>
            </div>
          </div>

          <div className="p-4 bg-[#FAF9F6] rounded-[6px] border border-[#E8E8E2] text-xs font-mono text-[#666666] text-center">
            Availability and delivery arrangements are confirmed according to the specific customer requirement.
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
                CONFIRMATION &amp; DISPATCH
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Requirement-Based Quality &amp; Supply
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Vision Stones follows a requirement-based approach to product supply. Product specifications and supply details are discussed and confirmed according to customer requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                Depending on the product and requirement, customers can discuss:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "Product specifications",
                  "Lump size, where applicable",
                  "Product form",
                  "Quantity",
                  "Packaging",
                  "Application",
                  "Delivery requirements",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#333333]">
                    <CheckCircle2 className="w-4 h-4 text-[#E52323] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#666666] pt-2 border-t border-[#E8E8E2]">
                Samples and technical information can also be discussed where applicable, depending on the product and requirement.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                CONSULTATIVE SUPPLY
              </span>
              <h3 className="text-lg sm:text-xl font-black uppercase text-[#111111]">
                Customer-Specific Requirements
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Different customers may have different product and supply requirements. Vision Stones discusses the required product details before confirming supply.
              </p>
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
                STEP-BY-STEP PROCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              How We Work
            </h2>
            <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#777777]">
              Simple &amp; Transparent Supply Process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
            {[
              {
                step: "01",
                title: "Share Your Requirement",
                desc: "Provide your Quick Lime Lumps requirement along with quantity, application and delivery location.",
              },
              {
                step: "02",
                title: "Requirement Discussion",
                desc: "The Vision Stones team reviews the product and supply requirements with you.",
              },
              {
                step: "03",
                title: "Confirm Product Details",
                desc: "Specifications, quantity, packaging and other applicable requirements are discussed and confirmed.",
              },
              {
                step: "04",
                title: "Supply Coordination",
                desc: "Once the requirement is confirmed, supply and delivery arrangements are coordinated.",
              },
              {
                step: "05",
                title: "Delivery",
                desc: "The product is supplied according to the agreed product and delivery requirements.",
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
                FAQ
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#555555]">
              Common commercial and supply questions regarding Quick Lime Lumps.
            </p>
          </div>

          <QuickLimeLumpsClient />
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
                    COMMERCIAL INQUIRY
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111] leading-tight">
                  Looking for Quick Lime Lumps Supply?
                </h2>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  Share your requirement with Vision Stones and discuss the product specifications, quantity, packaging and delivery arrangements for your application.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-[8px] border border-[#E8E8E2] space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                  Please Share Your Requirement:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#444444]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Product:</strong> Quick Lime Lumps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Required Quantity</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Specification / Lump Size:</strong> If applicable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Application / Industry</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Packaging Requirement</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Delivery Location</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Required Delivery Date</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#E52323] rounded-full shrink-0" />
                    <span><strong>Requirement Type:</strong> One-Time / Recurring</span>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/contact?product=Quick%20Lime%20Lumps&intent=quote"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center group"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
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

          {/* Bottom Mandatory Content Note */}
          <div className="pt-6 border-t border-[#E8E8E2]">
            <div className="p-4 sm:p-5 bg-[#FAF9F6] rounded-[6px] border border-[#E8E8E2] text-xs text-[#666666] leading-relaxed flex items-start gap-3">
              <BadgeAlert className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#111111]">Content note:</strong> The Vision Stones source confirms lime as part of the product portfolio and confirms the industries served by the company. It does not provide Quick Lime Lumps-specific purity, CaO percentage, lump-size ranges, grades, certifications, packaging sizes or detailed industry-specific applications. Those details have therefore not been presented as confirmed product facts.
              </p>
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
                Other Lime &amp; Mineral Products
              </h3>
            </div>
            <Link
              href="/products"
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
