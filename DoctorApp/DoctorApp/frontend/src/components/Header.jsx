import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-blue-600 rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left Side */}
      <div className="md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left justify-center gap-4 py-10 md:py-16">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-snug">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3 text-white text-sm font-light">
          <img 
            src={assets.group_profiles} 
            alt="Group of experienced and trusted doctors" 
            className="w-28 pt-5" 
            loading="lazy"
          />
          <p className="text-white text-lg leading-relaxed pt-2">
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          aria-label="Book an appointment with trusted doctors"
          className="flex items-center justify-center bg-white px-8 py-3 rounded-full text-gray-600 text-sm self-center md:self-start hover:scale-105 transition-all duration-300"
        >
          Book Appointment 
          <img 
            src={assets.arrow_icon} 
            alt="Forward arrow icon indicating booking" 
            className="w-4 ml-2" 
            loading="lazy"
          />
        </a>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 relative">
        <img 
          className="w-full h-auto rounded-lg object-cover md:object-contain" 
          src={assets.header_img} 
          alt="Doctor consulting a patient online" 
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Header;
