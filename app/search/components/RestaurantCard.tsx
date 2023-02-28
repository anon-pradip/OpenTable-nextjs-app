import Price from "@/components/Price";
import Stars from "@/components/Stars";
import { claculateAverage } from "@/utils";
import { Cuisine, Location, PRICE, Review } from "@prisma/client";
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
  reviews: Review[];
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const renderRating = () => {
    const rating = claculateAverage(restaurant.reviews);
    if (rating > 4) {
      return "Awesome";
    }
    if (rating <= 4 && rating > 3) return "Good";
    if (rating <= 3 && rating > 2) return "Average";
    return "";
  };

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
      <div className="flex flex-col space-y-2 justify-center items-start">
        <p>{restaurant.name}</p>
        <div className="flex space-x-2 justify-center items-center">
          <div>
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className=" capitalize font-bold">{renderRating()}</p>
        </div>
        <div className="flex gap-x-1 justify-start items-start">
          <span>
            <Price price={restaurant.price} />
          </span>
          <span className=" capitalize font-bold">
            {restaurant.cuisine.name}
          </span>
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
