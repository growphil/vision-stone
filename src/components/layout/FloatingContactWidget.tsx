"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MessageSquare, X, Send, ArrowRight, RotateCcw, AlertCircle, CheckCircle2 } from "lucide-react";
import { PRODUCTS, ProductItem } from "@/data/products";

// Flow Types
type FlowType = "product" | "quote" | "tech" | "team" | null;
type StepType =
  | "initial"
  | "select_product"
  | "select_quantity"
  | "select_tech_category"
  | "input_tech_desc"
  | "collect_location"
  | "collect_contact"
  | "final_review"
  | "submitting"
  | "success"
  | "error";

interface EnquiryState {
  flow: FlowType;
  product: string;
  quantity: string;
  techCategory: string;
  techDesc: string;
  location: string;
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement: string;
}

const QUANTITY_OPTIONS = [
  "Less than 1 ton",
  "1–5 tons",
  "5–25 tons",
  "25–100 tons",
  "100+ tons",
  "Not sure yet",
];

const TECH_OPTIONS = [
  "Product specification",
  "Particle size / mesh",
  "Application suitability",
  "Packaging",
  "Custom requirement",
  "Other",
];

const INITIAL_ENQUIRY: EnquiryState = {
  flow: null,
  product: "",
  quantity: "",
  techCategory: "",
  techDesc: "",
  location: "",
  name: "",
  company: "",
  phone: "",
  email: "",
  requirement: "",
};

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<StepType>("initial");
  const [enquiry, setEnquiry] = useState<EnquiryState>(INITIAL_ENQUIRY);
  const [errorMessage, setErrorMessage] = useState("");
  const [formErrors, setFormErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock background scroll when chatbot modal is open
  useEffect(() => {
    if (isOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalDocOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleWheelOrTouch = (e: Event) => {
        const modal = modalRef.current;
        if (modal && modal.contains(e.target as Node)) {
          e.stopPropagation();
        }
      };

      window.addEventListener("wheel", handleWheelOrTouch, { passive: true });
      window.addEventListener("touchmove", handleWheelOrTouch, { passive: true });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalDocOverflow;
        window.removeEventListener("wheel", handleWheelOrTouch);
        window.removeEventListener("touchmove", handleWheelOrTouch);
      };
    }
  }, [isOpen]);

  // Auto-scroll chat to bottom on step change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [step, enquiry]);

  // WhatsApp Pre-filled URL
  const whatsappMsg = encodeURIComponent(
    "Hello Vision Stones, I would like to know more about your mineral products and would like to discuss my requirement."
  );
  const whatsappUrl = `https://wa.me/918300685057?text=${whatsappMsg}`;

  // Start Flow
  const handleSelectFlow = (flow: FlowType) => {
    setEnquiry((prev) => ({ ...prev, flow }));
    if (flow === "product") {
      setStep("select_product");
    } else if (flow === "quote") {
      setStep("select_product");
    } else if (flow === "tech") {
      setStep("select_tech_category");
    } else if (flow === "team") {
      setStep("collect_contact");
    }
  };

  // Select Product
  const handleSelectProduct = (productName: string) => {
    setEnquiry((prev) => ({ ...prev, product: productName }));
    setStep("select_quantity");
  };

  // Select Quantity
  const handleSelectQuantity = (qty: string) => {
    setEnquiry((prev) => ({ ...prev, quantity: qty }));
    if (enquiry.flow === "quote") {
      setStep("collect_location");
    } else {
      setStep("collect_location");
    }
  };

  // Select Tech Category
  const handleSelectTechCategory = (cat: string) => {
    setEnquiry((prev) => ({ ...prev, techCategory: cat }));
    setStep("input_tech_desc");
  };

  // Submit Contact Fields -> Final Review
  const handleProceedToReview = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: { name?: string; phone?: string; email?: string } = {};

    if (!enquiry.name.trim()) errors.name = "Name is required.";
    if (!enquiry.phone.trim()) errors.phone = "Phone number is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!enquiry.email.trim() || !emailRegex.test(enquiry.email.trim())) {
      errors.email = "Valid email address is required.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Consolidate requirement message
    let reqMsg = enquiry.requirement;
    if (enquiry.flow === "tech") {
      reqMsg = `[Category: ${enquiry.techCategory}] ${enquiry.techDesc} ${enquiry.requirement}`.trim();
    } else if (enquiry.flow === "product") {
      reqMsg = `Product Interest: ${enquiry.product} (${enquiry.quantity}). ${enquiry.requirement}`.trim();
    } else if (enquiry.flow === "quote") {
      reqMsg = `Quotation for ${enquiry.product} (${enquiry.quantity}). Delivery to: ${enquiry.location}. ${enquiry.requirement}`.trim();
    }

    setEnquiry((prev) => ({ ...prev, requirement: reqMsg }));
    setStep("final_review");
  };

  // Final Submit to API Route Handler
  const handleSubmitEnquiry = async () => {
    setStep("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: enquiry.name,
          company: enquiry.company,
          phone: enquiry.phone,
          email: enquiry.email,
          product: enquiry.product || (enquiry.flow === "tech" ? enquiry.techCategory : "General Enquiry"),
          quantity: enquiry.quantity || "Not specified",
          location: enquiry.location || "Not specified",
          requirement: enquiry.requirement || "Business Enquiry from Chatbot",
          hp: "",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStep("success");
      } else {
        setErrorMessage(
          data.error || "We couldn't submit your enquiry right now. Please try again or contact us directly on WhatsApp."
        );
        setStep("error");
      }
    } catch (err) {
      setErrorMessage("We couldn't submit your enquiry right now. Please try again or contact us directly on WhatsApp.");
      setStep("error");
    }
  };

  // Reset Chatbot
  const handleReset = () => {
    setEnquiry(INITIAL_ENQUIRY);
    setFormErrors({});
    setErrorMessage("");
    setStep("initial");
  };

  // Custom WhatsApp URL with enquiry fallback
  const getFallbackWhatsappUrl = () => {
    const text = encodeURIComponent(
      `Hello Vision Stones,\n\nI tried sending an enquiry via website chatbot:\n- Name: ${enquiry.name}\n- Product: ${enquiry.product || "General"}\n- Phone: ${enquiry.phone}\n- Requirement: ${enquiry.requirement}`
    );
    return `https://wa.me/918300685057?text=${text}`;
  };

  return (
    <>
      {/* ========================================================
          FLOATING ACTION BUTTONS CONTAINER
          Desktop: bottom: 24px, right: 24px
          Mobile: bottom: 16px, right: 16px
          ======================================================== */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 font-display">
        
        {/* WHATSAPP FLOATING BUTTON */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Vision Stones on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8">
            <Image
              src="/whatsapp-icon.png"
              alt="WhatsApp"
              fill
              className="object-contain"
            />
          </div>
          {/* Tooltip on Desktop */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-[4px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:inline-block">
            Chat on WhatsApp
          </span>
        </a>

        {/* CHATBOT ROBOT FLOATING BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Vision Stones Assistant"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#111111] border-2 border-white/20 hover:border-[#E52323] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10">
            <Image
              src="/chatbot-icon.png"
              alt="Vision Stones Assistant"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Status notification dot */}
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#E52323] border-2 border-[#111111] rounded-full animate-ping" />
          )}

          {/* Tooltip on Desktop */}
          <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#111111] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-[4px] shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:inline-block">
            {isOpen ? "Close Assistant" : "Enquiry Assistant"}
          </span>
        </button>

      </div>

      {/* ========================================================
          CHATBOT MODAL PANEL
          Desktop: ~380px panel floating bottom-right
          Mobile: Bottom sheet panel (no horizontal overflow)
          ======================================================== */}
      {isOpen && (
        <div
          ref={modalRef}
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          className="fixed inset-x-3 bottom-20 sm:inset-auto sm:bottom-24 sm:right-6 w-auto sm:w-[380px] md:w-[400px] max-h-[85vh] sm:max-h-[600px] z-50 bg-[#FFFFFF] border border-[#E0E0DB] rounded-2xl shadow-2xl flex flex-col overflow-hidden font-display animate-in slide-in-from-bottom-5 duration-200"
        >
          
          {/* CHATBOT HEADER */}
          <div className="bg-[#111111] text-white px-4 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden bg-white/10 border border-white/20 shrink-0">
                <Image
                  src="/chatbot-icon.png"
                  alt="Robot Assistant"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    VISION STONES ASSISTANT
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-[10px] text-white/60 font-mono uppercase tracking-widest">
                  Tirunelveli Desk &bull; Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {step !== "initial" && step !== "success" && (
                <button
                  onClick={handleReset}
                  title="Reset Chat"
                  className="p-1.5 text-white/70 hover:text-white transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                title="Close Assistant"
                className="p-1.5 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* CHAT MESSAGES BODY */}
          <div
            ref={chatContainerRef}
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FAF9F6] text-xs text-[#111111] leading-relaxed"
          >
            {/* WELCOME / GREETING MSG */}
            <div className="flex items-start gap-2.5">
              <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
              </div>
              <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] space-y-2">
                <p className="font-medium text-[#111111]">Hello! 👋</p>
                <p className="text-[#444444]">
                  Welcome to <strong>Vision Stones</strong>.
                </p>
                <p className="text-[#555555]">
                  I can help you find the right mineral product or connect you with our team.
                </p>
              </div>
            </div>

            {/* STEP 1: INITIAL OPTIONS */}
            {step === "initial" && (
              <div className="space-y-2 pt-1 pl-9">
                <span className="text-[10px] font-mono font-bold text-[#777777] uppercase tracking-wider block">
                  Select an option:
                </span>

                <button
                  onClick={() => handleSelectFlow("product")}
                  className="w-full text-left bg-white hover:bg-[#111111] hover:text-white border border-[#E0E0DB] hover:border-[#111111] p-2.5 rounded-xl font-bold uppercase tracking-wide text-[11px] transition-colors flex items-center justify-between group shadow-xs"
                >
                  <span>1. I&apos;m looking for a product</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E52323] group-hover:text-white transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => handleSelectFlow("quote")}
                  className="w-full text-left bg-white hover:bg-[#111111] hover:text-white border border-[#E0E0DB] hover:border-[#111111] p-2.5 rounded-xl font-bold uppercase tracking-wide text-[11px] transition-colors flex items-center justify-between group shadow-xs"
                >
                  <span>2. I want a quotation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E52323] group-hover:text-white transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => handleSelectFlow("tech")}
                  className="w-full text-left bg-white hover:bg-[#111111] hover:text-white border border-[#E0E0DB] hover:border-[#111111] p-2.5 rounded-xl font-bold uppercase tracking-wide text-[11px] transition-colors flex items-center justify-between group shadow-xs"
                >
                  <span>3. I have a technical requirement</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E52323] group-hover:text-white transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => handleSelectFlow("team")}
                  className="w-full text-left bg-white hover:bg-[#111111] hover:text-white border border-[#E0E0DB] hover:border-[#111111] p-2.5 rounded-xl font-bold uppercase tracking-wide text-[11px] transition-colors flex items-center justify-between group shadow-xs"
                >
                  <span>4. I want to speak with the team</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E52323] group-hover:text-white transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}

            {/* STEP: SELECT PRODUCT */}
            {step === "select_product" && (
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                    <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
                  </div>
                  <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] font-semibold text-[#111111]">
                    Which product are you interested in?
                  </div>
                </div>

                <div className="pl-9 space-y-1.5 max-h-52 overflow-y-auto pr-1">
                  {PRODUCTS.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelectProduct(p.name)}
                      className="w-full text-left bg-white hover:bg-[#E52323] hover:text-white border border-[#E0E0DB] p-2 rounded-lg text-[11px] font-medium transition-colors block truncate shadow-xs"
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: SELECT QUANTITY */}
            {step === "select_quantity" && (
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                    <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
                  </div>
                  <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] space-y-1">
                    <p className="font-semibold text-[#111111]">Selected: {enquiry.product}</p>
                    <p className="text-[#555555]">What quantity are you looking for?</p>
                  </div>
                </div>

                <div className="pl-9 grid grid-cols-2 gap-1.5">
                  {QUANTITY_OPTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSelectQuantity(q)}
                      className="bg-white hover:bg-[#111111] hover:text-white border border-[#E0E0DB] p-2 rounded-lg text-[10px] font-bold uppercase tracking-wider text-center transition-colors shadow-xs"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: SELECT TECHNICAL CATEGORY */}
            {step === "select_tech_category" && (
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                    <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
                  </div>
                  <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] font-semibold text-[#111111]">
                    What are you looking for?
                  </div>
                </div>

                <div className="pl-9 grid grid-cols-1 gap-1.5">
                  {TECH_OPTIONS.map((t) => (
                    <button
                      key={t}
                      onClick={() => handleSelectTechCategory(t)}
                      className="w-full text-left bg-white hover:bg-[#111111] hover:text-white border border-[#E0E0DB] p-2.5 rounded-xl font-bold uppercase tracking-wide text-[11px] transition-colors shadow-xs"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP: INPUT TECHNICAL DESC */}
            {step === "input_tech_desc" && (
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                    <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
                  </div>
                  <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] font-semibold text-[#111111]">
                    Please describe your technical requirement.
                  </div>
                </div>

                <div className="pl-9 space-y-2">
                  <textarea
                    rows={3}
                    placeholder="Provide details about your required specifications, particle size, or application..."
                    value={enquiry.techDesc}
                    onChange={(e) => setEnquiry({ ...enquiry, techDesc: e.target.value })}
                    className="w-full bg-white border border-[#E0E0DB] p-2.5 rounded-xl text-xs focus:outline-none focus:border-[#E52323]"
                  />
                  <button
                    onClick={() => setStep("collect_contact")}
                    className="w-full bg-[#111111] text-white py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-[#E52323] transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            )}

            {/* STEP: COLLECT LOCATION */}
            {step === "collect_location" && (
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                    <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
                  </div>
                  <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] font-semibold text-[#111111]">
                    Where is the delivery location?
                  </div>
                </div>

                <div className="pl-9 space-y-2">
                  <input
                    type="text"
                    placeholder="e.g. Coimbatore, Tamil Nadu"
                    value={enquiry.location}
                    onChange={(e) => setEnquiry({ ...enquiry, location: e.target.value })}
                    className="w-full bg-white border border-[#E0E0DB] p-2.5 rounded-xl text-xs focus:outline-none focus:border-[#E52323]"
                  />
                  <button
                    onClick={() => setStep("collect_contact")}
                    className="w-full bg-[#111111] text-white py-2 rounded-xl text-[11px] font-bold uppercase tracking-wider hover:bg-[#E52323] transition-colors"
                  >
                    Continue to Details →
                  </button>
                </div>
              </div>
            )}

            {/* STEP: COLLECT CONTACT DETAILS */}
            {step === "collect_contact" && (
              <form onSubmit={handleProceedToReview} className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                    <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
                  </div>
                  <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] font-semibold text-[#111111]">
                    Please share your contact details.
                  </div>
                </div>

                <div className="pl-9 space-y-2">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#444444] block mb-0.5">
                      Name <span className="text-[#E52323]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={enquiry.name}
                      onChange={(e) => setEnquiry({ ...enquiry, name: e.target.value })}
                      className="w-full bg-white border border-[#E0E0DB] p-2 rounded-lg text-xs focus:outline-none focus:border-[#E52323]"
                    />
                    {formErrors.name && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.name}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#444444] block mb-0.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={enquiry.company}
                      onChange={(e) => setEnquiry({ ...enquiry, company: e.target.value })}
                      className="w-full bg-white border border-[#E0E0DB] p-2 rounded-lg text-xs focus:outline-none focus:border-[#E52323]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#444444] block mb-0.5">
                      Phone Number <span className="text-[#E52323]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Phone Number"
                      value={enquiry.phone}
                      onChange={(e) => setEnquiry({ ...enquiry, phone: e.target.value })}
                      className="w-full bg-white border border-[#E0E0DB] p-2 rounded-lg text-xs focus:outline-none focus:border-[#E52323]"
                    />
                    {formErrors.phone && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#444444] block mb-0.5">
                      Email Address <span className="text-[#E52323]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@company.com"
                      value={enquiry.email}
                      onChange={(e) => setEnquiry({ ...enquiry, email: e.target.value })}
                      className="w-full bg-white border border-[#E0E0DB] p-2 rounded-lg text-xs focus:outline-none focus:border-[#E52323]"
                    />
                    {formErrors.email && (
                      <span className="text-[10px] text-red-600 mt-0.5 block">{formErrors.email}</span>
                    )}
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-[#444444] block mb-0.5">
                      Additional Notes / Message
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Specific requirements or timelines..."
                      value={enquiry.requirement}
                      onChange={(e) => setEnquiry({ ...enquiry, requirement: e.target.value })}
                      className="w-full bg-white border border-[#E0E0DB] p-2 rounded-lg text-xs focus:outline-none focus:border-[#E52323]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E52323] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C91A1A] transition-colors shadow-sm"
                  >
                    Review Enquiry →
                  </button>
                </div>
              </form>
            )}

            {/* STEP: FINAL REVIEW */}
            {step === "final_review" && (
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden bg-[#111111] shrink-0 mt-0.5">
                    <Image src="/chatbot-icon.png" alt="Robot" fill className="object-contain p-0.5" />
                  </div>
                  <div className="bg-white border border-[#E5E5E0] p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] font-semibold text-[#111111]">
                    Please review your enquiry before sending:
                  </div>
                </div>

                <div className="pl-9 space-y-3">
                  <div className="bg-white border border-[#E0E0DB] p-3 rounded-xl space-y-2 text-[11px] shadow-xs">
                    <div className="flex justify-between border-b border-[#F0F0EB] pb-1">
                      <span className="text-[#777777] font-medium">Name:</span>
                      <span className="font-bold text-[#111111]">{enquiry.name}</span>
                    </div>

                    {enquiry.company && (
                      <div className="flex justify-between border-b border-[#F0F0EB] pb-1">
                        <span className="text-[#777777] font-medium">Company:</span>
                        <span className="font-bold text-[#111111]">{enquiry.company}</span>
                      </div>
                    )}

                    <div className="flex justify-between border-b border-[#F0F0EB] pb-1">
                      <span className="text-[#777777] font-medium">Phone:</span>
                      <span className="font-bold text-[#111111]">{enquiry.phone}</span>
                    </div>

                    <div className="flex justify-between border-b border-[#F0F0EB] pb-1">
                      <span className="text-[#777777] font-medium">Email:</span>
                      <span className="font-bold text-[#111111]">{enquiry.email}</span>
                    </div>

                    {enquiry.product && (
                      <div className="flex justify-between border-b border-[#F0F0EB] pb-1">
                        <span className="text-[#777777] font-medium">Product:</span>
                        <span className="font-bold text-[#E52323]">{enquiry.product}</span>
                      </div>
                    )}

                    {enquiry.quantity && (
                      <div className="flex justify-between border-b border-[#F0F0EB] pb-1">
                        <span className="text-[#777777] font-medium">Quantity:</span>
                        <span className="font-bold text-[#111111]">{enquiry.quantity}</span>
                      </div>
                    )}

                    {enquiry.location && (
                      <div className="flex justify-between border-b border-[#F0F0EB] pb-1">
                        <span className="text-[#777777] font-medium">Location:</span>
                        <span className="font-bold text-[#111111]">{enquiry.location}</span>
                      </div>
                    )}

                    {enquiry.requirement && (
                      <div className="pt-1">
                        <span className="text-[#777777] font-medium block mb-0.5">Requirement:</span>
                        <p className="text-[#111111] bg-[#FAF9F6] p-2 rounded text-[10px]">
                          {enquiry.requirement}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setStep("collect_contact")}
                      className="bg-white text-[#111111] border border-[#D0D0CA] hover:border-[#111111] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      EDIT
                    </button>

                    <button
                      onClick={handleSubmitEnquiry}
                      className="bg-[#E52323] text-white hover:bg-[#C91A1A] py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                    >
                      SUBMIT ENQUIRY
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STEP: SUBMITTING */}
            {step === "submitting" && (
              <div className="p-8 text-center space-y-3">
                <div className="w-8 h-8 border-3 border-[#E52323] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                  SUBMITTING ENQUIRY...
                </p>
                <p className="text-[10px] text-[#777777]">Connecting to Tirunelveli Supply Desk</p>
              </div>
            )}

            {/* STEP: SUCCESS */}
            {step === "success" && (
              <div className="p-6 text-center space-y-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-black uppercase text-[#111111]">ENQUIRY SUBMITTED</h4>
                  <p className="text-xs text-[#555555]">
                    Thank you, <strong>{enquiry.name}</strong>. Your enquiry has been sent directly to our supply desk.
                  </p>
                  <p className="text-[11px] text-[#777777] pt-1">
                    Our team will contact you at <strong>{enquiry.phone}</strong> or <strong>{enquiry.email}</strong>.
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="bg-[#111111] text-white px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#E52323] transition-colors"
                >
                  Start New Enquiry
                </button>
              </div>
            )}

            {/* STEP: ERROR / FALLBACK */}
            {step === "error" && (
              <div className="p-4 bg-red-50 rounded-xl border border-red-200 space-y-3 text-center">
                <div className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <p className="text-xs text-red-800 font-medium">
                  {errorMessage || "We couldn't submit your enquiry right now. Please try again or contact us directly on WhatsApp."}
                </p>

                <div className="space-y-2 pt-1">
                  <a
                    href={getFallbackWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <span>Contact Directly on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setStep("final_review")}
                    className="text-[11px] text-[#555555] underline font-bold uppercase"
                  >
                    Try Submitting Again
                  </button>
                </div>
              </div>
            )}

          </div>

          {/* CHATBOT FOOTER */}
          <div className="bg-white border-t border-[#E0E0DB] p-2.5 text-center text-[10px] text-[#777777] font-mono uppercase tracking-widest shrink-0">
            VISION STONES &bull; TIRUNELVELI, TAMIL NADU
          </div>

        </div>
      )}
    </>
  );
}
