import React from "react";

const currentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-blue-400 mt-32">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href="https://flowbite.com/"
          className="flex items-center mb-4 sm:mb-0"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Nelspruit Properties
          </span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-white sm:mb-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-white-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center">
        © {currentYear()}{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          Nelspruit Properties
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
