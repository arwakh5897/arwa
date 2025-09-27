import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    setTimeout(() => setShowToast(false), 3000);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="py-15 scroll-mt-10 bg-gray-900/80 rounded-lg relative"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
        CONTACT ME
      </h2>

      <form onSubmit={handleSubmit} className="max-w-lg w-full px-3 sm:px-0 mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-indigo-600 focus:border-indigo-400 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-indigo-600 focus:border-indigo-400 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-indigo-600 focus:border-indigo-400 focus:outline-none"
          rows={4}
        />
        <button
          type="submit"
          className="font-semibold w-full p-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-white shadow-md cursor-pointer transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Golden Toast using Portal */}
      {showToast &&
        createPortal(
          <div
            className="fixed top-5 right-5 z-[9999] flex items-center bg-gray-300 text-gray-900 px-5 py-3 rounded-lg shadow-xl border
                        transform transition-all duration-500 ease-in-out animate-slide-in pointer-events-none"
          >
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Message sent successfully!</span>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Contact;
