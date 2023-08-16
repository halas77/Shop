import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold font-poppins ml-10">
          Yene Shop
        </div>
        <ul className="flex space-x-10 mr-40">
          <li>
            <a
              href="/"
              className="text-white font-poppins font-bold hover:text-indigo-200 transition duration-300 ease-in-out"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className="text-white font-poppins font-bold hover:text-indigo-200 transition duration-300 ease-in-out"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="/help"
              className="text-white font-poppins font-bold hover:text-indigo-200 transition duration-300 ease-in-out"
            >
              Help
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-white font-poppins font-bold hover:text-indigo-200 transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
