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
        <h2 className="text-5xl font-bold">
          All the tools you need to sell your home
        </h2>
        <p className="max-w-lg mx-auto mt-6">
          We make it easier to sell your home and move forward.
        </p>
      </div>
      <div className="mt-12">
        {/* <SalesServices /> */}
        <SalesPitch />
      </div>

      <div className="mt-28">{/* <SalesContact /> */}</div>
    </div>
  );
};

export default Sell;
