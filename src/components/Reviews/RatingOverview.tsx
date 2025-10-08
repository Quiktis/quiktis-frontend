"use client";
import React from "react";

interface RatingDistribution {
  label: string;
  percentage: number;
}

interface RatingOverviewProps {
  overallRating: number;
  ratingsDistribution: RatingDistribution[];
}

function getBarGradient(label: string): string {
  switch (label) {
    case "Excellent":
      return "bg-gradient-to-r from-green-400 to-green-600";
    case "Good":
      return "bg-gradient-to-r from-lime-400 to-lime-600";
    case "Average":
      return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    case "Below Average":
      return "bg-gradient-to-r from-orange-400 to-orange-600";
    case "Poor":
      return "bg-gradient-to-r from-red-400 to-red-600";
    default:
      return "bg-orange-500";
  }
}

const RatingOverview: React.FC<RatingOverviewProps> = ({
  overallRating,
  ratingsDistribution,
}) => {
  const displayedRating = overallRating.toFixed(1);
  const starCount = Math.round(overallRating);

  return (
    <section className="mb-8 bg-transparent">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* LEFT*/}
        <div className="flex flex-col items-center min-w-[120px]">
          <div className="text-8xl font-extrabold">{displayedRating}</div>
          <div className="flex mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <svg
                key={i}
                className={`h-9 w-9 fill-current ${
                  i < starCount ? "text-yellow-400" : "text-gray-500"
                }`}
                viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.431L24 9.587l-6 5.848L19.335 24 12 20.012 4.665 24 6 15.435 0 9.587l8.332-1.569L12 .587z" />
              </svg>
            ))}
          </div>
        </div>

        {/* RIGHT*/}
        <div className="space-y-3 w-full md:w-auto">
          {ratingsDistribution.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="w-24 text-sm font-medium">{item.label}</span>
              <div className="relative w-full md:w-[300px] h-4 bg-gray-600 rounded-full overflow-hidden">
                <div
                  className={`absolute left-0 top-0 h-full ${getBarGradient(
                    item.label
                  )}`}
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingOverview;
