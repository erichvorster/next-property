import React from "react";
import { PhoneIcon, AtSymbolIcon, MapPinIcon } from "@heroicons/react/24/solid";

const contact = () => {
  return (
    <div className="container px-4 mx-auto pt-20">
      <div className="grid grid-cols-2">
        <div>
          <h4 className="text-3xl font-bold">We'd love to hear from you!</h4>
          <p className="mt-4">
            Feel free to contact via the methods below or come say hi in person.
          </p>
          <div>
            <div className="flex">
              <PhoneIcon className="h-6 w-6" />
              <strong>079 096 2026</strong>
            </div>
          </div>
        </div>
        <div className="bg-black w-full h-96"></div>
      </div>
    </div>
  );
};

export default contact;
