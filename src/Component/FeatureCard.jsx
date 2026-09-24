function FeatureCard({ icon, title, description, darkMode }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-2 ${
        darkMode
          ? "border-white/10 bg-white/ [0.03] hover:border-indigo-400/30 hover:bg-white/ [0.06] hover:shadow-2xl hover:shadow-indigo-500/10"
          : "border-slate-200 bg-white shadow-sm hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100"
      }`}
    >
      {/* Hover Glow */}
      <div
        className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
          darkMode ? "bg-indigo-500/20" : "bg-indigo-300/30"
        }`}
      />

      {/* Icon */}
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
          darkMode
            ? "bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20"
            : "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100"
        }`}
      >
        {icon}
      </div>

      {/* Title */}
      <h3
        className={`relative mt-6 text-xl font-bold transition-colors duration-300 ${
          darkMode
            ? "text-white group-hover:text-indigo-400"
            : "text-slate-900 group-hover:text-indigo-600"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`relative mt-3 leading-7 ${
          darkMode ? "text-slate-400" : "text-slate-600"
        }`}
      >
        {description}
      </p>

      {/* Learn More */}
      <div
        className={`relative mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-500 transition-all duration-300 group-hover:gap-3`}
      >
        Learn more
        <span>→</span>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full" />
    </div>
  );
}

export default FeatureCard;