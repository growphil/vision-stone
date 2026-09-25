"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is biocharcoal powder?",
    answer:
      "Biocharcoal powder is a charcoal-based powdered material. The specific product characteristics and suitability should be discussed according to the intended application.",
  },
  {
    question: "Does Vision Stones supply biocharcoal powder?",
    answer:
      "Vision Stones' product portfolio includes charcoal and charcoal-related products. Biocharcoal-specific availability can be confirmed based on your requirement.",
  },
  {
    question: "Can I request a specific biocharcoal powder requirement?",
    answer:
      "Yes. You can share your required product details, quantity, application, specification and delivery requirements for discussion.",
  },
  {
    question: "Does Vision Stones supply in bulk?",
    answer:
      "Yes. Vision Stones supports small, bulk and industrial requirements, subject to product availability and supply capability.",
  },
  {
    question: "Can I request a sample?",
    answer:
      "Samples and technical information can be discussed where applicable, depending on the product and requirement.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "Share your required quantity, specification, application, packaging requirement and delivery location with Vision Stones to discuss your quotation.",
  },
];

export default function BiocharcoalPowderClient() {
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
