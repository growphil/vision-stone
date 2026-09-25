"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is dolomite powder?",
    answer:
      "Dolomite powder is a finely processed mineral material produced from dolomite and supplied in different particle sizes according to application requirements.",
  },
  {
    question: "What is dolomite powder used for?",
    answer:
      "It is supplied for agriculture, fertilizer and agri-inputs, rubber and polymers, paints, tiles and ceramics, construction, pipeline applications and general manufacturing.",
  },
  {
    question: "What mesh sizes of dolomite powder are available?",
    answer:
      "Vision Stones offers standard 100 Mesh, 200 Mesh and 240 Mesh, with customized particle sizes from 0 to 240 Mesh, subject to production capability.",
  },
  {
    question: "Do you supply dolomite powder in bulk?",
    answer:
      "Yes. Vision Stones works with smaller, bulk and industrial requirements.",
  },
  {
    question: "What determines the price of dolomite powder?",
    answer:
      "Pricing depends on factors such as particle size, product specification, quantity, packaging and delivery requirements.",
  },
  {
    question: "Can I request a specific particle size?",
    answer:
      "Yes. Customized particle sizes can be discussed according to the application and production capability.",
  },
  {
    question: "Can I request a sample before placing a bulk order?",
    answer:
      "Where applicable, product samples and technical information can be discussed before proceeding with larger requirements.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Share your required product, quantity, mesh/particle size, application, packaging requirement and delivery location with the Vision Stones team.",
  },
];

export default function DolomitePowderClient() {
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
