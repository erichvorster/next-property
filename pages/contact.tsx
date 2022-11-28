import React from "react";
import {
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import BorderButton from "../components/BorderButton/BorderButton";
import facebook from "../public/facebook.svg";
import Image from "next/image";

const contact = () => {
  return (
    <div className="container px-4 mx-auto pt-20">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div className="flex mb-12">
            <div className="h-8 w-8 mx-6">
              <ChatBubbleLeftRightIcon />
            </div>
            <div>
              <h6 className="font-bold text-xl">Chat to us</h6>
              <p className="my-2">Our frinedly team is here to help</p>
              <p className="font-bold">hi@nelprop.co.za</p>
            </div>
          </div>
          <div className="flex mb-12">
            <div className="h-8 w-8 mx-6">
              <MapPinIcon />
            </div>
            <div>
              <h6 className="font-bold text-xl">Office</h6>
              <p className="my-2">Come say hello at our offices</p>
              <p className="font-bold">Office 3 crossings park Nelsprtuit</p>
            </div>
          </div>
          <div className="flex mb-96">
            <div className="h-8 w-8 mx-6">
              <PhoneIcon />
            </div>
            <div>
              <h6 className="font-bold text-xl">Phone</h6>
              <p className="my-2">Mon - Fri from 8 to 5</p>
              <p className="font-bold">+27 062 455 3848</p>
            </div>
          </div>
          <div className="flex justify-between w-72 ml-6">
            <div className="w-6 h-6">
              <Image src={facebook} alt="facebook" width="32" height="32" />
            </div>
            <div className="w-6 h-6">
              <PhoneIcon />
            </div>
            <div className="w-6 h-6">
              <PhoneIcon />
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="mx-auto text-center max-w-xl">
            <h2 className="text-3xl font-bold">
              Wed love to work with you! Let us know what you're after.
            </h2>
            <div className=" grid grid-cols-2 gap-4 mt-8">
              <div className=" col-span-1 py-6 rounded border hover:bg-blue-100 transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer">
                <div>Icon</div>
                <div>
                  <p className="font-bold my-2">Sell your property</p>
                  <p>I want to sell my property!</p>
                </div>
              </div>
              <div className="col-span-1 py-6 rounded border hover:bg-blue-100 transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer">
                <div>Icon</div>
                <div>
                  <p className="font-bold my-2">Sell your property</p>
                  <p>I want to sell my property!</p>
                </div>
              </div>
              <div className="col-span-1 py-6 rounded border hover:bg-blue-100 transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer">
                <div>Icon</div>
                <div>
                  <p className="font-bold my-2">Sell your property</p>
                  <p>I want to sell my property!</p>
                </div>
              </div>
              <div className="col-span-1 py-6 rounded border hover:bg-blue-100 transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer">
                <div>Icon</div>
                <div>
                  <p className="font-bold my-2">Sell your property</p>
                  <p>I want to sell my property!</p>
                </div>
              </div>
              <div className="col-span-1 py-6 rounded border hover:bg-blue-100 transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer">
                <div>Icon</div>
                <div>
                  <p className="font-bold my-2">Sell your property</p>
                  <p>I want to sell my property!</p>
                </div>
              </div>
              <div className="col-span-1 py-6 rounded border hover:bg-blue-100 transition-all 0.3s ease-in hover:-translate-y-2 cursor-pointer">
                <div>Icon</div>
                <div>
                  <p className="font-bold my-2">Sell your property</p>
                  <p>I want to sell my property!</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <BorderButton btnText="continue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
