import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-gray-900 rounded-t-lg text-center">
      {/* Contact Info */}
      <div className="mb-6 space-y-3 text-sm sm:text-base">
        <p className="text-gray-300 flex items-center justify-center gap-2">
          <HiOutlineMail className="text-indigo-400 text-lg" />
          <a
            href="mailto:muhammadzainweb.dev@gmail.com"
            className="hover:underline hover:text-indigo-400"
          >
            muhammadzainweb.dev@gmail.com
          </a>
        </p>
        <p className="text-gray-300 flex items-center justify-center gap-2">
          📱 0309-7966970
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mb-6 text-lg">
        <a
          href="https://wa.me/923097966970"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-colors"
        >
          <FaWhatsapp />
        </a>
        <a
          href="https://github.com/zain929292"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-400 transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/muhammad-zain-ul-abden"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-400 transition-colors"
        >
          <FaLinkedin />
        </a>

      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-xs sm:text-sm">
        © {new Date().getFullYear()} Zain. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
