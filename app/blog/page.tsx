import React from "react";
import {
  HeroBanner,
  SectionHeader,
  BlogGrid,
  BlogGridSmall,
  FeaturedPosts,
  CTABanner,
  FeatureBlock,
} from "@/components/blog";
import type { BlogPost } from "@/components/blog/BlogCard";
import type { FeaturedPost, RecentPost } from "@/components/blog/FeaturedPosts";

export default function BlogPage() {
  const backgroundImage = "/blog/family-boat-scenery.jpg";
  const featuredPostImage = "/blog/blogroad.jpg";

  const heroTitle = "INSIGHTS, TIPS & STORIES FROM THE WORLD OF EVENTS";
  const heroSubtitle =
    "Discover expert advice, platform updates, and behind-the-scenes stories to help you plan, promote, and sell out your next event.";

  const blogPosts: BlogPost[] = [{
    id: 1,
    title: "Quiktis Launch Story",
    excerpt: `We’re Live!
Today marks a major milestone for Quiktis as we officially launch the first version of our platform. Fans can now buy and sell tickets seamlessly for their favourite events, with an experience as easy as any traditional platform.`,
    image: `/quiktis-live.jpg`,
    date: "4 days ago",
    blogLink: "/blog/launch-story"
}]

  const featuredPost: FeaturedPost = {
    title: "Integer Maecenas Eget Viverra",
    image: featuredPostImage,
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
    
  ];

  return (
    <>
      <div
        className="hidden md:block z-10 absolute inset-x-0 top-0
                   h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[95vh]
                   blog-background-div"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 z-20"></div>

        <div className="relative z-40 flex flex-col items-center justify-center h-full text-center px-5 pt-12 md:pt-20 lg:pt-28">
          <h1
            className="text-[1.8em] max-sm:text-[1.3em] max-[390px]:text-[1.1em] md:text-[2.3em]
                       lg:text-[2.7em] xl:text-[3em] leading-[1.2em]
                       font-bold text-white">
            {heroTitle}
          </h1>
          <p className="mt-2 text-[1.2em] lg:w-[80%] mx-auto text-white/90">
            {heroSubtitle}
          </p>
        </div>
      </div>

      <div className="hidden md:block h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[95vh]"></div>

      <div className="block md:hidden mt-0 bg-[#0a0a0a]">
        <HeroBanner
          backgroundImage={backgroundImage}
          title={heroTitle}
          subtitle={heroSubtitle}
        />
      </div>

      <div className="mt-4 md:-mt-8 px-20 max-md:px-5">
        <SectionHeader
          title="Our Blog"
          subtitle={`At Quiktis, we’re building the future of event ticketing — combining the accessibility of traditional platforms with the power of emerging technologies like blockchain. Our mission is to make event access simpler, safer, and fairer for everyone.
`}
        />
        <BlogGrid posts={blogPosts} columns={3}/>
      </div>

      {/*<div className="mt-8 md:mt-16 px-20 max-md:px-5">
        <FeaturedPosts featured={featuredPost} recent={recentPosts} />
      </div>*/}

      {/*<div className="mt-8 md:mt-16 px-20 max-md:px-5">
        <BlogGrid posts={blogPosts} columns={3} />
      </div>*/}

      <div className="mt-8 md:mt-16 px-20 max-md:px-5">
        <CTABanner
          primaryAction={{ text: "Browse Cases", href: "#" }}
          secondaryAction={{ text: "Create Lead", href: "#" }}
        />
      </div>

      <div className="mt-8 md:mt-16 px-20 max-md:px-5 mb-[3em]">
        <FeatureBlock
          imageSrc="/quiktis-live.jpg"
          dateLabel="4 days ago"
          heading="Quiktis Launch Story"
          copy={`We’re Live!
Today marks a major milestone for Quiktis as we officially launch the first version of our platform. Fans can now buy and sell tickets seamlessly for their favourite events, with an experience as easy as any traditional platform.`}
          readMoreHref="/blog/launch-story"
        />
      </div>

      {/*<div className="mt-8 md:mt-16 px-20 max-md:px-5">
        <BlogGridSmall posts={blogPosts} />
      </div>*/}
    </>
  );
}
