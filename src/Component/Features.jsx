import FeatureCard from "./FeatureCard";

function Features({ darkMode }) {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Build and manage projects with a fast, smooth and distraction-free workflow.",
    },
    {
      icon: "🤖",
      title: "AI Automation",
      description:
        "Automate repetitive tasks and let intelligent workflows save your team valuable time.",
    },
    {
      icon: "🔒",
      title: "Secure by Design",
      description:
        "Keep your business data protected with modern security and privacy practices.",
    },
    {
      icon: "📊",
      title: "Advanced Analytics",
      description:
        "Understand your performance with powerful analytics and actionable insights.",
    },
    {
      icon: "🔗",
      title: "Easy Integrations",
      description:
        "Connect your favorite tools and services without complicated setup.",
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description:
        "Bring your entire team together and collaborate efficiently in one workspace.",
    },
  ];

  return (
    <section
      id="features"
      className={`relative overflow-hidden py-24 transition-colors duration-500 ${
        darkMode ? "bg-slate-950" : "bg-white"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl ${
          darkMode ? "bg-indigo-500/5" : "bg-indigo-100/50"
        }`}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Powerful Features
          </span>

          <h2
            className={`mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Everything your team needs
          </h2>

          <p
            className={`mt-5 text-lg leading-8 ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Powerful features designed to simplify your workflow, improve
            collaboration and help your business grow.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <FeatureCard
                {...feature}
                darkMode={darkMode}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p
            className={`text-sm ${
              darkMode ? "text-slate-500" : "text-slate-500"
            }`}
          >
            Built for startups, growing teams and modern businesses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;