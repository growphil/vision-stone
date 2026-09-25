// ============================================================
// VISION STONES — MASTER PRODUCT CATALOGUE
// ============================================================
// SOURCE OF TRUTH for the entire website.
//
// RULES:
// 1. Product names are EXACTLY as supplied by the company.
// 2. DO NOT rename, "correct", or modify product names.
// 3. DO NOT invent specifications, formulas, grades, or claims.
// 4. Image paths map to ACTUAL files in public/Products/.
// 5. Category groups are WEBSITE NAVIGATION groupings only,
//    NOT confirmed company categories.
// 6. Legacy products from the previous catalogue are marked
//    with catalogueStatus: "legacy".
//
// IMAGE PATH NOTE:
// Some legacy filenames have typos (e.g. "Caltie" = Calcite,
// "Limiestone" = Limestone). The display name is correct;
// the file path maps to the actual physical file.
// DO NOT rename the physical files.
// ============================================================

export interface ProductItem {
  id: string;
  slug: string;
  number: string;
  name: string;
  /** Website navigation category (NOT confirmed company category) */
  category: string;
  /** Slug-safe category key for filtering */
  categorySlug: "charcoal" | "lime-limestone" | "calcium-dolomite" | "gypsum" | "other-minerals";
  /** Path to actual image file in public/Products/ */
  image: string | null;
  imageAlt: string;
  /** Company-confirmed description, or null */
  description: string | null;
  /** Company-confirmed detailed overview, or null */
  detailedOverview: string | null;
  /** Company-confirmed form/type, or null */
  form: string | null;
  /** Company-confirmed available grades, or null */
  availableGrades: string[] | null;
  /** Company-confirmed key applications, or null */
  keyApplications: string[] | null;
  /** Company-confirmed packaging info, or null */
  packaging: string | null;
  /** Company-confirmed supply formats, or null */
  supplyFormats: string | null;
  /** "company" = in the company-supplied 21-product list.
      "legacy" = from the previous website catalogue, kept for continuity. */
  catalogueStatus: "company" | "legacy";
  /** Featured on homepage */
  isFeatured?: boolean;
}

export type Product = ProductItem;

// ============================================================
// COMPANY-SUPPLIED CATALOGUE (21 products)
// ============================================================

