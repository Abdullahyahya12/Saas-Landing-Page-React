function Hero({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Effects */}
      <div
        className={`pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-500/10" : "bg-indigo-200/40"
        }`}
      />

      <div
        className={`pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full blur-3xl ${
          darkMode ? "bg-purple-500/10" : "bg-purple-200/30"
        }`}
      />

      {/* Grid Pattern */}
      <div
        className={`pointer-events-none absolute inset-0 opacity-30 ${
          darkMode
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)]"
        } bg-[size:40px_40px]`}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">

        {/* LEFT */}
        <div className="animate-fade-left">

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${
              darkMode
                ? "border-indigo-400/20 bg-indigo-500/10 text-indigo-300"
                : "border-indigo-200 bg-indigo-50 text-indigo-600"
            }`}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
            Powerful tools for modern teams
          </div>

          {/* Heading */}
          <h1
            className={`mt-7 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Work smarter.
            <br />

            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Grow faster.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`mt-6 max-w-xl text-lg leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            SaaSFlow gives your team everything you need to manage projects,
            automate workflows and turn ideas into results — all from one
            powerful platform.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="group rounded-xl bg-indigo-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-500/30">
              Start Free Trial
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              className={`group rounded-xl border px-7 py-3.5 font-semibold transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-white/10 text-white hover:border-white/20 hover:bg-white/5"
                  : "border-slate-300 text-slate-800 hover:border-slate-400 hover:bg-slate-50"
              }`}
            >
              <span className="mr-2">▶</span>
              See how it works
            </button>
          </div>

          {/* Trust */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span
                className={`text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                14-day free trial
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-emerald-500">✓</span>
              <span
                className={`text-sm ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                No credit card
              </span>
            </div>
          </div>

          {/* Mini Rating */}
          <div
            className={`mt-8 flex items-center gap-4 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <div className="flex -space-x-2">
              {["A", "M", "S", "J"].map((letter) => (
                <div
                  key={letter}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-indigo-500 text-xs font-bold text-white dark:border-slate-950"
                >
                  {letter}
                </div>
              ))}
            </div>

            <div>
              <div className="text-sm text-yellow-400">
                ★★★★★
              </div>
              <p className="text-xs">
                Trusted by 10,000+ users
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT DASHBOARD */}
        <div className="relative animate-fade-right">

          {/* Glow */}
          <div className="absolute inset-10 rounded-full bg-indigo-500/20 blur-3xl" />

          <div
            className={`animate-float relative rounded-2xl border p-3 shadow-2xl ${
              darkMode
                ? "border-white/10 bg-slate-900/90 shadow-indigo-500/10"
                : "border-slate-200 bg-white shadow-indigo-100"
            }`}
          >
            {/* Browser Top */}
            <div
              className={`flex items-center gap-2 border-b px-3 pb-3 ${
                darkMode
                  ? "border-white/10"
                  : "border-slate-200"
              }`}
            >
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />

              <div
                className={`ml-4 flex h-7 flex-1 items-center rounded-md px-3 ${
                  darkMode
                    ? "bg-white/5"
                    : "bg-slate-100"
                }`}
              >
                <span className="text-[10px] text-slate-500">
                  app.saasflow.com/dashboard
                </span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="grid gap-4 p-3 sm:grid-cols-[150px_1fr]">

              {/* Sidebar */}
              <div
                className={`hidden rounded-xl p-3 sm:block ${
                  darkMode
                    ? "bg-white/[0.03]"
                    : "bg-slate-50"
                }`}
              >
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-500 text-xs font-bold text-white">
                    S
                  </div>

                  <span
                    className={`text-xs font-bold ${
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    SaaSFlow
                  </span>
                </div>

                <div className="space-y-2">
                  {[
                    "Dashboard",
                    "Projects",
                    "Analytics",
                    "Team",
                    "Settings",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-[10px] ${
                        index === 0
                          ? "bg-indigo-500/10 text-indigo-500"
                          : darkMode
                          ? "text-slate-500"
                          : "text-slate-500"
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Dashboard */}
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`text-xs ${
                        darkMode
                          ? "text-slate-500"
                          : "text-slate-500"
                      }`}
                    >
                      Good morning 👋
                    </p>

                    <h3
                      className={`mt-1 text-lg font-bold ${
                        darkMode
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      Dashboard
                    </h3>
                  </div>

                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500" />
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["Revenue", "$24.8K", "+18%"],
                    ["Users", "12.4K", "+12%"],
                    ["Growth", "32.8%", "+8%"],
                  ].map(([title, value, growth]) => (
                    <div
                      key={title}
                      className={`rounded-xl p-3 ${
                        darkMode
                          ? "bg-white/[0.04]"
                          : "bg-slate-50"
                      }`}
                    >
                      <p className="text-[9px] text-slate-500">
                        {title}
                      </p>

                      <p
                        className={`mt-1 text-sm font-bold ${
                          darkMode
                            ? "text-white"
                            : "text-slate-900"
                        }`}
                      >
                        {value}
                      </p>

                      <p className="mt-1 text-[9px] text-emerald-500">
                        {growth}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Chart */}
                <div
                  className={`mt-3 rounded-xl p-4 ${
                    darkMode
                      ? "bg-white/[0.04]"
                      : "bg-slate-50"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p
                      className={`text-xs font-semibold ${
                        darkMode
                          ? "text-slate-300"
                          : "text-slate-700"
                      }`}
                    >
                      Revenue Overview
                    </p>

                    <span className="text-[9px] text-emerald-500">
                      +24.5%
                    </span>
                  </div>

                  <div className="flex h-32 items-end gap-2">
                    {[35, 48, 42, 65, 55, 78, 68, 92, 82, 105].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="animate-bar flex-1 rounded-t-md bg-gradient-to- t from-indigo-600 to-indigo-400"
                          style={{
                            height: `${height}px`,
                            animationDelay: `${index * 80}ms`,
                          }}
                        />
                      )
                    )}
                  </div>
                </div>

                {/* Bottom Cards */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <div
                    className={`rounded-xl p-3 ${
                      darkMode
                        ? "bg-white/ [0.04]"
                        : "bg-slate-50"
                    }`}
                  >
                    <p className="text-[9px] text-slate-500">
                      Completed Tasks
                    </p>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div className="h-full w-[78%] rounded-full bg-indigo-500" />
                    </div>

                    <p className="mt-1 text-[9px] text-slate-500">
                      78%
                    </p>
                  </div>

                  <div
                    className={`rounded-xl p-3 ${
                      darkMode
                        ? "bg-white/ [0.04]"
                        : "bg-slate-50"
                    }`}
                  >
                    <p className="text-[9px] text-slate-500">
                      Team Activity
                    </p>

                    <p
                      className={`mt-2 text-sm font-bold ${
                        darkMode
                          ? "text-white"
                          : "text-slate-900"
                      }`}
                    >
                      94%
                    </p>

                    <p className="text-[9px] text-emerald-500">
                      Excellent
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Notification */}
          <div
            className={`absolute -bottom-5 -left-5 hidden rounded-xl border p-4 shadow-xl sm:block ${
              darkMode
                ? "border-white/10 bg-slate-900"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500">
                ✓
              </div>

              <div>
                <p
                  className={`text-xs font-semibold ${
                    darkMode
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  Task completed
                </p>

                <p className="text-[10px] text-slate-500">
                  Just now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;