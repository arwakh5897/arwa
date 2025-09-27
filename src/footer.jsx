import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-gray-900 rounded-t-lg text-center">
      {/* Contact Info */}
      <div className="mb-6 space-y-3 text-sm sm:text-base">
        <p className="text-gray-300 flex items-center justify-center gap-2">
          <HiOutlineMail className="text-indigo-400 text-lg" />
          <a
            href="mailto:arwa.muneer5@gmail.com"
            className="hover:underline hover:text-indigo-400"
          >
            arwa.muneer5@gmail.com
          </a>
        </p>
        <p className="text-gray-300 flex items-center justify-center gap-2">
          📱 0311 9734183
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6 text-lg">
        <a
          href="https://wa.me/923119734183"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/arwa-muneer-588868236"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-400 transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/arrah5897?s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Arwa. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