export const PRODUCTS: ProductItem[] = [
  // ——————————————————————————————————————————
  // CHARCOAL PRODUCTS
  // ——————————————————————————————————————————
  {
    id: "airfloat-charcoal-powder",
    slug: "airfloat-charcoal-powder",
    number: "01",
    name: "Airfloat Charcoal Powder",
    category: "CHARCOAL PRODUCTS",
    categorySlug: "charcoal",
    image: "/Products/airfloat-charcoal-powder.webp",
    imageAlt: "Vision Stones Airfloat Charcoal Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "biocharcoal-powder",
    slug: "biocharcoal-powder",
    number: "02",
    name: "Biocharcoal Powder",
    category: "CHARCOAL PRODUCTS",
    categorySlug: "charcoal",
    image: "/Products/biocharcoal-powder.webp",
    imageAlt: "Vision Stones Biocharcoal Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "coconutshell-charcoal-powder",
    slug: "coconutshell-charcoal-powder",
    number: "03",
    name: "Coconutshell Charcoal Powder",
    category: "CHARCOAL PRODUCTS",
    categorySlug: "charcoal",
    image: "/Products/coconutshell-charcoal-powder.webp",
    imageAlt: "Vision Stones Coconutshell Charcoal Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "coconutshell-charcoal-briquettes-pillow-shape",
    slug: "coconutshell-charcoal-briquettes-pillow-shape",
    number: "04",
    name: "Coconutshell Charcoal Briquettes (pillow shape)",
    category: "CHARCOAL PRODUCTS",
    categorySlug: "charcoal",
    image: "/Products/coconutshell-charcoal-briquettes-pillow-shape.webp",
    imageAlt: "Vision Stones Coconutshell Charcoal Briquettes (pillow shape)",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "earthing-charcoal-powder",
    slug: "earthing-charcoal-powder",
    number: "05",
    name: "Earthing Charcoal Powder",
    category: "CHARCOAL PRODUCTS",
    categorySlug: "charcoal",
    // NOTE: This file is .png, not .webp
    image: "/Products/earthing-charcoal-powder.png",
    imageAlt: "Vision Stones Earthing Charcoal Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },

  // ——————————————————————————————————————————
  // LIME & LIMESTONE
  // ——————————————————————————————————————————
  {
    id: "limestone-powder",
    slug: "limestone-powder",
    number: "06",
    name: "Limestone Powder",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-limestone",
    image: "/Products/limestone-powder.webp",
    imageAlt: "Vision Stones Limestone Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "limestone-lumps",
    slug: "limestone-lumps",
    number: "07",
    name: "Limestone Lumps",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-limestone",
    image: "/Products/limestone-lumps.webp",
    imageAlt: "Vision Stones Limestone Lumps",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "hydrated-lime-powder",
    slug: "hydrated-lime-powder",
    number: "08",
    name: "Hydrated Lime Powder",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-limestone",
    image: "/Products/hydrated-lime-powder.webp",
    imageAlt: "Vision Stones Hydrated Lime Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "quick-lime-lumps",
    slug: "quick-lime-lumps",
    number: "09",
    name: "Quick Lime Lumps",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-limestone",
    image: "/Products/quick-lime-lumps.webp",
    imageAlt: "Vision Stones Quick Lime Lumps",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "quick-lime-powder",
    slug: "quick-lime-powder",
    number: "10",
    name: "Quick Lime Powder",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-limestone",
    image: "/Products/quick-lime-powder.webp",
    imageAlt: "Vision Stones Quick Lime Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "white-wash-lime-powder",
    slug: "white-wash-lime-powder",
    number: "11",
    name: "White Wash Lime Powder",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-limestone",
    image: "/Products/white-wash-lime-powder.webp",
    imageAlt: "Vision Stones White Wash Lime Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "poultry-feed-limestone-grit",
    slug: "poultry-feed-limestone-grit",
    number: "12",
    name: "Poultry Feed Limestone Grit",
    category: "LIME & LIMESTONE",
    categorySlug: "lime-limestone",
    image: "/Products/poultry-feed-limestone-grit.webp",
    imageAlt: "Vision Stones Poultry Feed Limestone Grit",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },

  // ——————————————————————————————————————————
  // CALCIUM & DOLOMITE
  // ——————————————————————————————————————————
  {
    id: "ground-calcium-carbonate-powder",
    slug: "ground-calcium-carbonate-powder",
    number: "13",
    name: "Ground Calcium Carbonate Powder",
    category: "CALCIUM & DOLOMITE",
    categorySlug: "calcium-dolomite",
    image: "/Products/ground-calcium-carbonate-powder.webp",
    imageAlt: "Vision Stones Ground Calcium Carbonate Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "dolomite-powder",
    slug: "dolomite-powder",
    number: "14",
    name: "Dolomite Powder",
    category: "CALCIUM & DOLOMITE",
    categorySlug: "calcium-dolomite",
    image: "/Products/dolomite-powder.webp",
    imageAlt: "Vision Stones Dolomite Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
    isFeatured: true,
  },
  {
    id: "dolomite-powder-tea-coffee-estate",
    slug: "dolomite-powder-tea-coffee-estate",
    number: "15",
    name: "Dolomite Powder Tea&Coffee Estate",
    category: "CALCIUM & DOLOMITE",
    categorySlug: "calcium-dolomite",
    image: "/Products/dolomite-powder-tea-coffee-estate.webp",
    imageAlt: "Vision Stones Dolomite Powder Tea and Coffee Estate",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "raw-magnesite-powder",
    slug: "raw-magnesite-powder",
    number: "16",
    name: "Raw Magnesite Powder",
    category: "CALCIUM & DOLOMITE",
    categorySlug: "calcium-dolomite",
    image: "/Products/raw-magnesite-powder.webp",
    imageAlt: "Vision Stones Raw Magnesite Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "limestone-grit",
    slug: "limestone-grit",
    number: "17",
    name: "Limestone Grit",
    category: "CALCIUM & DOLOMITE",
    categorySlug: "calcium-dolomite",
    image: "/Products/limestone-grit.webp",
    imageAlt: "Vision Stones Limestone Grit",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },

  // ——————————————————————————————————————————
  // GYPSUM PRODUCTS
  // ——————————————————————————————————————————
  {
    id: "marine-gypsum",
    slug: "marine-gypsum",
    number: "18",
    name: "Marine Gypsum",
    category: "GYPSUM PRODUCTS",
    categorySlug: "gypsum",
    image: "/Products/marine-gypsum.webp",
    imageAlt: "Vision Stones Marine Gypsum",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "gypsum-plaster-powder",
    slug: "gypsum-plaster-powder",
    number: "19",
    name: "Gypsum Plaster Powder",
    category: "GYPSUM PRODUCTS",
    categorySlug: "gypsum",
    image: "/Products/gypsum-plaster-powder.webp",
    imageAlt: "Vision Stones Gypsum Plaster Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "chemical-gypsum-powder",
    slug: "chemical-gypsum-powder",
    number: "20",
    name: "Chemical Gypsum Powder",
    category: "GYPSUM PRODUCTS",
    categorySlug: "gypsum",
    image: "/Products/chemical-gypsum-powder.webp",
    imageAlt: "Vision Stones Chemical Gypsum Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
  {
    id: "stone-gypsum-powder",
    slug: "stone-gypsum-powder",
    number: "21",
    name: "Stone Gypsum Powder",
    category: "GYPSUM PRODUCTS",
    categorySlug: "gypsum",
    // NOTE: This file is .png, not .webp
    image: "/Products/stone-gypsum-powder.png",
    imageAlt: "Vision Stones Stone Gypsum Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "company",
  },
];

// ============================================================
// LEGACY PRODUCTS
// ============================================================
// Products from the previous website catalogue that are NOT in
// the company-supplied 21-product list. Kept for continuity.
// Images are preserved. Not shown publicly in the main catalogue
// unless explicitly enabled. The company can confirm whether
// these should be added to the official catalogue later.
// ============================================================

export const LEGACY_PRODUCTS: ProductItem[] = [
  {
    id: "calcite-powder",
    slug: "calcite-powder",
    number: "L1",
    name: "Calcite Powder",
    category: "OTHER MINERALS",
    categorySlug: "other-minerals",
    // NOTE: Physical filename is "Caltie Powder.webp" (typo in original file)
    image: "/Products/Caltie Powder.webp",
    imageAlt: "Vision Stones Calcite Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "legacy",
  },
  {
    id: "calcite-stone",
    slug: "calcite-stone",
    number: "L2",
    name: "Calcite Stone",
    category: "OTHER MINERALS",
    categorySlug: "other-minerals",
    // NOTE: Physical filename is "Caltie Stone.webp" (typo in original file)
    image: "/Products/Caltie Stone.webp",
    imageAlt: "Vision Stones Calcite Stone",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "legacy",
  },
  {
    id: "dolomite-lump",
    slug: "dolomite-lump",
    number: "L3",
    name: "Dolomite Lump",
    category: "CALCIUM & DOLOMITE",
    categorySlug: "calcium-dolomite",
    image: "/Products/Dolomite Lump.webp",
    imageAlt: "Vision Stones Dolomite Lump",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "legacy",
  },
  {
    id: "calcium-carbonate-powder",
    slug: "calcium-carbonate-powder",
    number: "L4",
    name: "Calcium Carbonate Powder",
    category: "CALCIUM & DOLOMITE",
    categorySlug: "calcium-dolomite",
    image: "/Products/Calcium Carbonate Powder.webp",
    imageAlt: "Vision Stones Calcium Carbonate Powder",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "legacy",
  },
  {
    id: "kola-maavu",
    slug: "kola-maavu",
    number: "L5",
    name: "Kolam Powder / Kola Maavu",
    category: "OTHER MINERALS",
    categorySlug: "other-minerals",
    image: "/Products/KolaMaavu.webp",
    imageAlt: "Vision Stones Kolam Powder / Kola Maavu",
    description: null,
    detailedOverview: null,
    form: null,
    availableGrades: null,
    keyApplications: null,
    packaging: null,
    supplyFormats: null,
    catalogueStatus: "legacy",
  },
];

// ============================================================
// ALL PRODUCTS (company + legacy combined)
// Used for slug resolution across the entire site so legacy
// product detail pages continue to work.
// ============================================================
export const ALL_PRODUCTS: ProductItem[] = [...PRODUCTS, ...LEGACY_PRODUCTS];

// ============================================================
// FILTER CATEGORIES
// ============================================================
// NOTE: These are WEBSITE NAVIGATION groupings only.
// They are NOT confirmed company categories.
// Keep configurable so the client can confirm them.
// ============================================================

export const FILTER_CATEGORIES = [
  { id: "all", label: "ALL PRODUCTS" },
  { id: "charcoal", label: "CHARCOAL" },
  { id: "lime-limestone", label: "LIME & LIMESTONE" },
  { id: "calcium-dolomite", label: "CALCIUM & DOLOMITE" },
  { id: "gypsum", label: "GYPSUM" },
] as const;

export const PRODUCT_CATEGORIES = FILTER_CATEGORIES;

// ============================================================
// HELPER: Get product by slug (searches all products including legacy)
// ============================================================
export function getProductBySlug(slug: string): ProductItem | undefined {
  const normalized = decodeURIComponent(slug)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[()&]/g, "");
  return ALL_PRODUCTS.find(
    (p) => p.slug === slug || p.slug === normalized
  );
}

// ============================================================
// HELPER: Get featured products for homepage
// ============================================================
export function getFeaturedProducts(): ProductItem[] {
  return PRODUCTS.filter((p) => p.image !== null).slice(0, 8);
}
