import React from "react";

const NavBar = () => {
  return (
    <div className="w-full py-4 flex justify-between align-center border-black border-b px-6">
      <div>
        <img
          src="/images/Logo.svg"
          alt="logo"
          className="cursor-pointer my-auto"
        />
      </div>

      <div className="flex flex-row gap-6 text-[15.8px] my-auto">
        <span>Start</span>
        <span>Run & Grow</span>
        <span>Learn</span>
        <span>Pricing</span>
      </div>

      <div className="flex flex-row gap-4 text-[15.8px]">
        <button className="py-2 px-4 rounded-full bg-gray-300">Login</button>
        <button className="py-2 px-4 rounded-full text-white bg-blue-700">
          Register
        </button>
      </div>
    </div>
  );
};

export default NavBar;
