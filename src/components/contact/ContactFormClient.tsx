"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { 
  CheckCircle2, 
  Send, 
  AlertCircle, 
  Package, 
  FileText, 
  Sliders, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { PRODUCTS } from "@/data/products";

type EnquiryMode = "bulk" | "sample" | "custom";

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || "";
  const initialSector = searchParams.get("sector") || "";

  const [mode, setMode] = useState<EnquiryMode>("bulk");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: initialProduct,
    volume: "10 - 50 Metric Tons (Truckload)",
    meshSize: "Standard Mesh (200 - 300 Mesh)",
    packaging: "50 kg HDPE Woven Bags",
    destination: "",
    message: initialSector ? `Enquiry regarding industrial mineral supply for ${initialSector} applications.` : "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  // Adjust defaults when mode changes
  const handleModeChange = (newMode: EnquiryMode) => {
    setMode(newMode);
    if (newMode === "sample") {
      setFormData((prev) => ({
        ...prev,
        volume: "Sample Pack (5 - 25 kg)",
      }));
    } else if (newMode === "bulk" && formData.volume === "Sample Pack (5 - 25 kg)") {
      setFormData((prev) => ({
        ...prev,
        volume: "10 - 50 Metric Tons (Truckload)",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please complete all required fields (Name, Email, and Phone number).");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-none border border-[#E5E5E5] p-8 sm:p-12 shadow-sm text-center space-y-6 font-display">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-emerald-600" />
        </div>
        
        <div className="space-y-3 max-w-lg mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider rounded-full font-display">
            <span>Enquiry Successfully Logged</span>
          </div>
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#111111]">
            Commercial Request Received
          </h3>
          <p className="text-sm text-[#555555] leading-relaxed font-display">
            Thank you, <strong className="text-[#111111]">{formData.name}</strong>. Our mineral sales and metallurgical team has received your enquiry for{" "}
            <strong className="text-[#111111]">{formData.product || "industrial minerals"}</strong> ({formData.volume}).
          </p>
          <p className="text-xs text-[#777777] leading-relaxed font-display">
            A formal quotation, technical datasheet (COA), and dispatch schedule will be transmitted to <strong className="text-[#111111]">{formData.email}</strong> within 4 business hours.
          </p>
        </div>

        <div className="pt-4 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                product: "",
                volume: "10 - 50 Metric Tons (Truckload)",
                meshSize: "Standard Mesh (200 - 300 Mesh)",
                packaging: "50 kg HDPE Woven Bags",
                destination: "",
                message: "",
              });
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#111111] hover:bg-[#E52323] text-white text-xs font-bold font-display uppercase tracking-wider transition-colors duration-200"
          >
            Submit Another Requirement
          </button>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(
              `Hello Vision Stone, I just submitted an inquiry for ${formData.product || "minerals"} on your website.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#F5F5F2] hover:bg-[#EAEAE6] text-[#111111] text-xs font-bold font-display uppercase tracking-wider border border-[#E5E5E5] transition-colors duration-200"
          >
            Instant WhatsApp Confirmation
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E5E5] shadow-sm font-display">
      
      {/* Interactive Mode Switcher Header */}
      <div className="border-b border-[#E5E5E5] bg-[#F5F5F2] p-4 sm:p-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#E52323] mb-2.5 flex items-center gap-2 font-display">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E52323]" />
          <span>Select Enquiry Objective</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => handleModeChange("bulk")}
            className={`flex items-center gap-2.5 p-3 text-left transition-all border ${
              mode === "bulk"
                ? "bg-white border-[#111111] text-[#111111] shadow-xs"
                : "bg-white/60 hover:bg-white border-transparent text-[#666666]"
            }`}
          >
            <Package className={`w-4 h-4 shrink-0 ${mode === "bulk" ? "text-[#E52323]" : "text-[#888888]"}`} />
            <div>
              <div className="text-xs font-bold font-display leading-none">Bulk Supply (RFQ)</div>
              <div className="text-[11px] text-[#777777] mt-1 font-display">Truckload & Contract</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleModeChange("sample")}
            className={`flex items-center gap-2.5 p-3 text-left transition-all border ${
              mode === "sample"
                ? "bg-white border-[#111111] text-[#111111] shadow-xs"
                : "bg-white/60 hover:bg-white border-transparent text-[#666666]"
            }`}
          >
            <FileText className={`w-4 h-4 shrink-0 ${mode === "sample" ? "text-[#E52323]" : "text-[#888888]"}`} />
            <div>
              <div className="text-xs font-bold font-display leading-none">Lab Trial Sample</div>
              <div className="text-[11px] text-[#777777] mt-1 font-display">5kg – 25kg Certified Pack</div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleModeChange("custom")}
            className={`flex items-center gap-2.5 p-3 text-left transition-all border ${
              mode === "custom"
                ? "bg-white border-[#111111] text-[#111111] shadow-xs"
                : "bg-white/60 hover:bg-white border-transparent text-[#666666]"
            }`}
          >
            <Sliders className={`w-4 h-4 shrink-0 ${mode === "custom" ? "text-[#E52323]" : "text-[#888888]"}`} />
            <div>
              <div className="text-xs font-bold font-display leading-none">Custom Mesh Spec</div>
              <div className="text-[11px] text-[#777777] mt-1 font-display">Tailored Micronizing</div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Form Body */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-none flex items-center gap-3 text-xs text-red-700 font-display font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-[#E52323]" />
            <span>{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Full Name <span className="text-[#E52323]">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Rajesh Kumar"
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] placeholder-[#999999] focus:outline-none transition-colors font-display"
            />
          </div>

          {/* Company / Plant Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Company / Plant Name
            </label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Metallurgy & Polymers Ltd."
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] placeholder-[#999999] focus:outline-none transition-colors font-display"
            />
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Corporate Email <span className="text-[#E52323]">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. procurement@apexmetallurgy.com"
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] placeholder-[#999999] focus:outline-none transition-colors font-display"
            />
          </div>

          {/* Phone / WhatsApp */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Phone / WhatsApp <span className="text-[#E52323]">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] placeholder-[#999999] focus:outline-none transition-colors font-display"
            />
          </div>

          {/* Product Selection */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Target Mineral Product
            </label>
            <select
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none transition-colors cursor-pointer font-display"
            >
              <option value="">-- Choose Product from Catalog --</option>
              <optgroup label="ORES & MINERALS">
                <option value="Dolomite Powder">Dolomite Powder (VS Prime Mineral)</option>
                <option value="Dolomite Lump">Dolomite Lump (Natural Raw Lump)</option>
                <option value="Calcite Powder">Calcite Powder (High Whiteness CaCO₃)</option>
                <option value="Calcite Stone">Calcite Stone / Natural Lumps</option>
              </optgroup>
              <optgroup label="LIME & LIMESTONE">
                <option value="Limestone Lump">Limestone Lump (Metallurgical Grade)</option>
                <option value="Hydrated Lime Powder">Hydrated Lime Powder (Ca(OH)₂)</option>
              </optgroup>
              <optgroup label="CALCIUM CARBONATE">
                <option value="Calcium Carbonate Powder">Calcium Carbonate Powder (GCC Precision)</option>
              </optgroup>
              <optgroup label="TRADITIONAL & DECORATIVE">
                <option value="Kola Podi / Kolam Powder">Kola Podi / Kolam Powder (Fine Mineral Whiteness)</option>
              </optgroup>
            </select>
          </div>

          {/* Volume / Contract Tier */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Volume / Order Requirement
            </label>
            <select
              value={formData.volume}
              onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none transition-colors cursor-pointer font-display"
            >
              <option value="Sample Pack (5 - 25 kg)">Sample Pack (5 – 25 kg for Lab / Pilot Trial)</option>
              <option value="1 - 10 Metric Tons">1 – 10 Metric Tons (Small Industrial Batch)</option>
              <option value="10 - 50 Metric Tons (Truckload)">10 – 50 Metric Tons (Full Truckload / FTL)</option>
              <option value="100 - 500 MT Monthly Supply">100 – 500 MT Recurring Monthly Contract</option>
              <option value="500+ MT Annual Agreement">500+ MT Annual Supply Agreement</option>
              <option value="Export Container (FOB / CIF)">Export Container Stuffing (FOB / CIF)</option>
            </select>
          </div>

          {/* Particle Size / Mesh */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Particle Mesh / Top-Cut Sizing
            </label>
            <select
              value={formData.meshSize}
              onChange={(e) => setFormData({ ...formData, meshSize: e.target.value })}
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none transition-colors cursor-pointer font-display"
            >
              <option value="Standard Mesh (200 - 300 Mesh)">Standard Mesh (200 – 300 Mesh)</option>
              <option value="Fine Micronized (400 - 500 Mesh)">Fine Micronized (400 – 500 Mesh)</option>
              <option value="Ultra-Fine Micro (700 - 1250 Mesh)">Ultra-Fine Micro (700 – 1250 Mesh)</option>
              <option value="Nano / Sub-Micron (1500+ Mesh)">Sub-Micron (1500+ Mesh Air-Classified)</option>
              <option value="Lump / Uncrushed Raw (25mm - 100mm)">Raw Lump / Coarse Grains (25mm – 100mm)</option>
              <option value="Custom Particle Size Curve">Custom Particle Size Curve (Specify Below)</option>
            </select>
          </div>

          {/* Packaging Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
              Packaging Format
            </label>
            <select
              value={formData.packaging}
              onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
              className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] focus:outline-none transition-colors cursor-pointer font-display"
            >
              <option value="50 kg HDPE Woven Bags">50 kg HDPE Woven Moisture-Proof Bags</option>
              <option value="25 kg Multi-Wall Paper / PP Bags">25 kg Multi-Wall Paper / PP Bags</option>
              <option value="1000 kg (1 MT) Jumbo Sling Bags">1,000 kg (1 MT) Jumbo Sling Bulk Bags</option>
              <option value="1250 kg Jumbo Bags on Pallets">1,250 kg Jumbo Bags Palletized & Shrink-Wrapped</option>
              <option value="Bulk Dumper / Loose Tanker">Bulk Dumper / Loose Pneumatic Tanker</option>
            </select>
          </div>
        </div>

        {/* Destination / Plant Delivery Location */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
            Delivery Destination (City / State / Port)
          </label>
          <input
            type="text"
            value={formData.destination}
            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
            placeholder="e.g. Coimbatore, Tamil Nadu / Jamshedpur, Jharkhand / Tuticorin Port (FOB)"
            className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] placeholder-[#999999] focus:outline-none transition-colors font-display"
          />
        </div>

        {/* Additional Specification / Notes */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#333333] block font-display">
            Technical Specifications & Custom Instructions
          </label>
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Detail any target chemical limits (e.g., minimum MgO 21%, Silica < 0.8%), whiteness percentage requirements, pilot trial timelines, or special palletizing requirements."
            className="w-full bg-[#FAFAFA] hover:bg-white focus:bg-white border border-[#E5E5E5] focus:border-[#111111] px-3.5 py-2.5 text-xs text-[#111111] placeholder-[#999999] focus:outline-none transition-colors font-display resize-none"
          />
        </div>

        {/* Submit Button & Guarantees */}
        <div className="space-y-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#111111] hover:bg-[#E52323] text-white text-xs font-bold font-display uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-200 group cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <span className="font-display">Transmitting Commercial Request...</span>
            ) : (
              <>
                <span className="font-display">Transmit Commercial RFQ & Request COA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <div className="flex flex-wrap items-center justify-between text-xs text-[#777777] pt-1 font-display">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Direct sales desk response within 4 hours
            </span>
            <span className="font-medium">Commercial privacy & NDA protected</span>
          </div>
        </div>

      </form>

    </div>
  );
}
