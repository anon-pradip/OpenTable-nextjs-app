import HeroSection from "@/components/HeroSection";
import { PRICE, PrismaClient } from "@prisma/client";
import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import SearchSidebar from "./components/SearchSidebar";

const prisma = new PrismaClient();

interface searchParams {
  city: string;
  location: string;
  price: PRICE;
  cuisine: string;
}

const fetchRestaurantByCity = async (searchParams: searchParams) => {
  console.log(searchParams);
  const where: any = {};

  if (searchParams.city) {
    const location = {
      name: { equals: searchParams.city.toLowerCase() },
    };
    where.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = { name: { equals: searchParams.cuisine.toLowerCase() } };
    where.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      equals: searchParams.price,
    };
    where.price = price;
  }

  const select = {
    id: true,
    main_image: true,
    name: true,
    cuisine: true,
    location: true,
    slug: true,
    price: true,
  };
  return prisma.restaurant.findMany({
    where,
    select,
  });
};

const fetchLocations = async () => {
  const locations = await prisma.location.findMany();
  return locations;
};

const fetchCuisines = async () => {
  const cuisines = await prisma.cuisine.findMany();
  return cuisines;
};

const SearchPage = async ({
  searchParams,
}: {
  searchParams: {
    city: string;
    location: string;
    price: PRICE;
    cuisine: string;
  };
}) => {
  const restaurants = await fetchRestaurantByCity(searchParams);

  const cuisines = await fetchCuisines();
  const locations = await fetchLocations();

  return (
    <div>
      <HeroSection />  
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start md:flex-row md:space-y-0 md:space-x-3 py-3 px-4">
        <SearchSidebar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        {restaurants?.length ? (
          <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-8 place-items-center container">
            {restaurants.map((restaurant) => {
              return (
                <RestaurantCard restaurant={restaurant} key={restaurant.id} />
              );
            })}
          </div>
        ) : (
          <p>Sorry! No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
