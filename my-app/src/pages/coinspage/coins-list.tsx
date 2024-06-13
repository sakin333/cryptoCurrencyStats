import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styles from "../../style";
import CoinItem from "./coin-item";

const CoinsList = () => {
  const dispatch = useAppDispatch();
  const { coins, loading, error } = useAppSelector((state) => state.coins);

  return (
    <div className={`${styles.boxWidth} m-auto mb-[64px]`}>
      <h1 className={`${styles.heading1} text-center mt-[32px] mb-[32px]`}>
        List of Coins
      </h1>

      <div className={`bg-white p-4 rounded-lg shadow-md`}>
        <div className={`grid grid-cols-6 gap-4 border-b-2 p-4 text-left`}>
          <p className={`${styles.heading3} col-span-1`}>#</p>
          <p className={`${styles.heading3} col-span-2`}>Coin</p>
          <p className={`${styles.heading3} col-span-1`}>Price</p>
          <p className={`${styles.heading3} col-span-1`}>24h</p>
          <p className={`${styles.heading3} col-span-1 md:hidden`}>Volume</p>
          <p className={`${styles.heading3} col-span-1 md: hidden`}>Mkt Cap</p>
        </div>
        {coins.map((coin) => (
          <Link to={`coin/${coin.uuid}`} key={coin.uuid} className="block">
            <CoinItem coin={coin} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoinsList;
