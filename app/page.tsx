import HeroSection from "@/components/HeroSection";
import RestaurantCard from "@/components/RestaurantCard";
import { Cuisine, Location, PRICE, PrismaClient } from "@prisma/client";

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });
  return restaurants;
};
export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <div className="">
      <HeroSection />
      <div className="mt-10 flex justify-center item-center gap-x-4 gap-y-4 py-3 flex-wrap">
        {restaurants.map((restaurant) => {
          return (
            <div key={restaurant.id} className=" shadow-lg">
              <RestaurantCard restaurant={restaurant} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
