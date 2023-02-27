import { Cuisine, Location } from "@prisma/client";
import React from "react";

const SearchSidebar = ({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) => {
  return (
    <div>
      {/* REGIONS */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold underline">Regions</h1>
        <div
          className="flex flex-col justify-center items-center space-y-1
          "
        >
          {locations.map((location) => {
            return (
              <p key={location.id} className="capitalize">
                {location.name}
              </p>
            );
          })}
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
          {cuisines.map((cuisine) => {
            return (
              <p key={cuisine.id} className="capitalize">
                {cuisine.name}
              </p>
            );
          })}
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
