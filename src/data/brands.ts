import { PRODUCTS, Product } from "./products";

export interface Brand {
  id: string;
  slug: string;
  name: string;
  code: string;
  tagline: string;
  description: string;
  accentColor: string;
  productIds: string[];
  productCount: number;
}

export const BRANDS: Brand[] = [
  {
    id: "vs-prime",
    slug: "vs-prime",
    name: "VS Prime Mineral",
    code: "VSP-01",
    tagline: "Ultra-fine micronized industrial mineral powders with high chemical purity.",
    description: "Our core brand for high-performance micronized dolomite powders engineered for paints, plastics, coatings, ceramics, and high-precision polymer compounding.",
    accentColor: "#D62828",
    productIds: ["dolomite-powder"],
    productCount: 1,
  },
  {
    id: "vs-raw",
    slug: "vs-raw",
    name: "VS Raw Mineral",
    code: "VSR-02",
    tagline: "Heavy-duty metallurgical lumps and direct furnace feed minerals.",
    description: "Engineered for steel blast furnaces, ferroalloy smelting, and refractory calcination with tight mechanical size grading and low decrepitation.",
    accentColor: "#71717A",
    productIds: ["dolomite-lump"],
    productCount: 1,
  },
  {
    id: "vs-ultrawhite",
    slug: "vs-ultrawhite",
    name: "VS UltraWhite",
    code: "VSU-03",
    tagline: "Natural high-brightness crystalline calcite micro-powders.",
    description: "High-grade optical brightness and low oil absorption calcite powders designed for premium emulsion paints, plastics, paper, and polymer masterbatches.",
    accentColor: "#E5E5EA",
    productIds: ["calcite-powder"],
    productCount: 1,
  },
  {
    id: "vs-crystal-rock",
    slug: "vs-crystal-rock",
    name: "VS Crystal Rock",
    code: "VSC-04",
    tagline: "Selected crystalline calcite lumps for chemical and architectural feed.",
    description: "Pure crystalline stones hand-selected for high calcium carbonate synthesis, specialty PCC manufacturing, and engineered stone surfaces.",
    accentColor: "#A1A1AA",
    productIds: ["calcite-stone"],
    productCount: 1,
  },
  {
    id: "vs-quickrock",
    slug: "vs-quickrock",
    name: "VS QuickRock",
    code: "VSQ-05",
    tagline: "High-calcium limestone lumps for calcination kilns and steelmaking.",
    description: "Quarried from selective high-calcium geological formations for vertical and rotary lime kilns, cement clinker blending, and power plant flue gas desulfurization.",
    accentColor: "#52525B",
    productIds: ["limestone-lump"],
    productCount: 1,
  },
  {
    id: "vs-purelime",
    slug: "vs-purelime",
    name: "VS PureLime",
    code: "VSL-06",
    tagline: "High-reactivity slaked calcium hydroxide [Ca(OH)₂] powder.",
    description: "Superfine hydrated lime formulated for effluent treatment neutralization, municipal water purification, and construction masonry mortars.",
    accentColor: "#D4D4D8",
    productIds: ["hydrated-lime-powder"],
    productCount: 1,
  },
  {
    id: "vs-microcal",
    slug: "vs-microcal",
    name: "VS MicroCal",
    code: "VSM-07",
    tagline: "Ground calcium carbonate & surface-treated polymer fillers.",
    description: "Precision-milled GCC and stearic acid coated powders that maximize impact resistance and filler loadings in PVC, rubber, and sealant systems.",
    accentColor: "#F4F4F5",
    productIds: ["calcium-carbonate-powder"],
    productCount: 1,
  },
  {
    id: "vs-heritage",
    slug: "vs-heritage",
    name: "VS Heritage Mineral",
    code: "VSH-08",
    tagline: "Pristine white non-toxic natural powder for traditional sacred floor art.",
    description: "Finely milled mineral powder formulated for authentic daily doorstep kolam, rangoli, and temple ritual geometric art with exceptional flow and brightness.",
    accentColor: "#FFFFFF",
    productIds: ["kola-maavu"],
    productCount: 1,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return BRANDS.find((b) => b.slug === slug);
}

export function getProductsForBrand(brandId: string): Product[] {
  const brand = BRANDS.find((b) => b.id === brandId || b.slug === brandId);
  if (!brand) return [];
  return PRODUCTS.filter((p) => brand.productIds.includes(p.id));
}
