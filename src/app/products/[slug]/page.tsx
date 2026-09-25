import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";
import {
  PRODUCTS,
  ALL_PRODUCTS,
  getProductBySlug,
  type ProductItem,
} from "@/data/products";

// ============================================================
// PRODUCT DETAIL PAGE
// ============================================================
// Dynamic route: /products/[slug]
// Data source: data/products.ts (single source of truth)
//
// IMPORTANT:
// Only renders fields where company-confirmed data exists.
// Does NOT display fake specifications, applications, or claims.
// ============================================================

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product Not Found | VISION STONES" };
  }

  const description = product.description
    ? `${product.name} — ${product.description}`
    : `${product.name} | Vision Stones mineral product catalogue.`;

  return {
    title: `${product.name} | Vision Stones`,
    description,
    openGraph: {
      title: `${product.name} | Vision Stones`,
      description,
      ...(product.image && {
        images: [{ url: product.image, alt: product.imageAlt }],
      }),
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Related products: same category, exclude self, max 4
  const sameCat = PRODUCTS.filter(
    (p) =>
      p.categorySlug === product.categorySlug && p.slug !== product.slug
  );
  const otherCat = PRODUCTS.filter(
    (p) =>
      p.categorySlug !== product.categorySlug && p.slug !== product.slug
  );
  const relatedProducts = [...sameCat, ...otherCat].slice(0, 4);

  const hasImage = product.image !== null;
  const hasDescription = product.description !== null;
  const hasOverview = product.detailedOverview !== null;
  const hasGrades =
    product.availableGrades !== null && product.availableGrades.length > 0;
  const hasApplications =
    product.keyApplications !== null && product.keyApplications.length > 0;
  const hasForm = product.form !== null;
  const hasPackaging = product.packaging !== null;
  const hasSupply = product.supplyFormats !== null;
  const hasAnySpec = hasForm || hasPackaging || hasSupply;

  return (
    <main className="pt-24 sm:pt-36 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#111111] min-h-screen font-display">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12 sm:space-y-24">
        {/* ——————————————————————————————————————
            BREADCRUMB
            —————————————————————————————————————— */}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono uppercase text-[#999999] overflow-x-auto no-scrollbar whitespace-nowrap -mx-4 px-4 sm:mx-0 sm:px-0">
          <Link
            href="/"
            className="hover:text-[#111111] transition-colors shrink-0"
          >
            HOME
          </Link>
          <span className="text-[#D4D4CE]">/</span>
          <Link
            href="/products"
            className="hover:text-[#111111] transition-colors shrink-0"
          >
            CATALOGUE
          </Link>
          <span className="text-[#D4D4CE]">/</span>
          <span className="text-[#E52323] font-bold shrink-0">
            {product.name.toUpperCase()}
          </span>
        </div>

        {/* ——————————————————————————————————————
            HERO: IMAGE + INTRO
            —————————————————————————————————————— */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start pb-12 sm:pb-20 border-b border-[#E8E8E2]">
          {/* Left: Product Image */}
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F0F0EB] rounded-[4px]">
              {hasImage ? (
                <Image
                  src={product.image!}
                  alt={product.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Package
                    className="w-16 h-16 text-[#C8C8C0] mb-3"
                    strokeWidth={1}
                  />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#B0B0A8]">
                    PRODUCT IMAGE
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C8C8C0] mt-1">
                    TO BE SUPPLIED
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Title, Overview, CTAs */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center gap-2.5 text-[10px] font-mono font-medium text-[#E52323]">
                <span>{product.number}</span>
                <span className="w-6 h-[1px] bg-[#E52323]/30" />
                <span className="uppercase tracking-widest">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black uppercase tracking-tight text-[#111111] leading-[0.92]">
                {product.name}
              </h1>

              <div className="text-[10px] font-mono text-[#AAAAAA] uppercase tracking-wider pt-1">
                SUPPLIED BY VISION STONES • EST. 1997
              </div>
            </div>

            {/* Description */}
            {hasOverview ? (
              <p className="text-[14px] sm:text-base text-[#555555] leading-relaxed">
                {product.detailedOverview}
              </p>
            ) : hasDescription ? (
              <p className="text-[14px] sm:text-base text-[#555555] leading-relaxed">
                {product.description}
              </p>
            ) : (
              <div className="py-4 sm:py-5 px-5 sm:px-6 bg-[#F5F5F0] border-l-2 border-[#E52323]">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#AAAAAA] block mb-1">
                  PRODUCT INFORMATION
                </span>
                <p className="text-xs sm:text-sm text-[#888888] leading-relaxed">
                  Detailed product information to be supplied by Vision
                  Stones. Contact us for specifications and availability.
                </p>
              </div>
            )}

            {/* Grades */}
            {hasGrades && (
              <div className="pt-4 border-t border-[#EAEAE4] space-y-2.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#111111] block">
                  AVAILABLE SIZING & GRADES
                </span>
                <div className="space-y-1.5 sm:space-y-2">
                  {product.availableGrades!.map((grade) => (
                    <div
                      key={grade}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#444444]"
                    >
                      <span className="w-1.5 h-1.5 bg-[#E52323] shrink-0" />
                      <span>{grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-7 py-3.5 transition-all group text-center shadow-sm"
              >
                <span>REQUEST A QUOTE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] py-3.5 border-b border-[#111111] hover:border-[#E52323] transition-colors text-center"
              >
                BACK TO CATALOGUE
              </Link>
            </div>
          </div>
        </div>

        {/* ——————————————————————————————————————
            PRODUCT SPECS (only if confirmed data)
            —————————————————————————————————————— */}
        {hasAnySpec && (
          <div className="pb-16 sm:pb-20 border-b border-[#E8E8E2] space-y-8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E52323]">
                PRODUCT INFORMATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                SUPPLY & HANDLING DETAILS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
              {hasForm && (
                <div className="space-y-1.5 border-t border-[#EAEAE4] pt-4">
                  <span className="text-[10px] font-mono text-[#999999] uppercase block">
                    AVAILABLE FORM
                  </span>
                  <div className="font-bold text-sm uppercase text-[#111111]">
                    {product.form}
                  </div>
                </div>
              )}
              {hasSupply && (
                <div className="space-y-1.5 border-t border-[#EAEAE4] pt-4">
                  <span className="text-[10px] font-mono text-[#999999] uppercase block">
                    SUPPLY FORMATS
                  </span>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {product.supplyFormats}
                  </p>
                </div>
              )}
              {hasPackaging && (
                <div className="space-y-1.5 border-t border-[#EAEAE4] pt-4">
                  <span className="text-[10px] font-mono text-[#999999] uppercase block">
                    PACKAGING
                  </span>
                  <p className="text-sm text-[#555555] leading-relaxed">
                    {product.packaging}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ——————————————————————————————————————
            APPLICATIONS (only if confirmed)
            —————————————————————————————————————— */}
        {hasApplications && (
          <div className="pb-16 sm:pb-20 border-b border-[#E8E8E2] grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4 space-y-2">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E52323]">
                TARGET APPLICATIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                SUITABLE APPLICATIONS
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.keyApplications!.map((app) => (
                  <div
                    key={app}
                    className="p-4 bg-white border border-[#E8E8E2] flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E52323] mt-2 shrink-0" />
                    <span className="text-sm font-medium text-[#333333]">
                      {app}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ——————————————————————————————————————
            REQUEST A QUOTE SECTION
            —————————————————————————————————————— */}
        <div className="p-8 sm:p-12 bg-white border border-[#E8E8E2]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E52323]">
                INQUIRE SUPPLY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                REQUEST A QUOTE FOR {product.name.toUpperCase()}
              </h2>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Tell us your required quantity, specifications, packaging
                preference, and delivery destination.
              </p>
            </div>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-8 py-4 transition-all shrink-0 self-start md:self-center group"
            >
              <span>DISCUSS REQUIREMENT</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* ——————————————————————————————————————
            RELATED PRODUCTS
            —————————————————————————————————————— */}
        <div className="space-y-10">
          <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#E52323]">
                FROM THE CATALOGUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111111]">
                RELATED PRODUCTS
              </h3>
            </div>
            <Link
              href="/products"
              className="text-[11px] font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors"
            >
              VIEW FULL CATALOGUE →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((rel) => (
              <div key={rel.id} className="group">
                <Link
                  href={`/products/${rel.slug}`}
                  className="relative block w-full aspect-[4/3] overflow-hidden bg-[#F0F0EB]"
                >
                  {rel.image ? (
                    <Image
                      src={rel.image}
                      alt={rel.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-600 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <Package
                        className="w-6 h-6 text-[#C8C8C0] mb-1.5"
                        strokeWidth={1}
                      />
                      <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#B0B0A8]">
                        IMAGE PENDING
                      </span>
                    </div>
                  )}
                </Link>

                <div className="pt-3 space-y-1">
                  <div className="text-[10px] font-mono font-medium text-[#E52323] uppercase tracking-widest">
                    {rel.category}
                  </div>
                  <h4 className="text-base font-black uppercase text-[#111111] leading-tight">
                    <Link href={`/products/${rel.slug}`}>
                      {rel.name}
                    </Link>
                  </h4>
                  <Link
                    href={`/products/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#111111] hover:text-[#E52323] transition-colors"
                  >
                    <span>VIEW PRODUCT</span>
                    <ArrowRight className="w-3 h-3 text-[#E52323]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
