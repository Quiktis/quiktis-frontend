import React from "react";
import { BlogPost } from "./BlogCard";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  columns?: number;
}

const BlogGrid: React.FC<BlogGridProps> = ({ posts, columns = 3 }) => {
  const colsClass = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
  }[columns];

  return (
    <div className={`grid gap-6 grid-cols-1 ${colsClass}`}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} blogLink={post.blogLink}/>
      ))}
    </div>
  );
};

export default BlogGrid;
