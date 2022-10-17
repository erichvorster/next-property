import React from "react";
import HouseGrid from "../HouseGrid/HouseGrid";

const BuySell = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="text-center flex flex-col items-center rounded shadow-xl px-10 py-20 ml-12 border">
          <div className="h-40 w-40 bg-black mb-8">
            <img />
          </div>
          <h3 className="text-2xl font-bold mb-6">Buy a home</h3>
          <p className="max-w-sm mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            dolores. Porro quibusdam ratione impedit soluta.
          </p>
          <button className="px-10 py-1 rounded-full border border-black">
            Browse homes
          </button>
        </div>
        <div className="text-center flex flex-col items-center rounded shadow-xl px-10 py-20 mr-12 border">
          <div className="h-40 w-40 bg-black mb-8">
            <img />
          </div>
          <h3 className="text-2xl font-bold mb-6">Sell a home</h3>
          <p className="max-w-sm mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            distinctio earum rerum corrupti odit!
          </p>
          <button className="px-10 py-1 rounded-full border border-black">
            Sell with us
          </button>
        </div>
      </div>
    </>
  );
};

export default BuySell;
