import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-[20px]">
      <div className="container mx-auto flex justify-between items-center">
        <p>© {new Date().getFullYear()} Dodiya. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <Link href="#" aria-label="Facebook" className="hover:text-[#ffc107]">
            <FaFacebook size={30} />
          </Link>
          <Link
            href="#"
            aria-label="Instagram"
            className="hover:text-[#ffc107]"
          >
            <FaInstagram size={30} />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="hover:text-[#ffc107]">
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
