import React from "react";
import FindContact from "../components/FindContact/FindContact";
import HouseGrid from "../components/HouseGrid/HouseGrid";

const Buy = () => {
  return (
    <>
      <div className="container px-4 mx-auto pt-20">
        <div className="grid grid-cols-2">
          <div>
            <h1 className="text-6xl">Our properties are updated daily.</h1>
          </div>
          <div className="px-12 mt-3">
            <p>
              Want to get notified of new lsitings? Leave your email address
              below and we wll notfiy you of any new lisitings.
            </p>
            <div className="flex justify-between mt-4">
              <input
                placeholder="email"
                className="w-3/5 mr-4 px-3 py-1 rounded bg-white border border-black"
              />
              <button className="px-10 py-1 rounded-full border border-black">
                <a>Noitify me!</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 my-20">
        <HouseGrid />
        <HouseGrid />
      </div>
      <div className="container mx-auto px-4 my-20">
        <FindContact />
      </div>
    </>
  );
};

export default Buy;
