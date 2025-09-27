import React from "react";

const languages = [
  { name: "Urdu", level: "Native", color: "bg-teal-600" },
  { name: "English", level: "Fluent", color: "bg-indigo-600" },
  { name: "Punjabi", level: "Fluent", color: "bg-indigo-600" },
  { name: "Kashmiri", level: "Fluent", color: "bg-indigo-600" },
];

const Languages = () => (
  <section
    id="languages"
 className="py-10 px-6 bg-gray-900/70 rounded-lg scroll-mt-10"  >
    <h2 className="text-base sm:text-lg md:text-3xl font-bold text-center mb-6 text-indigo-400">
      LANGUAGES
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center md:flex-wrap gap-4">
      {languages.map((lang, index) => (
        <span
          key={index}
          className={`${lang.color} px-5 py-2 rounded-full text-xs sm:text-sm md:text-base text-white font-medium text-center shadow-md hover:scale-105 transition-transform duration-300`}
        >
          {lang.name} – {lang.level}
        </span>
      ))}
    </div>
  </section>
);

export default Languages;
