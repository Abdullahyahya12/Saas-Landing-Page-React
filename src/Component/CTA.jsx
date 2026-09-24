function CTA({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode
          ? "bg-indigo-950"
          : "bg-indigo-50"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl ${
          darkMode
            ? "bg-indigo-500/20"
            : "bg-indigo-300/40"
        }`}
      />

      <div
        className={`pointer-events-none absolute -left-32 bottom-0 h-64 w-64 rounded-full blur-3xl ${
          darkMode
            ? "bg-purple-500/10"
            : "bg-purple-200/40"
        }`}
      />

      <div
        className={`pointer-events-none absolute -right-32 top-10 h-64 w-64 rounded-full blur-3xl ${
          darkMode
            ? "bg-blue-500/10"
            : "bg-blue-200/30"
        }`}
      />

      {/* Decorative Grid */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-30 ${
          darkMode
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)]"
        } bg- [size:40px_40px]`}
      />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Main CTA Card */}
        <div
          className={`relative overflow-hidden rounded-3xl border px-6 py-16 text-center shadow-2xl transition-all duration-500 sm:px-12 ${
            darkMode
              ? "border-white/10 bg-white/ [0.04] shadow-indigo-500/10"
              : "border-indigo-200 bg-white shadow-indigo-100"
          }`}
        >
          {/* Top Glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-1 w-1/2 -translate-x-1/2 bg-gradient-to- r from-transparent via-indigo-500 to-transparent" />

          <div className="relative animate-fade-up">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
              Get Started
            </span>

            {/* Heading */}
            <h2
              className={`mx-auto mt-6 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${
                darkMode
                  ? "text-white"
                  : "text-slate-900"
              }`}
            >
              Ready to grow your
              <span className="block bg-gradient-to- r from-indigo-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
                business?
              </span>
            </h2>

            {/* Description */}
            <p
              className={`mx-auto mt-6 max-w-2xl text-lg leading-8 ${
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }`}
            >
              Start using SaaSFlow today and give your team
              the tools they need to work smarter, collaborate
              better and grow faster.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <button className="group rounded-xl bg-indigo-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/30">
                Get Started Free
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                className={`group rounded-xl border px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-white/15 text-white hover:border-white/25 hover:bg-white/10"
                    : "border-slate-300 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50"
                }`}
              >
                Contact Sales
                <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </button>
            </div>

            {/* Trust Points */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
              {[
                "14-day free trial",
                "No credit card",
                "Cancel anytime",
              ].map((item) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 text-sm ${
                    darkMode
                      ? "text-slate-400"
                      : "text-slate-500"
                  }`}
                >
                  <span className="text-emerald-500">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;