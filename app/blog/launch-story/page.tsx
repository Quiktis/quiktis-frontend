import React from "react";
import BlogViewContent from "@/components/blogview/BlogViewContent";
import BlogViewComponent from "@/components/blogview/BlogViewComponent";
const BlogViewPage = () => {
  return (
    <div className="min-h-screen">
      <BlogViewComponent 
        bannerImage="/quiktis-live.jpg"
        blogTitle="Quiktis Launch Story"
        blogContent={`We’re Live!

Today marks a major milestone for Quiktis as we officially launch the first version of our platform. Fans can now buy and sell tickets seamlessly for their favourite events, with an experience as easy as any traditional platform. This is just the beginning. Soon, we’ll be integrating blockchain-powered programmable tickets and AI features to optimize pricing, eliminate fraud, and redefine how the world experiences live events.

Thank you to everyone who has believed in our vision. Join us as we decentralize ticketing and build the future of entertainment access.

Start your journey with Quiktis today!`}
dateAuthored="28 Jun, 2025"
        />
    </div>
  );
};

export default BlogViewPage;
