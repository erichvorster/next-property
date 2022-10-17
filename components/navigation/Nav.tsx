import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="container px-4 mx-auto flex justify-between items-center h-12">
      <div className="logo">
        <Link href="/">
          <a>
            <strong className="text-xl">Nelspruit Properties</strong>
          </a>
        </Link>
      </div>
      <div className="w-2/5 flex justify-between">
        <Link href="/About">
          <a>Homes</a>
        </Link>
        <Link href="/Buy">
          <a>Buy</a>
        </Link>
        <Link href="/About">
          <a>Sell</a>
        </Link>
        <Link href="/About">
          <a>Services</a>
        </Link>
      </div>
      <div>
        <Link href="/About">
          <button className="px-10 py-1 rounded-full border border-black">
            <a>Contact</a>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
