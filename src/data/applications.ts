export interface ApplicationProduct {
  name: string;
  slug: string;
  image?: string;
  category?: string;
}

export interface ApplicationItem {
  id: string; // "01", "02", ...
  slug: string;
  name: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  relatedProducts: ApplicationProduct[];
}

// ============================================================
// APPLICATION DATA
// ============================================================
// IMPORTANT:
// relatedProducts ONLY references products that exist in the
// company-supplied 21-product catalogue (data/products.ts).
//
// Products that were in the old 8-product catalogue but are NOT
// in the new 21-product catalogue have been removed from
// application relationships.
//
// Do NOT automatically assign new products to applications
// without company confirmation.
// ============================================================

export const APPLICATIONS: ApplicationItem[] = [
  {
    id: "01",
    slug: "agriculture-soil-applications",
    name: "Agriculture & Soil Applications",
    headline: "MINERALS FOR AGRICULTURAL USE",
    description:
      "Our mineral products are supplied for various agricultural applications, as required by customers. These include soil and mineral-based inputs used across farming and related industries.",
    image: "/application/agriculture-soil-applications.webp",
    imageAlt: "Vision Stones agriculture and soil applications",
    relatedProducts: [
      {
        name: "Dolomite Powder",
        slug: "dolomite-powder",
        image: "/Products/dolomite-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
      {
        name: "Hydrated Lime Powder",
        slug: "hydrated-lime-powder",
        image: "/Products/hydrated-lime-powder.webp",
        category: "LIME & LIMESTONE",
      },
    ],
  },
  {
    id: "02",
    slug: "fertilizer-agri-inputs",
    name: "Fertilizer & Agri-Inputs",
    headline: "MINERAL RAW MATERIALS FOR FERTILIZERS",
    description:
      "We supply essential mineral raw materials utilized by fertilizer manufacturers and agro-input formulators for compound mixing and granulating processes.",
    image: "/application/fertilizer-agri-inputs.webp",
    imageAlt: "Vision Stones fertilizer and agri-input applications",
    relatedProducts: [
      {
        name: "Dolomite Powder",
        slug: "dolomite-powder",
        image: "/Products/dolomite-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
      {
        name: "Ground Calcium Carbonate Powder",
        slug: "ground-calcium-carbonate-powder",
        image: "/Products/ground-calcium-carbonate-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
    ],
  },
  {
    id: "03",
    slug: "rubber-polymer-manufacturing",
    name: "Rubber & Polymer Manufacturing",
    headline: "MINERAL FILLERS FOR POLYMER & RUBBER",
    description:
      "Supplying fine mineral powders used as functional fillers and extenders across rubber products, compounding, polymer masterbatches, and extruded profiles.",
    image: "/application/rubber-polymer-manufacturing.webp",
    imageAlt: "Vision Stones rubber and polymer manufacturing",
    relatedProducts: [
      {
        name: "Ground Calcium Carbonate Powder",
        slug: "ground-calcium-carbonate-powder",
        image: "/Products/ground-calcium-carbonate-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
      {
        name: "Dolomite Powder",
        slug: "dolomite-powder",
        image: "/Products/dolomite-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
    ],
  },
  {
    id: "04",
    slug: "paint-manufacturing",
    name: "Paint Manufacturing",
    headline: "HIGH-BRIGHTNESS MINERAL EXTENDERS",
    description:
      "Supplying high-whiteness pulverized minerals and extenders tailored for primers, architectural paints, coatings, and surface formulations.",
    image: "/application/paint-manufacturing.webp",
    imageAlt: "Vision Stones paint manufacturing",
    relatedProducts: [
      {
        name: "Dolomite Powder",
        slug: "dolomite-powder",
        image: "/Products/dolomite-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
      {
        name: "Ground Calcium Carbonate Powder",
        slug: "ground-calcium-carbonate-powder",
        image: "/Products/ground-calcium-carbonate-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
    ],
  },
  {
    id: "05",
    slug: "tiles-ceramics",
    name: "Tiles & Ceramics",
    headline: "RAW MATERIALS FOR CERAMICS & TILES",
    description:
      "Selected mineral lumps and ground powders provided for tile bodies, ceramic manufacturing, glazes, and refractory applications.",
    image: "/application/tiles-ceramics.webp",
    imageAlt: "Vision Stones tiles and ceramics",
    relatedProducts: [
      {
        name: "Dolomite Powder",
        slug: "dolomite-powder",
        image: "/Products/dolomite-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
    ],
  },
  {
    id: "06",
    slug: "construction",
    name: "Construction",
    headline: "MINERALS FOR INFRASTRUCTURE & CONSTRUCTION",
    description:
      "Supplying sized limestone, aggregates, and lime powders for civil infrastructure, structural construction, mortars, and building materials.",
    image: "/application/construction.webp",
    imageAlt: "Vision Stones construction applications",
    relatedProducts: [
      {
        name: "Limestone Lumps",
        slug: "limestone-lumps",
        image: "/Products/limestone-lumps.webp",
        category: "LIME & LIMESTONE",
      },
      {
        name: "Hydrated Lime Powder",
        slug: "hydrated-lime-powder",
        image: "/Products/hydrated-lime-powder.webp",
        category: "LIME & LIMESTONE",
      },
      {
        name: "Ground Calcium Carbonate Powder",
        slug: "ground-calcium-carbonate-powder",
        image: "/Products/ground-calcium-carbonate-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
    ],
  },
  {
    id: "07",
    slug: "pipeline-applications",
    name: "Pipeline Applications",
    headline: "SPECIALIZED COATING & BEDDING MINERALS",
    description:
      "Supplying minerals and compounds utilized in pipeline bedding, jointing mortars, and protective exterior coating applications.",
    image: "/application/pipeline-applications.webp",
    imageAlt: "Vision Stones pipeline applications",
    relatedProducts: [
      {
        name: "Limestone Lumps",
        slug: "limestone-lumps",
        image: "/Products/limestone-lumps.webp",
        category: "LIME & LIMESTONE",
      },
      {
        name: "Dolomite Powder",
        slug: "dolomite-powder",
        image: "/Products/dolomite-powder.webp",
        category: "CALCIUM & DOLOMITE",
      },
      {
        name: "Hydrated Lime Powder",
        slug: "hydrated-lime-powder",
        image: "/Products/hydrated-lime-powder.webp",
        category: "LIME & LIMESTONE",
      },
    ],
  },
  {
    id: "08",
    slug: "general-manufacturing",
    name: "General Manufacturing",
    headline: "MULTI-SECTOR MINERAL & RAW MATERIAL SUPPLY",
    description:
      "Supplying dependable mineral raw materials and sizing options for metallurgy, fluxing, processing, environmental treatment, and general industrial needs.",
    image: "/application/general-manufacturing.webp",
    imageAlt: "Vision Stones general manufacturing",
    relatedProducts: [
      {
        name: "Limestone Lumps",
        slug: "limestone-lumps",
        image: "/Products/limestone-lumps.webp",
        category: "LIME & LIMESTONE",
      },
      {
        name: "Hydrated Lime Powder",
        slug: "hydrated-lime-powder",
        image: "/Products/hydrated-lime-powder.webp",
        category: "LIME & LIMESTONE",
      },
    ],
  },
];

// Re-export for backward compatibility
export const APPLICATIONS_DATA = APPLICATIONS;
