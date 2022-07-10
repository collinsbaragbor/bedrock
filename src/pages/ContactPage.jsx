import React from 'react'
import ContactUs from "../components/sections/ContactUs";
import Features from "../components/Features";
import Image from '../assets/images/contactHero.png'
const ContactPage = () => {
  return (
    <>
    <div class='container flex flex-col-reverse lg:flex-row items-center gap-14 mt-14 lg:mt-28'>
      <div class='flex flex-1 flex-col lg:items-start'>
        <h2 class='text-2xl font-bold uppercase mb-5'>
          Your One-Stop Financial Assets Exchange Platform
        </h2>
        <p className='font-Raleway text-sm lg:text-lg'>Bedrock Exhange works with many customer segments based on their needs and what they want to achieve in the marketplace. We provide a marketplace with deep liquidity for primary producers who seek to use our market center to sell their current produce a year in advance through our special contracts, we also engineer all kinds of complex financial products that suit market participants based on their goals.</p>
      </div>
      <div class='flex justify-center flex-1 mb-3 md:mb-16 lg:mb-0'>
        <img class='w-3/4 h-3/4 mx-auto md:w-full md:h-full' src={Image} alt='contact pic' />
      </div>
    </div>
    <ContactUs/>
    <div className='mt-14 mb-8 sm:w-3/4 lg:w-5/12 mx-auto px-2'>
      <h3 className='font-Raleway text-center text-black'>Map</h3>
      <h1 className='mt-5 text-3xl lg:text-4xl font-bold text-center text-black uppercase'>Locate Us</h1>
      <p className='font-Raleway text-center text-lg lg:text-xl text-black mt-4'>
        Mikhaila Dragomirova 14 Kiev, 46000
      </p>
    </div>
    <div className='w-full h-96 lg:h-[500px]'>
      <iframe className='w-full h-full' title="gmaps" src="https://maps.google.com/maps?q=dragomirova%2014&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
    <Features />
    </>
  )
}

export default ContactPage