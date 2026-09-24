export interface ProductSpecification {
  parameter: string;
  value: string;
  typical?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  category: "Ores & Minerals" | "Lime & Limestone" | "Calcium Carbonate" | "Traditional & Decorative";
  categorySlug: "ores-and-minerals" | "lime-and-limestone" | "calcium-carbonate" | "traditional-and-decorative";
  brand: string;
  tagline: string;
  description: string;
  detailedOverview: string;
  keyFeatures: string[];
  specifications: ProductSpecification[];
  applications: string[];
  applicationSlugs: string[];
  packaging: {
    types: string[];
    details: string;
  };
  qualityAssurance: string;
  chemicalFormula?: string;
  meshSize?: string;
  whiteness?: string;
  purity?: string;
  color: string;
  accentBadge: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "dolomite-powder",
    slug: "dolomite-powder",
    name: "Dolomite Powder",
    subtitle: "High-Purity Micronized Calcium Magnesium Carbonate",
    category: "Ores & Minerals",
    categorySlug: "ores-and-minerals",
    brand: "VS Prime Mineral",
    tagline: "Ultra-fine micronized mineral powder with exceptional chemical stability and high whiteness.",
    description: "Vision Stone Dolomite Powder is manufactured from selected crystalline dolomite minerals, pulverized and air-classified to precise mesh distributions. Renowned for consistent magnesium and calcium ratios, low silica, and superior brightness.",
    detailedOverview: "Our industrial dolomite powder is engineered through advanced multi-stage crushing and classification technologies. It serves critical functions as a neutralizing agent, functional extender, and fluxing agent in steel manufacturing, paint formulations, ceramic glazes, and agriculture. Every batch undergoes rigorous XRF elemental analysis to guarantee chemical purity and uniform particle size distribution.",
    keyFeatures: [
      "Naturally high whiteness (92% - 96%)",
      "Balanced stoichiometric ratio of CaCO₃ and MgCO₃",
      "Very low acid-insoluble residue & silica (<1%)",
      "Controlled particle size distribution from 200 to 500 mesh",
      "Low oil absorption and excellent dispersibility"
    ],
    specifications: [
      { parameter: "Chemical Formula", value: "CaMg(CO₃)₂" },
      { parameter: "Calcium Oxide (CaO)", value: "30.0% – 32.5%", typical: "31.2%" },
      { parameter: "Magnesium Oxide (MgO)", value: "20.0% – 22.0%", typical: "21.0%" },
      { parameter: "Silica (SiO₂)", value: "< 1.20%", typical: "0.85%" },
      { parameter: "Loss on Ignition (LOI)", value: "44.0% – 47.0%", typical: "45.8%" },
      { parameter: "Whiteness (Brightness)", value: "92.0% – 96.0%", typical: "94.5%" },
      { parameter: "Mesh Sizes Available", value: "200, 300, 400, 500 Mesh & Micronized (D50 < 10µm)" },
      { parameter: "Moisture Content", value: "< 0.25%", typical: "0.15%" },
      { parameter: "Specific Gravity", value: "2.84 – 2.86 g/cm³" },
      { parameter: "pH Value (10% slurry)", value: "8.5 – 9.8" }
    ],
    applications: [
      "Steel & Metallurgy (Slag Conditioning & Refractory)",
      "Paints, Primers & Industrial Coatings",
      "Plastics, PVC Compounding & Polymer Masterbatches",
      "Ceramics, Vitrified Tiles & Sanitaryware",
      "Soil Neutralization & Agricultural Conditioning",
      "Glass Manufacturing & Fluxing"
    ],
    applicationSlugs: [
      "steel-and-metallurgy",
      "industrial-manufacturing",
      "ceramics-and-glass",
      "agriculture-and-soil"
    ],
    packaging: {
      types: ["25 kg HDPE Bags", "50 kg Laminated Bags", "1.0 to 1.25 MT Jumbo PP Bags with Liner"],
      details: "Moisture-proof tamper-evident bags palletized and shrink-wrapped for safe domestic transit and export container shipping."
    },
    qualityAssurance: "Batch-wise particle size laser diffraction analysis, X-Ray Fluorescence (XRF) elemental verification, and whiteness index testing.",
    chemicalFormula: "CaMg(CO₃)₂",
    meshSize: "200 - 500 Mesh",
    whiteness: "94.5%",
    purity: "98.5% Total Carbonates",
    color: "#D9D9D9",
    accentBadge: "Core Mineral"
  },
  {
    id: "dolomite-lump",
    slug: "dolomite-lump",
    name: "Dolomite Lump",
    subtitle: "High-Grade Sized Natural Dolomitic Rock",
    category: "Ores & Minerals",
    categorySlug: "ores-and-minerals",
    brand: "VS Raw Mineral",
    tagline: "Selected crystalline dolomite lumps for steel fluxing, ferroalloys, and refractory calcination.",
    description: "Vision Stone Dolomite Lumps are sourced directly from high-grade geological reserves. Screened and graded for size uniformity, low decrepitation, and high structural density for blast furnace and ferroalloy operations.",
    detailedOverview: "Our dolomite lumps offer maximum refractory endurance and consistent basicity. Selected boulders are mechanically crushed and passed through multi-deck vibratory screens to produce accurate size fractions (10-40mm, 25-75mm, 40-100mm) with minimal fines.",
    keyFeatures: [
      "High mechanical hardness and low decrepitation index",
      "High MgO content (>20.5%) ensuring optimal slag viscosity",
      "Minimal moisture and low alkalis",
      "Zero contamination through selective quarry grading"
    ],
    specifications: [
      { parameter: "Chemical Formula", value: "CaMg(CO₃)₂" },
      { parameter: "MgO Content", value: "20.5% – 22.5%", typical: "21.4%" },
      { parameter: "CaO Content", value: "29.5% – 32.0%", typical: "30.8%" },
      { parameter: "SiO₂ (Silica)", value: "< 1.5%", typical: "0.95%" },
      { parameter: "Al₂O₃ + Fe₂O₃", value: "< 0.60%", typical: "0.35%" },
      { parameter: "Size Gradations", value: "10-40 mm, 25-80 mm, 40-120 mm (Customizable)" },
      { parameter: "Physical State", value: "Dense, compact crystalline lumps" }
    ],
    applications: [
      "Steel Plant Blast Furnaces & BOF Fluxing",
      "Ferroalloy Smelting",
      "Refractory Brick & Monolithic Manufacturing",
      "Calcined & Sintered Dolomite Production"
    ],
    applicationSlugs: ["steel-and-metallurgy", "industrial-manufacturing"],
    packaging: {
      types: ["Bulk Loose in Tippers / Trailers", "1.0 - 1.5 MT Heavy-duty Jumbo Bags"],
      details: "Available in bulk dump truck loads or crane-ready woven jumbo bags for long-haul rail and road logistics."
    },
    qualityAssurance: "Screen size consistency checks, drop shatter index testing, and chemical assays for furnace compatibility.",
    chemicalFormula: "CaMg(CO₃)₂",
    meshSize: "25 - 100 mm Sized",
    whiteness: "Natural Mineral Gray",
    purity: "> 98% Carbonates",
    color: "#8E8E93",
    accentBadge: "Heavy Industrial"
  },
  {
    id: "calcite-powder",
    slug: "calcite-powder",
    name: "Calcite Powder",
    subtitle: "Ultra-Bright Micronized Calcium Carbonate (Natural)",
    category: "Ores & Minerals",
    categorySlug: "ores-and-minerals",
    brand: "VS UltraWhite",
    tagline: "Natural crystalline calcite micro-powder offering maximum optical brightness, high purity, and smooth flowability.",
    description: "Vision Stone Calcite Powder is engineered from pristine natural crystalline calcium carbonate. Boasting extraordinary optical brightness (>96%), low oil absorption, and controlled particle top-cut, it is the premium choice for polymers, paints, and masterbatches.",
    detailedOverview: "Manufactured in state-of-the-art ball mills and ultra-fine turbo classifiers, our calcite powder provides outstanding reinforcement, opacity, and gloss control in polymer compounds and architectural coatings. Its chemical inertness and crystalline morphology reduce formulation costs while enhancing mechanical strength.",
    keyFeatures: [
      "Exceptional optical whiteness & brightness (96% - 98%)",
      "Purity of CaCO₃ > 97.5%",
      "Low oil absorption rate for higher filler loadings",
      "Excellent thermal stability up to 800°C",
      "Precise particle size distribution with controlled top-cut"
    ],
    specifications: [
      { parameter: "Chemical Formula", value: "CaCO₃" },
      { parameter: "Calcium Carbonate (CaCO₃)", value: "≥ 97.5%", typical: "98.4%" },
      { parameter: "Magnesium (as MgCO₃)", value: "< 1.0%", typical: "0.45%" },
      { parameter: "Silica (SiO₂)", value: "< 0.5%", typical: "0.22%" },
      { parameter: "Whiteness (CIE Y)", value: "96.0% – 98.5%", typical: "97.2%" },
      { parameter: "Oil Absorption", value: "14 – 18 g/100g" },
      { parameter: "Bulk Density", value: "0.85 – 1.15 g/ml" },
      { parameter: "Mesh Sizes", value: "300, 400, 500, 600, 800, 1250 Mesh (2µm - 15µm)" }
    ],
    applications: [
      "Rigid PVC Pipes, Profiles & Foam Boards",
      "Premium Emulsion Paints & Texture Finishes",
      "PP & PE Masterbatches & Compounding",
      "Rubber Goods, Footwear & Adhesives",
      "Paper Coating & Filler Applications"
    ],
    applicationSlugs: ["industrial-manufacturing", "construction", "ceramics-and-glass"],
    packaging: {
      types: ["25 kg Paper/HDPE Multiwall Bags", "50 kg Laminated Bags", "1.0 MT Jumbo Bags"],
      details: "Available in palletized, automated stretch-hood wrapped stacks for zero ambient humidity ingress."
    },
    qualityAssurance: "Laser granulometry (Malvern Mastersizer), spectrophotometer whiteness verification, and residue on sieve testing.",
    chemicalFormula: "CaCO₃",
    meshSize: "400 - 1250 Mesh",
    whiteness: "97.2%",
    purity: "98.4% CaCO₃",
    color: "#F2F2F7",
    accentBadge: "High Whiteness"
  },
  {
    id: "calcite-stone",
    slug: "calcite-stone",
    name: "Calcite Stone",
    subtitle: "High-Grade Pure Crystalline Calcite Lumps",
    category: "Ores & Minerals",
    categorySlug: "ores-and-minerals",
    brand: "VS Crystal Rock",
    tagline: "Natural high-purity crystalline calcite stones for optical, chemical, and mineral grinding feed.",
    description: "Vision Stone Calcite Stone features exceptional purity with translucent to milk-white crystalline structures. Hand-sorted and mechanically screened to ensure zero matrix inclusions and high calcium content.",
    detailedOverview: "Our raw calcite stones are extracted from geological seams exhibiting crystalline calcite structures. These stones serve as premier feed stock for micronizing plants, specialized chemical manufacturing, and decorative terrazzo matrices.",
    keyFeatures: [
      "Pristine crystalline structure with natural luster",
      "Calcium Carbonate purity > 98%",
      "Extremely low iron (Fe₂O₃ < 0.03%) and heavy metals",
      "High chemical reactivity for industrial synthesis"
    ],
    specifications: [
      { parameter: "Chemical Formula", value: "CaCO₃" },
      { parameter: "CaCO₃ Purity", value: "≥ 98.0%", typical: "98.7%" },
      { parameter: "Iron Oxide (Fe₂O₃)", value: "< 0.05%", typical: "0.02%" },
      { parameter: "Acid Insoluble Matter", value: "< 0.40%", typical: "0.20%" },
      { parameter: "Size Gradations", value: "20-60 mm, 50-150 mm (Custom sizing upon request)" },
      { parameter: "Specific Gravity", value: "2.71 g/cm³" }
    ],
    applications: [
      "Feedstock for Micronizing & Ultrafine Grinding",
      "Chemical Synthesis & Precipitated Calcium Carbonate (PCC)",
      "High-end Terrazzo & Engineered Stone Surfaces",
      "Glass Batch Refining"
    ],
    applicationSlugs: ["ceramics-and-glass", "industrial-manufacturing", "construction"],
    packaging: {
      types: ["Bulk Loose Shipments", "1 MT Heavy Jumbo Bags with Discharge Spout"],
      details: "Dispatched in clean, dedicated transport carriers to prevent foreign contamination."
    },
    qualityAssurance: "Visual color sorting, acid insolubility screening, and periodic ICP-OES elemental profiling.",
    chemicalFormula: "CaCO₃",
    meshSize: "20 - 150 mm",
    whiteness: "Natural Translucent White",
    purity: "98.7% CaCO₃",
    color: "#E5E5EA",
    accentBadge: "Crystalline"
  },
  {
    id: "limestone-lump",
    slug: "limestone-lump",
    name: "Limestone Lump",
    subtitle: "High-Calcium Chemical & Metallurgical Grade Limestone",
    category: "Lime & Limestone",
    categorySlug: "lime-and-limestone",
    brand: "VS QuickRock",
    tagline: "Dense, high-calcium natural limestone lumps for lime kilns, steel fluxes, and cement manufacture.",
    description: "Vision Stone Limestone Lumps provide high chemical purity, high reactive CaO potential, and tight mechanical sizing for quicklime manufacturing, steel slag conditioning, and construction aggregates.",
    detailedOverview: "Quarried from selective high-calcium formations, our limestone lumps are processed through specialized primary jaw and cone crushers coupled with rotary screening. They exhibit superior calcination kinetics in vertical shaft kilns and rotary kilns.",
    keyFeatures: [
      "High Calcium content (CaO > 52.5% / CaCO₃ > 94%)",
      "Low silica, alumina, and phosphorus content",
      "Optimum thermal decrement properties during calcination",
      "Consistent bulk density and mechanical integrity"
    ],
    specifications: [
      { parameter: "Chemical Formula", value: "CaCO₃" },
      { parameter: "Calcium Oxide (CaO)", value: "≥ 52.5%", typical: "53.8%" },
      { parameter: "CaCO₃ Equivalent", value: "≥ 93.5%", typical: "95.8%" },
      { parameter: "Silica (SiO₂)", value: "< 2.0%", typical: "1.15%" },
      { parameter: "Magnesium Oxide (MgO)", value: "< 1.8%", typical: "0.95%" },
      { parameter: "Size Fractions", value: "20-50 mm, 40-80 mm, 50-120 mm" },
      { parameter: "Loss on Ignition (LOI)", value: "42.0% – 44.0%" }
    ],
    applications: [
      "Quicklime & Hydrated Lime Kiln Feed",
      "Steel Making (Basic Oxygen Furnace & EAF Fluxing)",
      "Portland Cement Clinker Raw Mix",
      "Flue Gas Desulfurization (FGD) in Thermal Power Plants",
      "Civil Construction & Road Base Stabilization"
    ],
    applicationSlugs: ["construction", "steel-and-metallurgy", "chemical-processing"],
    packaging: {
      types: ["Bulk Vessel / Rake Load", "Tipper Truck Deliveries", "1.25 MT Heavy-duty Jumbo Bags"],
      details: "Available in high-capacity bulk dispatch directly from processing yards."
    },
    qualityAssurance: "Continuous calcination yield tests, particle size grading, and loss on ignition tracking.",
    chemicalFormula: "CaCO₃",
    meshSize: "20 - 120 mm Lumps",
    whiteness: "Natural Mineral Stone",
    purity: "> 53% CaO Equiv.",
    color: "#AEAEB2",
    accentBadge: "Calcination Grade"
  },
  {
    id: "hydrated-lime-powder",
    slug: "hydrated-lime-powder",
    name: "Hydrated Lime Powder",
    subtitle: "High-Reactivity Calcium Hydroxide [Ca(OH)₂]",
    category: "Lime & Limestone",
    categorySlug: "lime-and-limestone",
    brand: "VS PureLime",
    tagline: "Industrial-grade slaked lime with high available lime content and ultra-fine air classification.",
    description: "Vision Stone Hydrated Lime Powder (Calcium Hydroxide) is produced through controlled hydration of high-purity quicklime, followed by precision air-cyclone separation. It delivers high chemical reactivity, rapid dissolution, and neutralising efficiency.",
    detailedOverview: "Engineered for high-demand chemical and environmental operations, our hydrated lime features an available Ca(OH)₂ content of up to 90%+. Its fine particle distribution provides expansive surface area for rapid acid neutralization, flue gas scrubbing, and water purification.",
    keyFeatures: [
      "High Available Lime as Ca(OH)₂ (88% - 92%)",
      "Superfine mesh rating (98%+ passing 300 mesh)",
      "Exceptional acid neutralization capacity",
      "Low insolubles and zero unslaked grit",
      "Excellent flocculating and coagulating action"
    ],
    specifications: [
      { parameter: "Chemical Formula", value: "Ca(OH)₂" },
      { parameter: "Available Ca(OH)₂", value: "≥ 88.0%", typical: "91.2%" },
      { parameter: "Total Calcium as CaO", value: "≥ 68.0%", typical: "70.5%" },
      { parameter: "Silica & Insolubles", value: "< 1.5%", typical: "0.85%" },
      { parameter: "CO₂ (as CaCO₃)", value: "< 3.0%", typical: "1.8%" },
      { parameter: "Residue on 200 Mesh", value: "< 0.5%", typical: "0.15%" },
      { parameter: "Residue on 300 Mesh", value: "< 2.0%", typical: "1.05%" },
      { parameter: "Bulk Density", value: "0.45 – 0.55 g/ml" },
      { parameter: "pH (Saturated Solution)", value: "12.4" }
    ],
    applications: [
      "Effluent Treatment Plants (ETP) & Industrial Wastewater Neutralization",
      "Municipal Water Treatment & Flocculation",
      "Sugar Processing & Juice Clarification",
      "Mortars, Stuccos & Masonry Plasters",
      "Bleaching Powder & Chemical Intermediate Synthesis",
      "Road Soil Subgrade Lime Stabilization"
    ],
    applicationSlugs: ["chemical-processing", "construction", "agriculture-and-soil"],
    packaging: {
      types: ["25 kg HDPE / Paper Lined Bags", "50 kg Woven Bags", "500 kg / 1 MT Bulk Bags"],
      details: "Hermetically sealed moisture-barrier bags to prevent premature atmospheric carbonation."
    },
    qualityAssurance: "Active lime titration (ASTM C25), particle fineness testing, and slaking rate reactivity assays.",
    chemicalFormula: "Ca(OH)₂",
    meshSize: "300 Mesh Superfine",
    whiteness: "92.0%",
    purity: "91.2% Available Ca(OH)₂",
    color: "#E5E5EA",
    accentBadge: "High Reactivity"
  },
  {
    id: "calcium-carbonate-powder",
    slug: "calcium-carbonate-powder",
    name: "Calcium Carbonate Powder",
    subtitle: "Ground Calcium Carbonate (GCC) & Coated Grades",
    category: "Calcium Carbonate",
    categorySlug: "calcium-carbonate",
    brand: "VS MicroCal",
    tagline: "Precision-classified ground calcium carbonate engineered for superior polymer dispersion and coating performance.",
    description: "Vision Stone Calcium Carbonate Powder provides high brightness, controlled oil absorption, and consistent particle geometry. Sourced from high-grade natural reserves and micro-milled for optimal performance in polymers, rubber, and industrial formulations.",
    detailedOverview: "Available in both untreated and stearic acid surface-treated (coated) grades, our calcium carbonate powder enhances polymer flow properties, improves impact resistance, and maximizes filler efficiency across diverse manufacturing workflows.",
    keyFeatures: [
      "Ultra-fine particle distribution with tight span control",
      "Available in untreated GCC and stearic acid coated grades",
      "Low abrasiveness, preserving processing machinery",
      "High chemical stability and excellent thermal tolerance"
    ],
    specifications: [
      { parameter: "Chemical Formula", value: "CaCO₃" },
      { parameter: "CaCO₃ Content", value: "≥ 98.0%", typical: "98.6%" },
      { parameter: "Whiteness (Brightness)", value: "≥ 96.0%", typical: "97.0%" },
      { parameter: "Silica (SiO₂)", value: "< 0.4%", typical: "0.18%" },
      { parameter: "Moisture Content", value: "< 0.20%", typical: "0.08%" },
      { parameter: "Stearic Acid Coating (Coated Grade)", value: "1.0% – 1.5% active surface coat" },
      { parameter: "Particle Size D50", value: "1.5µm – 8.0µm (Custom grades: 300 to 1500 Mesh)" }
    ],
    applications: [
      "Plastic Masterbatches, PVC Pipes & Cable Insulation",
      "Rubber Compounds & Technical Moldings",
      "Decorative Architectural Paints & Powder Coatings",
      "Adhesives, Sealants & Caulks",
      "Paper Making (Filler and Alkaline Sizing)"
    ],
    applicationSlugs: ["industrial-manufacturing", "construction", "chemical-processing"],
    packaging: {
      types: ["25 kg HDPE/Kraft Paper Bags", "50 kg Bags", "1 MT Jumbo Bags with Liner"],
      details: "Available palletized with moisture-impervious PE film wrapping."
    },
    qualityAssurance: "Laser diffraction sizing (D10, D50, D90, D97), brightness spectrophotometry, and coating hydrophobicity verification.",
    chemicalFormula: "CaCO₃",
    meshSize: "400 - 1500 Mesh",
    whiteness: "97.0%",
    purity: "98.6% CaCO₃",
    color: "#F2F2F7",
    accentBadge: "Precision Micronized"
  },
  {
    id: "kola-maavu",
    slug: "kola-maavu",
    name: "Kola Maavu / Kolam Powder",
    subtitle: "Pristine White Natural Mineral Powder for Sacred Floor Art",
    category: "Traditional & Decorative",
    categorySlug: "traditional-and-decorative",
    brand: "VS Heritage Mineral",
    tagline: "Finely milled, non-toxic, sparkling white mineral powder crafted for traditional kolam and festive decorative art.",
    description: "Vision Stone Kola Maavu (Kolam Powder) is a natural, eco-friendly mineral powder formulated from selected pure white mineral stones. Characterized by its soft tactile texture, excellent flowability between fingers, and brilliant brightness on doorways and courtyards.",
    detailedOverview: "Honoring traditional Indian threshold art and rangoli rituals, our Kolam powder is finely ground to provide free-flowing precision for intricate line art and geometric dots (pulli kolam). Made without harsh chemicals, synthetic bleaches, or skin irritants.",
    keyFeatures: [
      "100% natural, eco-friendly, non-toxic mineral formulation",
      "Pristine dazzling white finish with natural mineral sparkle",
      "Smooth tactile texture for seamless finger flow and line definition",
      "Gentle on skin, safe for daily home and temple rituals",
      "Excellent ground adhesion without easy wind dispersion"
    ],
    specifications: [
      { parameter: "Base Mineral", value: "Natural Pure White Calcite / Dolomitic Rock" },
      { parameter: "Whiteness Index", value: "≥ 95.0%" },
      { parameter: "Texture & Feel", value: "Silky, free-flowing, non-gritty micro-grain" },
      { parameter: "Toxicity & Additives", value: "Zero chemicals, zero synthetic dyes, 100% mineral" },
      { parameter: "Mesh Consistency", value: "Carefully balanced micro-grain for optimum fingertip grip" },
      { parameter: "Packaging Formats", value: "500g, 1kg, 5kg Retail Packs & 25kg / 50kg Bulk Bags" }
    ],
    applications: [
      "Daily Household Front-Door & Courtyard Kolam",
      "Temple Sanctuaries, Festivities & Traditional Ceremonies",
      "Festive Rangoli Base & Sacred Floor Geometry",
      "Art Studios & Decorative Threshold Embellishment"
    ],
    applicationSlugs: ["traditional-decorative"],
    packaging: {
      types: ["500g & 1kg Branded Retail Pouches", "5kg Consumer Packs", "25kg / 50kg Sturdy Master Bags"],
      details: "Sealed moisture-resistant retail packs and bulk master cartons tailored for retail distribution and wholesale supply."
    },
    qualityAssurance: "Skin-friendly dermal safety testing, optical brightness verification, and flow rate consistency analysis.",
    chemicalFormula: "Natural Mineral Compound",
    meshSize: "Balanced Free-Flow Grain",
    whiteness: "96.0%",
    purity: "100% Natural Stone Origin",
    color: "#FFFFFF",
    accentBadge: "Heritage & Culture"
  }
];

