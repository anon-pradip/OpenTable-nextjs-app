import { Review } from "@prisma/client";

export const claculateAverage = (reviews: Review[]) => {
  console.log(reviews);
  if (!reviews.length) {
    return 0;
  }
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  ).toFixed(1);
};
