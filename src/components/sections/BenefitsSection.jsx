import React from "react";
import BenefitsCard from "../cards/BenefitsCard";
import phoneImage from "../../assets/phone.png";
import secure from "../../assets/secure.png";
import liquidity from "../../assets/liquidity.png";
import support from "../../assets/support.png";
import vault from "../../assets/vault1.png";
import pointing from "../../assets/pointing.png";

const cardDetails = [
  {
    imagePath: phoneImage,
    heading: "Transparent",
    descriptionText:
      "During a transaction assets are locked in escrow accounts and released once the customer acknowledges receipt.",
  },
  {
    imagePath: secure,
    heading: "Secure",
    descriptionText:
      "We adhere to strict authentication protocols to elimnate any chance of fraudulent activities.",
  },
  {
    imagePath: support,
    heading: "Full Client Support",
    descriptionText:
      "Our customer support team is ever ready to help at any time of the day.",
  },
  {
    imagePath: vault,
    heading: "Vault Option",
    descriptionText:
      "We provide you with a vault where you can store your assets.",
  },
  {
    imagePath: liquidity,
    heading: "Deep liquidity",
    descriptionText: "Convert your assets into cash at any time.",
  },
];

const BenefitsSection = () => {
  return (
    <div className="px-[5%] lg:px-[10%] py-8 ">
      <div className="flex justify-center items-center">
        <div className="benefits-heading hidden lg:flex justify-center items-center bg-grey bg-opacity-10 bg w-[83%] h-[25vh] rounded-full">
          <img className="hidden w-[20%] lg:flex" src={pointing} alt="" />
          <h1 className="text-2xl md:text-3xl font-extrabold text-center bg-transparent">
            Benefits of Bedrock Exchange
          </h1>
        </div>
        <h1 className="font-bold text-[24px] text-center lg:hidden bg-transparent">
          Benefits of Bedrock Exchange
        </h1>
      </div>
      <div className="benefits-section  pt-4 md:pt-5 md:grid md:grid-cols-2 gap-5 lg:gap-10">
        {cardDetails.map((detail, index) => (
          <BenefitsCard
            key={index}
            imagePath={detail.imagePath}
            heading={detail.heading}
            descriptionText={detail.descriptionText}
          />
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
