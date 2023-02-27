import Price from "@/components/Price";
import { Cuisine, Location, PRICE } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
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

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  return (
    <div className=" flex flex-col space-y-3 space-x-0 md:flex-row md:space-x-3 md:space-y-0">
      <div>
        <Image
          src={restaurant.main_image}
          alt="restaurant main image"
          width={200}
          height={200}
          className="h-36 w-48 object-cover"
        />
      </div>
      <div className="flex flex-col space-y-2 justify-start items-center">
        <p>{restaurant.name}</p>
        <p>**** Awesome</p>
        <div className="flex gap-x-1">
          <span>
            <Price price={restaurant.price} />
          </span>
          <span className=" capitalize font-bold">
            {restaurant.cuisine.name}
          </span>
          <span className=" capitalize">{restaurant.location.name}</span>
        </div>
        <Link
          href={`/restaurant/${restaurant.slug}`}
          className=" underline  text-blue-800"
        >
          View more information
        </Link>
      </div>
    </div>
  );
};

export default RestaurantCard;
