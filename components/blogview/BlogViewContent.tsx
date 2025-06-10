import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogGrid from "../blog/BlogGrid";
import { BlogPost } from "../blog/BlogCard";
import ArticleSection from "./ArticleSection";

const BlogViewContent: React.FC = () => {
  const blogPosts: BlogPost[] = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "Integer Maecenas Eget Viverra",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `/blog/blogimage${i + 1}.jpg`,
    date: "2 days ago",
  }));

  return (
    <div className="min-h-screen text-white">
      <nav className="flex items-center px-6 py-4 text-sm">
        <Link href="/" className="text-gray-400 hover:text-white">
          Home
        </Link>
        <Link
          href="/blog"
          className="flex items-center ml-4 text-gray-400 hover:text-white">
          <span className="mr-2">←</span>
          <span>Adipiscing lacus dui rutrum quam. In morbi facilisis elit</span>
        </Link>
      </nav>
      {/* ── First Blog Section ── */}
      <section className="px-6">
        <div className="my-12 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/blog/blog-view-laptop1.png"
            alt="Laptop with glowing screen in dark environment"
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="pb-8 space-y-4 text-gray-300">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-white">
            Adipiscing lacus dui rutrum quam. In morbi facilisis elit.
          </h1>
          <p className="text-gray-400 mb-8">13 Sept, 2021</p>
          <div className="space-y-4">
            <p style={{ color: "#CCCCCC" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
              suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
              maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat. In iaculis arcu eros, eget tempus orci
              facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
              amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat. In
              iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
              suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
              maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat. In iaculis arcu eros, eget tempus orci
              facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
              amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat. In
              iaculis arcu eros, eget tempus orci facilisis id.
            </p>
          </div>
        </article>
      </section>
      {/* ── Second Blog Section ── */}

      <section className="px-6">
        <div className="my-12 relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/blog/blog-view-laptop2.png"
            alt="Colorful laptop with vibrant RGB display and keyboard lighting"
            fill
            className="object-cover shadow-2xl"
            priority
          />
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              boxShadow:
                "0 0 30px rgba(255, 0, 255, 0.3), 0 0 60px rgba(0, 255, 255, 0.2)",
            }}
          />
        </div>

        <article className="pb-8 space-y-4 text-gray-300">
          <div className="space-y-4">
            <p style={{ color: "#CCCCCC" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
              vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum
              auctor ornare leo, non suscipit magna interdum eu. Curabitur
              pellentesque nibh nibh, at maximus ante fermentum sit amet.
              Pellentesque commodo lacus at sodales sodales. Quisque sagittis
              orci ut diam condimentum, vel euismod erat placerat. In iaculis
              arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
              suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
              maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat. In iaculis arcu eros, eget tempus orci
              facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
              amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat. In
              iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
              suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
              maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat. In iaculis arcu eros, eget tempus orci
              facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
              amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat. In
              iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
              hendrerit urna. Pellentesque sit amet sapien fringilla, mattis
              ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
              Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
              suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at
              maximus ante fermentum sit amet. Pellentesque commodo lacus at
              sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat. In iaculis arcu eros, eget tempus orci
              facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit
              amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet. Pellentesque commodo lacus at sodales sodales. Quisque
              sagittis orci ut diam condimentum, vel euismod erat placerat. In
              iaculis arcu eros, eget tempus orci facilisis id.
            </p>
          </div>
        </article>
      </section>

<<<<<<< HEAD
      {/* ── Other Blogs Grid ── */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">Other Blogs</h1>
          {/* <p className="text-gray-300 text-lg">
            At EmailGigga, we take immense pride in providing a cutting-edge
            email marketing solution that empowers businesses to achieve
            unparalleled success. But dont just take our word for it - listen to
            what our valued users have to say about their experience with
            EmailGigga!
          </p> */}
=======
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mb-12">
          <h1 className="text-5xl font-bold mb-4 text-white">Other Blogs</h1>
>>>>>>> 1c28eb03d8b868877cdffd66f40c2c7f3ac069fc
        </div>
        <BlogGrid posts={blogPosts} columns={3} />
      </section>

      {/* ── Article Section ── */}
      <ArticleSection />
    </div>
  );
};

export default BlogViewContent;
