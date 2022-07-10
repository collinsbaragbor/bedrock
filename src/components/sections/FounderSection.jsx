import React, { useState } from 'react';
import founderImg from '../../assets/founder.png';
const FounderSection = () => {
  const [extraText, setExtraText] = useState(false);
  const handleExtraTextToggle = () => {
    setExtraText(!extraText);
  };
  return (
    <div className="container w-full flex flex-col items-center justify-center gap-3 py-8 ">
      <div className=" w-full text-black flex flex-col items-center md:flex-row">
        <div className=" w-full md:w-[40%]   object-cover flex items-center justify-center">
          <img
            src={founderImg}
            alt="founder/ceo"
            className="object-contain w-[50%] md:w-full  lg:object-cover"
          />
          <h2 className=" md:hidden block text-2xl md:text-3xl font-extrabold text-center w-fit  mb-3 border-b-2 border-b-deep-purple">
            Jeshurun Markin <br /> Founder, Bedrock.Trade
          </h2>
        </div>
        <div className="w-full text pt-3 text-left lg:ml-[0.5rem] md:w-[60%]  md:text-left ">
          <h2 className=" hidden md:flex  w-fit text-2xl md:text-3xl font-extrabold text-center mb-3 border-b-2 border-b-deep-purple">
            Jeshurun Markin - Founder, Bedrock.Trade
          </h2>
          <p className="text-[16px] font-medium pt-1">
            Whilst working in the financial markets from 2017 to 2019 in Kyiv,
            Jeshurun Markin noticed the financial markets offered to global
            traders in the form of CFDs had a lot of conflicts of interest. To
            begin with, the CFD broker makes money only on the losses of the
            traders. Apart from that, the financial products on offer are not
            real financial assets but rather the trader gambles on the price
            fluctuation of the real assets. This caused the CFD broker to cheat.
            The CFD broker cheats by way of providing educators or financial
            advisors whose sole job is to convince the trader to deposit as much
            money as possible, withdraw as little as possible and offer bad
            financial advice to the traders and not disclose to the traders that
            they only make money from the losses of the trader.
            <span
              className="font-semibold px-3 mx-2 rounded-xl bg-deep-purple text-white inline-block md:hidden cursor-pointer hover:bg-light-purple "
              onClick={handleExtraTextToggle}
            >
              {extraText ? 'read less' : ' read more...'}
            </span>
          </p>
        </div>
      </div>
      <p
        className={` ${
          extraText ? 'block' : 'hidden'
        } md:block text-[16px] font-medium pt-1`}
      >
        Jeshurun over his course of work came to realize that the CFD brokers
        sell to traders the illusion of financial freedom but in the end,
        poverty is what ensues. This is so because many traders end up selling
        their homes and assets to be able to make fictitious profits in the CFD
        markets without knowing that the broker can’t even pay the trader over
        500,000€ in profits. This is because the assets the client traded in the
        CFD market were never real. It was just an online casino disguised as a
        financial market. Jeshurun Decided to do something about this.
      </p>
      <p
        className={` ${
          extraText ? 'block' : 'hidden'
        } md:block text-[16px] font-medium pt-1`}
      >
        Through in-depth study of finance, actuarial science, and computer
        science he has built a system for the world that works. That system is
        Called Bedrock exchange and it’s Jeshurun's solution which he calls a
        stable foundation for the financial markets.
      </p>
    </div>
  );
};

export default FounderSection;
