import styles from "../style";
import HeroImage from "../assets/hero-img.png";

const Hero = () => {
  return (
    <section>
      <div
        className={`${styles.boxWidth} ${styles.flexCenter} gap-[20px] my-[64px] mx-auto py-[16px] md:flex-col ss:px-[16px]`}
        id="home"
      >
        <div className="w-full md:w-[70%]">
          <div className="mb-[24px]">
            <p className={`${styles.paragraph} text-lg md:text-xl`}>
              Seamlessly Buy & Sell Cryptocurrency
            </p>
            <h1 className={`${styles.heading1} leading-[50px] mb-[16px]`}>
              Secure Your Future with Cryptocurrency Investments
            </h1>
            <p className={`${styles.paragraph} text-base md:text-lg`}>
              Manage, trade, and store a variety of digital assets securely.
            </p>
          </div>
          <div className={`${styles.flexRow}  items-center sm:flex-col`}>
            <input
              type="email"
              placeholder="Enter your email"
              className={`${styles.input} w-[70%] sm:w-auto p-[10px] focus:outline-none focus:border-purple-500 `}
            />
            <button className={`${styles.button} w-[30%] text-white sm:w-full`}>
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full md:w-[70%]">
          <img
            src={HeroImage}
            alt="Investing in cryptocurrency"
            className="m-auto max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
