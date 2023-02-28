import { Review } from "@prisma/client";

export const claculateAverage = (reviews: Review[]) => {
  if (!reviews) {
    return 0;
  }
  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
