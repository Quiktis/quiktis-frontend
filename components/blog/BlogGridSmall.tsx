<<<<<<< HEAD
import React from "react";
import { BlogPost } from "./BlogCard";
import BlogCard from "./BlogCard";

interface BlogGridSmallProps {
  posts: BlogPost[];
}

const BlogGridSmall: React.FC<BlogGridSmallProps> = ({ posts }) => {
  const sliced = posts.slice(0, 6);
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {sliced.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGridSmall;
=======
import React from "react";
import { BlogPost } from "./BlogCard";
import BlogCard from "./BlogCard";

interface BlogGridSmallProps {
  posts: BlogPost[];
}

const BlogGridSmall: React.FC<BlogGridSmallProps> = ({ posts }) => {
  const sliced = posts.slice(0, 6);
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {sliced.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGridSmall;
>>>>>>> 1c28eb03d8b868877cdffd66f40c2c7f3ac069fc
