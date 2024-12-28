import React from 'react';
import { FaCalendarAlt, FaMusic, FaCameraRetro, FaSmileBeam } from 'react-icons/fa'; // Import relevant icons
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const KrushiUnnatiVillaSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-8 lg:px-24 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white overflow-x-hidden">
      {/* Left Image Section with Fade-in Effect */}
      <div data-aos="fade-right" className="lg:w-1/2 w-full flex items-center justify-center">
        <img
          src={require("../assets/K2.jpeg")}
          alt="Villa Setup"
          className="w-full max-w-md shadow-xl rounded-lg border-4 border-white transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Right Content Section with Fade-in Effect */}
      <div data-aos="fade-left" className="lg:w-1/2 w-full mt-12 lg:mt-0 lg:ml-12">
        {/* Tag */}
        <div className="bg-white text-green-600 font-bold px-4 py-1 inline-block rounded-full mb-4 shadow-lg transform transition hover:-translate-y-1">
          About Krushi Unnati Villa
        </div>
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4">
          A Serene and Exclusive Getaway for Your Special Moments
        </h2>
        {/* Description */}
        <p className="mb-6">
          Nestled in the lush greenery, Krushi Unnati Villa offers a perfect retreat for family vacations, weddings, corporate events, and celebrations. Our villa is designed to provide tranquility, luxury, and an unforgettable experience for you and your guests.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-3">
            <span className="bg-white text-green-600 p-2 rounded-full shadow-lg">
              <FaCalendarAlt />
            </span>
            <span>Exclusive Event Hosting</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-green-600 p-2 rounded-full shadow-lg">
              <FaMusic />
            </span>
            <span>Live Music & DJ Setup</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-green-600 p-2 rounded-full shadow-lg">
              <FaCameraRetro />
            </span>
            <span>Photography & Videography Services</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-white text-green-600 p-2 rounded-full shadow-lg">
              <FaSmileBeam />
            </span>
            <span>Relaxing Outdoor Spaces</span>
          </div>
        </div>

        {/* Testimonial with Opacity Effect */}
        <blockquote className="border-l-4 border-green-600 pl-4 italic mb-6">
          "Krushi Unnati Villa made our family reunion a magical experience. The setting was perfect and the service outstanding!"
        </blockquote>

        {/* Button with Hover Effect */}
        <a
          href="/services"
          className="bg-green-600 text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-green-600 transition"
        >
          EXPLORE OUR SERVICES
        </a>
      </div>
    </section>
  );
};

export default KrushiUnnatiVillaSection;
