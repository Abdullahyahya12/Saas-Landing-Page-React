import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 60;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, 25);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Stats({ darkMode }) {
  const stats = [
    {
      number: 10000,
      suffix: "+",
      title: "Active Users",
    },
    {
      number: 500,
      suffix: "+",
      title: "Companies",
    },
    {
      number: 99,
      suffix: "%",
      title: "Customer Satisfaction",
    },
    {
      number: 24,
      suffix: "/7",
      title: "Support",
    },
  ];

  return (
    <section
      className={`border-y py-16 transition-colors duration-500 ${
        darkMode
          ? "border-white/10 bg-slate-900"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="group text-center transition-all duration-500 hover:-translate-y-2"
          >
            {/* Number */}
            <h3
              className="text-3xl font-bold text-indigo-500 transition-transform duration-300 group-hover:scale-110 sm:text-4xl"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <Counter
                end={stat.number}
                suffix={stat.suffix}
              />
            </h3>

            {/* Title */}
            <p
              className={`mt-2 text-sm ${
                darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
              }`}
            >
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;