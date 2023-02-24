import React from "react";
import Link from "next/link";
import Image from "next/image";

const LeftPanel = ({
  slug,
  name,
  description,
  images,
}: {
  slug: string;
  name: string;
  description: string;
  images: string[];
}) => {
  return (
    <div className="rounded-sm flex flex-col space-y-4 px-1 py-3 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-w-2xl mt-4 md:-mt-10">
      {/* overview/menu */}
      <div className="flex space-x-5">
        <Link href={`/restaurant/${slug}`}>Overview</Link>
        <Link href={`/restaurant/${slug}/menu`}>Menu</Link>
      </div>
      <hr />
      <div>
        <p className="text-3xl font-bold">{name}</p>
      </div>
      <hr />
      <div>***** 4.9 600 reviews</div>
      <p>{description}</p>
      <p className=" text-lg font-bold">{images.length} photos</p>
      <hr />
      <div className=" flex gap-3 flex-wrap">
        {images.map((image, indx) => {
          return (
            <Image
              key={indx}
              src={image}
              height={200}
              width={200}
              alt={name}
              className=" rounded-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-36 object-cover"
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftPanel;
