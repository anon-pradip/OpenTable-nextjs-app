import HeroSection from "@/components/HeroSection";
import React from "react";

const Loading = () => {
  return (
    <main>
      <HeroSection />
      <div className="mt-10 flex justify-center item-center gap-x-4 gap-y-4 py-3 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((num) => {
          return (
            <div
              key={num}
              className=" animate-pulse bg-blue-100 w-64 h-72 rounded overflow-hidden border cursor-pointer shadow-lg"
            ></div>
          );
        })}
      </div>
    </main>
  );
};

export default Loading;
