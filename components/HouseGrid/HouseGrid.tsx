import React from "react";
import BorderButton from "../BorderButton/BorderButton";
import House from "../House/House";

const HouseGrid = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 my-5">
        <div className="...">
          <House />
        </div>
        <div className="...">
          <House />
        </div>
        <div className="...">
          <House />
        </div>
        <div className="...">
          <House />
        </div>
        <div className="...">
          <House />
        </div>
        <div className="...">
          <House />
        </div>
      </div>
      <div className="mx-auto text-center">
        <BorderButton btnText="View all" />
      </div>
    </>
  );
};

export default HouseGrid;
