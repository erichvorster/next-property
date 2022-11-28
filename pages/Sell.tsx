import React from "react";
import BorderButton from "../components/BorderButton/BorderButton";
import SalesServices from "../components/SalesServices/SalesServices";
import Accordion from "../components/Accordion/Accordion";
import SalesPitch from "../components/SalesPitch/SalesPitch";
import SalesContact from "../components/SalesContact/SalesContact";

const Sell = () => {
  return (
    <div className="container px-4 mx-auto pt-20">
      <div className="sell-hero text-center">
        <h2 className="text-5xl">All the tools you need to sell your home</h2>
        <p className="max-w-lg mx-auto mt-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nam
          reiciendis ut aliquam maxime ipsam.
        </p>
        <div className="mt-4">
          <BorderButton btnText="Sell with us" />
        </div>
      </div>
      <div className="mt-28">
        {/* <SalesServices /> */}
        <SalesPitch />
      </div>
      <div className="mt-28">
        <SalesContact />
      </div>
    </div>
  );
};

export default Sell;
