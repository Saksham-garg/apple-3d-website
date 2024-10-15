import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="flex justify-between items-center w-full py-5 sm:px-10 px-5">
      <nav className="w-full screen-max-width flex">
        <img src={appleImg} alt="apple" height={18} width={14}></img>

        <div className="flex flex-1 justify-center gap-3 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-gray hover:text-white cursor-pointer text-sm transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" height={18} width={18}></img>
          <img src={bagImg} alt="bag" height={18} width={18}></img>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
