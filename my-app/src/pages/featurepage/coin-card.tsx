import React from "react";
import styles from "../../style";

const CoinCard = () => {
  return (
    <div
      className={`${styles.flexCol} py-[16px] px-[22px] m-[6px] ss:w-[100%] w-[160px] h-[160px] rounded-lg border-2 border-slate-300 shadow-sm text-center hover:${styles.hoverScale}`}
    >
      card
    </div>
  );
};

export default CoinCard;
