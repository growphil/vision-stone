import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  Layers,
  Award,
  Download,
  Building2,
  FlaskConical
} from "lucide-react";
import {
  PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
  Product,
} from "@/data/products";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const params = PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
  params.push({ slug: "kola-podi-powder" });
  return params;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found | VISION STONE",
    };
  }

  return {
    title: `${product.name} | ${product.brand} - Technical Specs & Industrial Supply`,
    description: `${product.name} (${product.subtitle}). ${product.description.slice(0, 160)}`,
    keywords: [
      product.name,
      product.brand,
      product.category,
      product.chemicalFormula || "",
      "Industrial Mineral Supply",
      "Vision Stone",
      "Salem Minerals"
    ],
    openGraph: {
      title: `${product.name} | VISION STONE`,
      description: product.tagline,
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.slug, 3);
  const isTraditional = product.categorySlug === "traditional-and-decorative";

  // Product JSON-LD for rich snippet
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.category,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "Enquire for Contract Price",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="pt-28 pb-24 bg-[#070709] text-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center space-x-2 text-xs font-mono-code text-neutral-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-white transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-neutral-500">{product.category}</span>
          <span>/</span>
          <span className="text-white font-bold">{product.name}</span>
        </nav>

        {/* Top Product Hero Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start pb-16 border-b border-white/10">
          
          {/* Left Column: Metadata & Hero Title (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono-code text-[#D62828]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D62828]" />
                <span>{product.category.toUpperCase()}</span>
              </span>

              <span
                className={`text-xs font-mono-code px-3 py-1 rounded-full border ${
                  isTraditional
                    ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                    : "bg-white/5 text-neutral-300 border-white/15"
                }`}
              >
                Brand: <strong className="text-white">{product.brand}</strong>
              </span>

              <span className="text-xs font-mono-code text-neutral-400">
                Formula: <strong className="text-white">{product.chemicalFormula || "Mineral Complex"}</strong>
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                {product.name}
              </h1>
              <p className="text-sm sm:text-base font-mono-code text-[#D62828] font-medium">
                {product.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
              {product.description}
            </p>

            {/* Quick Spec Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {product.whiteness && (
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-sm">
                  <span className="text-[10px] font-mono-code text-neutral-500 block">WHITENESS INDEX</span>
                  <span className="text-sm font-mono-code text-white font-bold">{product.whiteness}</span>
                </div>
              )}
              {product.meshSize && (
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-sm">
                  <span className="text-[10px] font-mono-code text-neutral-500 block">MESH / SIZING</span>
                  <span className="text-sm font-mono-code text-white font-bold">{product.meshSize}</span>
                </div>
              )}
              {product.purity && (
                <div className="p-3 bg-white/[0.03] border border-white/10 rounded-sm">
                  <span className="text-[10px] font-mono-code text-neutral-500 block">PURITY GRADE</span>
                  <span className="text-sm font-mono-code text-white font-bold">{product.purity}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D62828] hover:bg-[#b52020] text-white font-semibold text-xs sm:text-sm font-mono-code uppercase tracking-widest rounded-sm transition-all shadow-xl shadow-[#D62828]/25 group"
              >
                <span>Enquire For Supply</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="#specifications"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm font-mono-code uppercase tracking-widest rounded-sm border border-white/15 transition-all"
              >
                <span>View Full Specs</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Features & Quality Box (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="mineral-card rounded-sm p-6 space-y-5 border border-white/15">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono-code uppercase tracking-widest text-[#D62828] font-bold">
                  Key Technical Advantages
                </span>
                <ShieldCheck className="w-4 h-4 text-[#D62828]" />
              </div>

              <ul className="space-y-3">
                {product.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#D62828] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-mono-code text-neutral-500 uppercase block">
                  Quality Assurance:
                </span>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  {product.qualityAssurance}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Detailed Overview Section */}
        <div className="py-14 border-b border-white/10 space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
              Overview & Processing
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Industrial Grade Mineral Engineering
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {product.detailedOverview}
            </p>
          </div>
        </div>

        {/* Technical Specifications Table */}
        <div className="py-14 border-b border-white/10 space-y-8" id="specifications">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
                Chemical & Physical Parameters
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Technical Specification Sheet
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400 bg-white/5 px-3 py-1.5 rounded border border-white/10">
              <FlaskConical className="w-4 h-4 text-[#D62828]" />
              <span>Laboratory Assay Standard</span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-white/10 rounded-sm">
            <table className="w-full text-left text-xs sm:text-sm font-mono-code">
              <thead className="bg-[#121216] border-b border-white/10 text-neutral-400 uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-5 font-bold">Parameter / Test Property</th>
                  <th className="py-3.5 px-5 font-bold">Guaranteed Standard</th>
                  <th className="py-3.5 px-5 font-bold">Typical Analysis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-black/40">
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-5 text-white font-medium">{spec.parameter}</td>
                    <td className="py-3 px-5 text-neutral-300">{spec.value}</td>
                    <td className="py-3 px-5 text-[#D62828] font-bold">
                      {spec.typical || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Applications & Packaging Grid */}
        <div className="py-14 border-b border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Applications List */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
                Target Industries
              </span>
              <h2 className="font-display font-bold text-2xl text-white">
                Key Industrial Applications
              </h2>
            </div>

            <div className="space-y-3">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white/[0.02] border border-white/10 rounded-sm flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#D62828] mt-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                    {app}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Packaging & Logistics */}
          <div className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
                Packaging & Dispatch
              </span>
              <h2 className="font-display font-bold text-2xl text-white">
                Packaging Configurations
              </h2>
            </div>

            <div className="mineral-card rounded-sm p-6 space-y-4">
              <div className="flex items-center gap-3 text-white font-mono-code text-xs font-bold">
                <Package className="w-4 h-4 text-[#D62828]" />
                <span>Available Commercial Formats</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.packaging.types.map((type, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono-code px-3 py-1.5 bg-white/5 border border-white/10 rounded text-neutral-300"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <p className="text-xs text-neutral-400 leading-relaxed font-light pt-2">
                {product.packaging.details}
              </p>
            </div>
          </div>

        </div>

        {/* Related Products */}
        <div className="py-14 space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-mono-code text-[#D62828] uppercase tracking-widest block">
                Complementary Minerals
              </span>
              <h2 className="font-display font-bold text-2xl text-white">
                Related Industrial Minerals
              </h2>
            </div>

            <Link
              href="/products"
              className="text-xs font-mono-code text-neutral-400 hover:text-white uppercase tracking-wider flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <Link
                key={rel.id}
                href={`/products/${rel.slug}`}
                className="mineral-card p-6 rounded-sm space-y-4 group hover:border-white/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono-code text-neutral-500">
                    <span>{rel.category}</span>
                    <span className="text-[#D62828]">{rel.brand}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-white transition-colors">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2">
                    {rel.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-code text-neutral-400 group-hover:text-white transition-colors">
                  <span>View Product</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:text-[#D62828]" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Final Product Enquiry Trigger */}
        <div className="mt-8 p-8 sm:p-12 bg-gradient-to-r from-[#14141A] via-[#1A1A22] to-[#14141A] border border-[#D62828]/40 rounded-sm text-center space-y-6">
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white">
            Discuss Your Technical Requirement for {product.name}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-light">
            Contact our mineral engineers for volume pricing, laboratory testing certificates, or custom grain sizing.
          </p>
          <div className="flex justify-center">
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#D62828] hover:bg-[#b52020] text-white font-bold text-xs sm:text-sm font-mono-code uppercase tracking-widest rounded-sm transition-all shadow-xl shadow-[#D62828]/30"
            >
              <span>Submit Commercial Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
