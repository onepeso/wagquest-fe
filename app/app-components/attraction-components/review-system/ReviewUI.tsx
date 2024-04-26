// components/Review.js
import React from "react";

const ReviewUI = ({ rating }: any) => {
  return (
    <div>
      {Array(rating)
        .fill(null)
        .map((_, i) => (
          <span key={i}>★</span>
        ))}
    </div>
  );
};

export default ReviewUI;
