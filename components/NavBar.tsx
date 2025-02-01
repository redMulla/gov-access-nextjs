"use client";
import React, { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full py-4 flex justify-between align-center px-6 fixed bg-white bg-opacity-25 backdrop-blur-sm max-w-[100vw]">
      <div className="sm:hidden my-auto">
        <button
          onClick={toggleMenu}
          className="flex flex-col space-y-1.5 focus:outline-none"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "transform translate-y-2 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-black transition-transform duration-300 ${
              isOpen ? "transform -translate-y-2 -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>
      <div>
        <img
          src="/images/Logo.svg"
          alt="logo"
          className="cursor-pointer my-auto"
        />
      </div>

      <div className=" flex-row gap-6 text-[15.8px] my-auto hidden sm:flex">
        <span>Start</span>
        <span>Run & Grow</span>
        <span>Learn</span>
        <span>Pricing</span>
      </div>

      <div className="flex flex-row gap-4 text-[15.8px]">
        <button className="py-2 px-4 rounded-full bg-gray-300">Login</button>
        <button className="py-2 px-4 rounded-full text-white bg-blue-700 hidden md:block">
          Register
        </button>
      </div>

      <div
        className={`sm:hidden transition-all duration-300 fixed top-16 left-0 w-[80%] bg-white min-h-[90vh] shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-2 pb-4 w-full text-center gap-3">
          <a href="#" className="hover:bg-gray-100 py-4">
            Start
          </a>
          <a href="#" className="hover:bg-gray-100 py-4">
            Run & Grow
          </a>
          <a href="#" className="hover:bg-gray-100 py-4">
            Learn
          </a>
          <a href="#" className="hover:bg-gray-100 py-4">
            Pricing
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
