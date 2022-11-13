import React from "react";
import { motion as m } from "framer-motion";

type buttonProps = {
  btnText: string;
  url?: string;
};

const BorderButton = ({ btnText, url }: buttonProps) => {
  return (
    <a href={url}>
      <button className="border border-black py-2 px-6 rounded-full ease-in-out duration-300 hover:bg-blue-400 hover:text-white hover:border-blue-400">
        {btnText}
      </button>
    </a>
  );
};

export default BorderButton;
