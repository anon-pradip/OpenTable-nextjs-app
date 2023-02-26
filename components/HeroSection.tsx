"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input, Button } from "./exportFiles";
import Searchbar from "./Searchbar";

const HeroSection = ({ params }: any) => {
  console.log(params);
  const [location, setLocation] = useState("");
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r from-gray-900 text-white to-blue-800 py-4 pb-6 mx-auto max-w-screen-xl">
      <div className="py-4 container flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-bold py-4">
          Find your table for any occasion
        </h1>
        <Searchbar />
      </div>
    </div>
  );
};

export default HeroSection;
