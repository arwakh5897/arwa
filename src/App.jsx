import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import Hero from "./hero";
import Project from "./project";
import Contact from "./contact";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import Footer from "./footer";
import Header from "./header";
import Skills from "./skills";
import Languages  from "./languages";

const App = () => {

  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  // 🌊 Attach Vanta to the entire page
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,

          shininess: 150.0,
          waveHeight: 10.5,
          waveSpeed: 0.5,
          zoom: 0.85,
        //   color: 0x2e2e2e,
          color: 0x111827,
          backgroundColor: 0x2e2e2e // black
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div 
    ref={vantaRef} 
    className="text-white">
      {/* Navbar */}
      < Header />

      {/* Hero */}
      <Hero />

      {/* Projects */}
      <Project />

      {/* Skills */}
      <Skills />
      
      {/* Languages */}
      <Languages />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
