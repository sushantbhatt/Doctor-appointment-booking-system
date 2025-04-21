import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-10">
      <div className="md:mx-10 grid sm:grid-cols-[3fr_1fr_1fr] gap-14 mt-20 text-sm">
        
        {/* Left Side */}
        <div>
          <img className="w-25 mb-4" src={assets.logo} alt="Prescripto Logo" />
          <p className='m-full md:w-2/3 text-gray-600 leading-6'>
          BookDoc is a platform designed to streamline the healthcare experience, primarily focusing on simplifying appointment booking with trusted doctors. It aims to bridge the gap between patients and healthcare providers, offering a convenient and efficient way for individuals to manage their healthcare needs, from initial consultation to ongoing care.
          </p>
        </div>

        {/* Center Side */}
        <div>
          <p className="text-xl font-medium mb-4">COMPANY</p>
          <ul className="flex flex-col gap-2 ">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-xl font-medium mb-4">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 ">
            <li>+91 212-456-7890</li>
            <li>
              <a href="mailto:Bookdoc12@gmail.com" className="text-blue-600">
                Bookdoc@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center border-t pt-4 text-sm">
        <p>Copyright 2025 @ Bookdoc - All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
