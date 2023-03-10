"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Searchbar = () => {
  const [location, setLocation] = useState("");
  const router = useRouter();

  return (
    <div className=" flex flex-col space-x-0 space-y-2 md:flex-row md:space-y-0 md:space-x-2">
      <input
        type="text"
        placeholder="Search for city, location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className=" px-3 rounded-sm placeholder:text-gray-500 text-black"
      />
      <button
        className=" px-6 py-2.5 text-white rounded-full bg-pink-500 hover:bg-pink-600"
        onClick={() => {
          if (location === "") {
            return;
          }
          router.push(`/search?city=${location}`);
          setLocation("");
        }}
      >
        Let's Go
      </button>
    </div>
  );
};

export default Searchbar;
