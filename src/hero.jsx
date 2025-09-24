import React, { useEffect, useState } from "react";

const Hero = () => {
  // ✨ Rotating job titles
  const titles = [
    "React Js", "React Native", "Php", "Laravel", "Yii2",
    "JavaScript", "Tailwind", "Bootstrap"
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
      className="h-screen w-full flex flex-col items-center justify-center text-center relative bg-trasparent"
    >
      <div className="relative z-10 px-6">
        <h1 className="text-5xl font-bold text-white">
          Hi, I’m{" "}
          <span className={`${colors[colorIndex]} transition-all duration-700`}>
            Zain
          </span>
        </h1>

        {/* 🔄 Rotating text */}
        <p className="mt-4 text-lg text-gray-200 font-bold">
          Full Stack Developer skilled in{" "}
          <span className={`${colors[colorIndex]} transition-all duration-700`}>
            {titles[titleIndex]}
          </span>
        </p>

        <div className="flex flex-col items-center">
          <a
            href="#projects"
            className="mt-6 px-6 py-3 bg-indigo-800 rounded-lg shadow-lg hover:bg-indigo-700 text-white"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
