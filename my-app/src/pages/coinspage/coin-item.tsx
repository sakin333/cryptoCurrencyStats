import React from "react";
import { Coin } from "../../features/coins/coinTypes";
import styles from "../../style";

type CoinItemProps = {
  coin: Coin;
};

const CoinItem: React.FC<CoinItemProps> = ({ coin }) => {
  return (
    <div
      className={`grid grid-cols-6 gap-4 p-4 hover:bg-gray-100 transition duration-150 ease-in-out cursor-pointer text-left border-b`}
    >
      <p className="col-span-1">{coin.rank}</p>
      <div className={`${styles.flexRow} items-center col-span-2 gap-[16px]`}>
        <img
          src={coin.iconUrl}
          alt={`${coin.symbol} icon`}
          className="h-[40px] w-[40px]"
        />
        <p>{coin.symbol?.toUpperCase()}</p>
      </div>
      <p className="col-span-1">
        ${parseFloat(coin.price).toFixed(2) || "N/A"}
      </p>
      <p className="col-span-1">
        {parseFloat(coin.change).toFixed(2) || "N/A"}%
      </p>
      {coin.volume !== undefined && (
        <p className="col-span-1 md:hidden">${coin.volume.toLocaleString()}</p>
      )}
      {coin.marketCap !== undefined && (
        <p className="col-span-1 md:hidden">
          ${coin.marketCap.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default CoinItem;
