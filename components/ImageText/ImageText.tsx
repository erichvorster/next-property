import React from "react";
import ill from "../../public/ill1 (3).svg";
import Image from "next/image";

const ImageText = () => {
  return (
    <div className="grid gap-4 grid-cols-2 my-5">
      <div className="mt-32 pl-32">
        <h3 className="text-3xl pb-8">Expertise and passion, on measure</h3>
        <p className="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, culpa
          sed tempore quae temporibus deserunt nulla blanditiis sunt assumenda
          soluta! Molestiae, saepe facere debitis maxime dolor sapiente
          laudantium ipsa quaerat.
        </p>
        <p>
          <strong>Our history</strong>
        </p>
      </div>
      <div className="h-72 w-full pl-32">
        <Image src={ill} height={500} width={500} alt="ill" />
      </div>
    </div>
  );
};

export default ImageText;
