import React from "react";
import type { Metadata } from "next";
import ApplicationsHero from "@/components/applications/ApplicationsHero";
import ApplicationGrid from "@/components/applications/ApplicationGrid";
import ApplicationsContext from "@/components/applications/ApplicationsContext";
import ApplicationCTA from "@/components/applications/ApplicationCTA";

export const metadata: Metadata = {
  title: "Industries & Applications | Vision Stones",
  description:
    "Explore how Vision Stones supplies industrial minerals across Agriculture & Soil, Fertilizer & Agri-Inputs, Rubber & Polymer, Paint, Tiles & Ceramics, Construction, Pipeline, and General Manufacturing.",
  openGraph: {
    title: "Industries & Applications | Vision Stones",
    description:
      "Built around industry requirements. High-purity Dolomite, Limestone, Lime, Calcite, and Calcium Carbonate from Tirunelveli, Tamil Nadu.",
    url: "https://visionstone.in/applications",
    images: [
      {
        url: "/application/agriculture-soil-applications.webp",
        width: 1200,
        height: 800,
        alt: "Vision Stones Industries & Applications",
      },
    ],
  },
};

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#111111] font-display">
      {/* 1. Page Hero: Applications / Meet Products */}
      <ApplicationsHero />

      {/* 2. Main Visual Grid: Asymmetric Full-Bleed Image Tiles */}
      <ApplicationGrid />

      {/* 3. Applications in Context & From Application to Material */}
      <ApplicationsContext />

      {/* 4. Custom Requirement Closing CTA */}
      <ApplicationCTA />
    </main>
  );
}
