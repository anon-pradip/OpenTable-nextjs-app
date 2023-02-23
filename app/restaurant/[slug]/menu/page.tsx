import Link from "next/link";
import React from "react";
import HeroSection from "../components/HeroSection";
import BodySection from "./components/BodySection";

const ResataurantMenu = () => {
  return (
    <div className=" flex flex-col pb-11">
      {/* Hero section */}
      <HeroSection />

      {/* body section */}
      <BodySection />
    </div>
  );
};

export default ResataurantMenu;
