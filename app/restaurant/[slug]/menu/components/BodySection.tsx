import React from "react";
import Link from "next/link";
import { Item } from "@prisma/client";

const BodySection = ({ slug, menu }: { slug: string; menu: Item[] }) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="rounded-sm flex flex-col space-y-4 px-1 py-3 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-w-2xl mt-4 md:-mt-10 w-full">
        {/* overview/menu */}
        <div className="flex space-x-5">
          <Link href="/restaurant/cozy5stars">Overview</Link>
          <Link href={`/restaurant/${slug}/menu`}>Menu</Link>
        </div>
        <hr />
        <h1 className=" text-2xl font-bold">Menu</h1>
        {menu.length ? (
          <div className=" flex items-center justify-center gap-3 flex-wrap">
            {menu.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col space-y-3 px-2 border border-gray-700 rounded-sm w-80"
                >
                  <p className=" text-lg font-bold">{item.name}</p>
                  <p className=" text-gray-800">{item.description}</p>
                  <p className=" font-bold text-lg mt-3">{item.price}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-3xl font-bold">
            This restaurant doesn't have any menu
          </p>
        )}
      </div>
    </div>
  );
};

export default BodySection;
