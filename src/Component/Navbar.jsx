import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Features", "#features"],
    ["Pricing", "#pricing"],
    ["Testimonials", "#testimonials"],
    ["FAQ", "#faq"],
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-500 ${
        darkMode
          ? "border-white/10 bg-slate-950/80"
          : "border-slate-200 bg-white/80"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#"
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
            S
          </div>

          <span
            className={`text-xl font-bold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            SaaS<span className="text-indigo-500">Flow</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                darkMode
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {name}

              {/* Hover Line */}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${
              darkMode
                ? "border-white/10 bg-white/5 hover:bg-white/10"
                : "border-slate-200 bg-slate-50 hover:bg-slate-100"
            }`}
          >
            <span
              className="transition-transform duration-300"
              style={{
                transform: darkMode
                  ? "rotate(0deg)"
                  : "rotate(180deg)",
              }}
            >
              {darkMode ? "☀️" : "🌙"}
            </span>
          </button>

          {/* Login */}
          <button
            className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
              darkMode
                ? "text-slate-300 hover:bg-white/5 hover:text-white"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            Login
          </button>

          {/* Get Started */}
          <button className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30">
            Get Started
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">

          {/* Theme */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-slate-200 bg-slate-50"
            }`}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center rounded-xl border text-lg transition-all duration-300 ${
              darkMode
                ? "border-white/10 bg-white/5 text-white"
                : "border-slate-200 bg-slate-50 text-slate-900"
            }`}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t transition-all duration-500 md:hidden ${
          menuOpen
            ? `max-h- [500px] opacity-100 ${
                darkMode
                  ? "border-white/10"
                  : "border-slate-200"
              }`
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div
          className={`space-y-2 px-6 py-5 ${
            darkMode ? "bg-slate-950" : "bg-white"
          }`}
        >
          {links.map(([name, url]) => (
            <a
              key={name}
              href={url}
              onClick={() => setMenuOpen(false)}
              className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? "text-slate-300 hover:bg-white/5 hover:text-indigo-400"
                  : "text-slate-600 hover:bg-indigo-50 hover:text-indigo-600"
              }`}
            >
              {name}
            </a>
          ))}

          <button className="mt-3 w-full rounded-xl bg-indigo-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/20">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;