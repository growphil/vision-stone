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
  Paintbrush,
  Pipette,
  BadgeAlert,
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import ChemicalGypsumClient from "@/components/products/ChemicalGypsumClient";

export const metadata: Metadata = {
  title: "Chemical Gypsum Powder Manufacturer & Supplier in India | VISION STONES",
  description:
    "Vision Stones supplies mineral and raw-material products for customer-specific requirements from Tirunelveli, Tamil Nadu. Small, bulk & industrial supply.",
  openGraph: {
    title: "Chemical Gypsum Powder Manufacturer & Supplier | VISION STONES",
    description:
      "Vision Stones supplies mineral and raw-material products for customer-specific requirements. Manufacturing experience since 1997.",
    images: [
      {
        url: "/Products/chemical-gypsum-powder.webp",
        width: 1200,
        height: 800,
        alt: "Vision Stones Chemical Gypsum Powder",
      },
    ],
  },
};

export default function ChemicalGypsumPowderPage() {
  const product = getProductBySlug("chemical-gypsum-powder");

  // Related products from Gypsum category
  const relatedProducts = PRODUCTS.filter(
    (p) =>
      p.slug !== "chemical-gypsum-powder" &&
      (p.categorySlug === "gypsum" || p.category === "GYPSUM PRODUCTS")
  ).slice(0, 4);

  const faqs = [
    {
      question: "What is Chemical Gypsum Powder?",
      answer:
        "Chemical Gypsum Powder is a gypsum-based powder material supplied for applicable customer and raw-material requirements. Specific product characteristics and suitability should be confirmed according to the intended application.",
    },
    {
      question: "Does Vision Stones supply Chemical Gypsum Powder?",
      answer:
        "Product-specific availability should be confirmed with Vision Stones based on the customer's requirement.",
    },
    {
      question: "Which industries can enquire about Chemical Gypsum Powder?",
      answer:
        "Vision Stones serves agriculture, fertilizer & agri-inputs, rubber & polymers, paints, tiles & ceramics, construction, pipeline applications and general manufacturing. Specific product suitability should be confirmed for the intended application.",
    },
    {
      question: "Can I order Chemical Gypsum Powder in bulk?",
      answer:
        "Vision Stones supports small, bulk and industrial requirements depending on the product and customer requirement.",
    },
    {
      question: "Can I request a specific particle size or mesh?",
      answer:
        "Customers can share their required specification or particle size / mesh for discussion, where applicable.",
    },
    {
      question: "Can I request a sample?",
      answer:
        "Samples and technical information can be discussed where applicable, depending on the product and requirement.",
    },
    {
      question: "How is the price determined?",
      answer:
        "Pricing can depend on the required product, quantity, specification, packaging and delivery location.",
    },
    {
      question: "How can I get a quotation?",
      answer:
        "Share your required quantity, specification, application, packaging requirement and delivery location with Vision Stones.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Chemical Gypsum Powder",
        description:
          "Vision Stones supplies mineral and raw-material products for customer-specific requirements. Chemical Gypsum Powder requirements can be discussed based on quantity, specification, application, packaging and delivery requirements.",
        image: "https://visionstones.in/Products/chemical-gypsum-powder.webp",
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
        category: "Gypsum Products",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
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
            href="/products?cat=gypsum"
            className="hover:text-[#111111] transition-colors"
          >
            GYPSUM PRODUCTS
          </Link>
          <span className="text-[#D4D4CE]">/</span>
          <span className="text-[#E52323] font-bold">
            CHEMICAL GYPSUM POWDER
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
                  CHEMICAL GYPSUM POWDER SUPPLIER
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#111111] leading-[0.95]">
                Chemical Gypsum Powder Manufacturer &amp; Supplier in India
              </h1>

              {/* Subheading / Description */}
              <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                Vision Stones supplies mineral and raw-material products for customer-specific requirements. Chemical Gypsum Powder requirements can be discussed based on quantity, specification, application, packaging and delivery requirements.
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
                  href="/contact?product=Chemical%20Gypsum%20Powder&intent=quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center group"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact?product=Chemical%20Gypsum%20Powder"
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
                  src={product?.image || "/Products/chemical-gypsum-powder.webp"}
                  alt={product?.imageAlt || "Vision Stones Chemical Gypsum Powder"}
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
                      PRODUCT #20
                    </span>
                    <span>TIRUNELVELI, TN</span>
                  </div>
                  <div className="text-base font-black uppercase text-white tracking-tight mt-1">
                    CHEMICAL GYPSUM POWDER
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
            2. WHAT IS CHEMICAL GYPSUM POWDER?
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
              OVERVIEW
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
            What Is Chemical Gypsum Powder?
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
            <p>
              Chemical Gypsum Powder is a gypsum-based powder material supplied for applicable customer and raw-material requirements.
            </p>
            <p>
              The exact characteristics and suitability depend on the customer&apos;s intended application and required product specification.
            </p>
            <p className="font-medium text-[#222222]">
              Vision Stones supplies mineral and raw-material products and discusses customer requirements before confirming supply.
            </p>
          </div>
        </section>

        {/* ========================================================
            3. CHEMICAL GYPSUM POWDER PRODUCT INFORMATION
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
              Chemical Gypsum Powder Product Information
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Chemical Gypsum Powder requirements can vary according to the intended application and customer specifications.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
              Product Requirements Can Include:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
              {[
                { title: "Required quantity" },
                { title: "Product specification" },
                { title: "Particle size / mesh, if applicable" },
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

          <div className="p-4 sm:p-5 bg-white rounded-[8px] border-l-4 border-[#E52323] border border-[#E8E8E2] space-y-2">
            <p className="text-xs sm:text-sm text-[#444444] font-medium leading-relaxed">
              Product availability and supply arrangements are confirmed according to the customer&apos;s requirement and Vision Stones&apos; supply capability.
            </p>
            <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
              Customers can discuss samples and technical information where applicable and depending on the specific requirement.
            </p>
          </div>
        </section>

        {/* ========================================================
            4. CHEMICAL GYPSUM POWDER APPLICATIONS & INDUSTRIES
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
              Chemical Gypsum Powder Applications &amp; Industries
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Chemical Gypsum Powder requirements should be discussed according to the intended application and required product specification.
            </p>
          </div>

          {/* 9 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                sector: "01",
                name: "Fertilizer & Agri-Inputs",
                desc: "Vision Stones serves the fertilizer and agri-input sector. Customers can discuss applicable mineral and raw-material requirements based on their intended use.",
                icon: Layers,
              },
              {
                sector: "02",
                name: "Agriculture & Agri-Inputs",
                desc: "Customers in agriculture and agri-inputs can discuss their specific mineral raw-material requirements, quantity and specification.",
                icon: Sprout,
              },
              {
                sector: "03",
                name: "Tiles & Ceramics",
                desc: "Vision Stones serves the tiles and ceramics industry. Customers can discuss applicable gypsum or mineral material requirements according to their production needs.",
                icon: Building2,
              },
              {
                sector: "04",
                name: "Construction",
                desc: "Construction is among the industries served by Vision Stones. Customers can share their specific gypsum or mineral raw-material requirements for discussion.",
                icon: HardHat,
              },
              {
                sector: "05",
                name: "Paints",
                desc: "Customers in the paints sector can discuss applicable mineral raw-material requirements with Vision Stones.",
                icon: Paintbrush,
              },
              {
                sector: "06",
                name: "Rubber & Polymers",
                desc: "Vision Stones serves customers in rubber and polymers. Customers can share their specific mineral or raw-material requirement for discussion.",
                icon: Layers,
              },
              {
                sector: "07",
                name: "General Manufacturing",
                desc: "Manufacturing businesses can enquire about Chemical Gypsum Powder based on their production and raw-material requirements.",
                icon: Factory,
              },
              {
                sector: "08",
                name: "Industrial Requirements",
                desc: "Industrial customers can discuss quantity, specification, packaging and delivery requirements for Chemical Gypsum Powder.",
                icon: Package,
              },
              {
                sector: "09",
                name: "Pipeline Applications",
                desc: "Vision Stones serves pipeline-related applications. Customers can discuss their specific material requirements and intended use.",
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
                The suitability of Chemical Gypsum Powder for a particular application should be confirmed based on the customer&apos;s specific requirements.
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
                  "Specification / particle size, if applicable",
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
                <strong className="text-[#111111]">Content note:</strong> The available Vision Stones source confirms a mineral/raw-material product portfolio and the industries served by the company, but does not provide Chemical Gypsum Powder-specific technical specifications or confirmed applications for each industry. Those details have therefore not been presented as confirmed product facts.
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
              A Mineral Manufacturing &amp; Supply Partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-2xl font-black font-mono text-[#111111]">1997</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Manufacturing Experience Since 1997
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Vision Stones&apos; manufacturing roots date back to 1997, with experience in mineral and raw-material supply.
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
                The company supports small, bulk and industrial requirements depending on the product and customer requirement.
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
            6. CHEMICAL GYPSUM POWDER PRICE
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
                Chemical Gypsum Powder Price in India
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#555555] leading-relaxed">
                <p>
                  The price can vary depending on the required product, quantity, specification, packaging and delivery location.
                </p>
                <p>
                  Vision Stones can provide a quotation based on the customer&apos;s actual requirement rather than presenting an unsupported fixed price.
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
                  "Product specification / particle size, if applicable",
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
                  href="/contact?product=Chemical%20Gypsum%20Powder&intent=quote"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider py-3.5 rounded-[4px] transition-all shadow-sm text-center"
                >
                  <span>GET CHEMICAL GYPSUM POWDER PRICE</span>
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
              Chemical Gypsum Powder Supply Based on Your Requirement
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Vision Stones supports small, bulk and industrial requirements depending on the product and customer requirement.
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
                Customers with smaller or initial requirements can discuss quantity and packaging needs.
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
                Industrial customers can discuss their regular gypsum or mineral powder requirements.
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
                Project-specific and one-time requirements can be discussed based on quantity and delivery needs.
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
              Vision Stones follows a requirement-based approach to mineral and raw-material supply. Product and supply details are discussed and confirmed according to customer requirements.
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
                  "Particle size / mesh, where applicable",
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
                Samples and technical information can be discussed where applicable, depending on the product and requirement.
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
                Different customers may require different product and supply specifications. Vision Stones discusses the required details before confirming supply.
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
                PROCESS FLOW
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              How We Work
            </h2>
            <p className="text-xs sm:text-sm font-mono font-bold uppercase text-[#E52323]">
              Simple &amp; Transparent Supply Process
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Share Your Requirement",
                desc: "Provide your Chemical Gypsum Powder requirement along with quantity, application and delivery location.",
              },
              {
                step: "02",
                title: "Requirement Discussion",
                desc: "The Vision Stones team reviews the product and supply requirements with you.",
              },
              {
                step: "03",
                title: "Confirm Product Details",
                desc: "Specification, quantity, packaging and other applicable requirements are discussed and confirmed.",
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
            ].map((st, i) => (
              <div
                key={i}
                className="bg-[#FAF9F6] p-5 rounded-[8px] border border-[#E8E8E2] flex flex-col justify-between space-y-3 relative group hover:border-[#D0D0CA] transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-2xl font-black font-mono text-[#E52323] block">
                    {st.step}
                  </span>
                  <h3 className="text-xs sm:text-sm font-black uppercase text-[#111111]">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            10. FREQUENTLY ASKED QUESTIONS
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
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
          </div>

          <ChemicalGypsumClient faqs={faqs} />
        </section>

        {/* ========================================================
            11. REQUEST A QUOTE / CONTACT SECTION
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                GET IN TOUCH
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Looking for Chemical Gypsum Powder Supply?
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-3xl">
              Share your requirement with Vision Stones and discuss the product specification, quantity, packaging and delivery arrangements for your application.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                Please Share Your Requirement:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#444444]">
                {[
                  "Product: Chemical Gypsum Powder",
                  "Required Quantity",
                  "Specification / Particle Size / Mesh: If applicable",
                  "Application / Industry",
                  "Packaging Requirement",
                  "Delivery Location",
                  "Required Delivery Date",
                  "Requirement Type: One-Time / Recurring",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E52323] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Link
                  href="/contact?product=Chemical%20Gypsum%20Powder&intent=quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all shadow-sm group"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-black uppercase text-[#111111]">
                    Vision Stones
                  </h3>
                  <p className="text-xs font-mono text-[#666666]">
                    Mineral Manufacturing &amp; Supply
                  </p>
                  <p className="text-xs text-[#555555]">
                    {COMPANY_INFO.location.full}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-[#E8E8E2] text-xs sm:text-sm text-[#333333]">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#E52323] shrink-0" />
                    <a
                      href={`tel:${COMPANY_INFO.contact.phone}`}
                      className="hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#E52323] shrink-0" />
                    <a
                      href={`mailto:${COMPANY_INFO.contact.email}`}
                      className="hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#E52323] shrink-0" />
                    <a
                      href={`https://${COMPANY_INFO.contact.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E52323] transition-colors"
                    >
                      {COMPANY_INFO.contact.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-white rounded-[4px] border border-[#E0E0DB] text-[11px] text-[#666666] leading-relaxed">
                Direct communication with our supply &amp; technical coordinators for fast response.
              </div>
            </div>
          </div>

          {/* Source-Safety Note */}
          <div className="p-4 bg-[#FAF9F6] rounded-[6px] border border-[#E0E0DB] text-xs text-[#666666] leading-relaxed flex items-start gap-2.5">
            <BadgeAlert className="w-4 h-4 text-[#888888] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#111111]">Source-safety note:</strong> The available Vision Stones source does not provide Chemical Gypsum Powder-specific chemical composition, purity, gypsum content, moisture, particle-size ranges, certifications, packaging sizes or detailed technical application claims. These details have therefore not been presented as confirmed product facts.
            </p>
          </div>
        </section>

        {/* ========================================================
            12. RELATED PRODUCTS
            ======================================================== */}
        {relatedProducts.length > 0 && (
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-[#E52323] uppercase tracking-wider">
                  EXPLORE PORTFOLIO
                </span>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111111]">
                  Related Gypsum Products
                </h2>
              </div>
              <Link
                href="/products?cat=gypsum"
                className="text-xs font-mono font-bold uppercase text-[#E52323] hover:underline flex items-center gap-1"
              >
                <span>VIEW ALL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="group bg-white rounded-[8px] border border-[#E8E8E2] p-4 flex flex-col justify-between hover:border-[#D0D0CA] transition-all hover:shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] rounded-[6px] overflow-hidden bg-[#FAF9F6]">
                      <Image
                        src={rel.image || "/Products/chemical-gypsum-powder.webp"}
                        alt={rel.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-[#888888] uppercase">
                        PRODUCT #{rel.number}
                      </span>
                      <h3 className="text-xs sm:text-sm font-black uppercase text-[#111111] group-hover:text-[#E52323] transition-colors leading-snug">
                        {rel.name}
                      </h3>
                    </div>
                  </div>
                  <div className="pt-3 mt-3 border-t border-[#F0F0EA] flex items-center justify-between text-[11px] font-bold text-[#E52323]">
                    <span>VIEW PRODUCT</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
