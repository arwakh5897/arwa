import React, { useState } from "react";
import { createPortal } from "react-dom";
import { CheckCircle } from "lucide-react";

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    try {
      const res = await fetch("http://localhost:5000/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        e.target.reset();
      } else {
        console.error("❌ Failed to send message");
      }
    } catch (err) {
      console.error("❌ Error:", err);
    }
  };

  return (
    <section
      id="contact"
      className="py-10 scroll-mt-10 bg-gray-900/80 rounded-lg relative"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full px-3 sm:px-0 mx-auto space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-indigo-600 focus:border-indigo-400 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-indigo-600 focus:border-indigo-400 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-indigo-600 focus:border-indigo-400 focus:outline-none"
          rows={4}
        />
        <button
          type="submit"
          className="font-semibold font-sans w-full p-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-white shadow-md cursor-pointer transition-colors duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Golden Toast using Portal */}
      {showToast &&
        createPortal(
          <div
            className={`fixed top-5 right-5 z-[9999] flex items-center bg-gray-300 text-gray-900 px-5 py-3 rounded-lg shadow-xl border
                transform transition-all duration-700 ease-in-out pointer-events-none
                ${showToast ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
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
