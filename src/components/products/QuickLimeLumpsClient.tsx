"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What are Quick Lime Lumps?",
    answer:
      "Quick Lime Lumps are a lime-based raw material supplied in lump form. Specific product characteristics and suitability should be confirmed according to the intended application and customer requirement.",
  },
  {
    question: "Does Vision Stones supply Quick Lime Lumps?",
    answer:
      "Vision Stones includes lime within its mineral and raw-material product portfolio. Quick Lime Lumps-specific availability should be confirmed based on the customer's requirement.",
  },
  {
    question: "What industries can enquire about Quick Lime Lumps?",
    answer:
      "Vision Stones serves customers across agriculture, fertilizer & agri-inputs, rubber & polymers, paints, tiles & ceramics, construction, pipeline applications and general manufacturing. Specific suitability should be confirmed according to the intended application.",
  },
  {
    question: "Can I order Quick Lime Lumps in bulk?",
    answer:
      "Yes. Vision Stones supports small, bulk and industrial requirements depending on the product and customer requirement.",
  },
  {
    question: "Can I request a specific lump size?",
    answer:
      "Customers can share their required specification or lump size for discussion, where applicable.",
  },
  {
    question: "Can I request a sample?",
    answer:
      "Samples and technical information can be discussed where applicable, depending on the product and requirement.",
  },
  {
    question: "How is the price determined?",
    answer:
      "Pricing can depend on the required product, quantity, specifications, packaging and delivery location.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "Share your required quantity, specification, application, packaging requirement and delivery location with Vision Stones.",
  },
];

export default function QuickLimeLumpsClient() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3 font-display">
      {FAQS.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="bg-white rounded-[8px] border border-[#E8E8E2] overflow-hidden transition-colors"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-6 h-6 rounded-full bg-[#FAF9F6] border border-[#E8E8E2] flex items-center justify-center text-[11px] font-mono font-bold text-[#E52323] shrink-0">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base font-black uppercase tracking-tight text-[#111111] group-hover:text-[#E52323] transition-colors">
                  {faq.question}
                </span>
              </div>
              <div
                className={`w-7 h-7 rounded-full border border-[#E0E0DB] flex items-center justify-center text-[#777777] transition-all duration-300 shrink-0 ${
                  isOpen
                    ? "rotate-180 bg-[#E52323] border-[#E52323] text-white"
                    : "group-hover:border-[#E52323] group-hover:text-[#E52323]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#F5F5F0]">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
