import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Menu, Close } from "@mui/icons-material";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent z-50">
      
      <img src="wattwiselogo.jpg" alt="Logo" className="h-22 w-22" />

      {/* Hamburger Menu for Mobile */}
      <button
        className="text-white text-3xl lg:hidden" 
        onClick={() => setIsMenuOpen(!isMenuOpen)} 
      >
        {isMenuOpen ? <Close /> : <Menu />} 
      </button>

      {/* Navigation Links */}
      <div
        className={`${isMenuOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:space-x-12 text-xl font-bold absolute lg:static top-16 left-0 w-full lg:w-auto bg-black lg:bg-transparent p-4 lg:p-0`}
      >
        <Link to="/" className="text-white hover:text-gray-300 py-2 lg:py-0" onClick={() => setIsMenuOpen(false)}>
          HOME
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 py-2 lg:py-0" onClick={() => setIsMenuOpen(false)}>
          CONTACT
        </Link>
        <Link to="/dashboard" className="text-white hover:text-gray-300 py-2 lg:py-0" onClick={() => setIsMenuOpen(false)}>
          DASHBOARD
        </Link>  
      </div>

      
      <a href= "" target="_blank" rel="noopener noreferrer" className="hidden lg:block">
        <Instagram className="text-white hover:text-gray-300 text-3xl" />
      </a>
    </nav>
  );
};

export default Navbar; //lets go to argo