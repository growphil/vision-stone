export interface InfrastructurePillar {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  equipment: string[];
}

export const INFRASTRUCTURE_PILLARS: InfrastructurePillar[] = [
  {
    step: "01",
    title: "Strategic Quarrying & Mineral Sourcing",
    subtitle: "High-Purity Geological Deposits & Selective Extraction",
    description: "Our supply chain begins at certified mineral seams known for geological uniformity. Raw boulders of dolomite, calcite, and limestone undergo selective hand-dressing and bench extraction to exclude foreign shale and clay inclusions right at the source.",
    metrics: [
      { label: "Raw Mineral Grading", value: "Multi-point Bench Assay" },
      { label: "Source Consistency", value: "Geological Core Profiling" },
      { label: "Material Traceability", value: "100% Pit-to-Plant Lot Tracking" }
    ],
    equipment: [
      "Heavy Hydraulic Excavators & Dumpers",
      "Field Assay Spectrometers",
      "Primary Rock Breakers"
    ]
  },
  {
    step: "02",
    title: "Multi-Stage Crushing & Vibratory Screening",
    subtitle: "Precise Size Reduction & Sizing Control",
    description: "Raw mineral blocks are fed through primary heavy-duty jaw crushers followed by secondary cone crushers. Multi-deck inclined vibratory screens segregate material into precise lump gradations (10-40mm, 40-80mm, 50-120mm) with automatic removal of unwanted fines.",
    metrics: [
      { label: "Crushing Capacity", value: "High-Throughput Continuous Line" },
      { label: "Screen Accuracy", value: "ISO Sieve Standard Tolerances" },
      { label: "Fines Rejection", value: "< 2% in Metallurgical Fractions" }
    ],
    equipment: [
      "Heavy Jaw Crushers",
      "Hydraulic Cone Crushers",
      "Multi-Deck High Frequency Vibratory Screens",
      "Automated Belt Conveyor Networks"
    ]
  },
  {
    step: "03",
    title: "Precision Micronizing & Turbo Air Classification",
    subtitle: "Sub-Micron Pulverization & Dynamic Particle Separation",
    description: "For fine and superfine powder grades, crushed feed enters closed-circuit ball mills and micro-pulverizers equipped with high-efficiency dynamic turbo air classifiers. The system continuously extracts exact target micron sizes while recycling coarser grains for re-grinding.",
    metrics: [
      { label: "Particle Fineness", value: "200 to 1500 Mesh (D50 2µm - 15µm)" },
      { label: "Top-Cut Control", value: "Strict D97 Cut-Off Precision" },
      { label: "Thermal Control", value: "Low-Temperature Grinding System" }
    ],
    equipment: [
      "Closed-Circuit Ball Mills with Ceramic Liners",
      "High-Efficiency Dynamic Air Classifiers",
      "Micro-Pulverizers & Ultra-Fine Pin Mills",
      "Stearic Acid Continuous Surface Coating Units"
    ]
  },
  {
    step: "04",
    title: "Quality Assurance & Analytical Laboratory",
    subtitle: "Continuous Testing & Standardized Quality Protocols",
    description: "Every production shift is monitored by a dedicated quality assurance laboratory. Real-time testing includes laser diffraction particle size analysis, X-Ray Fluorescence (XRF) elemental verification, whiteness index spectrophotometry, moisture assays, and loss-on-ignition determination.",
    metrics: [
      { label: "Testing Frequency", value: "Every Production Batch / Lot" },
      { label: "Laser Analysis", value: "Malvern Mastersizer Diffraction" },
      { label: "Whiteness Gauge", value: "Spectrophotometer CIE L*a*b*" }
    ],
    equipment: [
      "Laser Diffraction Particle Size Analyzers",
      "X-Ray Fluorescence (XRF) Spectrometers",
      "Digital Whiteness & Brightness Meters",
      "High-Temperature Muffle Furnaces (LOI Testing)",
      "Hydrated Lime Reactivity Slaking Calorimeters"
    ]
  },
  {
    step: "05",
    title: "Automated Packaging & Dispatch Logistics",
    subtitle: "Moisture-Proof Packaging & Multi-Modal Delivery Network",
    description: "Finished mineral products are packaged via automated bagging carousels into moisture-impervious 25kg/50kg HDPE/paper multiwall bags and 1.0–1.25 MT heavy-duty jumbo bags. Palletized stacks are shrink-wrapped to withstand long transit and tropical humidity without clumping.",
    metrics: [
      { label: "Packaging Options", value: "25kg, 50kg, 1 MT Jumbo Bags & Bulk" },
      { label: "Moisture Protection", value: "Tamper-Proof Laminated Barrier" },
      { label: "Dispatch Readiness", value: "Direct Road, Rail & Port Connect" }
    ],
    equipment: [
      "Automated Electronic Gross Weigh Bagging Machines",
      "Rotary Jumbo Bag Filling Stations with De-aeration",
      "Automated Palletizers & Stretch Hood Wrapping Lines",
      "Covered Weather-Proof Storage Warehouses"
    ]
  }
];
