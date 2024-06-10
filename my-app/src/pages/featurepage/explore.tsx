import React from "react";
import styles from "../../style";
import CoinCard from "./coin-card";

const Explore = () => {
  return (
    <section className="w-[100%] py-[128px] md:py-[140px] bg-slate-200 clippath">
      <div
        className={`${styles.boxWidth} flex justify-center items-center py-[16px] mx-auto md:flex-col ss:px-[16px] conatainer`}
        id="#featured"
      >
        <div className="py-[16px] left">
          <div>
            <h2
              className={`${styles.heading2} leading-[50px] py-[16px] sm:leading-[40px]`}
            >
              Explore top cryto's like Bitcon, Ethereum and Dogecoin
            </h2>
            <p className={`${styles.paragraph} my-[16px]`}>
              See all available assets: Cryptocurrencies and NFT's
            </p>
            <button className={`${styles.button} text-white`}>
              See More Coins
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-[16px] justify-end w-[100%] md:p-[16px]">
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
          <CoinCard />
        </div>
      </div>
    </section>
  );
};

export default Explore;