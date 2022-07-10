import React from "react";
import StatsCard from "../cards/StatsCard";

const cardDetails = [
  {
    statsNumber: "+60K",
    description: "Happy customers",
  },
  {
    statsNumber: "+150",
    description: "Team members",
  },
  {
    statsNumber: "+99%",
    description: "Projects completed",
  },
  {
    statsNumber: "23K",
    description: "Tickets resolved",
  },
];
const StatsSection = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="font-Raleway text-2xl md:text-3xl font-extrabold text-black text-center">
        Our Market Center in Numbers
      </h1>
      <h3 className="mt-1.5 text-center text-lg md:text-xl font-bold text-black">
        Our statistics say a lot
      </h3>
      <div className="cards flex flex-col lg:flex-row justify-center items-center mt-8 ">
        {cardDetails.map((detail, index) => (
          <StatsCard
            key={index}
            statNumber={detail.statsNumber}
            description={detail.description}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
