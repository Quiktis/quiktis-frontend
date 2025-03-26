"use client";
import React from "react";
import ReviewCard from "@/components/Reviews/ReviewCard";

interface Review {
  title: string;
  date: string;
  content: string;
  image?: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, idx) => (
          <ReviewCard
            key={idx}
            title={review.title}
            date={review.date}
            content={review.content}
            image={review.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewsList;
