import React from 'react';

import './HeroSection.css';
const HeroSection = ({ heading, subHeading, otherText, btnText, heroImg }) => {
  return (
    <section className=" md:mt-5 mt-0 flex items-center justify-center md:px-[5%] lg:px-[10%] md:text-black">
      {/* <div className="hero-section-1 w-full h-[90vh] text-[18px] xl:text-lg flex flex-col text-center md:items-start items-center  md:text-left justify-evenly md:min-w-[400px] lg:max-w-[800px] px-[5%] text-white"> */}
      <div className="hero-section-1 h-[90vh] flex flex-col justify-center md:items-center px-[5%] lg:w-[60%]  lg:items-start ">
        <h1 className="font-extrabold text-2xl lg:text-[30px] text-left mb-8 md:mb-6">
          {heading}
        </h1>
        {/* <p className="lg:w-[80%] w-full font-medium  md:text-[20px] text-left xl:text-[30px]  "> */}
        <p className="text-xl mb-8 md:mb-6">{subHeading}</p>
        {/* <p className="lg:w-[80%] -mt-5 w-full text-left"> */}
        <p className="text-[1rem] mb-16 md:mb-10 font-medium text-lg">
          {otherText}
        </p>
        {btnText && (
          <button className="py-7 px-10 font-semibold  md:py-3 rounded-[40px] md:rounded-[32px]  text-white text-lg  hover:bg-deep-purple transition-all duration-75 bg-light-purple">
            {btnText}
          </button>
        )}
      </div>
      <div className="hidden md:flex  lg:max-w-[600px]">
        <img src={heroImg} className="w-full auto" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
