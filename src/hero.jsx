import React, { useEffect, useState } from "react";

const Hero = () => {
  // ✨ Rotating job titles
  const titles = [
    "Banking Fundamentals", "Analytical Skills", "Software Proficiency", "Communication Skills", "Quantitative Tools",
    "Research",
  ];
  const [titleIndex, setTitleIndex] = useState(0);

  // ✨ Rotating colors for name
  const colors = [
    "text-indigo-500",    // classic indigo
    "text-teal-400",      // fresh teal
    "text-emerald-400",   // calm green
    "text-yellow-400",    // subtle yellow
    "text-orange-400",    // warm accent
    "text-pink-400",      // soft pink
    "text-purple-400",    // gentle purple
    "text-sky-400",       // light cyan
    "text-rose-300",      // light rose
    "text-lime-300",      // soft lime
    "text-amber-300",     // subtle amber
    "text-cyan-300"       // soft cyan
  ];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setColorIndex((prev) => (prev + 1) % colors.length);
    }, 2000); // change every 2 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="h-screen w-full flex flex-col items-center justify-center text-center relative bg-transparent"
    >
      <div className="relative z-10 px-6">
        <h1 className="text-5xl font-bold text-white">
          Hi, I’m{" "}
          <span className={`${colors[colorIndex]} transition-all duration-700`}>
            Arwa
          </span>
        </h1>

        {/* 🔄 Rotating text */}
      {/* Mobile: stacked, Desktop: inline */}
<p className="mt-4 text-xl sm:text-2xl text-gray-300 font-medium text-center">
  <span className="block sm:inline">Specializing in</span>{" "}
  <span
    className={`${colors[colorIndex]} font-semibold transition-colors duration-700 inline-block`}
  >
    {titles[titleIndex]}
  </span>
</p>




        {/* 🎯 Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-800 rounded-lg shadow-lg hover:bg-indigo-700 text-white"
          >
            View My Work
          </a>

          {/* 📄 Download CV Button */}
          <a
            href="/Arwa_CV.pdf"
            download
            className="px-6 py-3 bg-gray-100 text-indigo-700 font-medium rounded-lg shadow hover:bg-gray-200"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
