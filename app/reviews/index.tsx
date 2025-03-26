"use client";
import React from "react";
import DashboardNav from "@/components/dashboard/DashboardNav";
import RatingOverview from "@/components/Reviews/RatingOverview";
import ReviewsList from "@/components/Reviews/ReviewsList";

const ReviewsPage = () => {
  const overallRating = 4.0;
  const ratingsDistribution = [
    { label: "Excellent", percentage: 80 },
    { label: "Good", percentage: 60 },
    { label: "Average", percentage: 50 },
    { label: "Below Average", percentage: 30 },
    { label: "Poor", percentage: 20 },
  ];

  const reviewsData = [
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
    {
      title: "Lorem ipsum",
      date: "14 May 2024",
      content:
        "Lorem ipsum dolor sit amet consectetur. Massa vulputate consectetur elementum bibendum dictum. Ultrices facilisis in enim senectus. Curabitur urna nunc scelerisque tincidunt sed mattis donec. Arcu rhoncus aliquet a orci. Faucibus auctor libero integer laoreet nullam quam cursus. Eu mauris aliquam suspendisse.",
      image: "/beautifulwoman.png",
    },
  ];

  return (
    <main className="bg-transparent text-white min-h-screen py-10">
      <DashboardNav />

      <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-4">Reviews</h1>

      <RatingOverview
        overallRating={overallRating}
        ratingsDistribution={ratingsDistribution}
      />

      <div className="mt-8 bg-[#1A1A1A] p-4 sm:p-6 rounded-lg">
        <ReviewsList reviews={reviewsData} />
      </div>
    </main>
  );
};

export default ReviewsPage;
