<<<<<<< HEAD
import React from "react";
import { BlogPost } from "./BlogCard";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
  columns?: number; // defaults to 3
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
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
=======
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
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;
>>>>>>> 1c28eb03d8b868877cdffd66f40c2c7f3ac069fc
