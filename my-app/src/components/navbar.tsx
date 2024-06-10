import React, { useState } from "react";
import styles from "../style";
import { Navlinks, navLinks } from "../contants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full h-[80px] bg-white sticky top-0 left-0 z-10 border-b-2 border-slate-200">
      <div
        className={`${styles.boxWidth} ${styles.flexBetween} items-center h-[100%] py-[16px] md:px-[16px] relative`}
      >
        <div>
          <h1 className={`${styles.heading1}`}>
            Coin<span className="text-purple-600">Stats</span>
          </h1>
        </div>
        <ul className={`${styles.flexRow} md:hidden`}>
          {navLinks.map((navItems: Navlinks) => (
            <li
              key={navItems.id}
              className="text-[16px] mx-[16px] font-semibold"
            >
              <a href={`#${navItems.id}`} className="hover:text-purple-600">
                {navItems.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button className={`${styles.button} text-white`}>
            Connect Wallet
          </button>
        </div>

        {/* sidebar */}
        <div className={`hidden md:flex`}>
          <div
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 transition-transform duration-200 transform rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-8 transition-transform duration-200"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </div>
          <div
            className={`${toggle ? "flex" : "hidden"} ${
              styles.flexCol
            } p-4 absolute top-[70px] right-0 mx-6 my-4 rounded-md bg-slate-300 min-w-[140px] shadow-lg z-50 sidebar`}
          >
            <ul className={`${styles.flexCol} space-y-2`}>
              {navLinks.map((navItem: Navlinks) => (
                <li key={navItem.id} className="text-[16px] font-semibold">
                  <a
                    href={`#${navItem.id}`}
                    className="block px-4 py-2 rounded-md hover:text-purple-600 hover:bg-slate-400 transition duration-200"
                  >
                    {navItem.title}
                  </a>
                </li>
              ))}
            </ul>
            <button className="mt-4 px-2 font-semibold w-full py-2 border-2 border-purple-500 rounded-md text-purple-600 hover:bg-purple-500 hover:text-white transition duration-200">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
