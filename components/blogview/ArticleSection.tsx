import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  hasText: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Empowered Women in Tech",
    excerpt:
      "Aliquam porta nullam amet maecenas pulvinar tempor nisi et purus sit dolor adipiscing sed sit.",
    date: "01 March 2021",
    image: "/blog/female-entrepreneur.png",
    hasText: true,
  },
  {
    id: 2,
    title: "Collaboration Across Cultures",
    excerpt:
      "Quisque sagittis orci ut diam condimentum, vel euismod erat placerat.",
    date: "15 April 2021",
    image: "/blog/ethnic-hands-typing.png",
    hasText: true,
  },
  {
    id: 3,
    title: "", // no text, image-only
    excerpt: "",
    date: "",
    image: "/blog/closeup-female-typing.png",
    hasText: false,
  },
];

export default function ArticleSection() {
  return (
    <section className="w-full text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className={article.hasText ? "md:col-span-5" : "md:col-span-2"}>
              <div className="p-4">
                {article.hasText ? (
                  <Link
                    href="#"
                    className="flex items-start space-x-4 hover:opacity-80 transition-opacity">
                    <div className="flex-shrink-0">
                      <Image
                        src={article.image}
                        alt={article.title}
                        width={120}
                        height={80}
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <h3 className="font-medium text-lg">{article.title}</h3>
                      <p className="text-xs text-gray-400 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <span className="text-xs text-gray-500 mt-auto">
                        {article.date}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <Link
                    href="#"
                    className="block hover:opacity-80 transition-opacity">
                    <Image
                      src={article.image}
                      alt=""
                      width={100}
                      height={20} // reduced vertical size
                      className="object-cover rounded-md"
                    />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
