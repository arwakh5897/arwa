import React from "react";

const certifications = [
  "Internship – NAXXA Consulting (2024)",
  "Internship – Tech & Dev (2023)",
  "Introduction to HTML5 – University of Michigan (2020)",
];

const Certifications = () => (
  <section id="certifications" className="py-16 px-4 m-4 bg-gray-900 rounded-lg">
    <h2 className="text-2xl font-bold text-center mb-8 text-indigo-400">
      Certifications
    </h2>
    <ul className="list-disc list-inside max-w-md mx-auto text-gray-300 space-y-2">
      {certifications.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
  </section>
);

export default Certifications;
