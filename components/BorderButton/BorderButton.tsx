import React from "react";
import { motion as m } from "framer-motion";

type buttonProps = {
  btnText: string;
  url?: string;
};

const BorderButton = ({ btnText, url }: buttonProps) => {
  return (
    <a href={url}>
      <button className="border py-2 px-6 rounded-full ease-in-out duration-300 bg-blue-400 hover:text-black text-white hover:bg-amber-200 border-blue-400 hover:border-black">
        {btnText}
      </button>
    </a>
  );
};

export default BorderButton;
