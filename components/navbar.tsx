"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Moon,
  Sun,
  Search,
  Home,
  Info,
  Briefcase,
  FolderOpen,
  Mail,
  Phone,
  Clock,
  Users,
  FileText,
} from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 64; // Height of the navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { href: "home", label: "Home", icon: Home },
    { href: "about", label: "About", icon: Info },
    { href: "services", label: "Services", icon: Briefcase },
    { href: "products", label: "Products", icon: FolderOpen },
    { href: "team", label: "Our Team", icon: Users },
    { href: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
            : "bg-white dark:bg-gray-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
              <button
                onClick={() => scrollToSection("home")}
                className="ml-4 md:ml-0 text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
              >
                Valaithazham
              </button>
              <img
                className="w-10 h-10 rounded-full mx-auto transform transition-transform duration-300 hover:scale-110"
                src="./image/valaithazhalam1.png"
                alt="Logo"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle & Search */}
            <div className="flex items-center space-x-4">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Logo
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-4">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center space-x-4 px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200 w-full"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 px-4 py-3">
                <Clock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Working Hours
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mon - Fri: 9AM - 6PM
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 px-4 py-3">
                <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    Contact Us
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
