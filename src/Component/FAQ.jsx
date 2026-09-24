import { useState } from "react";

function FAQ({ darkMode }) {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "What is SaaSFlow?",
      answer:
        "SaaSFlow is a modern platform that helps teams manage projects, automate workflows and improve productivity from one powerful workspace.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes. SaaSFlow includes a 14-day free trial so you can explore the platform before choosing a plan. No credit card is required.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes. You can cancel your subscription at any time. There are no long-term contracts or complicated cancellation processes.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Absolutely. You can upgrade or change your plan whenever your team grows or your business requirements change.",
    },
    {
      question: "Is my data secure?",
      answer:
        "SaaSFlow is designed with modern security and data protection practices to help keep your business information protected.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-500/5" : "bg-indigo-100/60"
        }`}
      />

      <div className="relative mx-auto max-w-4xl px-6">

        {/* Heading */}
        <div className="text-center animate-fade-up">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            FAQ
          </span>

          <h2
            className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Frequently asked questions
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-lg leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Everything you need to know about SaaSFlow.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-14 space-y-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`group overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? darkMode
                      ? "border-indigo-500/40 bg-indigo-500/ [0.06] shadow-xl shadow-indigo-500/5"
                      : "border-indigo-300 bg-indigo-50/50 shadow-lg shadow-indigo-100"
                    : darkMode
                    ? "border-white/10 bg-white/ [0.03] hover:border-indigo-400/30 hover:bg-white/ [0.05]"
                    : "border-slate-200 bg-slate-50 hover:border-indigo-200 hover:bg-white"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 ${
                        isOpen
                          ? "bg-indigo-500 text-white"
                          : darkMode
                          ? "bg-white/5 text-slate-500 group-hover:bg-indigo-500/10 group-hover:text-indigo-400"
                          : "bg-slate-200 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-500"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`font-semibold transition-colors duration-300 ${
                        isOpen
                          ? "text-indigo-500"
                          : darkMode
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-indigo-500 bg-indigo-500 text-white"
                        : darkMode
                        ? "border-white/10 text-slate-400 group-hover:border-indigo-400/30 group-hover:text-indigo-400"
                        : "border-slate-200 text-slate-500 group-hover:border-indigo-200 group-hover:text-indigo-500"
                    }`}
                  >
                    +
                  </span>
                </button>

                {/* Answer Animation */}
                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl- [4.5rem]">
                      <p
                        className={`max-w-2xl leading-7 ${
                          darkMode
                            ? "text-slate-400"
                            : "text-slate-600"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div
                  className={`h-0.5 origin-left bg-indigo-500 transition-transform duration-500 ${
                    isOpen ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div
          className={`mt-12 rounded-2xl border p-6 text-center transition-all duration-500 ${
            darkMode
              ? "border-white/10 bg-white/ [0.03]"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <p
            className={`text-sm ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Still have questions?
          </p>

          <button className="mt-2 font-semibold text-indigo-500 transition-colors duration-300 hover:text-indigo-600">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;