import React from "react";
import Image from "next/image";
import stairCase from "../../public/staircase.jpg";

const SalesPitch = () => {
  return (
    <div className="grid grid-cols-2 relative">
      <div>
        <div className="absolute max-w-2xl z-50 top-28 left-36">
          <h3 className="text-5xl font-bold">
            Well help you sell your home in no time
          </h3>
          <p className="pt-8 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            corporis quibusdam! Voluptas ducimus dolores porro, asperiores aut
            error! Sed, vero?
          </p>
          <h5 className="py-4 text-xl font-bold">Well handle everything:</h5>
          <ul className="list-disc ml-8">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem.</li>
          </ul>
        </div>
      </div>
      <div className="relative z-10">
        <Image
          src={stairCase}
          alt="staircase"
          width={600}
          height={700}
          className="rounded"
        />
      </div>
    </div>
  );
};

export default SalesPitch;
