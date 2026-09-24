function PricingCard({
  name,
  price,
  description,
  features,
  popular,
  darkMode,
}) {
  return (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
        popular
          ? darkMode
            ? "border-indigo-500/60 bg-indigo-500/[0.08] shadow-2xl shadow-indigo-500/10"
            : "border-indigo-400 bg-indigo-50/60 shadow-2xl shadow-indigo-100"
          : darkMode
          ? "border-white/10 bg-white/[0.03] hover:border-indigo-400/30 hover:bg-white/[0.05]"
          : "border-slate-200 bg-white shadow-sm hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100"
      }`}
    >
      {/* Popular Glow */}
      {popular && (
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />
      )}

      {/* Popular Badge */}
      {popular && (
        <div className="absolute right-5 top-5 rounded-full bg-indigo-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-indigo-500/20">
          Most Popular
        </div>
      )}

      {/* Plan */}
      <div className="relative">
        <h3
          className={`text-xl font-bold ${
            darkMode ? "text-white" : "text-slate-900"
          }`}
        >
          {name}
        </h3>

        <p
          className={`mt-3 min-h-[48px] text-sm leading-6 ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      </div>

      {/* Price */}
      <div className="relative mt-7">
        <div className="flex items-end gap-2">
          <span
            className={`text-5xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            ${price}
          </span>

          <span
            className={`mb-1 text-sm ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}
          >
            / month
          </span>
        </div>

        <p className="mt-2 text-xs text-emerald-500">
          Cancel anytime
        </p>
      </div>

      {/* Button */}
      <button
        className={`relative mt-8 w-full rounded-xl px-5 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 ${
          popular
            ? "bg-indigo-500 text-white hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/30"
            : darkMode
            ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
            : "border border-slate-200 bg-slate-100 text-slate-900 hover:bg-slate-200"
        }`}
      >
        {popular ? "Start Free Trial" : "Get Started"}
      </button>

      {/* Divider */}
      <div
        className={`my-8 border-t ${
          darkMode
            ? "border-white/10"
            : "border-slate-200"
        }`}
      />

      {/* Features */}
      <p
        className={`mb-5 text-sm font-semibold ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        What's included:
      </p>

      <ul className="space-y-4">
        {features.map((feature) => (
          <li
            key={feature}
            className={`flex items-start gap-3 text-sm ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-500">
              ✓
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PricingCard;