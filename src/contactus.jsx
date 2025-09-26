import React from "react";

const Contactus = () => (
  <section id="contact" className="py-16 px-4 m-4 bg-gray-900 rounded-lg">
    <h2 className="text-2xl font-bold text-center mb-8 text-indigo-400">
      Contact
    </h2>
    <div className="text-center">
      <p className="text-gray-300">📧 muhammadzainweb.dev@gmail.com</p>
      <p className="text-gray-300">📱 0309-7966970</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="https://github.com/zain929292" target="_blank" className="text-indigo-400 hover:text-indigo-300">GitHub</a>
        <a href="https://linkedin.com/in/muhammad-zain-ul-abden" target="_blank" className="text-indigo-400 hover:text-indigo-300">LinkedIn</a>
      </div>
    </div>
  </section>
);

export default Contactus;
