import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-900 to-green-800 text-white py-12 transition-all duration-500 ease-in-out">
      <div className="container mx-auto px-4 lg:px-20 animate-opacity">
        {/* Footer Top: Logo and Social Media Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <a
            href="/"
            className="text-4xl font-bold text-[#FFD700] tracking-widest uppercase hover:text-opacity-80 transition duration-500 ease-in-out"
          >
            Krushi Unnati Villa
          </a>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {[
              { icon: <FaFacebook />, url: "https://www.facebook.com/KrushiUnnatiVilla", label: "Facebook" },
              { icon: <FaTwitter />, url: "https://twitter.com/KrushiUnnatiVilla", label: "Twitter" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/KrushiUnnatiVilla", label: "Instagram" },
              { icon: <FaLinkedin />, url: "https://www.linkedin.com/company/KrushiUnnatiVilla", label: "LinkedIn" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-3xl hover:scale-110 transition-transform duration-300"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom: Copyright and Developed By */}
        <div className="text-center text-sm">
          <p>&copy; 2024 Krushi Unnati Villa. All rights reserved.</p>
          <span>
            Developed by{' '}
            <a
              href="https://musitech.in"
              className="text-[#FFD700] hover:text-opacity-80 transition duration-500 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              MusiTech
            </a>
          </span>
        </div>

        {/* Footer Bottom Banner */}
        <div className="bg-black text-center text-lg text-[#FFD700] py-4 mt-4">
          Discover tranquility and luxury at Krushi Unnati Villa. Book your stay or event with us today!
        </div>
      </div>
    </footer>
  );
};

export default Footer;
