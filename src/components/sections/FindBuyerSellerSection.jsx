import React from 'react';
import buyersImg from '../../assets/buyers-img.png';
import sellersImg from '../../assets/sellers-img.png';
import BuyersSellersCard from '../cards/BuyersSellersCard';
const FindBuyerSellerSection = () => {
  const cardInfo = [
    {
      cardImg: buyersImg,
      cardTitle: 'Find Buyers',
      cardText:
        'Trade cryptocurrencies, precious metals, precious energies, agric commodities, bonds or stocks with authenticated people.',
    },
    {
      cardImg: sellersImg,
      cardTitle: 'Find Sellers',
      cardText:
        'Buy cryptocurrencies, precious metals, precious energies, agric commodities, bonds or stocks from verified merchants.',
    },
  ];
  return (
    <section className="container my-0 py-[72px] flex flex-col  items-center justify-center gap-16">
      {cardInfo.map((info, index) => (
        <BuyersSellersCard
          key={index}
          id={index}
          img={info.cardImg}
          title={info.cardTitle}
          detailText={info.cardText}
          btnText="Invest Now"
        />
      ))}
    </section>
  );
};
export default FindBuyerSellerSection;
