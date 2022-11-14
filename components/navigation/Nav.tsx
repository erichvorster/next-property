import React from "react";
import Link from "next/link";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import BorderButton from "../BorderButton/BorderButton";
import UndButton from "../UndButton/UndButton";

const Nav = () => {
  return (
    <nav className="container px-4 py-10 mx-auto flex justify-between items-center h-12">
      <div className="logo">
        <Link href="/">
          <a>
            <strong className="text-2xl bg-clip-text  inline">
              <HomeModernIcon className="h-8 mb-3 w-auto inline" /> Nelspruit
              Properties
            </strong>
          </a>
        </Link>
      </div>
      <div className="w-2/5 flex justify-between">
        <Link href="/Home">
          <a className="text-lg text-gray-400 font-bold hover:text-black transition-all 0.3s ease-in">
            Homes
          </a>
        </Link>
        <Link href="/Buy">
          <a className="text-lg text-gray-400 font-bold hover:text-black transition-all 0.3s ease-in">
            Buy
          </a>
        </Link>
        <Link href="/Sell">
          <a className="text-lg text-gray-400 font-bold hover:text-black transition-all 0.3s ease-in">
            Sell
          </a>
        </Link>
        <Link href="/About">
          <a className="text-lg text-gray-400 font-bold hover:text-black transition-all 0.3s ease-in">
            Services
          </a>
        </Link>
      </div>
      <div>
        <Link href="/contact">
          <BorderButton btnText="Contact" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
