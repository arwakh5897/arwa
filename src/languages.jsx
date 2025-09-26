import React from "react";

const Languages = () => (
  <section
    id="languages"
    className="py-10 px-3 sm:px-6 lg:px-12 m-3 bg-gray-900 rounded-lg scroll-mt-10"
  >
    <h2 className="text-base sm:text-lg md:text-3xl font-bold text-center mb-6 text-indigo-400">
      Languages
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-center md:flex-wrap gap-3 text-gray-300">
      <span className="px-4 py-2 bg-gray-800 rounded-full text-xs sm:text-sm text-center">
        Urdu – Native
      </span>
      <span className="px-4 py-2 bg-gray-800 rounded-full text-xs sm:text-sm text-center">
        English – Conversational
      </span>
      <span className="px-4 py-2 bg-gray-800 rounded-full text-xs sm:text-sm text-center">
        Punjabi – Expert
      </span>
    </div>
  </section>
);

export default Languages;
