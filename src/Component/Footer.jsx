function Footer({ darkMode }) {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Updates"],
    Company: ["About", "Careers", "Contact", "Blog"],
    Resources: ["Documentation", "Help Center", "Community", "Guides"],
  };

  return (
    <footer
      className={`relative overflow-hidden border-t transition-colors duration-500 ${
        darkMode
          ? "border-white/10 bg-slate-950"
          : "border-slate-200 bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full blur-3xl ${
          darkMode
            ? "bg-indigo-500/5"
            : "bg-indigo-100/50"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="group inline-flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500 font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                S
              </div>

              <span
                className={`text-2xl font-bold tracking-tight ${
                  darkMode
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                SaaS<span className="text-indigo-500">Flow</span>
              </span>
            </a>

            <p
              className={`mt-5 max-w-md leading-7 ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              A modern SaaS platform designed to help
              teams manage projects, automate workflows
              and grow their business faster.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">
              {["𝕏", "in", "f", "◎"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  aria-label={`Social ${icon}`}
                  className={`flex h-10 w-10 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500 hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 ${
                    darkMode
                      ? "border-white/10 text-slate-400"
                      : "border-slate-200 text-slate-600"
                  }`}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <div key={title}>
                <h3
                  className={`mb-5 text-sm font-semibold uppercase tracking-wider ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {title}
                </h3>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href={
                          link === "Features"
                            ? "#features"
                            : link === "Pricing"
                            ? "#pricing"
                            : link === "Contact"
                            ? "#"
                            : "#"
                        }
                        className={`group inline-flex items-center text-sm transition-all duration-300 hover:translate-x-1 hover:text-indigo-500 ${
                          darkMode
                            ? "text-slate-400"
                            : "text-slate-600"
                        }`}
                      >
                        <span>{link}</span>
                        <span className="ml-1 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Newsletter */}
        <div
          className={`mt-14 rounded-2xl border p-6 transition-all duration-500 ${
            darkMode
              ? "border-white/10 bg-white/ [0.03]"
              : "border-slate-200 bg-slate-50"
          }`}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h3
                className={`text-lg font-semibold ${
                  darkMode
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                Stay in the loop
              </h3>

              <p
                className={`mt-1 text-sm ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-600"
                }`}
              >
                Get product updates and useful productivity
                tips.
              </p>
            </div>

            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className={`min-w-0 flex-1 rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 ${
                  darkMode
                    ? "border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                    : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
                }`}
              />

              <button className="rounded-xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className={`mt-10 flex flex-col gap-4 border-t pt-8 text-sm sm:flex-row sm:items-center sm:justify-between ${
            darkMode
              ? "border-white/10 text-slate-500"
              : "border-slate-200 text-slate-500"
          }`}
        >
          <p>
            © {new Date().getFullYear()} SaaSFlow.
            All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-indigo-500"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-indigo-500"
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-indigo-500"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;