function Testimonials({ darkMode }) {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechNova",
      avatar: "SJ",
      text: "SaaSFlow completely changed the way our team manages projects. Everything feels faster, cleaner and much more organized.",
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "GrowthLab",
      avatar: "MC",
      text: "The automation features save our team hours every week. It's simple, powerful and incredibly easy to use.",
    },
    {
      name: "Emily Davis",
      role: "Marketing Director",
      company: "PixelWorks",
      avatar: "ED",
      text: "Our productivity increased significantly after switching to SaaSFlow. The dashboard gives us everything we need.",
    },
  ];

  return (
    <section
      id="testimonials"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-slate-900" : "bg-slate-50"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-500/5" : "bg-indigo-200/40"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Testimonials
          </span>

          <h2
            className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Loved by modern teams
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            See how teams are using SaaSFlow to work smarter,
            collaborate better and grow faster.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-2 ${
                darkMode
                  ? "border-white/10 bg-white/[0.03] hover:border-indigo-400/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-indigo-500/10"
                  : "border-slate-200 bg-white shadow-sm hover:border-indigo-300 hover:shadow-2xl hover:shadow-indigo-100"
              }`}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Hover Glow */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                  darkMode ? "bg-indigo-500/20" : "bg-indigo-300/30"
                }`}
              />

              <div className="relative">

                {/* Quote Icon */}
                <div
                  className={`text-4xl font-serif leading-none ${
                    darkMode ? "text-indigo-400/40" : "text-indigo-300"
                  }`}
                >
                  “
                </div>

                {/* Rating */}
                <div className="mt-2 flex gap-1 text-sm text-yellow-400">
                  ★ ★ ★ ★ ★
                </div>

                {/* Review */}
                <p
                  className={`mt-5 min-h-[140px] leading-7 ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  “{testimonial.text}”
                </p>

                {/* Divider */}
                <div
                  className={`my-6 border-t ${
                    darkMode
                      ? "border-white/10"
                      : "border-slate-200"
                  }`}
                />

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-transform duration-300 group-hover:scale-110">
                      {testimonial.avatar}
                    </div>

                    <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-[8px] text-white">
                      ✓
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`font-semibold ${
                        darkMode
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      {testimonial.name}
                    </h3>

                    <p
                      className={`mt-0.5 text-sm ${
                        darkMode
                          ? "text-slate-500"
                          : "text-slate-500"
                      }`}
                    >
                      {testimonial.role}
                    </p>

                    <p className="mt-0.5 text-xs font-medium text-indigo-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Hover Line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-500 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Trust Row */}
        <div
          className={`mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row ${
            darkMode ? "text-slate-400" : "text-slate-600"
          }`}
        >
          <div className="flex -space-x-2">
            {["A", "M", "S", "J", "D"].map((letter) => (
              <div
                key={letter}
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 bg-indigo-500 text-xs font-bold text-white ${
                  darkMode
                    ? "border-slate-900"
                    : "border-slate-50"
                }`}
              >
                {letter}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-sm font-medium">
              Trusted by 10,000+ users
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;