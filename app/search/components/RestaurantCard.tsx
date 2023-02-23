import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestaurantCard = () => {
  return (
    <div>
      <div className=" flex flex-col space-y-3 space-x-0 md:flex-row md:space-x-3 md:space-y-0">
        <div>
          <Image src="/pic.png" alt="hello" width={200} height={200} />
        </div>
        <div className="flex flex-col space-y-2 justify-start items-center">
          <p>Aliana Restaurant</p>
          <p>**** Awesome</p>
          <p>$$$ Mexican Ottawa</p>
          <Link href="/restaurant/mont-grill">View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
