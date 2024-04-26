// components/ReviewList.js
import React from "react";
import ReviewUI from "./ReviewUI";

const ReviewList = ({ reviews }: any) => {
  return (
    <ul>
      {reviews.map((review: any) => (
        <li key={review.id}>
          <ReviewUI rating={review.rating} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
