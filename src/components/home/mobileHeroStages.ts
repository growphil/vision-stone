export interface MobileStageConfig {
  id: number;
  step: string;
  eyebrow: string;
  headline: string[];
  supporting: string;
  hasCta?: boolean;
}

export const MOBILE_HERO_STAGES: MobileStageConfig[] = [
  {
    id: 1,
    step: "01",
    eyebrow: "VISION STONES / MINERAL TRANSFORMATION",
    headline: ["MINERAL.", "BUILT FROM", "THE EARTH."],
    supporting: "Mineral manufacturing rooted in experience.",
  },
  {
    id: 2,
    step: "02",
    eyebrow: "MINERAL TRANSFORMATION",
    headline: ["ENGINEERED", "THROUGH", "PRECISION."],
    supporting: "From natural rock to controlled particle size.",
  },
  {
    id: 3,
    step: "03",
    eyebrow: "CONTROLLED PROCESSING",
    headline: ["PRECISION", "IN EVERY", "PARTICLE."],
    supporting: "Consistency engineered for industry.",
  },
  {
    id: 4,
    step: "04",
    eyebrow: "VISION STONES",
    headline: ["MINERALS.", "REFINED FOR", "MODERN INDUSTRY."],
    supporting: "From earth to engineered mineral solutions.",
    hasCta: true,
  },
];
