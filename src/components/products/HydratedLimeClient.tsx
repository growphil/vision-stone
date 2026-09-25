"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface HydratedLimeClientProps {
  faqs: FAQItem[];
}

export default function HydratedLimeClient({ faqs }: HydratedLimeClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-[#E8E8E2] rounded-[8px] bg-[#FAF9F6] overflow-hidden transition-colors"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-xs sm:text-sm uppercase tracking-wide text-[#111111] hover:bg-white/80 transition-colors"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-white border border-[#E8E8E2] flex items-center justify-center text-[#E52323] text-xs font-mono font-bold shrink-0">
                  {index + 1}
                </span>
                <span className="pr-4">{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[#888888] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#E52323]" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#555555] leading-relaxed border-t border-[#E8E8E2]/60 bg-white">
                <div className="pl-9">{faq.answer}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
