"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { COMPANY_INFO } from "@/data/company";

export default function ContactFormClient() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get("product") || "";
  const initialIntent = searchParams.get("intent") || "quote";

  const [intent, setIntent] = useState<"quote" | "sample">(
    initialIntent === "sample" ? "sample" : "quote"
  );

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: initialProduct || "Dolomite Powder",
    quantity: "",
    meshSpecification: "200 Mesh",
    application: "Paints & Coatings",
    packaging: "Standard 25kg/50kg Bags",
    deliveryLocation: "",
    deliveryDate: "",
    orderType: "Recurring Requirement",
    additionalNotes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent, submitIntent: "quote" | "sample") => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError("Please provide your Name, Email, and Phone number.");
      return;
    }

    setLoading(true);
    setIntent(submitIntent);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF9F6] p-10 sm:p-14 rounded-[12px] border border-[#E8E8E4] text-center space-y-6 shadow-subtle">
        <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-3 max-w-lg mx-auto">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E52323]">
            {intent === "sample" ? "SAMPLE REQUEST SUBMITTED" : "QUOTE ENQUIRY SUBMITTED"}
          </span>
          <h3 className="text-3xl font-black uppercase text-[#111111]">
            THANK YOU, {formData.name.toUpperCase()}
          </h3>
          <p className="text-sm text-[#555555] leading-relaxed">
            Your requirement for <strong className="text-[#111111]">{formData.product}</strong> ({formData.quantity || "commercial volume"}) has been logged directly with our supply coordination desk in Tirunelveli.
          </p>
          <p className="text-xs text-[#777777]">
            We will contact you directly at <strong className="text-[#111111]">{formData.phone}</strong> or <strong className="text-[#111111]">{formData.email}</strong> to confirm specifications and supply arrangements.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold uppercase tracking-wider text-[#E52323] hover:underline"
          >
            Submit Another Requirement →
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-8 font-display">
      
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-700 rounded-[6px]">
          {error}
        </div>
      )}

      {/* FIELD GROUP 1: CONTACT DETAILS */}
      <div className="space-y-4">
        <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase block">
          01 / CONTACT INFORMATION
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Contact Name <span className="text-[#E52323]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Industrial Minerals"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Email Address <span className="text-[#E52323]">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="e.g. ramesh@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Phone Number <span className="text-[#E52323]">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>
        </div>
      </div>

      {/* FIELD GROUP 2: MINERAL REQUIREMENT SPECIFICATIONS */}
      <div className="space-y-4 pt-6 border-t border-[#E8E8E4]">
        <span className="text-xs font-mono font-bold text-[#E52323] tracking-widest uppercase block">
          02 / MINERAL SPECIFICATION & VOLUME
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* 1. Product Required */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Product Required <span className="text-[#E52323]">*</span>
            </label>
            <select
              value={formData.product}
              onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Other Mineral Raw Material">Other Mineral / Custom Sourcing</option>
            </select>
          </div>

          {/* 2. Quantity */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Quantity / Volume <span className="text-[#E52323]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. 50 MT / Monthly Recurring / 25 kg Sample"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>

          {/* 3. Mesh / Particle Size / Specification */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Mesh / Particle Size / Specification
            </label>
            <input
              type="text"
              placeholder="e.g. 100 / 200 / 240 Mesh or Lumps"
              value={formData.meshSpecification}
              onChange={(e) => setFormData({ ...formData, meshSpecification: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>

          {/* 4. Application */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Intended Application
            </label>
            <select
              value={formData.application}
              onChange={(e) => setFormData({ ...formData, application: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            >
              <option value="Paints & Coatings">Paints & Coatings</option>
              <option value="Plastics & Polymer Compounding">Plastics & Polymer Compounding</option>
              <option value="Steel & Metallurgy">Steel & Metallurgy</option>
              <option value="Agriculture & Soil Buffer">Agriculture & Soil Buffer</option>
              <option value="Ceramics & Tiles">Ceramics & Tiles</option>
              <option value="Construction & Infrastructure">Construction & Infrastructure</option>
              <option value="Pipeline Coating & Bedding">Pipeline Coating & Bedding</option>
              <option value="Effluent & Water Neutralization">Effluent & Water Neutralization</option>
              <option value="Cultural / Decorative Kolam">Cultural / Decorative Kolam</option>
              <option value="Other Application">Other Industrial Process</option>
            </select>
          </div>

          {/* 5. Packaging Requirement */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Packaging Requirement
            </label>
            <select
              value={formData.packaging}
              onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            >
              <option value="Standard 25kg Bags">Standard 25kg Bags</option>
              <option value="Standard 50kg HDPE Bags">Standard 50kg HDPE Bags</option>
              <option value="1.0 - 1.25 MT Jumbo PP Bags">1.0 - 1.25 MT Jumbo PP Bags with Liner</option>
              <option value="Loose Bulk Tipper / Truckload">Loose Bulk Tipper / Truckload</option>
              <option value="Customer Custom Packaging">Custom Specification Packaging</option>
            </select>
          </div>

          {/* 6. Delivery Location */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Delivery Location (City / State)
            </label>
            <input
              type="text"
              placeholder="e.g. Coimbatore, Tamil Nadu"
              value={formData.deliveryLocation}
              onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>

          {/* 7. Required Delivery Date */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Required Delivery Date / Timeline
            </label>
            <input
              type="text"
              placeholder="e.g. Within 10 Days / Immediate"
              value={formData.deliveryDate}
              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            />
          </div>

          {/* 8. One-time or Recurring Requirement */}
          <div>
            <label className="text-xs font-bold uppercase text-[#111111] block mb-1.5">
              Order Type
            </label>
            <select
              value={formData.orderType}
              onChange={(e) => setFormData({ ...formData, orderType: e.target.value })}
              className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
            >
              <option value="Recurring Requirement">Recurring Monthly / Weekly Requirement</option>
              <option value="One-time Order">One-time Order</option>
              <option value="Sample / Pilot Trial Batch">Sample / Pilot Trial Batch</option>
            </select>
          </div>

        </div>
      </div>

      {/* ADDITIONAL NOTES */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold uppercase text-[#111111] block">
          Additional Notes / Specific Tolerances
        </label>
        <textarea
          rows={3}
          placeholder="Specify any chemical tolerances, preferred dispatch schedules, or packaging guidelines..."
          value={formData.additionalNotes}
          onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
          className="w-full bg-[#FAF9F6] border border-[#E0E0DB] p-3 rounded-[4px] text-xs text-[#111111] focus:outline-none focus:border-[#E52323]"
        />
      </div>

      {/* DUAL ACTION BUTTONS (Section 21) */}
      <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={(e) => handleSubmit(e, "quote")}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-[#E52323] text-white hover:bg-[#C91A1A] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all shadow-sm hover:shadow text-center"
        >
          <span>{loading && intent === "quote" ? "SUBMITTING..." : "REQUEST A QUOTE"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={(e) => handleSubmit(e, "sample")}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] hover:text-[#E52323] border border-[#D0D0CA] hover:border-[#E52323] text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-[4px] transition-all text-center"
        >
          <span>{loading && intent === "sample" ? "SUBMITTING..." : "REQUEST A SAMPLE"}</span>
        </button>
      </div>

    </form>
  );
}
