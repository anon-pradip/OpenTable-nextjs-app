import { Cuisine, Location } from "@prisma/client";
import Link from "next/link";
import React from "react";

const SearchSidebar = ({
  locations,
  cuisines,
}: {
  locations: Location[];
  cuisines: Cuisine[];
}) => {
  return (
    <div className="">
      {/* REGIONS */}
      <div className=" border px-2 pb-2 rounded border-gray-400">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-lg underline">Regions</h1>
          <div
            className="flex flex-col justify-center items-center space-y-1
          "
          >
            {locations.map((location) => {
              return (
                <Link
                  href={{
                    pathname: "/search",
                    query: { city: location.name },
                  }}
                  key={location.id}
                  className="capitalize bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-1 px-4 rounded"
                >
                  {location.name}
                </Link>
              );
            })}
          </div>
          <hr className="h-[1px] bg-gray-300" />
        </div>
        <hr />
        {/* CUISINES */}
        <div className="mt-2 flex flex-col justify-center items-center">
          <h1 className="font-bold underline text-lg">Cuisine</h1>
          <div
            className="flex flex-col justify-center items-center space-y-1
          "
          >
            {cuisines.map((cuisine) => {
              return (
                <p
                  key={cuisine.id}
                  className="capitalize bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-1 px-4 rounded"
                >
                  {cuisine.name}
                </p>
              );
            })}
          </div>
          <hr className="h-[1px] bg-gray-300" />
        </div>
      </div>

      {/* PRICE */}
      <div className="mt-2 flex flex-col justify-center items-center border px-2 pb-2 rounded border-gray-400">
        <h1 className="font-bold mt-4 underline text-lg">Price</h1>
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
