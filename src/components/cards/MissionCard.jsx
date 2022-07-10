import React, { useState } from 'react';
import arrowImg from '../../assets/arrow-mission.png';
const MissionCard = ({ title, missionText }) => {
  const [arrowPosition, setArrowPosition] = useState(false);
  const handleArrowPosition = () => {
    setArrowPosition(!arrowPosition);
  };
  return (
    <details className="w-full flex flex-col border-b-2 border-b-deep-purple py-2">
      <summary
        className="list-none text-[22px] font-semibold mb-2 flex items-center justify-between"
        onClick={handleArrowPosition}
      >
        {title}
        <span
          className={`h-[20px] -z-10 md:h-[40px] object-contain transform ${
            arrowPosition ? '' : 'rotate-180'
          } `}
        >
          <img src={arrowImg} alt="arrow" className="h-full " />
        </span>
      </summary>
      <p>{missionText}</p>
    </details>
  );
};

export default MissionCard;
