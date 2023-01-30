import React from "react";

import Image from "next/image";

const FindContact = () => {
  return (
    <div className="find-contact relative z-10">
      <div className=" mx-auto   bg-white p-24 m-24 z-0">
        <h3 className="text-4xl max-w-3xl mb-3">
          <strong className="text-bold">Dont see anything you like ? </strong>
        </h3>
        <p className="text-xl max-w-sm">
          Let us know what your looking for and well let you know if we find
          anything.
        </p>

        <div className="grid grid-cols-2 mt-8 gap-12">
          <div>
            <form className="p-10">
              <div className="flex flex-col mb-8">
                <label htmlFor="clientName" className="mb-3">
                  Your name
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  className="h-10 bg-white rounded border border-gray-200"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label htmlFor="clientName" className="mb-3">
                  Your prefered area
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  className="h-10 bg-white rounded border border-gray-200"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label htmlFor="clientName" className="mb-3">
                  Your prefered spend
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  className="h-10 bg-white rounded border border-gray-200"
                />
              </div>
              <div className="flex flex-col mb-8">
                <label htmlFor="clientName" className="mb-3">
                  Your email
                </label>
                <input
                  type="text"
                  id="clientName"
                  name="clientName"
                  className="h-10 bg-white rounded border border-gray-200"
                />
              </div>
            </form>
          </div>
          <div>
            <form className="p-10">
              <div className="flex justify-between mb-8">
                <div>
                  <label htmlFor="bedrooms" className="mb-3 mr-3">
                    1 Bedroom
                  </label>
                  <input type="radio" />
                </div>
                <div>
                  <label htmlFor="bedrooms" className="mb-3 mr-3">
                    2 Bedrooms
                  </label>
                  <input type="radio" />
                </div>
                <div>
                  <label htmlFor="bedrooms" className="mb-3 mr-3">
                    4 Bedrooms
                  </label>
                  <input type="radio" />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="mb-4">Anything else?</label>
                <textarea
                  className="h-48 rounded bg-white border border-gray-200 p-3"
                  placeholder="Please leave and additional comments here..."
                />
              </div>
              <button className="px-10 py-1 mt-6 rounded-full border border-black">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindContact;
