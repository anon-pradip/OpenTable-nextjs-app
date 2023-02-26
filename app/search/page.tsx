import { PrismaClient } from "@prisma/client";
import React from "react";
import HeroSection from "./components/HeroSection";
import RestaurantCard from "./components/RestaurantCard";
import SearchSidebar from "./components/SearchSidebar";

const prisma = new PrismaClient();

const fetchRestaurant = async (city: string | undefined) => {
  const select = {
    id: true,
    main_image: true,
    name: true,
    cuisine: true,
    location: true,
    slug: true,
  };
  if (!city) {
    return prisma.restaurant.findMany({
      select,
    });
  }
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const page = async ({ searchParams }: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurant(searchParams.city);
  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start md:flex-row md:space-y-0 md:space-x-3 py-3 px-4">
        {/* LEFT SECTION */}
        <SearchSidebar />

        {/* RIGHT SECTION */}
        {restaurants.length ? (
          <RestaurantCard />
        ) : (
          <p>Sorry! No results found</p>
        )}
      </div>
    </div>
  );
};

export default page;
