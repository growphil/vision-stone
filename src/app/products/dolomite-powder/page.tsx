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
  Boxes,
  ArrowDown,
} from "lucide-react";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";
import DolomitePowderClient from "@/components/products/DolomitePowderClient";

export const metadata: Metadata = {
  title: "Dolomite Powder Manufacturer & Supplier in India | VISION STONES",
  description:
    "High-quality dolomite powder manufactured for consistent performance across agriculture, construction and diverse industrial applications from Tirunelveli, Tamil Nadu.",
  openGraph: {
    title: "Dolomite Powder Manufacturer & Supplier | VISION STONES",
    description:
      "India's best dolomite powder manufacturer & supplier. High purity & consistent quality across multiple grades & mesh sizes.",
    images: [
      {
        url: "/Products/dolomite-powder.webp",
        width: 1200,
        height: 800,
        alt: "Vision Stones Dolomite Powder",
      },
    ],
  },
};

export default function DolomitePowderPage() {
  const product = getProductBySlug("dolomite-powder");

  // Related products from Calcium & Dolomite category
  const relatedProducts = PRODUCTS.filter(
    (p) =>
      p.slug !== "dolomite-powder" &&
      (p.categorySlug === "calcium-dolomite" || p.category === "CALCIUM & DOLOMITE")
  ).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: "Dolomite Powder",
        description:
          "High-quality dolomite powder manufactured for consistent performance across agriculture, construction and diverse industrial applications. Available in multiple grades and mesh sizes.",
        image: "https://visionstones.in/Products/dolomite-powder.webp",
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
        category: "Calcium & Dolomite",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is dolomite powder?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Dolomite powder is a finely processed mineral material produced from dolomite and supplied in different particle sizes according to application requirements.",
            },
          },
          {
            "@type": "Question",
            name: "What is dolomite powder used for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "It is supplied for agriculture, fertilizer and agri-inputs, rubber and polymers, paints, tiles and ceramics, construction, pipeline applications and general manufacturing.",
            },
          },
          {
            "@type": "Question",
            name: "What mesh sizes of dolomite powder are available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vision Stones offers standard 100 Mesh, 200 Mesh and 240 Mesh, with customized particle sizes from 0 to 240 Mesh, subject to production capability.",
            },
          },
          {
            "@type": "Question",
            name: "Do you supply dolomite powder in bulk?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Vision Stones works with smaller, bulk and industrial requirements.",
            },
          },
          {
            "@type": "Question",
            name: "What determines the price of dolomite powder?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Pricing depends on factors such as particle size, product specification, quantity, packaging and delivery requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can I request a specific particle size?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Customized particle sizes can be discussed according to the application and production capability.",
            },
          },
          {
            "@type": "Question",
            name: "Can I request a sample before placing a bulk order?",
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
              text: "Share your required product, quantity, mesh/particle size, application, packaging requirement and delivery location with the Vision Stones team.",
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
            href="/products?cat=calcium-dolomite"
            className="hover:text-[#111111] transition-colors"
          >
            CALCIUM &amp; DOLOMITE
          </Link>
          <span className="text-[#D4D4CE]">/</span>
          <span className="text-[#E52323] font-bold">
            DOLOMITE POWDER
          </span>
        </nav>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* ========================================================
            1. HERO SECTION
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[4px] bg-[#FAF9F6] border border-[#E8E8E2]">
                <span className="w-2 h-2 rounded-full bg-[#E52323] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                  PREMIUM DOLOMITE MINERAL SOLUTIONS
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-[#111111] leading-[0.95]">
                India&apos;s Best Dolomite Powder Manufacturer &amp; Supplier
              </h1>

              <p className="text-sm sm:text-base text-[#555555] leading-relaxed font-normal">
                High-quality dolomite powder manufactured for consistent performance across agriculture, construction and diverse industrial applications. Available in multiple grades and mesh sizes to meet your specific requirements.
              </p>

              <div className="pt-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block mb-3">
                  Key Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "High Purity & Consistent Quality",
                    "Multiple Grades & Mesh Sizes",
                    "Bulk & Industrial Supply",
                    "Custom Specifications Available",
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

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center group"
                >
                  <span>GET A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="/contact?product=Dolomite%20Powder&intent=sample"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#F2F1EC] text-[#111111] border border-[#E0E0DB] text-xs sm:text-sm font-bold uppercase tracking-wider px-7 py-4 rounded-[4px] transition-all text-center"
                >
                  <span>REQUEST A SAMPLE</span>
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-[#E8E8E2] bg-[#1A1A1A] shadow-md group">
                <Image
                  src={product?.image || "/Products/dolomite-powder.webp"}
                  alt={product?.imageAlt || "Vision Stones Dolomite Powder"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[6px] bg-black/60 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-300">
                    <span className="font-bold text-[#E52323] uppercase tracking-wider">
                      PRODUCT #14
                    </span>
                    <span>TIRUNELVELI, TN</span>
                  </div>
                  <div className="text-base font-black uppercase text-white tracking-tight mt-1">
                    DOLOMITE POWDER
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
            2. WHAT IS DOLOMITE POWDER?
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                ABOUT DOLOMITE POWDER
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              What Is Dolomite Powder?
            </h2>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
            <p>
              Dolomite powder is a finely ground mineral material produced from naturally occurring dolomite stone. It is primarily composed of calcium magnesium carbonate (CaMg(CO₃)₂) and is processed into a controlled powder form for use across various industries.
            </p>
            <p>
              The manufacturing process involves carefully selected dolomite stone being crushed, ground and screened to achieve the required particle size and consistency. Depending on the intended application, dolomite powder can be processed to meet different technical and performance requirements.
            </p>
            <p>
              Due to its mineral composition and versatility, dolomite powder is widely used in agriculture, construction, ceramics, glass, paints, coatings and other industrial applications.
            </p>
          </div>

          {/* Supporting Visual Process Flow */}
          <div className="pt-4 border-t border-[#E8E8E2]">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block mb-4">
              Mineral Processing Flow:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {[
                { step: "01", title: "Natural Dolomite Stone" },
                { step: "02", title: "Crushing & Grinding" },
                { step: "03", title: "Screening & Processing" },
                { step: "04", title: "Finished Dolomite Powder" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF9F6] p-4 rounded-[8px] border border-[#E8E8E2] flex items-center justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-[#E52323] font-bold block">
                      STAGE {item.step}
                    </span>
                    <span className="text-xs sm:text-sm font-black uppercase text-[#111111] mt-0.5 block">
                      {item.title}
                    </span>
                  </div>
                  {idx < 3 && (
                    <ArrowRight className="w-4 h-4 text-[#888888] hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. DOLOMITE POWDER GRADES & MESH SIZES
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                PRODUCT GRADES &amp; SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Dolomite Powder Grades &amp; Mesh Sizes
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Vision Stones supplies dolomite in different particle sizes to meet the requirements of agriculture, manufacturing, construction and industrial applications. Our standard dolomite powder options include 100 Mesh, 200 Mesh and 240 Mesh, with customized particle sizes from 0 Mesh up to 240 Mesh available based on customer requirements and production capability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-6 rounded-[8px] border border-[#E8E8E2] space-y-2.5 shadow-2xs">
              <span className="text-2xl font-black font-mono text-[#111111] block">
                100 MESH
              </span>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Suitable for applications requiring a controlled, medium-fine particle size.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[8px] border border-[#E8E8E2] space-y-2.5 shadow-2xs">
              <span className="text-2xl font-black font-mono text-[#E52323] block">
                200 MESH
              </span>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                A finer dolomite powder option for applications requiring increased fineness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[8px] border border-[#E8E8E2] space-y-2.5 shadow-2xs">
              <span className="text-2xl font-black font-mono text-[#111111] block">
                240 MESH
              </span>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                A fine particle-size option for applications requiring higher fineness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-[8px] border border-[#E8E8E2] space-y-2.5 shadow-2xs">
              <span className="text-2xl font-black font-mono text-[#E52323] block">
                0–240 MESH
              </span>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Particle sizes can be discussed and customized according to the application and technical requirement, subject to production confirmation.
              </p>
            </div>
          </div>

          {/* Mesh CTA Box */}
          <div className="p-6 bg-white rounded-[8px] border border-[#E8E8E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-base font-black uppercase text-[#111111]">
                Need a specific mesh size?
              </h3>
              <p className="text-xs sm:text-sm text-[#555555]">
                Share your application and required specification with our team for availability and supply confirmation.
              </p>
            </div>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-1.5 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-[4px] transition-all whitespace-nowrap shrink-0"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* ========================================================
            4. DOLOMITE POWDER MANUFACTURING PROCESS
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                OUR MANUFACTURING PROCESS
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Dolomite Powder Manufacturing Process
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Our dolomite powder is produced through an established mineral processing and manufacturing process. The production is coordinated according to the required particle size, product specification, quantity and supply requirements. Vision Stones&apos; manufacturing foundation and experience in mineral processing and production date back to 1997.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Raw Material",
                desc: "Selection and preparation of dolomite material for processing.",
              },
              {
                step: "02",
                title: "Crushing",
                desc: "Dolomite is processed into suitable sizes for further grinding.",
              },
              {
                step: "03",
                title: "Grinding",
                desc: "The material is ground to achieve the required powder fineness.",
              },
              {
                step: "04",
                title: "Screening",
                desc: "Processed material is screened to achieve the required particle size and mesh specification.",
              },
              {
                step: "05",
                title: "Quality & Specification Check",
                desc: "Product requirements, particle size and applicable specifications are reviewed before supply.",
              },
              {
                step: "06",
                title: "Packing & Supply",
                desc: "The finished product is packed according to the agreed requirement and prepared for delivery.",
              },
            ].map((st, idx) => (
              <div
                key={idx}
                className="bg-[#FAF9F6] p-6 rounded-[8px] border border-[#E8E8E2] space-y-2.5"
              >
                <span className="text-[11px] font-mono font-bold text-[#E52323] uppercase">
                  PROCESS {st.step}
                </span>
                <h3 className="text-base font-black uppercase text-[#111111]">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#FAF9F6] rounded-[6px] border border-[#E8E8E2] text-xs font-mono text-[#666666] text-center">
            From established mineral processing experience to consistent, specification-based supply.
          </div>
        </section>

        {/* ========================================================
            5. DOLOMITE POWDER USES & APPLICATIONS
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                APPLICATIONS &amp; INDUSTRIES
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Dolomite Powder Uses &amp; Applications
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Dolomite is supplied by Vision Stones for applications across agriculture, manufacturing, construction and various industrial sectors. The suitable particle size, product form and supply requirements can be discussed according to the customer&apos;s intended application.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Agriculture & Soil Applications",
                desc: "Mineral material for agricultural and soil-related requirements.",
                icon: Sprout,
              },
              {
                name: "Fertilizer & Agri-Inputs",
                desc: "Used for applicable fertilizer and agricultural-input manufacturing requirements.",
                icon: Layers,
              },
              {
                name: "Rubber & Polymer Manufacturing",
                desc: "Mineral material for suitable rubber and polymer manufacturing processes.",
                icon: Layers,
              },
              {
                name: "Paints & Coatings",
                desc: "For applicable paint and coating manufacturing requirements.",
                icon: Paintbrush,
              },
              {
                name: "Tiles & Ceramics",
                desc: "For suitable tile and ceramic manufacturing applications.",
                icon: Building2,
              },
              {
                name: "Construction",
                desc: "Mineral material for construction-related requirements.",
                icon: HardHat,
              },
              {
                name: "Pipeline Applications",
                desc: "For applicable pipeline-related industrial requirements.",
                icon: Pipette,
              },
              {
                name: "General Manufacturing",
                desc: "Suitable for various manufacturing and industrial requirements based on application and specifications.",
                icon: Factory,
              },
            ].map((app, idx) => {
              const AppIcon = app.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-[8px] border border-[#E8E8E2] space-y-2.5 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-[4px] bg-[#FAF9F6] border border-[#E8E8E2] flex items-center justify-center text-[#E52323]">
                      <AppIcon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-black uppercase tracking-tight text-[#111111]">
                      {app.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Application CTA Box */}
          <div className="p-6 bg-white rounded-[8px] border border-[#E8E8E2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h3 className="text-base font-black uppercase text-[#111111]">
              Looking for Dolomite Powder for a Specific Application?
            </h3>
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-1.5 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-[4px] transition-all whitespace-nowrap shrink-0"
            >
              <span>SHARE YOUR REQUIREMENT →</span>
            </a>
          </div>
        </section>

        {/* ========================================================
            6. WHY CHOOSE VISION STONES?
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
              Why Choose Vision Stones for Dolomite Powder?
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Vision Stones combines established manufacturing experience with a modern approach to mineral supply. With manufacturing roots dating back to 1997, the company works with customers across different order sizes and requirements, from smaller quantities to bulk and industrial supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-2xl font-black font-mono text-[#111111]">1997</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Manufacturing Experience Since 1997
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Built on decades of practical experience in mineral manufacturing and processing.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-2xl font-black font-mono text-[#E52323]">450+</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                450+ Client Relationships
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Experience serving customers across different product, quantity and application requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">FLEXIBLE</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Flexible Specifications
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Different particle sizes, product forms, packaging and quantities can be discussed according to requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">FACILITIES</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Manufacturing Infrastructure
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Established production facilities and machinery supporting mineral processing and supply.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">DIRECT</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Customers can communicate directly with our team regarding product and supply requirements.
              </p>
            </div>

            <div className="p-6 rounded-[8px] bg-[#FAF9F6] border border-[#E8E8E2] space-y-2">
              <div className="text-xs font-mono font-bold text-[#E52323] uppercase">PARTNERSHIP</div>
              <h3 className="text-base font-black uppercase text-[#111111]">
                Long-Term Supply Relationships
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                Focused on dependable communication, responsive service and lasting customer relationships.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. DOLOMITE POWDER PRICE
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                  PRICING &amp; BULK SUPPLY
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
                Dolomite Powder Price Per Kg
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-[#555555] leading-relaxed">
                <p>
                  The price of dolomite powder depends on the required mesh size, product specifications, quantity, packaging and delivery requirements. Vision Stones works with smaller, bulk and industrial requirements, with supply arrangements discussed according to the product, specification, quantity, production availability and delivery requirements.
                </p>
                <p>
                  For the latest dolomite powder price per kg, share your required mesh size, quantity and delivery location with our team. We will review the requirement and provide the appropriate pricing and supply details.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[10px] border border-[#E8E8E2] space-y-4 shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                Pricing Factors
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#444444]">
                {[
                  "Mesh / Particle Size",
                  "Product Specification",
                  "Order Quantity",
                  "Packaging Requirement",
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
            8. DOLOMITE POWDER PACKAGING & BULK SUPPLY
            ======================================================== */}
        <section className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                PACKAGING &amp; SUPPLY
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Dolomite Powder Packaging &amp; Bulk Supply
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Dolomite powder is available in multiple packaging sizes to meet different customer requirements, from smaller quantities to bulk and industrial orders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#111111] block">
                Available Packaging
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["1 KG", "5 KG", "10 KG", "20 KG", "25 KG", "40 KG", "50 KG"].map(
                  (pkg, idx) => (
                    <div
                      key={idx}
                      className="bg-[#FAF9F6] p-4 rounded-[8px] border border-[#E8E8E2] text-center"
                    >
                      <Package className="w-5 h-5 text-[#E52323] mx-auto mb-1.5" />
                      <span className="text-sm font-mono font-black text-[#111111]">
                        {pkg}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 rounded-[10px] border border-[#E8E8E2] space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E52323] block">
                Supply Options
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#444444]">
                {[
                  "Small Quantity Requirements",
                  "Bulk Orders",
                  "Industrial Supply",
                  "Recurring Requirements",
                ].map((opt, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E52323] shrink-0" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 bg-[#FAF9F6] rounded-[6px] border border-[#E8E8E2] text-xs font-mono text-[#666666] text-center">
            Share your required quantity, mesh size, packaging requirement and delivery location with our team to discuss the appropriate supply arrangement.
          </div>
        </section>

        {/* ========================================================
            9. QUALITY-FOCUSED DOLOMITE POWDER SUPPLY
            ======================================================== */}
        <section className="bg-[#FAF9F6] rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-12 space-y-8">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                QUALITY ASSURANCE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111]">
              Quality-Focused Dolomite Powder Supply
            </h2>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Vision Stones focuses on supplying products according to agreed product specifications and customer requirements. Product form, particle size, packaging and other requirements are discussed and confirmed according to the product and intended application.
            </p>
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              Where applicable, product samples and technical information can be discussed before proceeding with larger requirements. We believe that accurate communication and clear specifications are an important part of building dependable supply relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                step: "01",
                title: "Requirement Understanding",
                desc: "Understanding the customer's application and product requirements.",
              },
              {
                step: "02",
                title: "Specification Confirmation",
                desc: "Confirming product form, particle size and applicable requirements.",
              },
              {
                step: "03",
                title: "Sample & Technical Information",
                desc: "Discussing samples and technical information where applicable.",
              },
              {
                step: "04",
                title: "Packaging Confirmation",
                desc: "Confirming packaging according to the agreed requirement.",
              },
              {
                step: "05",
                title: "Supply Coordination",
                desc: "Coordinating production and supply according to the agreed specifications.",
              },
            ].map((qa, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-[8px] border border-[#E8E8E2] space-y-2"
              >
                <span className="text-[10px] font-mono font-bold text-[#E52323]">
                  APPROACH {qa.step}
                </span>
                <h3 className="text-sm font-black uppercase text-[#111111] leading-snug">
                  {qa.title}
                </h3>
                <p className="text-xs text-[#555555] leading-relaxed">
                  {qa.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            10. HOW WE WORK WITH OUR CUSTOMERS
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
            <p className="text-sm sm:text-base text-[#555555] leading-relaxed max-w-4xl">
              We follow a clear process to understand your requirement, confirm the appropriate product and coordinate supply according to the agreed specifications.
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
            11. FREQUENTLY ASKED QUESTIONS
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
              Frequently Asked Questions About Dolomite Powder
            </h2>
          </div>

          <DolomitePowderClient />
        </section>

        {/* ========================================================
            12. FINAL CTA & DIRECT CONTACT
            ======================================================== */}
        <section
          id="quote"
          className="bg-white rounded-[12px] border border-[#E8E8E2] p-6 sm:p-10 lg:p-14 shadow-xs space-y-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#E52323]">
                    READY TO DISCUSS YOUR REQUIREMENT?
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#111111] leading-tight">
                  Get the Right Dolomite Powder for Your Application
                </h2>
                <p className="text-sm sm:text-base text-[#555555] leading-relaxed">
                  Tell us your required mesh size, quantity, application, packaging and delivery location. Our team will review your requirement and discuss the suitable product and supply arrangement.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact?product=Dolomite%20Powder&intent=quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center group"
                >
                  <span>REQUEST A QUOTE</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact?product=Dolomite%20Powder&intent=sample"
                  className="inline-flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#F2F1EC] text-[#111111] border border-[#E0E0DB] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all text-center"
                >
                  <span>REQUEST A SAMPLE</span>
                </Link>
              </div>

              <p className="text-xs font-mono text-[#888888] uppercase tracking-wider pt-2">
                Small Requirements • Bulk Orders • Industrial Supply
              </p>
            </div>

            {/* Right Column */}
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
                Other Calcium &amp; Dolomite Products
              </h3>
            </div>
            <Link
              href="/products?cat=calcium-dolomite"
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
