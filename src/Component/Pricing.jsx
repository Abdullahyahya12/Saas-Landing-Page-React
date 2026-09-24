import { useState } from "react";
import PricingCard from "./PricingCard";

function Pricing({ darkMode }) {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: 9,
      yearly: 7,
      description:
        "Perfect for individuals and small projects getting started.",
      features: [
        "5 Projects",
        "5 GB Storage",
        "Basic Analytics",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      monthly: 29,
      yearly: 23,
      description:
        "Everything growing teams need to work efficiently.",
      popular: true,
      features: [
        "Unlimited Projects",
        "50 GB Storage",
        "Advanced Analytics",
        "AI Automation",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      monthly: 79,
      yearly: 63,
      description:
        "Advanced tools for large organizations and teams.",
      features: [
        "Unlimited Projects",
        "500 GB Storage",
        "Advanced Security",
        "Custom Integrations",
        "Dedicated Support",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-500/5" : "bg-indigo-100/50"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Simple Pricing
          </span>

          <h2
            className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Plans that scale with you
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Start small and upgrade when your team is ready.
            No complicated contracts.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mt-10 flex justify-center">
          <div
            className={`relative flex items-center rounded-full border p-1 ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-slate-100"
            }`}
          >
            <button
              onClick={() => setYearly(false)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                !yearly
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : darkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setYearly(true)}
              className={`relative z-10 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
                yearly
                  ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : darkMode
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              Yearly

              <span
                className={`ml-2 rounded-full px-2 py-0.5 text-[10px] ${
                  yearly
                    ? "bg-white/20 text-white"
                    : "bg-emerald-500/10 text-emerald-500"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <PricingCard
                name={plan.name}
                price={yearly ? plan.yearly : plan.monthly}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p
          className={`mt-10 text-center text-sm ${
            darkMode ? "text-slate-500" : "text-slate-500"
          }`}
        >
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
}

export default Pricing;