import React from "react";
import Image from "next/image";
import HouseGrid from "../HouseGrid/HouseGrid";
import BorderButton from "../BorderButton/BorderButton";

const BuySell = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mb-24 mt-32">
        <div className="text-center flex flex-col items-center rounded hover:shadow-xl hover:bg-blue-100 px-10 py-20 ml-12 border transition-all 0.3s ease-in">
          <div className="h-40 w-40">
            <Image
              src="/../public/real-estate.png"
              alt="property"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-2xl font-bold mb-6">Buy a home</h3>
          <p className="max-w-sm mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            dolores. Porro quibusdam ratione impedit soluta.
          </p>
          <BorderButton btnText="Browse homes" />
        </div>
        <div className="text-center flex flex-col items-center rounded hover:shadow-xl hover:bg-blue-100 px-100 py-20 mr-12 border transition-all 0.3s ease-in">
          <div className="h-40 w-40 ">
            <Image
              src="/../public/contract.png"
              alt="property"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-2xl font-bold mb-6">Sell a home</h3>
          <p className="max-w-sm mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            distinctio earum rerum corrupti odit!
          </p>
          <BorderButton btnText="Sell with us" />
        </div>
      </div>
    </>
  );
};

export default BuySell;
