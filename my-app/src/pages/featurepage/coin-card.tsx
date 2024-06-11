import React from "react";
import styles from "../../style";
import { ellipsis } from "../../utils/ellipsis";

type CoinCardProps = {
  name: string;
  symbol: string;
  price: string;
  iconUrl: string;
  change: string;
};

const CoinCard: React.FC<CoinCardProps> = ({
  name,
  symbol,
  price,
  iconUrl,
  change,
}) => {
  return (
    <div
      className={`${styles.flexCenter} flex-col py-[16px] px-[16px] m-[6px] ss:w-[100%] w-[160px] h-[160px] rounded-lg border-2 border-slate-300 shadow-sm text-center cursor-pointer hover:${styles.hoverScale}`}
    >
      <img src={iconUrl} alt={name} className="w-[40px] h-[40px] mb-2" />
      <h3 className="mb-[2px]">{ellipsis(name, 10)}</h3>
      <p className={`${styles.paragraph} text-sm text-gray-500 mb-2`}>
        {symbol}
      </p>
      {parseFloat(change) < 0 ? (
        <p className={`${styles.flexCenter} gap-2 text-red-600`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
          <span>{change}%</span>
        </p>
      ) : (
        <p className={`${styles.flexCenter} gap-2 text-green-600`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
            />
          </svg>
          {change}%
        </p>
      )}
    </div>
  );
};

export default CoinCard;
