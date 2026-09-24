import { useEffect, useState } from "react";

function BackToTop({ darkMode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border text-lg shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 ${
        darkMode
          ? "border-white/10 bg-slate-900 text-white shadow-black/30 hover:border-indigo-400/30 hover:bg-indigo-500"
          : "border-slate-200 bg-white text-slate-700 shadow-slate-200 hover:border-indigo-200 hover:bg-indigo-500 hover:text-white"
      }`}
    >
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
        ↑
      </span>
    </button>
  );
}

export default BackToTop;