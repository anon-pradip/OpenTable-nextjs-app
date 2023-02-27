import { Cuisine, Location, PRICE } from "@prisma/client";
import React from "react";

interface Restaurant {
  id: number;
  main_image: string;
  name: string;
  cuisine: Cuisine;
  location: Location;
  slug: string;
  price: PRICE;
}
const SearchSidebar = () => {
  return (
    <div>
      {/* REGIONS */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold underline">Regions</h1>
        <div
          className="flex flex-col justify-center items-center space-y-1
          "
        >
          <p>Lcations</p>
        </div>
        <hr className="h-[1px] bg-gray-300" />
      </div>
      {/* CUISINES */}
      <div className="mt-2 flex flex-col justify-center items-center">
        <h1 className="font-bold underline">Cuisine</h1>
        <div
          className="flex flex-col justify-center items-center space-y-1
          "
        >
          <p>Cuisines</p>
        </div>
        <hr className="h-[1px] bg-gray-300" />
      </div>

      {/* PRICE */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold">Price</h1>
        <div className="border grid grid-cols-3 divide-x content-end">
          <div className="px-2">01</div>
          <div className="px-2">02</div>
          <div className="px-2">03</div>
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
