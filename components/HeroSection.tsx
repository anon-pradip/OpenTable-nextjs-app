"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input, Button } from "./exportFiles";

const HeroSection = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r from-gray-900 text-white to-blue-800 py-4 pb-6 mx-auto max-w-screen-xl">
      <div className="py-4 container flex flex-col justify-center items-center">
        <h1 className=" text-4xl font-bold py-4">
          Find your table for any occasion
        </h1>
        <div className="flex flex-col space-x-0 space-y-1 md:flex-row md:space-y-0 md:space-x-2">
          <input
            placeholder="State, city or town"
            className="bg-white text-black rounded-sm px-2 w-60 md:w-96"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button
            ripple={true}
            className=" bg-red-500 whitespace-nowrap w-max"
            onClick={() => router.push("/search")}
          >
            Let's go
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
