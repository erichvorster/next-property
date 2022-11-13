import React from "react";

type AppProps = {
  btnText: string;
};

const UndButton = ({ btnText }: AppProps) => {
  return (
    <a
      href="#"
      className="font-display max-w-sm text-lg font-bold leading-tight"
    >
      <span className="link link-underline link-underline-black text-black">
        {" "}
        {btnText}{" "}
      </span>
    </a>
  );
};

export default UndButton;
