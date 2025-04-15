"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is this really free?",
    answer:
      "Yes! ShipFree is open-source and community-driven. Use it for unlimited projects, no strings attached.",
  },
  {
    question: "What do I need to use ShipFree?",
    answer:
      "All you need is a GitHub account to clone the repo and a deployment platform like Vercel or Railway.",
  },
  {
    question: "Can I customize it?",
    answer:
      "Built with Next.js, Tailwind, and modern tools, ShipFree is fully extensible.",
  },
  {
    question: "How does it compare to ShipFast?",
    answer:
      "ShipFast is paid; ShipFree gives you similar core features—completely free! Perfect for bootstrappers who want to launch now.",
  },
  {
    question: "Does ShipFree include a database?",
    answer: "Yes! It supports MongoDB and Supabase out of the box.",
  },
  {
    question: "Is there a community I can join?",
    answer:
      "Yes! We have an active Discord community where founders help each other grow.",
  },
  {
    question: "What if I need help?",
    answer:
      "We have detailed documentation, video tutorials, and community support to guide you.",
  },
  {
    question: "Can I contribute to ShipFree?",
    answer:
      "ShipFree is open-source—we welcome contributions from developers worldwide.",
  },

  {
    question: "Can I use ShipFree for commercial projects?",
    answer:
      "Yes! You can launch and scale real businesses with ShipFree. No restrictions.",
  },
  {
    question: "Is there a roadmap for future features?",
    answer:
      "Yes! We're constantly improving ShipFree. Check our GitHub roadmap to see what's coming next.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="min-h-screen bg-[#0F0F0F] px-4 py-12 md:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-center text-4xl font-medium text-white">
          Frequently Asked Questions
        </h2>
        <p className="mb-12 text-center text-base text-zinc-500">
          Have another question? Contact us on{" "}
          <a
            href="https://x.com/idee8agency"
            target="_blank"
            className="text-zinc-200 hover:text-white underline"
          >
            Twitter
          </a>{" "}
          or by{" "}
          <a
            href="mailto:hi@idee8.agency"
            target="_blank"
            className="text-zinc-200 hover:text-white underline"
          >
            email
          </a>
          .
        </p>

        <div className="space-y-[2px]">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex w-full items-center justify-between bg-zinc-900/50 px-6 py-4 text-left transition-colors hover:bg-zinc-900"
              >
                <span className="text-[16px] font-medium text-white">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700">
                  <PlusIcon
                    className={`h-3 w-3 text-white transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""}`}
                  />
                </span>
              </button>
              <div
                className={`grid transition-all duration-200 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-zinc-900/30 px-6 py-4 text-base text-zinc-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlusIcon({ className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
