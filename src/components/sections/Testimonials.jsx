import React from "react";
import { StarIcon } from "@heroicons/react/outline";
import Image from "../../assets/images/group-44.png";
import customerPic1 from "../../assets/images/Rectangle-1.png"
import customerPic2 from "../../assets/images/Rectangle.png"
import customerPic3 from "../../assets/images/Rectangle-2.png"

const testimonialDetails = [
  {
    id: 1,
    name: 'Cooper, Russia',
    imagePath: customerPic1,
    rating: 4.2,
    comment: 'It was only recently that my cattle were able to penetrate the international commodities market because of Bedrock Exchange. I considered it too intricate to seek foreign markets. Formerly, I could only content myself with the South African market for selling my livestock until I broadened the scope for myself through this platform. Good stuff this Bedrock Exchange!'
  },
  {
    id: 2,
    name: 'Tatiana, SA',
    imagePath: customerPic2,
    rating: '5.0',
    comment: 'I find Bedrock Exchange super convenient. What especially draws me is the fact that funds are secured in an Escrow account: that surely backs my confidence in the platform. I bought a Bulgari necklace from a trusted merchant on the platform and it was truly authentic. Good stuff this Bedrock Exchange! Good stuff this Bedrock Exchange! Good stuff this Bedrock Exchange!'
  },
  {
    id: 3,
    name: 'Rachid, Morocco',
    imagePath: customerPic3,
    rating: '5.0',
    comment: 'We are a small company producing Cannabidiol (CBD) oil in Morocco and we were struggling to find foreign markets outside of Africa, and the nature of our product still meets with some scepticism here. We recently got on this platform and have been able to penetrate and find willing buyers in European markets and are steadily growing our revenue. Good stuff this Bedrock Exchange!'
  }
]

const Testimonials = () => {
  return (
    // Testimonials Section
    <div className="font-Raleway text-black py-10 mt-20 lg:mt-30">
      <div className="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <img className="w-[50%] sm:w-[40%] mx-auto" src={Image} alt="testimonials" />
        <h1 className="mt-14 mb-5 text-4xl font-extrabold text-center">
          Client Testimonials
        </h1>
      </div>
      <div className='bg-light-purple py-10'>
        <p className="text-center text-white text-xl">
          We're succeeding to deliver what we promised.
        </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg">
        {testimonialDetails.map((item) => (
          <div className="bg-white mt-4 p-4 flex flex-col rounded-lg shadow-md lg:mt-12 my-auto">
            <div className="flex flex-row items-start mr-auto">
              <img
                className="w-16 h-16 rounded-full"
                src={item.imagePath}
                alt="customer 1"
              />
              <div className="mt-1 mx-5">
                <div className="text-black">
                  {item.name}
                </div>
                <div className="text-black">
                  <div className='flex flex-auto'>
                    <h3 className="mb-2 text-xl font-bold mr-3">{item.rating}</h3>
                    <div className="mt-2.5 flex flex-wrap">
                      <StarIcon className="w-3 h-3 text-gold" fill="currentColor" />
                      <StarIcon className="w-3 h-3 text-gold" fill="currentColor" />
                      <StarIcon className="w-3 h-3 text-gold" fill="currentColor" />
                      <StarIcon className="w-3 h-3 text-gold" fill="currentColor" />
                      <StarIcon className="w-3 h-3 " fill="none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="m-2">
              <p className="text-xs text-black">
                {item.comment}
              </p>
          </div>  
        </div>
        ))}
      </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
