import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p>
          Welcomr to BookDoc, your Trusted Partner in Managing Your Healthcare Needs  Conveniently And Efficiently, At BookDoc, We Understand The Challenges Individuals Face When it Come To Scheduling Doctor Appointment And Managing Their Health Records.
        </p>
        <p>BookDoc is Committed To Excellence in Healthcare Technology We Continuosly Strive To Enhance And Deliver Superior Service. Whether You're Booking Your First Appointment Or Managing Ongoing Care. BookDoc is Here To Support You Every Step Of the Way.</p>
        <b className='text-gray-800'>Our Vision</b>
        <p>Our Vision At BookDoc is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The Gap Between Patients And Healthcare Providers, Making It Easier For You To Access The Core You Need , WHen You Need it.</p>
      </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY<span className='text-gray-700 font-semibold'>CHOOSE US</span></p>

      </div>

<div className='flex flex-col md:flex-row mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
    <b>Efficiency</b>
    <p>Streamlined Appointment Scheduling that fits into your busy lifestyle.</p>
  </div >
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
  <b>Convenience</b>
  <p> Access to a network of trusted healthcare professionals in your area.</p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
  <b>Personalization:</b>
  <p>Tailored recommendations and remainders to help you stay on top of your health.</p>
  </div>
</div>


    </div>
  )
}

export default About