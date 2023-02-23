import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 text-white to-blue-800 flex flex-col space-y-1 space-x-0 md:flex-row md:space-y-0 md:space-x-2 justify-center items-center py-2 rounded-sm">
      <input
        type="text"
        placeholder="State, city or town"
        className=" rounded-md px-2 h-9"
      />
      <button className=" px-4 py-2 bg-red-500 rounded-md">Let's go</button>
    </div>
  );
};

export default HeroSection;
