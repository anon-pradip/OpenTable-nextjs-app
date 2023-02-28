import React from "react";
import fullStar from "../public/full-star.png";
import halfStar from "../public/half-star.png";
import emptyStar from "../public/empty-tar.png";
import { claculateAverage } from "@/utils";
import { Review } from "@prisma/client";
import Image from "next/image";

const Stars = ({ reviews }: { reviews: Review[] }) => {
  const rating = claculateAverage(reviews);
  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      const difference = parseFloat((rating - i).toFixed(1));
      if (difference >= 1) stars.push(fullStar);
      else if (difference < 1 && difference > 0) {
        if (difference <= 0.2) stars.push(emptyStar);
        else if (difference > 0.2 && difference <= 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      } else {
        stars.push(emptyStar);
      }
      return stars.map((star) => {
        return <Image src={star} alt="" className="w-4 h-4 mr-1" />;
      });
    }
  };
  return <div className=" flex items-center">{renderStars()}</div>;
};

export default Stars;
