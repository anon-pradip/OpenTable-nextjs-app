"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import errorPic from "../../public/icons/error.png";

export const error = () => {
  return (
    <div className=" h-[89vh] bg-gray-200 flex justify-between px-24 items-center">
      <div className=" flex flex-col space-y-7">
        <p className=" text-red-500 text-6xl font-bold">404</p>
        <p className="text-2xl text-gray-700 tracking-wider">
          Sorry, we couldn't find the restaurant
        </p>
        <p className="text-gray-800 font-sans max-w-md">
          But don't worry, you can find plenty of other things on our homepage.
        </p>
        <Link
          href="/"
          className=" bg-blue-700 rounded-md px-4 py-2 text-center text-white max-w-max"
        >
          Back to homepage
        </Link>
      </div>
      <div>
        <Image
          src={errorPic}
          alt="error"
          height={200}
          width={200}
          className="h-72 w-72"
        />
      </div>
    </div>
  );
};

export default error;
