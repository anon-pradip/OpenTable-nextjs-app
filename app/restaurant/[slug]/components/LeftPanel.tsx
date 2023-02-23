import React from "react";
import Link from "next/link";

const LeftPanel = () => {
  return (
    <div className="rounded-sm flex flex-col space-y-4 px-1 py-3 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] max-w-2xl mt-4 md:-mt-10">
      {/* overview/menu */}
      <div className="flex space-x-5">
        <Link href="/restaurant/cozy5stars">Overview</Link>
        <Link href="/restaurant/cozy5stars/menu">Menu</Link>
      </div>
      <hr />
      <div>
        <p className="text-3xl font-bold">Milestone Grill</p>
      </div>
      <hr />
      <div>***** 4.9 600 reviews</div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos nulla
        saepe voluptatum quia ducimus sit aliquam mollitia natus, velit
        temporibus aliquid eveniet, non placeat, ullam quas quae cupiditate
        consequuntur eum? Explicabo quis autem earum voluptatibus in
        perspiciatis recusandae odit nulla. Aut perspiciatis nesciunt error
        saepe dolor quisquam totam, dolorem autem facilis eaque laudantium enim
        velit blanditiis magnam. Aliquam, laudantium asperiores! Alias,
        laboriosam. Aspernatur velit facilis voluptatibus, alias enim hic? Dicta
        velit veniam doloremque asperiores, architecto ipsa magnam voluptas
        similique! Odit quo at placeat quibusdam similique modi eum perferendis.
        Praesentium, fugiat!
      </p>
      <p className=" text-lg font-bold">5 photos</p>
      <hr />
      <p>photos section</p>
    </div>
  );
};

export default LeftPanel;
