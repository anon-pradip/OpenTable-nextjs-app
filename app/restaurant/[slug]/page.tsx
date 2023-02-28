import { PrismaClient, Review } from "@prisma/client";
import Link from "next/link";
import React from "react";
import HeroSection from "./components/HeroSection";
import LeftPanel from "./components/LeftPanel";
import RightSection from "./components/RightSection";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  description: string;
  images: string[];
  reviews: Review[];
}

const fetchRestaurantByslug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      main_image: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });
  if (!restaurant) {
    throw new Error("no restaurant found");
  }
  return restaurant;
};

const page = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantByslug(params.slug);
  return (
    <div className=" flex flex-col bg-gray-200 pb-4">
      {/* Hero section */}
      <HeroSection />

      {/* body section */}
      <div className=" flex flex-col-reverse space-y-2 space-x-0 justify-center items-center md:flex-row md:justify-between md:items-start md:space-y-0 md:mx-11 md:space-x-6">
        {/* left panel */}
        <LeftPanel
          slug={restaurant.slug}
          name={restaurant.name}
          description={restaurant.description}
          images={restaurant.images}
        />

        {/* right=> make reservation section */}
        <RightSection />
      </div>
    </div>
  );
};

export default page;
