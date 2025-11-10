import React from "react";
import Image from "next/image";

type Category = {
  id: number;
  title: string;
  icon: string;
  color: string;
  eventCount: string;
};

interface BrowseCategoryProps {
  categories?: Category[];
}

const defaultCategories: Category[] = [
  {
    id: 1,
    title: "Music",
    icon: "/icons/discover-music.svg",
    color: "#ec4899",
    eventCount: "44k Events",
  },
  {
    id: 2,
    title: "Conference",
    icon: "/icons/discover-conference.svg",
    color: "#eab308",
    eventCount: "550k Events",
  },
  {
    id: 3,
    title: "Concert",
    icon: "/icons/discover-concert.svg",
    color: "#22c55e",
    eventCount: "220k Events",
  },
];

const BrowseCategory: React.FC<BrowseCategoryProps> = ({
  categories = defaultCategories,
}) => {
  return (
    <section>
      <h2 className="text-white mb-6 md:mb-[49.3px] text-2xl md:text-[32px] font-medium">
        Browse Category
      </h2>

      {/* Mobile Layout */}
      <div className="md:hidden flex pb-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-[27px]">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 shadow-lg transition-transform duration-200 active:scale-95 
              p-4 flex flex-col justify-between cursor-pointer snap-start
              w-[210.2px] h-[132.04px] rounded-[14.8px]
              bg-white/[0.06] border-[0.3px] border-[#91949926] backdrop-blur-[14.6px]"
          >
            <div className="flex justify-start">
              <div className="w-[21.89px] h-[21.89px] relative flex items-center justify-center">
                <Image
                  src={category.icon}
                  alt={`${category.title} icon`}
                  fill
                  className="object-contain"
                  sizes="22px"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-medium text-[20px] mt-1">
                {category.title}
              </h3>
              <p className="font-medium text-[13px] text-[#666666] mt-[2px]">
                {category.eventCount}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex justify-between pb-4 overflow-x-auto scrollbar-hide gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex-1 min-w-0 max-w-[calc(33.333%-1rem)] 
              rounded-[24.34px] shadow-lg transition-transform duration-200 hover:scale-105 
              p-6 flex flex-col justify-between cursor-pointer
              bg-white/[0.06] border-[0.49px] border-[#91949926] backdrop-blur-[14.6px]
              h-[217.1157989501953px]"
          >
            <div className="flex justify-start">
              <div className="w-12 h-12 rounded-2xl relative flex items-center justify-center">
                <Image
                  src={category.icon}
                  alt={`${category.title} icon`}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white font-medium text-[32px]">
                {category.title}
              </h3>
              <p className="font-medium -mt-2 text-base text-[#666666]">
                {category.eventCount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default BrowseCategory;
export type { Category, BrowseCategoryProps };
