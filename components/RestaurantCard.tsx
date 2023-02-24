import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RestaurantCardType } from "@/app/page";
import Price from "./Price";

interface Props {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <div className=" flex flex-col gap-y-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <div>
          <Image
            src={restaurant.main_image}
            alt="restaurant-card-image"
            height={200}
            width={200}
            className=" h-36 object-cover"
          />
        </div>
        <div className="px-1">
          <p className=" font-bold text-lg">{restaurant.name}</p>
          <p>**** 33 reviews</p>
          <div className=" flex space-x-2 capitalize">
            <p>{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>Ottawa</p>
          </div>
          <p className=" font-bold">Booked 3 days ago</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
