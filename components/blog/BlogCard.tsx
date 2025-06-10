import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <Link
    href="/blogview"
    className={`
      group block
      h-80
      bg-[#1E1E1E]
      flex flex-col
      rounded-[12px] overflow-hidden
      shadow-md

      border-2 border-white/30

      transition-transform hover:scale-[1.02]
    `}>
    <div className="flex-[3] relative w-full overflow-hidden">
      <Image src={post.image} alt={post.title} fill className="object-cover" />
    </div>

    <div className="flex-[2] p-3 flex flex-col">
      <h2 className="text-[1.125rem] font-semibold text-white leading-snug mb-1">
        {post.title}
      </h2>
      <p className="text-gray-400 text-[0.875rem] leading-tight mb-auto line-clamp-2">
        {post.excerpt}
      </p>
      <p className="text-gray-500 text-[0.75rem] mt-2 self-end">{post.date}</p>
    </div>
  </Link>
);

export default BlogCard;
