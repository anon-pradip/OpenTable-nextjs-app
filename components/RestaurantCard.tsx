import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RestaurantCardType } from "@/app/page";

interface Props {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <Link
      href="/restaurant/cozy5stars"
      className="text-center flex flex-col justify-center items-center px-2"
    >
      <Image
        src="/pic.png"
        alt="restaurant-card"
        height={200}
        width={200}
        className="shadow-lg rounded-md"
      />
      <p className=" capitalize mt-2 font-bold text-lg">
        Cozy 5 stars apartment
      </p>
      <hr />
      <p className=" text-gray-600">**** 77 reviews</p>
      <hr />
      <p>Mexican $$$$ Toronto</p> <hr />
      <p className=" font-bold text-sm">Booked 3 times today</p>
    </Link>
  );
};

export default RestaurantCard;
