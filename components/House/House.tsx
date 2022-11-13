import React from "react";

const House = () => {
  return (
    <div className="my-5 p-4 border rounded hover:shadow-xl hover:bg-blue-100 transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer">
      <div className="h-80 w-full bg-black rounded">
        <img />
      </div>
      <div className="pt-4">
        <h4 className="text-xl font-bold pb-2">Sumerhill</h4>
        <p className="pb-2">21B South 200 East Salt Lake City, Utha 8411</p>
        <p className="text-sm">Modern house</p>
      </div>
    </div>
  );
};

export default House;
