import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href=""
                  className="hover:text-indigo-400 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  id="about"
                  className="hover:text-indigo-400 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-400 transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block font-semibold">Email:</span>
                <a
                  href="mailto:valaithazhamofficial@gmail.com"
                  className="hover:text-indigo-400 transition duration-200"
                >
                  valaithazhamofficial@gmail.com
                </a>
              </li>
              <li>
                <span className="block font-semibold">Phone:</span>
                <a
                  href="tel:+917904188021"
                  className="hover:text-indigo-400 transition duration-200"
                >
                  +9179 041 88021
                </a>
              </li>
              <li>
                <span className="block font-semibold">Address:</span>
                123 Main Street, City, Country
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Valaithazham. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;