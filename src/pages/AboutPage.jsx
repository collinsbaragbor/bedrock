import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import heroImg from '../assets/about-hero.svg';
import BenefitsSection from '../components/sections/BenefitsSection';
import ContactUs from '../components/sections/ContactUs';
import Features from '../components/Features';
import FounderSection from '../components/sections/FounderSection';
import Mission from '../components/sections/Mission';
import TeamSection from '../components/sections/TeamSection';
const AboutPage = () => {
  const heroInfo = {
    h1: 'Your One-Stop Financial Assets Exchange platform',
    p1: 'Bedrock Exchange is a physically delivered contracts market Center wholly owned by Infinanze technologies and working to build the future of global trade.',
    p2: ' Bedrock Exchange and its systems only authenticate every product being offered as well as its source but do not own the financial products on offer.',
    btn: null,
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
      <BenefitsSection />
      <FounderSection />
      <Mission />
      <TeamSection />
      <ContactUs />
      <Features />
    </div>
  );
};

export default AboutPage;
