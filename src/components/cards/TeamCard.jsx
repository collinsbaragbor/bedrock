import React from 'react';

const TeamCard = ({ memberImg, memberName, memberRole }) => {
  return (
    <div className="w-full  text-black p-3 flex flex-col items-center justify-center ">
      <div className="  w-full  object-contain ">
        <img
          src={memberImg}
          alt="member"
          className="object-contain lg:object-cover"
        />
      </div>
      <div className="w-full text pt-3 text-center lg:ml-[0.5rem] ">
        <h2 className="text-[22px] font-semibold">{memberName}</h2>
        <p className="text-[16px] font-medium pt-1">{memberRole}</p>
      </div>
    </div>
  );
};

export default TeamCard;
