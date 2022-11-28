import React from "react";
import BorderButton from "../BorderButton/BorderButton";

const SalesContact = () => {
  return (
    <div>
      <h3 className="text-2xl">Want to sell with us?</h3>
      <p>
        Give us a call or leave your information below. We will be in touch
        within 24 hour.
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
                Your contact information
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
            <div className="flex flex-col">
              <label className="mb-4">Anything else?</label>
              <textarea
                className="h-36 rounded bg-white border border-gray-200 p-3"
                placeholder="Please leave and additional comments here..."
              />
            </div>
            <div className="mt-8">
              <BorderButton btnText="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SalesContact;
