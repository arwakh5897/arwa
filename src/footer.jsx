import React from "react";
const Footer = () => {
return(
       <footer className="py-6 text-center bg-gray-900/70">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Zain. All rights reserved.
        </p>
      </footer>
)
}
export default Footer;