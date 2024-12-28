// components/Navbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaImages, FaPhoneAlt, FaSwimmingPool } from 'react-icons/fa';
import { GiFarmTractor, GiPlantRoots, GiCampfire, GiBasketballBasket } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-green-700 via-lime-600 to-green-400 text-white py-3 px-6 fixed w-full z-50 shadow-lg backdrop-blur-md"
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-3xl lg:text-4xl font-extrabold cursor-pointer select-none flex items-center space-x-2">
          <GiPlantRoots className="text-yellow-300" />
          <span className="tracking-wider">
            Krushi <span className="text-yellow-300">Unnati</span>
          </span>
        </div>

        {/* Menu Button for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-white text-3xl focus:outline-none z-50">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Navbar Links */}
        <ul
          className={`lg:flex space-y-5 lg:space-y-0 lg:space-x-8 absolute lg:static top-20 right-0 w-full lg:w-auto bg-green-800 lg:bg-transparent transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
        >
          {/* Links Array */}
          {[
            { to: '/home', icon: <FaHome className="mr-2" />, text: 'Home' },
            { to: '/about', icon: <FaInfoCircle className="mr-2" />, text: 'About Us' },
            { to: '/amenities', icon: <FaSwimmingPool className="mr-2" />, text: 'Amenities' },
            { to: '/gallery', icon: <FaImages className="mr-2" />, text: 'Gallery' },
            { to: '/contact', icon: <FaPhoneAlt className="mr-2" />, text: 'Contact' },
          ].map((link, index) => (
            <li key={index} className="text-lg font-semibold">
              <Link
                to={link.to}
                className="flex items-center justify-center lg:justify-start px-4 py-2 lg:px-0 lg:py-0 hover:text-yellow-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
