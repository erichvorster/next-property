import React from "react";
import Image from "next/image";
import ill from "../../public/ill1 (1).svg";
import pattern from "../../public/patternpad.svg";
import BorderButton from "../BorderButton/BorderButton";
import Accordion from "../Accordion/Accordion";

const SalesPitch = () => {
  return (
    <div>
      <div>
        <Image
          src={pattern}
          alt="staircase"
          width={2000}
          height={500}
          className="rounded"
        />
      </div>
      <div className=" grid grid-cols-3 relative mx-24 mt-16">
        <div className="col-span-2">
          <div className="z-50 top-28 left-36">
            <h3 className="text-4xl font-bold">
              Sell with a qualified proffesional.
            </h3>
            <p className="pt-4 max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              corporis quibusdam! Voluptas ducimus dolores porro, asperiores aut
              error! Sed, vero?
            </p>
            <div className="mt-14 mb-4">
              <BorderButton btnText="Sell with us" />
            </div>
            <h5 className="py-4 text-xl font-bold">Why sell with us?</h5>
            <div className="grid grid-cols-2">
              <ul className="list-disc ml-8">
                <li>Access to local expertise</li>
                <li>Targeted marketing</li>
                <li>With you every step of the way.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
              <ul className="list-disc ml-8">
                <li>Access to local expertise</li>
                <li>Targeted marketing</li>
                <li>We will be with you every step.</li>
                <li>Lorem, ipsum dolor.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 relative z-10 mt-12">
          <Image
            src={ill}
            alt="staircase"
            width={400}
            height={450}
            className="rounded"
          />
        </div>
      </div>
      <div>
        <Accordion question="why are you gay?" answer="who says im gay" />
      </div>
    </div>
  );
};

export default SalesPitch;
