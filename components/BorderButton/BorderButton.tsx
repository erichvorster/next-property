import React from "react";

type buttonProps = {
  btnText: string;
  url?: string;
};

const BorderButton = ({ btnText, url }: buttonProps) => {
  return (
    <a href={url}>
      <button className="border border-black py-2 px-6 rounded-full ease-in-out duration-300 hover:bg-black hover:text-white">
        {btnText}
      </button>
    </a>
  );
};

export default BorderButton;
