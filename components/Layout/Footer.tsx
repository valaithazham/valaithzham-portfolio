"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Link } from "lucide-react"; // Import lucide-react icons
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useMemo } from "react";

const Footer = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  // Dynamic Social Links
  const socialLinks = [
    { id: 1, name: "Facebook", icon: Facebook, link: "https://www.facebook.com", color: "text-blue-600" },
    { id: 2, name: "Twitter", icon: Twitter, link: "https://www.twitter.com", color: "text-blue-400" },
    { id: 3, name: "Instagram", icon: Instagram, link: "https://www.instagram.com", color: "text-pink-500" },
    { id: 4, name: "Website", icon: Link, link: "https://yourwebsite.com", color: "text-gray-700" },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 pt-8 pb-4">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 text-center">
        {/* Logo */}
        <div className="mb-6">
          <img
            className="w-50 h-7 rounded-full mx-auto transform transition-transform duration-300 hover:scale-110"
            src="./image/valaithazhalam.png"
            alt="Logo"
          />
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-6 mb-6">
          {socialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-110 ${social.color}`}
              title={social.name}
            >
              <social.icon className="h-6 w-6" />
            </a>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <ScrollAnimationWrapper className={undefined}>
          <motion.div className="border-t border-gray-300 dark:border-gray-600 pt-6" variants={scrollAnimation}>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Valaithazham. All Rights Reserved.
            </p>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Footer;