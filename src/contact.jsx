import React from "react";
 const Contact = () => {
    return(
    <section id="contact" className="py-20 bg-gray-900/80 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
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
            className="w-full p-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-white shadow-md"
          >
            Send Message
          </button>
        </form>
      </section>
    )
 }
 export default Contact;