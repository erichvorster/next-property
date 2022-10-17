import React from "react";
import House from "../House/House";

const HouseGrid = () => {
  return (
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
  );
};

export default HouseGrid;
