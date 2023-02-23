import Link from "next/link";
import React from "react";
import HeroSection from "./components/HeroSection";
import LeftPanel from "./components/LeftPanel";
import RightSection from "./components/RightSection";

const page = () => {
  return (
    <div className=" flex flex-col bg-gray-200 pb-4">
      {/* Hero section */}
      <HeroSection />

      {/* body section */}
      <div className=" flex flex-col-reverse space-y-2 space-x-0 justify-center items-center md:flex-row md:justify-between md:items-start md:space-y-0 md:mx-11 md:space-x-6">
        {/* left panel */}
        <LeftPanel />

        {/* right=> make reservation section */}
        <RightSection />
      </div>
    </div>
  );
};

export default page;
