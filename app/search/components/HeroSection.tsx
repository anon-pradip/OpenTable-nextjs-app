import Searchbar from "@/components/Searchbar";
import React from "react";

const HeroSection = () => {
  return (
    <div
      className="bg-gradient-to-r from-gray-900 text-white to-blue-800 flex justify-center items-center
      py-8 rounded-sm"
    >
      <Searchbar />
    </div>
  );
};

export default HeroSection;
