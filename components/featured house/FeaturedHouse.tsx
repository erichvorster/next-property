import ArrowUpRightIcon from "@heroicons/react/24/solid/ArrowUpRightIcon";
import { AppProps } from "next/app";
import React, { ReactElement, FC } from "react";

const FeaturedHouse = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 ... bg-black w-full h-96"></div>
      <div className="... px-8">
        <div className="flex items-center">
          <div className="h-[2px] w-20 mr-4 bg-black" />
          <h3 className="text-2xl font-bold whitespace-nowrap pb-6">
            Available now
          </h3>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          voluptatum molestias.
        </p>
        <div className="house-specs flex justify-between text-sm pt-6">
          <div>
            <h6 className="pb-3">beds</h6>
            <strong>1-4</strong>
          </div>
          <div>
            <h6 className="pb-3">bath</h6>
            <strong>1.2-4.3</strong>
          </div>
          <div>
            <h6 className="pb-3">sq feet</h6>
            <strong>924 - 4349</strong>
          </div>
        </div>
        <div>
          <p className="pt-6 text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit porro alias a ipsam enim quidem minus veniam nulla
            doloribus rem!
          </p>
          <div className="mt-6">
            <a href="#" className="flex ">
              <strong>See more</strong>
              <ArrowUpRightIcon className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHouse;
