import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // 🔑 Apna backend URL (live Vercel)
  const API_URL = "https://portfolio-backend.vercel.app/api/contacts";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // ✅ always send JSON
      });

      if (!res.ok) {
        throw new Error(`❌ Server error: ${res.status}`);
      }

      const data = await res.json();
      console.log("✅ Success:", data);

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
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

    </section>
  );
};

export default Contact;
