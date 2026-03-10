"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border border-gray-200 rounded-xl overflow-hidden"
        >
          <button
            className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold hover:bg-blue-50 transition-colors"
            style={{ color: "#0a1628" }}
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <span>{faq.q}</span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 ml-4 transition-transform duration-200 ${
                open === idx ? "rotate-180 text-blue-600" : "text-gray-400"
              }`}
            />
          </button>
          {open === idx && (
            <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
