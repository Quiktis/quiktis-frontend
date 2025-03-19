import React from "react";

const cardData = [
  {
    id: 1,
    title: "Tickets Sold",
    value: "600+",
    linesPosition: "top-0 right-0",
  },
  {
    id: 2,
    title: "Revenue",
    value: "600+",
    linesPosition: "bottom-0 left-0",
  },
  {
    id: 3,
    title: "Resale Stats",
    value: "600+",
    linesPosition: "top-0 right-0",
  },
];

const Statistics = () => {
  return (
    <div className="text-white py-10 px-4">
      <h2 className="text-lg font-bold mb-6 text-gray-400 uppercase">
        Coming Next
      </h2>
      <div className="flex flex-wrap justify-start gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="relative bg-gradient-to-r from-black to-gray-800 p-6 rounded-lg shadow-lg text-white w-[300px] h-[250px] flex flex-col items-center gap-10 justify-center"
          >
            <div className={`absolute ${card.linesPosition} h-full w-full pointer-events-none`}>
              {/* {card.linesPosition === "top-0 right-0" && (
                <>
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-0 right-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-4 right-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-8 right-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-12 right-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-16 right-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-20 right-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-24 right-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 top-28 right-0 h-auto" />
                </>
              )} */}
              {/* {card.linesPosition === "bottom-0 left-0" && (
                <>
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-0 left-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-4 left-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-8 left-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-12 left-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-16 left-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-20 left-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-24 left-0 h-auto" />
                  <div className="absolute border-t-2 border-gray-400 opacity-20 w-full rotate-45 bottom-28 left-0 h-auto" />
                </>
              )} */}
            </div>
            <p className="text-lg font-semibold">{card.title}</p>
            <h2 className="text-4xl font-bold">{card.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;  