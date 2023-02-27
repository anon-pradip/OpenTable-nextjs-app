// import { PrismaClient } from "@prisma/client";
// import React from "react";
// import HeroSection from "./components/HeroSection";
// import RestaurantCard from "./components/RestaurantCard";
// import SearchSidebar from "./components/SearchSidebar";

// const prisma = new PrismaClient();

// const fetchRestaurantByCity = async (city: string) => {
//   const select = {
//     id: true,
//     main_image: true,
//     name: true,
//     cuisine: true,
//     location: true,
//     slug: true,
//     price: true,
//   };
//   if (!city) {
//     return prisma.restaurant.findMany({
//       select,
//     });
//   }
//   return prisma.restaurant.findMany({
//     where: {
//       location: {
//         name: {
//           equals: city.toLowerCase(),
//         },
//       },
//     },
//     select,
//   });
// };

// const page = async ({ searchParams }: { searchParams: { city: string } }) => {
//   console.log(searchParams);
//   const restaurants = await fetchRestaurantByCity(searchParams?.city);
//   console.log(restaurants);

//   <div>
//     <HeroSection />
//     <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start md:flex-row md:space-y-0 md:space-x-3 py-3 px-4">
//       {/* LEFT SECTION */}
//       <SearchSidebar />

//       {/* RIGHT SECTION */}
//       {restaurants?.length ? (
//         <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 md:gap-8 place-items-center container">
//           {restaurants.map((restaurant) => {
//             return (
//               <RestaurantCard restaurant={restaurant} key={restaurant.id} />
//             );
//           })}
//         </div>
//       ) : (
//         <p>Sorry! No results found</p>
//       )}
//       <div>hello</div>
//     </div>
//   </div>;
// };

// export default page;

import HeroSection from "@/components/HeroSection";
import { PrismaClient } from "@prisma/client";
import React from "react";
import RestaurantCard from "./components/RestaurantCard";
import SearchSidebar from "./components/SearchSidebar";

const prisma = new PrismaClient();

const fetchRestaurantByCity = async (city: string) => {
  const select = {
    id: true,
    main_image: true,
    name: true,
    cuisine: true,
    location: true,
    slug: true,
    price: true,
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
  searchParams: { city: string };
}) => {
  const restaurants = await fetchRestaurantByCity(searchParams.city);

  const cuisines = await fetchCuisines();
  const locations = await fetchLocations();

  return (
    <div>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto flex flex-col justify-start items-start md:flex-row md:space-y-0 md:space-x-3 py-3 px-4">
        <SearchSidebar locations={locations} cuisines={cuisines} />
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
