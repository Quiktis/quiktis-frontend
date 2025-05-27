// app/blog/page.tsx
import React from "react";
import {
  HeroBanner,
  SectionHeader,
  BlogGrid,
  BlogGridSmall,
  FeaturedPosts,
  CTABanner,
  FeatureBlock,
  // NewsletterForm,  // uncomment when ready
} from "@/components/blog";
import type { BlogPost } from "@/components/blog/BlogCard";
import type { FeaturedPost, RecentPost } from "@/components/blog/FeaturedPosts";

export default function BlogPage() {
  // 1. Hero data
  const heroImage = "/blog/blogroad.jpg";
  const heroTitle = "INSIGHTS, TIPS & STORIES FROM THE WORLD OF EVENTS";
  const heroSubtitle =
    "Discover expert advice, platform updates, and behind-the-scenes stories to help you plan, promote, and sell out your next event.";

  // 2. Main blogPosts array (9 items, blogimage1.jpg → blogimage9.jpg)
  const blogPosts: BlogPost[] = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "Integer Maecenas Eget Viverra",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: `/blog/blogimage${i + 1}.jpg`,
    date: "7 days ago",
  }));

  // 3. Featured + Recent posts data
  const featuredPost: FeaturedPost = {
    title: "Integer Maecenas Eget Viverra",
    image: "/blog/blogroad.jpg", // large left image
    date: "13 March 2021",
    excerpt:
      "Tick one more destination off of your bucket list with one of our most popular vacations in 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
  };

  const recentPosts: RecentPost[] = [
    {
      id: 1,
      title: "Integer Maecenas Eget Viverra",
      image: "/blog/blogwave.jpg",
      date: "13 March 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
    {
      id: 2,
      title: "Integer Maecenas Eget Viverra",
      image: "/blog/blogtype.jpg",
      date: "13 March 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
    {
      id: 3,
      title: "Integer Maecenas Eget Viverra",
      image: "/blog/blog-woman1.jpg",
      date: "13 March 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
    {
      id: 4,
      title: "Integer Maecenas Eget Viverra",
      image: "/blog/blog-woman2.jpg",
      date: "13 March 2023",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    },
  ];

  // 4. Text for FeatureBlock
  const featureParagraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta ex at sapien a consequat.",
    "Fusce felis consequat, ultricies nec, molestie nulla. Morbi sed erat vitae magna consequat.",
  ];

  return (
    <>
      {/* 1. HeroBanner uses blogroad.jpg */}
      <HeroBanner
        backgroundImage={heroImage}
        title={heroTitle}
        subtitle={heroSubtitle}
      />

      {/* 2. “Our Blog” header + first 3×3 grid */}
      <div className="mt-16">
        <SectionHeader
          title="Our Blog"
          subtitle="At EmailEdge, we take immense pride in providing a cutting-edge email marketing solution that empowers businesses to achieve unparalleled success. But don't just take our word for it — listen to what our valued users have to say about their experience with EmailEdge!"
        />
        <BlogGrid posts={blogPosts} columns={3} />
      </div>

      {/* 3. Featured + recent */}
      <div className="mt-16">
        <FeaturedPosts featured={featuredPost} recent={recentPosts} />
      </div>

      {/* 4. Repeat full 3×3 grid */}
      <div className="mt-16">
        <BlogGrid posts={blogPosts} columns={3} />
      </div>

      {/* 5. CTA Banner */}
      <div className="mt-16">
        <CTABanner
          primaryAction={{ text: "Browse Cases", href: "#" }}
          secondaryAction={{ text: "Create Lead", href: "#" }}
        />
      </div>

      {/* 6. Two-column feature block uses blog-typing.jpg */}
      <div className="mt-16">
        <FeatureBlock
          imageSrc="/blog/blog-typing.jpg"
          dateLabel="1 Month Ago"
          heading="Tick one more destination off of your bucket list with one of our most popular vacations in 2022"
          copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta ex at sapien a consequat. Fusce felis consequat, ultricies nec, molestie nulla. Morbi sed erat vitae magna consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta ex at sapien a consequat. Fusce felis consequat, ultricies nec, molestie nulla. Morbi sed erat vitae magna consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta ex at sapien a consequat. Fusce felis consequat, ultricies nec, molestie nulla. Morbi sed erat vitae magna consequat."
          readMoreHref="#"
        />
      </div>

      {/* 7. Final small 2×3 grid (blogimage1-6) */}
      <div className="mt-16">
        <BlogGridSmall posts={blogPosts} />
      </div>

      {/* 8. Newsletter signup (later) */}
      {/*
      <NewsletterForm
        heading="Subscribe to our newsletter to get latest news in your inbox."
        backgroundImage="/blog/blog-beach.jpg"
      />
      */}
    </>
  );
}
