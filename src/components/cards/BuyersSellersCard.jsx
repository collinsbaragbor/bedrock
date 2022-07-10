import React from "react";

const BuyersSellersCard = ({ title, detailText, btnText, img, id }) => {
  return (
    <div
      className={`w-full lg:justify-between  flex flex-col items-center justify-center  gap-5 ${
        id % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
      } lg:gap-0 `}
    >
      <div className="max-w-[200px] lg:max-w-[400px] ">
        <img src={img} className="" alt={title} />
      </div>

      <div className="w-[80%]  lg:max-w-[600px] flex flex-col gap-3 items-center lg:items-start">
        <h2 className="  font-extrabold text-xl ">{title}</h2>

        <p className="text-lg font-medium">{detailText}</p>
        <button className="py-5 md:py-3  text-lg px-10 rounded-[32px] mt-2 text-white hover:bg-deep-purple transition-all duration-75 bg-light-purple">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default BuyersSellersCard;
