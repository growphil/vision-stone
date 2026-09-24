export interface Application {
  id: string;
  slug: string;
  title: string;
  categoryNumber: string;
  tagline: string;
  description: string;
  roleOfMinerals: string[];
  recommendedProducts: {
    name: string;
    slug: string;
    benefit: string;
  }[];
  specFocus: string;
}

export const APPLICATIONS: Application[] = [
  {
    id: "steel-and-metallurgy",
    slug: "steel-and-metallurgy",
    title: "Steel & Metallurgy",
    categoryNumber: "01",
    tagline: "Essential fluxing agents, slag conditioners, and refractory minerals for steelmaking.",
    description: "In blast furnaces, basic oxygen furnaces (BOF), and electric arc furnaces (EAF), high-grade dolomite and limestone play an indispensable role in maintaining slag basicity, removing silica and sulfur impurities, and protecting refractory linings from thermal-chemical erosion.",
    roleOfMinerals: [
      "Slag conditioning and basicity regulation in BOF & EAF steelmaking",
      "Desulfurization and dephosphorization during primary refining",
      "Protection of magnesium-carbon refractory linings against rapid chemical corrosion",
      "Lowering melting point and optimizing viscosity of slag"
    ],
    recommendedProducts: [
      { name: "Dolomite Lump", slug: "dolomite-lump", benefit: "Direct furnace flux with high MgO and low decrepitation" },
      { name: "Dolomite Powder", slug: "dolomite-powder", benefit: "Refractory mass and gunning mix formulations" },
      { name: "Limestone Lump", slug: "limestone-lump", benefit: "High-calcium flux for rapid slag formation" }
    ],
    specFocus: "High MgO (>20%), Low Silica (<1.2%), High Mechanical Shatter Resistance"
  },
  {
    id: "industrial-manufacturing",
    slug: "industrial-manufacturing",
    title: "Industrial Manufacturing & Polymers",
    categoryNumber: "02",
    tagline: "Precision functional fillers for plastics, masterbatches, rubber, and coatings.",
    description: "Micronized calcite, dolomite, and calcium carbonate powders act as functional performance modifiers in rigid PVC pipes, polyethylene/polypropylene masterbatches, adhesives, and industrial paints. They deliver dimensional stability, higher stiffness, opacity, and cost-effective volume filling.",
    roleOfMinerals: [
      "Improving tensile modulus, impact strength, and heat deflection temperatures in PVC and polyolefins",
      "Controlled optical opacity and gloss reduction in architectural coatings and paints",
      "Excellent rheological control and low plasticizer/oil absorption in compounding",
      "Stearic acid surface modification for homogenous dispersion in non-polar polymer matrices"
    ],
    recommendedProducts: [
      { name: "Calcite Powder", slug: "calcite-powder", benefit: "97%+ Brightness, low oil absorption filler" },
      { name: "Calcium Carbonate Powder", slug: "calcium-carbonate-powder", benefit: "Coated and uncoated micronized grades (300-1500 Mesh)" },
      { name: "Dolomite Powder", slug: "dolomite-powder", benefit: "Economical functional extender with high whiteness" }
    ],
    specFocus: "Whiteness (>96%), Controlled Top-cut (D97 < 15µm), Stearic Acid Coating"
  },
  {
    id: "construction",
    slug: "construction",
    title: "Construction & Infrastructure",
    categoryNumber: "03",
    tagline: "High-calcium binders, masonry mortars, road stabilization, and cement blending.",
    description: "From structural masonry mortars and autoclaved aerated concrete (AAC) blocks to road subgrade lime stabilization and cement clinker manufacture, Vision Stone limestone and hydrated lime provide the essential chemical bonding and strength development required for lasting civil infrastructure.",
    roleOfMinerals: [
      "Lime stabilization of expansive clay soils for roadbeds and foundation engineering",
      "Plasticity and workability enhancement in traditional and ready-mix masonry mortars",
      "Raw kiln feed for clinker calcination in Portland cement plants",
      "Durability improvement and carbonation resistance in exterior wall plasters"
    ],
    recommendedProducts: [
      { name: "Hydrated Lime Powder", slug: "hydrated-lime-powder", benefit: "Superfine Ca(OH)₂ for high plasticity and soil stabilization" },
      { name: "Limestone Lump", slug: "limestone-lump", benefit: "Consistent CaO feedstock for calcining kilns & cement" },
      { name: "Calcite Powder", slug: "calcite-powder", benefit: "Fine aggregate for dry-mix wall putties and grouts" }
    ],
    specFocus: "Available Lime (>90% Ca(OH)₂), Low Residue on 300 Mesh, Stable Calcination Index"
  },
  {
    id: "chemical-processing",
    slug: "chemical-processing",
    title: "Chemical Processing & Water Treatment",
    categoryNumber: "04",
    tagline: "Neutralization reagents, effluent treatment chemicals, and flue gas scrubbing.",
    description: "Industrial wastewater from textile, chemical, and metal finishing plants requires precise pH neutralization and heavy-metal precipitation. Vision Stone hydrated lime and calcium compounds provide cost-effective neutralization, sludge dewatering, and acidic flue gas scrubbing.",
    roleOfMinerals: [
      "Rapid pH correction in acidic industrial wastewater and ETP operations",
      "Precipitation of dissolved toxic heavy metals as insoluble metal hydroxides",
      "Flue Gas Desulfurization (FGD) in power generation and smelting plants to capture SO₂ emissions",
      "Flocculation aid and sludge conditioning for filter press cake filtration"
    ],
    recommendedProducts: [
      { name: "Hydrated Lime Powder", slug: "hydrated-lime-powder", benefit: "Fast neutralization kinetics and minimal unslaked grit" },
      { name: "Limestone Lump", slug: "limestone-lump", benefit: "Feed material for industrial on-site slakers & scrubbers" }
    ],
    specFocus: "Reactivity Rate (<30s slaking), Available Ca(OH)₂ >90%, Low Grit Content"
  },
  {
    id: "ceramics-and-glass",
    slug: "ceramics-and-glass",
    title: "Ceramics & Glass Manufacturing",
    categoryNumber: "05",
    tagline: "Fluxing agents, ceramic body modifiers, and optical batch raw materials.",
    description: "Dolomite and calcite act as fluxes in ceramic glaze formulations and vitrified tile bodies, lowering firing temperatures while increasing mechanical strength, thermal shock resistance, and glaze durability. In container and flat glass batches, they introduce essential CaO and MgO network modifiers.",
    roleOfMinerals: [
      "Lowering eutectic melting temperatures in ceramic bodies and glass melt tanks",
      "Enhancing chemical resistance and mechanical hardness of glazed surfaces",
      "Imparting thermal expansion stability to prevent glaze crazing and micro-cracking",
      "Low iron content ensuring clear, defect-free glass container output"
    ],
    recommendedProducts: [
      { name: "Dolomite Powder", slug: "dolomite-powder", benefit: "Balanced MgO and CaO ratio for vitrified bodies and glazes" },
      { name: "Calcite Stone", slug: "calcite-stone", benefit: "Low-iron crystalline raw batch feed for glass kilns" },
      { name: "Calcite Powder", slug: "calcite-powder", benefit: "Ultra-fine glaze suspension component" }
    ],
    specFocus: "Fe₂O₃ < 0.05%, Low Silica, Controlled Grain Size Distribution"
  },
  {
    id: "agriculture-and-soil",
    slug: "agriculture-and-soil",
    title: "Agriculture & Soil Conditioning",
    categoryNumber: "06",
    tagline: "Agricultural liming, soil pH correction, and essential magnesium/calcium nutrition.",
    description: "Acidic soils restrict plant root nutrient uptake. Agricultural-grade dolomite powder and hydrated lime neutralize soil acidity, restore optimal microbial health, and deliver essential plant nutrients—calcium for cell wall strength and magnesium for active chlorophyll synthesis.",
    roleOfMinerals: [
      "Correcting acidic soil pH (raising pH to optimal 6.0 – 7.2 range)",
      "Providing dual macronutrients: Magnesium (Mg) for chlorophyll and Calcium (Ca) for root growth",
      "Improving soil friability, aeration, and moisture retention in heavy clay soils",
      "Conditioning agent and filler in complex NPK fertilizer blending"
    ],
    recommendedProducts: [
      { name: "Dolomite Powder", slug: "dolomite-powder", benefit: "High magnesium agricultural dolomite for sustained soil buffering" },
      { name: "Hydrated Lime Powder", slug: "hydrated-lime-powder", benefit: "Rapid soil disinfectant and immediate pH corrector" }
    ],
    specFocus: "Calcium Carbonate Equivalent (CCE > 100%), MgO > 20%, Fine Dispersion Mesh"
  },
  {
    id: "traditional-decorative",
    slug: "traditional-decorative",
    title: "Traditional & Decorative Heritage Art",
    categoryNumber: "07",
    tagline: "Pure natural white mineral powders crafted for sacred kolam and festive threshold art.",
    description: "A cultural tradition spanning centuries, threshold floor art (Kolam / Rangoli) requires bright, silky, non-toxic mineral powders. Vision Stone Kola Maavu preserves this sacred art form with pure white stone powders engineered for smooth finger flow, sharp line clarity, and gentle dermal safety.",
    roleOfMinerals: [
      "Natural dazzling whiteness that sparkles in natural and artificial light",
      "Balanced particle grain size allowing steady, controlled pinch-and-flow line drawing",
      "Free from harsh chemical bleaches, synthetic fillers, or hazardous silica dust",
      "Safe for daily auspicious home entries, temple sanctums, and community festivities"
    ],
    recommendedProducts: [
      { name: "Kola Maavu / Kolam Powder", slug: "kola-maavu", benefit: "Superfine natural white stone powder for threshold geometric art" }
    ],
    specFocus: "100% Non-Toxic Mineral Base, Whiteness >95%, Silky Free-Flowing Micro-Grain"
  }
];

export function getApplicationBySlug(slug: string): Application | undefined {
  return APPLICATIONS.find((a) => a.slug === slug);
}
