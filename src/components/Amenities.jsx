import React from 'react';
import { FaSwimmingPool, FaFireAlt, FaWifi, FaUtensils, FaTree, FaParking } from 'react-icons/fa';

const Amenities = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 via-lime-600 to-green-700 text-white py-16 overflow-x-auto">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Amenities Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#FFD700]">Our Amenities</h2>
          <p className="text-lg text-gray-200 mt-4">Enjoy top-notch facilities designed for comfort and relaxation</p>
        </div>

        {/* Amenities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { Icon: FaSwimmingPool, title: 'Swimming Pool', desc: 'Relax and unwind in our serene swimming pool surrounded by nature.' },
            { Icon: FaFireAlt, title: 'Barbecue Area', desc: 'Enjoy a delightful barbecue experience with friends and family.' },
            { Icon: FaWifi, title: 'Free Wi-Fi', desc: 'Stay connected with our high-speed Wi-Fi throughout the farm.' },
            { Icon: FaUtensils, title: 'Fully Equipped Kitchen', desc: 'Cook your favorite meals with our fully equipped kitchen amenities.' },
            { Icon: FaTree, title: 'Beautiful Garden', desc: 'Relax in our lush green garden and immerse yourself in nature.' },
            { Icon: FaParking, title: 'Free Parking', desc: 'Ample free parking spaces available for your convenience.' }
          ].map((amenity, index) => (
            <div key={index} className="bg-green-800 hover:bg-green-600 transition duration-300 rounded-lg shadow-lg p-6 text-center">
              <amenity.Icon className="text-5xl text-[#FFD700] mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{amenity.title}</h3>
              <p className="text-lg">{amenity.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-semibold text-[#FFD700] mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-200 mb-6">
            We offer a unique blend of nature, comfort, and top-tier amenities that will make your stay unforgettable.
          </p>
          <div className="inline-block bg-[#FFD700] text-green-700 py-2 px-6 rounded-lg shadow-lg hover:bg-green-700 hover:text-white transition duration-300">
            <a href="/book-now">Book Your Stay Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
