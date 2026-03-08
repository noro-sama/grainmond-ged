import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqData, FAQItem } from "@/constants/data/faq";

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-3">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <h3 className="text-left font-semibold text-gray-900">
                {item.question}
              </h3>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-gray-600 transition-transform duration-300 ${
                  openId === item.id ? "rotate-180" : ""
                }`}
              />
            </button>

            {openId === item.id && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <p>
          Have a question that's not listed here? Don't hesitate to reach out —
          we're happy to help!
        </p>
      </div>
    </div>
  );
}
