import Image from "next/image";
import React from "react";
import Link from "next/link";

export interface FeaturedPost {
  title: string; // Used for alt text
  image: string;
  date: string; // e.g., "1 Month Ago"
  excerpt: string; // e.g., "Tick one more destination..."
  description: string; // paragraph below the prominent line
}

export interface RecentPost {
  id: number;
  title: string;
  image: string;
  date: string; // e.g., "21 March 2021"
  excerpt: string;
}

interface FeaturedPostsProps {
  featured: FeaturedPost;
  recent: RecentPost[];
}

const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ featured, recent }) => (
  <div className="w-full">
    {/* 
      Mobile-first: single-column.
      At sm and up: two columns (60%/40%).
    */}
    <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-[3fr_2fr]">
      {/* Featured Post */}
      <div className="flex flex-col w-full">
        <div className="relative w-full h-[200px] overflow-hidden sm:h-[400px]">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="mt-2 px-4 sm:px-0">
          <p className="text-xs text-gray-400">{featured.date}</p>
          <p className="text-xl font-bold text-white mt-1">
            {featured.excerpt}
          </p>
          <p className="text-sm text-gray-300 mt-1">{featured.description}</p>
        </div>
      </div>

      {/* Recent Posts */}
      <div
        className={`
          grid gap-4 w-full
          grid-cols-1 auto-rows-auto
          sm:grid-rows-4 sm:grid-cols-1
        `}>
        {recent.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className={`
              flex flex-col gap-4
              sm:flex-row sm:gap-4 sm:items-center
              w-full
            `}>
            <div className="relative w-full h-[150px] overflow-hidden sm:w-1/2 sm:h-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-4 sm:px-0 w-full sm:w-1/2">
              <h3 className="font-bold text-sm text-white">{post.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{post.excerpt}</p>
              <p className="text-xs text-gray-400 mt-1">{post.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default FeaturedPosts;
