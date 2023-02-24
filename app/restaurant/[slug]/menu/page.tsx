import HeroSection from "../components/HeroSection";
import BodySection from "./components/BodySection";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const findItems = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    throw new Error("cannot find  items");
  }
  return restaurant.items;
};

const ResataurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await findItems(params.slug);
  return (
    <div className=" flex flex-col pb-11">
      {/* Hero section */}
      <HeroSection />

      {/* body section */}
      <BodySection slug={params.slug} menu={menu} />
    </div>
  );
};

export default ResataurantMenu;
