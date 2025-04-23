// "use client";
// import React, { useState } from "react";

// export default function Filters() {
//   // Separate state groups for each filter section
//   const [priceOptions, setPriceOptions] = useState<string[]>([]);
//   const [dateOptions, setDateOptions] = useState<string[]>([]);
//   const [categories, setCategories] = useState<string[]>([]);

//   const togglePriceOption = (option: string) => {
//     setPriceOptions((prev) =>
//       prev.includes(option)
//         ? prev.filter((item) => item !== option)
//         : [...prev, option]
//     );
//   };

//   const toggleDateOption = (option: string) => {
//     setDateOptions((prev) =>
//       prev.includes(option)
//         ? prev.filter((item) => item !== option)
//         : [...prev, option]
//     );
//   };

//   const toggleCategory = (option: string) => {
//     setCategories((prev) =>
//       prev.includes(option)
//         ? prev.filter((item) => item !== option)
//         : [...prev, option]
//     );
//   };

//   return (
//     <div className="rounded-lg p-4 backdrop-blur-md text-white space-y-6">
//       <h2 className="text-xl font-bold mb-4">Filters</h2>

//       {/* Price Filter */}
//       <div className="mb-6">
//         <h3 className="text-blue-400 text-sm font-bold mb-2">Price</h3>
//         <div className="space-y-2 text-sm">
//           <div>
//             <input
//               type="checkbox"
//               id="free"
//               name="price"
//               value="free"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="free">Free</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="paid"
//               name="price"
//               value="paid"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="paid">Paid</label>
//           </div>
//         </div>
//         <hr className="mt-4 border-gray-600" />
//       </div>

//       {/* Date Filter */}
//       <div className="mb-6">
//         <h3 className="text-blue-400 text-sm font-bold mb-2">Date</h3>
//         <div className="space-y-2 text-sm">
//           <div>
//             <input
//               type="checkbox"
//               id="today"
//               name="date"
//               value="today"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="today">Today</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="tomorrow"
//               name="date"
//               value="tomorrow"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="tomorrow">Tomorrow</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="week"
//               name="date"
//               value="week"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="week">This Week</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="weekend"
//               name="date"
//               value="weekend"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="weekend">This Weekend</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="pick"
//               name="date"
//               value="pick"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="pick">Pick a Date</label>
//           </div>
//         </div>
//         <hr className="mt-4 border-gray-600" />
//       </div>

//       {/* Category Filter */}
//       <div className="mb-6">
//         <h3 className="text-blue-400 text-sm font-bold mb-2">Category</h3>
//         <div className="space-y-2 text-sm">
//           <div>
//             <input
//               type="checkbox"
//               id="entertainment"
//               name="category"
//               value="entertainment"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="entertainment">Entertainment Events</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="sports"
//               name="category"
//               value="sports"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="sports">Sports Events</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="educational"
//               name="category"
//               value="educational"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="educational">Educational Events</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="business"
//               name="category"
//               value="business"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="business">Business & Professional Events</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="cultural"
//               name="category"
//               value="cultural"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="cultural">Cultural & Community Events</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="expos"
//               name="category"
//               value="expos"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="expos">Expos & Markets</label>
//           </div>
//           <div>
//             <input
//               type="checkbox"
//               id="virtual"
//               name="category"
//               value="virtual"
//               className="mr-2 bg-transparent"
//             />
//             <label htmlFor="virtual">Virtual & Hybrid Events</label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function Filters() {
  const [priceOptions, setPriceOptions] = useState<string[]>([]);
  const [dateOptions, setDateOptions] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const toggleFilter = (
    state: string[],
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    option: string
  ) => {
    setState((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="rounded-lg p-4 backdrop-blur-md text-white space-y-6">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Price Filter */}
      <div className="mb-6">
        <h3 className="text-white text-sm font-bold mb-2">Price</h3>
        <div className="space-y-2 text-sm">
          {["free", "paid"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={priceOptions.includes(option)}
                onChange={() =>
                  toggleFilter(priceOptions, setPriceOptions, option)
                }
                className="h-4 w-4 border-2 border-white rounded-sm bg-transparent/10 
                         checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                         focus:ring-0 focus:ring-offset-0 cursor-pointer
                         transition-colors hover:border-[#FF4D2A]
                         [color-scheme:dark]"
              />
              <span className="text-gray-300 group-hover:text-white capitalize">
                {option}
              </span>
            </label>
          ))}
        </div>
        <hr className="mt-4 border-gray-600" />
      </div>

      {/* Date Filter */}
      <div className="mb-6">
        <h3 className="text-white text-sm font-bold mb-2">Date</h3>
        <div className="space-y-2 text-sm">
          {["today", "tomorrow", "week", "weekend", "pick"].map((option) => (
            <label
              key={option}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={dateOptions.includes(option)}
                onChange={() =>
                  toggleFilter(dateOptions, setDateOptions, option)
                }
                className="h-4 w-4 border-2 border-white rounded-sm bg-transparent/10 
                         checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                         focus:ring-0 focus:ring-offset-0 cursor-pointer
                         transition-colors hover:border-[#FF4D2A]
                         [color-scheme:dark]"
              />
              <span className="text-gray-300 group-hover:text-white capitalize">
                {option.replace("-", " ")}
              </span>
            </label>
          ))}
        </div>
        <hr className="mt-4 border-gray-600" />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-white text-sm font-bold mb-2">Category</h3>
        <div className="space-y-2 text-sm">
          {[
            "Entertainment Events",
            "Sports Events",
            "Educational Events",
            "Business & Professional events",
            "Cultural & Community events",
            "Expos & Markets",
            "Virtual & Hybrid events",
          ].map((category) => (
            <label
              key={category}
              className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={categories.includes(category)}
                onChange={() =>
                  toggleFilter(categories, setCategories, category)
                }
                className="h-4 w-4 border-2 border-white rounded-sm bg-transparent/10 
                         checked:bg-transparent checked:border-[#FF4D2A] checked:accent-[#FF4D2A]
                         focus:ring-0 focus:ring-offset-0 cursor-pointer
                         transition-colors hover:border-[#FF4D2A]
                         [color-scheme:dark]"
              />
              <span className="text-gray-300 group-hover:text-white">
                {category}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
