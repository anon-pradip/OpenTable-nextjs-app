import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Review } from "@prisma/client";
import { claculateAverage } from "@/utils";

const LeftPanel = ({
  slug,
  name,
  description,
  images,
  reviews,
}: {
  slug: string;
  name: string;
  description: string;
  images: string[];
  reviews: Review[];
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
      <div className="grid grid-cols-3 divide-x divide-black max-w-max border border-black text-center font-semibold">
        <p className="">*****</p>
        <p className=" ">{claculateAverage(reviews)}</p>
        <p className=" px-2">
          {reviews.length} review
          {reviews.length > 1 ? "s" : ""}
        </p>
      </div>
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
      <hr />
      <div className=" flex flex-col space-y-2">
        <p className=" text-3xl font-bold font-sans">
          What {reviews.length}{" "}
          {reviews.length > 1 ? "people are" : "person is"} saying{" "}
        </p>
        {/* CONTAINER */}
        <div className=" flex flex-col space-y-3">
          {reviews.map((review) => {
            return (
              <div className=" flex flex-col space-y-1 md:flex-row md:space-x-6 md:space-y-0 px-2 py-2 shadow-md border-t-2">
                <div className=" flex flex-col w-32 break-words">
                  <p className="bg-blue-500 font-bold text-white rounded-full text-center font-mono max-w-max w-12 p-2">
                    <span>{review.first_name[0]}</span>
                    <span>{review.last_name[0]} </span>
                  </p>
                  <p className="">
                    <span>{review.first_name}</span>
                    <span className="ml-1">{review.last_name}</span>
                  </p>
                </div>

                {/* CONTENT */}
                <div className=" flex flex-col space-y-2 max-w-md">
                  <p>*****</p>
                  <p>{review.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
