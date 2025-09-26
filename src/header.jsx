import { useState, useEffect } from "react";
import React from "react";
import { X } from "lucide-react"; // Close icon

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 backdrop-blur-md shadow-md p-2 flex justify-between items-center z-50">
      {/* Logo */}
        <h1
          className="
            ml-3
            mb-1
            text-2xl md:text-2xl font-bold 
            tracking-wide 
            text-white 
            border-b-4 border-yellow-400 
            inline-block pb-1
          "
        >
        MZ
        </h1>

      {/* Logo */}
        {/* <img 
          src="/zain2.png" 
          alt="MyPortfolio Logo" 
          className="h-5 w-5 bg-transparent "
        /> */}


      {/* Desktop Menu */}
      <div className="hidden font-medium md:flex items-center space-x-8 text-white">
        <a href="#about" className="hover:text-indigo-400 transition-colors">
          Home
        </a>
        <a href="#projects" className="hover:text-indigo-400 transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-indigo-400 transition-colors">
          Skills
        </a>
        <a href="#languages" className="hover:text-indigo-400 transition-colors">
          Languages
        </a>
        <a href="#contact" className="hover:text-indigo-400 transition-colors mr-3">
          Contact
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center space-y-1 z-50"
        onClick={() => setMenuOpen(true)}
      >
        <span className="block w-6 h-0.5 bg-white rounded"></span>
        <span className="block w-6 h-0.5 bg-white rounded"></span>
        <span className="block w-6 h-0.5 bg-white rounded"></span>
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-4/8 sm:w-2/5 bg-gray-900 shadow-xl ease-in-out duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
          onClick={() => setMenuOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Sidebar Links */}
        <div className="flex flex-col items-center mt-10 text-sm font-semibold text-white w-full">
          <a
            href="#about"
            className="w-full text-center py-4 border-b border-gray-700 hover:text-indigo-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#projects"
            className="w-full text-center py-4 border-b border-gray-700 hover:text-indigo-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#skills"
            className="w-full text-center py-4 border-b border-gray-700 hover:text-indigo-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#languages"
            className="w-full text-center py-4 border-b border-gray-700 hover:text-indigo-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Languages
          </a>
          <a
            href="#contact"
            className="w-full text-center py-4 border-b border-gray-700 hover:text-indigo-400 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
