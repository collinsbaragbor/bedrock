import React from "react";

const StatsCard = ({ statNumber, description }) => {
  return (
    <div className="stats-card  w-[80vw] h-[23vh] md:w-[50vw] lg:w-[20vw] flex flex-col items-center justify-center mb-4 mr-4">
      <div className=" stats-number w-full h-[65%] flex flex-row items-center justify-center text-center">
        <h1 className="font-Raleway text-light-purple text-[3rem] md:text-[3.75rem] font-semibold">
          {statNumber}
        </h1>
      </div>
      <div className="description w-full h-[35%] flex flex-row items-center justify-center text-center text-black font-semibold text-lg  md:text-base lg:text-lg flex-nowrap">
        <h4 className="py-1 md:py-1.5 lg:py-3 w-[80%] ">{description}</h4>
      </div>
    </div>
  );
};

export default StatsCard;
