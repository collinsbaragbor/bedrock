import React from "react";
let cardDetailProps = {
  imagePath: "",
  heading: "",
  descriptionText: "",
};
const BenefitsCard = (props) => {
  cardDetailProps = { ...cardDetailProps, ...props };
  return (
    <div className="benefits-card  h-[35vh] w-[85vw]  text-black py-6 px-6 flex flex-col items-center mb-2 md:w-[43vw] md:h-[20vh] md:flex-row lg:p-8">
      <div className=" image w-[25%] md:w-[30%] object-contain pr-4">
        <img
          src={cardDetailProps.imagePath}
          alt="Phone"
          className="object-contain lg:object-cover"
        />
      </div>
      <div className="text pt-3 text-left lg:ml-[0.5rem] lg:w-[50%]  md:text-left ">
        <h2 className="text-[22px] font-semibold">{cardDetailProps.heading}</h2>
        <p className="text-[16px] font-medium pt-1">
          {cardDetailProps.descriptionText}
        </p>
      </div>
    </div>
  );
};

export default BenefitsCard;
