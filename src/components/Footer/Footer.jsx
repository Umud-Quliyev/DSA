import React from "react";
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  GitHub,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo & Copyright */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold">Data Science Academy</h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            target="_blank"
            href="https://www.facebook.com/datascienceacademy.az/"
            className="hover:text-blue-500 transition"
          >
            <Facebook fontSize="large" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/company/dsa-azerbaijan"
            className="hover:text-blue-700 transition"
          >
            <LinkedIn fontSize="large" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/datascienceacademy_/"
            className="hover:text-pink-500 transition"
          >
            <Instagram fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
