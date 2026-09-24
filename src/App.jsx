import { useEffect, useState } from "react";

import Navbar from './Component/Navbar'
import Hero from './Component/Hero'

import Features from './Component/Features'
import Pricing from './Component/Pricing'
import Testimonials from './Component/Testimonials'
import FAQ from './Component/FAQ'
import CTA from './Component/CTA'
import Footer from './Component/Footer'
import State from './Component/State'
import BackToTop from "./Component/BackToTop";




function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-slate-950 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero darkMode={darkMode} />
      <State darkMode={darkMode} />
      
      <Features darkMode={darkMode} />
      <Pricing darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <FAQ darkMode={darkMode} />
      <CTA darkMode={darkMode} />
      <Footer darkMode={darkMode} />
      <BackToTop />

    </div>
  )
}

export default App
