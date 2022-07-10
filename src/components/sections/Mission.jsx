import React from 'react';
import MissionCard from '../cards/MissionCard';
import missionImg from '../../assets/mission.svg';
const Mission = () => {
  <p></p>;
  const mission = [
    {
      heaidng: 'Fair and transparent market center',
      text: 'To provide a fair and transparent market center that enables all market participants to get the best prices possible.',
    },
    {
      heaidng: 'Market center free of bias',
      text: 'To provide a market center that is free of bias and conflict of interests between bedrock exchange the market center and market participants.',
    },
    {
      heaidng: 'Sustainable and limitless financial options',
      text: 'To provide a sustainable market center that provides limitless financial options for market participants.',
    },
    {
      heaidng: 'Modify existing global financial marketplace',
      text: ' To modify the existing global financial marketplace and make bedrock exchange become an integral component of the global financial ecosystem upon which merchants, individuals, investors, refineries, and primary producers rely to make the best financial decisions',
    },
  ];
  return (
    <div className="container w-full mt-10 flex items-center justify-between gap-3 py-8">
      <div className="w-full h-full text-black flex flex-col items-start gap-5 justify-between md:flex-row">
        <h2 className="md:hidden block w-fit text-2xl md:text-3xl font-extrabold text-center mb-3 ">
          OUR MISSION
        </h2>
        <ul className=" w-full md:w-[60] md:mt-5 flex flex-col justify-center gap-2">
          {mission?.map((item, index) => (
            <MissionCard
              key={index}
              title={item.heaidng}
              missionText={item.text}
            />
          ))}
        </ul>
        <div className="hidden  h-full md:flex flex-col items-center justify-start">
          <h2 className="  w-fit text-2xl md:text-3xl font-extrabold text-center mb-3">
            OUR MISSION
          </h2>
          <img
            src={missionImg}
            alt="our mission"
            className="object-contain w-[50%] md:w-full  lg:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
