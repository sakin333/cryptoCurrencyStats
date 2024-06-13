import styles from "../style";
import ExploreImage from "../assets/explore-img.png";

const EarnSection = () => {
  return (
    <section>
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} gap-[20px] my-[64px] mx-auto py-[16px] md:flex-col ss:px-[16px]`}
        id="earn"
      >
        <div className={`${styles.flexCenter} w-full md:w-[60%]`}>
          <img
            src={ExploreImage}
            alt="Ways to earn from cryptocurrency"
            className="m-auto max-w-full h-auto"
          />
        </div>
        <div className="w-full md:w-[40%]">
          <div className="mb-[24px]">
            <p className={`${styles.paragraph} text-lg md:text-xl`}>
              Maximize Your Earnings with Crypto
            </p>
            <h1 className={`${styles.heading1} leading-[50px] mb-[16px]`}>
              Explore Ways to Earn and Connect Your Wallet
            </h1>
            <p className={`${styles.paragraph} text-base md:text-lg`}>
              Connect your wallet, trade smart, and explore different strategies
              to grow your crypto portfolio.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 mb-[24px]">
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
                className="mr-4"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <div>
                <h4 className="font-bold mb-2">Staking</h4>
                <p>Earn rewards by staking your crypto assets.</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
                className="mr-4"
              >
                <path d="M11 2v6h6v8h-4v6h7V8h4V2H11zm-1 6H4v12h7v-6H6V8h4V2H0v6h2v12H0v2h11v-6h2v8h7v-6h4v-2h-2V2H10v6z" />
              </svg>
              <div>
                <h4 className="font-bold mb-2">Liquidity Pools</h4>
                <p>Provide liquidity to earn interest and fees.</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
                className="mr-4"
              >
                <path d="M21 11.18V9.41l-7-3.06v-3.2L9 4.7v2.11L4.89 6.1l-.94 4.71 1.05-.22L9 5.7v5.79l2 .56v7.31L5.17 14l1.05-2.89L3.61 9.4 2 14.71V21h2v-3.64l7 3.06v-3.2l3-1.24V15l3-1.24V21h2v-7.82l-2-.56zM12 13.39l2 .56v4.25l-2-.88v-3.93zm4 .68l2 .56V17l-2-.56v-2.37zm-8.68-.73l1.68 2.32V21l-2-1.39v-3.27l.32-.97z" />
              </svg>
              <div>
                <h4 className="font-bold mb-2">Yield Farming</h4>
                <p>
                  Earn yields by participating in various farming strategies.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="2em"
                width="2em"
                className="mr-4"
              >
                <path d="M12 2C8.14 2 5 5.14 5 9c0 2.56 1.63 4.74 4 5.66V20H8v2h8v-2h-1v-5.34c2.37-.92 4-3.1 4-5.66 0-3.86-3.14-7-7-7zm1 15h-2v-3h2v3zm0-5h-2V9h2v3zm0-5h-2V4h2v3z" />
              </svg>
              <div>
                <h4 className="font-bold mb-2">Connecting Wallet</h4>
                <p>Securely connect your wallet to start earning.</p>
              </div>
            </div>
          </div>
          <button className={`${styles.button} text-white w-[50%] sm:w-auto`}>
            Start Earning
          </button>
        </div>
      </div>
    </section>
  );
};

export default EarnSection;
