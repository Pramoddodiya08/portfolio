import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-[20px]">
      <div className="container mx-auto flex justify-between items-center">
        <p>© {new Date().getFullYear()} Dodiya. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-[#ffc107]">
            <FaFacebook size={30} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-[#ffc107]">
            <FaInstagram size={30} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-[#ffc107]">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