export const PRODUCT_CATEGORIES = [
  {
    id: "ores-and-minerals",
    name: "Ores & Minerals",
    description: "Raw and micronized industrial ores engineered for heavy metallurgy, polymer compounding, and refractory stability.",
    productSlugs: ["dolomite-powder", "dolomite-lump", "calcite-powder", "calcite-stone"],
    count: 4,
    badge: "01 / FOUNDATION"
  },
  {
    id: "lime-and-limestone",
    name: "Lime & Limestone",
    description: "High-calcium limestone lumps and reactive hydrated lime powders for water treatment, construction, and chemical synthesis.",
    productSlugs: ["limestone-lump", "hydrated-lime-powder"],
    count: 2,
    badge: "02 / REACTIVITY"
  },
  {
    id: "calcium-carbonate",
    name: "Calcium Carbonate",
    description: "Precision-milled ground calcium carbonate (GCC) for plastics, coatings, masterbatches, and elastomer compounding.",
    productSlugs: ["calcium-carbonate-powder"],
    count: 1,
    badge: "03 / PRECISION"
  },
  {
    id: "traditional-and-decorative",
    name: "Traditional & Decorative",
    description: "Finely refined natural mineral powders designed for authentic, sparkling kolam and sacred threshold geometric art.",
    productSlugs: ["kola-maavu"],
    count: 1,
    badge: "04 / HERITAGE"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return PRODUCTS.filter((p) => p.category === category || p.categorySlug === category);
}

export function getRelatedProducts(currentSlug: string, count: number = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return PRODUCTS.slice(0, count);
  return PRODUCTS
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, count);
}
