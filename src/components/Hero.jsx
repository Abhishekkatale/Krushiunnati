import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import hero1 from '../assets/ku1.JPG';
import hero2 from '../assets/ku4.JPG';
import hero3 from '../assets/ku2.JPG';
import hero4 from '../assets/ku3.JPG';


const galleryImages = [
  hero1,
  hero2,
  hero3,
  hero4
];

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear', // Changed for smoother transitions
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <img
                src={image}
                alt={`Hero gallery image ${index + 1}`}
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Enhanced Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-500 tracking-wider mb-6 shadow-xl"
        >
          Krushi Unnati
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-lg md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300"
        >
          Experience the epitome of luxury and tranquility at our exquisite farm, where nature meets elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="flex space-x-4"
        >
          <a
            href="#about"
            className="px-8 py-4 bg-gradient-to-r from-teal-700 to-green-700 hover:bg-gradient-to-l transition-all duration-300 rounded-full text-lg font-bold text-white shadow-lg"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white text-white hover:bg-green-700 transition-all duration-300 rounded-full text-lg font-bold shadow-lg"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
