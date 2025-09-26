import React, { useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const experiences = [
  {
    role: "Laravel Intern Developer",
    company: "Jantrah Teach",
    duration: "June 2025 – Present, Islamabad",
    description: `Contributed to Laravel web apps, implemented backend features,
optimized queries, and integrated RESTful APIs.`,
  },
  {
    role: "Intern Software Engineer",
    company: "NAXXA Consulting",
    duration: "Jan 2024 – Jun 2024, Islamabad",
    description: `Built responsive UIs with HTML, CSS, Bootstrap, and Tailwind.
Integrated React components and improved performance.`,
  },
  {
    role: "React Native Developer",
    company: "Tech n Dev",
    duration: "Jan 2023 – Sep 2023, Sargodha",
    description: `Developed mobile apps in React Native, translated UI/UX designs,
and optimized app performance.`,
  },
];

const Experience = () => {
  const [activeExp, setActiveExp] = useState(null);

  return (
    <section id="experience" className="py-16 px-4 m-4 bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-8 text-indigo-400">
        Experience
      </h2>

      <div className="space-y-4 max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-indigo-500/50 transition-shadow cursor-pointer"
            onClick={() => setActiveExp(exp)}
          >
            <h3 className="text-lg font-semibold text-indigo-300">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-sm text-gray-400">{exp.duration}</p>
            <p className="mt-2 text-sm text-gray-300">
              {exp.description.slice(0, 80)}...
            </p>
          </div>
        ))}
      </div>

      {activeExp &&
        createPortal(
          <div
            className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-[9999]"
            onClick={() => setActiveExp(null)}
          >
            <div
              className="bg-gray-800 p-5 rounded-lg max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveExp(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-white"
              >
                <X />
              </button>
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {activeExp.role} – {activeExp.company}
              </h3>
              <p className="text-sm text-gray-400 mb-2">{activeExp.duration}</p>
              <p className="text-gray-300 text-sm">{activeExp.description}</p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Experience;
