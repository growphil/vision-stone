export interface IndustryItem {
  number: string;
  id: string;
  name: string;
  headline: string;
  description: string;
  recommendedProducts: {
    name: string;
    slug: string;
  }[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    number: "01",
    id: "agriculture-soil",
    name: "Agriculture & Soil Applications",
    headline: "Soil Acidity Neutralization & Mineral Enrichment",
    description: "Agricultural soils often face acidification from intense cropping and heavy rainfall. High-magnesium dolomite powder and hydrated lime neutralize soil pH, restoring nutrient availability and conditioning soil structure for optimal crop yield.",
    recommendedProducts: [
      { name: "Dolomite Powder", slug: "dolomite-powder" },
      { name: "Hydrated Lime Powder", slug: "hydrated-lime-powder" },
    ],
  },
  {
    number: "02",
    id: "fertilizer-agri-inputs",
    name: "Fertilizer & Agri-Inputs",
    headline: "Essential Secondary Nutrient Sourcing",
    description: "Granulated fertilizer mixes and secondary nutrient formulations incorporate high-purity dolomite and calcium carbonate to supply critical bio-available magnesium and calcium while serving as stable carriers for active agrochemicals.",
    recommendedProducts: [
      { name: "Dolomite Powder", slug: "dolomite-powder" },
      { name: "Calcium Carbonate Powder", slug: "calcium-carbonate-powder" },
    ],
  },
  {
    number: "03",
    id: "rubber-polymer",
    name: "Rubber & Polymer Manufacturing",
    headline: "Functional Reinforcement & Dimensional Stability",
    description: "Precision-ground calcite, dolomite, and calcium carbonate powders act as critical functional fillers in polymer masterbatches, rubber compounds, and rigid PVC products—enhancing tensile stiffness, thermal resistance, and surface smoothness.",
    recommendedProducts: [
      { name: "Calcite Powder", slug: "calcite-powder" },
      { name: "Calcium Carbonate Powder", slug: "calcium-carbonate-powder" },
      { name: "Dolomite Powder", slug: "dolomite-powder" },
    ],
  },
  {
    number: "04",
    id: "paint-manufacturing",
    name: "Paint Manufacturing",
    headline: "Brightness, Opacity & Viscosity Control",
    description: "Architectural emulsions, industrial primers, and textured wall coatings leverage micronized calcite and dolomite for their naturally high whiteness, controlled oil absorption, excellent rheological balance, and weather resistance.",
    recommendedProducts: [
      { name: "Calcite Powder", slug: "calcite-powder" },
      { name: "Dolomite Powder", slug: "dolomite-powder" },
      { name: "Calcium Carbonate Powder", slug: "calcium-carbonate-powder" },
    ],
  },
  {
    number: "05",
    id: "tiles-ceramics",
    name: "Tiles & Ceramics",
    headline: "High-Temperature Fluxing & Body Strength",
    description: "In vitrified tile bodies, ceramic tableware, and sanitaryware glazes, dolomite and calcite serve as effective fluxing agents that lower sintering temperatures while enhancing thermal expansion tolerance and mechanical finish.",
    recommendedProducts: [
      { name: "Dolomite Powder", slug: "dolomite-powder" },
      { name: "Calcite Powder", slug: "calcite-powder" },
      { name: "Calcite Stone", slug: "calcite-stone" },
    ],
  },
  {
    number: "06",
    id: "construction",
    name: "Construction",
    headline: "Structural Strength & Mortar Workability",
    description: "From limestone lumps used as durable aggregate in civil infrastructure to hydrated lime that gives plasticity to historic and modern mortars, our minerals form the bedrock of enduring structural projects.",
    recommendedProducts: [
      { name: "Limestone Lump", slug: "limestone-lump" },
      { name: "Hydrated Lime Powder", slug: "hydrated-lime-powder" },
      { name: "Calcium Carbonate Powder", slug: "calcium-carbonate-powder" },
    ],
  },
  {
    number: "07",
    id: "pipeline-applications",
    name: "Pipeline Applications",
    headline: "Protective Coatings & Bedding Compounds",
    description: "Infrastructure water and fuel pipelines require specialized mineral bedding materials, protective anticorrosive coating fillers, and jointing mortars engineered to resist moisture and soil stress over decades.",
    recommendedProducts: [
      { name: "Limestone Lump", slug: "limestone-lump" },
      { name: "Dolomite Powder", slug: "dolomite-powder" },
      { name: "Hydrated Lime Powder", slug: "hydrated-lime-powder" },
    ],
  },
  {
    number: "08",
    id: "general-manufacturing",
    name: "General Manufacturing",
    headline: "Multi-Disciplinary Raw Material Supply",
    description: "Diverse manufacturing enterprises rely on our flexible mineral processing capabilities for metallurgy, fluxing, flue gas treatment, effluent neutralization, charcoal fuel, and custom raw material preparations.",
    recommendedProducts: [
      { name: "Dolomite Lump", slug: "dolomite-lump" },
      { name: "Limestone Lump", slug: "limestone-lump" },
      { name: "Hydrated Lime Powder", slug: "hydrated-lime-powder" },
    ],
  },
];
