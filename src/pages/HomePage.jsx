import React from 'react';
import BenefitsSection from '../components/sections/BenefitsSection';
import ContactUs from '../components/sections/ContactUs';
import FindBuyerSellerSection from '../components/sections/FindBuyerSellerSection';
import HeroSection from '../components/sections/HeroSection';
import StatsSection from '../components/sections/StatsSection';
import Testimonials from '../components/sections/Testimonials';
import Features from '../components/Features';
import heroImg from '../assets/hero-img.png';
import Download from '../components/sections/Download';
const HomePage = () => {
  const heroInfo = {
    hero: 'homepage',
    h1: 'Transparent Exchange of Financial Assets',
    p1: 'Ideal for individuals, merchants, corporations, governments & institutional investors',
    p2: ' Buy or sell cryptocurrencies, fiat currencies, precious metals, agricultural commodities, precious energies, stocks and bonds through a secure and transparent platform.',
    btn: ' Get Started',
  };

  return (
    <div>
      <HeroSection
        heroImg={heroImg}
        heading={heroInfo.h1}
        subHeading={heroInfo.p1}
        otherText={heroInfo.p2}
        btnText={heroInfo.btn}
      />
      <FindBuyerSellerSection />
      <BenefitsSection />
      <StatsSection />
      <Testimonials />
      <Download />
      <ContactUs />
      <Features />
    </div>
  );
};
export default HomePage;
