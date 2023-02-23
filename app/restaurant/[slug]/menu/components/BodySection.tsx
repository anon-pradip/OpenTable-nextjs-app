import React from "react";
import Link from "next/link";

const BodySection = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="rounded-sm flex flex-col space-y-4 px-1 py-3 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-w-2xl mt-4 md:-mt-10 w-full">
        {/* overview/menu */}
        <div className="flex space-x-5">
          <Link href="/restaurant/cozy5stars">Overview</Link>
          <Link href="/restaurant/cozy5stars/menu">Menu</Link>
        </div>
        <hr />
        <h1 className=" text-2xl font-bold">Menu</h1>
        <div className=" px-2 py-2 border max-w-md">
          <p className=" font-bold">Surf and Turf</p>
          <p>blah blah</p>
          <p className=" font-bold mt-4">$60.00</p>
        </div>
      </div>
    </div>
  );
};

export default BodySection;
