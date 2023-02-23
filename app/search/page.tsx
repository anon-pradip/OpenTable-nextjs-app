import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroSection from "./components/HeroSection";
import RestaurantCard from "./components/RestaurantCard";
import SearchSidebar from "./components/SearchSidebar";

const page = () => {
  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start md:flex-row md:space-y-0 md:space-x-3 py-3 px-4">
        {/* LEFT SECTION */}
        <SearchSidebar />

        {/* RIGHT SECTION */}
        <RestaurantCard />
      </div>
    </div>
  );
};

export default page;
