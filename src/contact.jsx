import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const API_URL = "https://portfolio-backend.vercel.app/api/contact";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Sending...");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);

      const data = await res.json();
      console.log("✅ Success:", data);

      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Error:", error);
      setStatus("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-10 bg-gray-900 rounded-lg mx-3">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-400">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 bg-gray-800 p-6 rounded-lg">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold"
        >
          Send Message
        </button>

        {status && <p className="text-center text-sm text-gray-300 mt-3">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
