import React from "react";

const DescriptionCard = () => {
  return (
    <div className="relative flex justify-center items-center w-[950px]">
      <div className="absolute inset-0 bg-gradient-radial from-orange-500 via-red-600 to-black opacity-50 "></div>

      <div className="relative newsletter-bg rounded-xl shadow-lg p-8 max-w-3xl text-gray-300">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-primary mb-2">DESCRIPTION</h2>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Odio praesent elementum
            vivamus aliquet est. Libero diam quisque elementum pharetra risus
            egestas at egestas. Vestibulum venenatis dignissim viverra est amet
            porta amet ipsum viverra. Lectus morbi egestas viverra sit blandit
            nulla odio semper. Quam hendrerit venenatis arcu urna cras tempus
            maecenas. Sed diam quam et volutpat enim mattis etiam diam pharetra.
            Gravida viverra ut elementum nunc urna donec. Purus a sit senectus
            elit.\  
          </p>
        </div>

        <div className="mb-6 flex  justify-between">
            <div>
            <h2 className="text-xl font-bold text-primary mb-2">DATE & TIME</h2>
            <p className="text-sm mb-1">Saturday, June 22 - 8am - 6pm WAT</p>
            </div>
          <button className="text-primary text-sm  hover:text-orange-400">
            + Add to Calendar
          </button>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-primary mb-2">TAGS</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Syracuse Events",
              "Things To Do In Syracuse",
              "#tech",
              "#trending",
              "#thingstodo",
            ].map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 text-gray-100 px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-600 pt-4">
          <h3 className="text-sm font-semibold mb-3">Share with love ones</h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="#" className="text-primary hover:text-orange-400">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="text-primary hover:text-orange-400">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="text-primary hover:text-orange-400">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <p className="text-xs">
            📍 2118 Thornridge Cir. Syracuse, Connecticut 35624
          </p>
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-primary hover:bg-orange-400 text-white px-4 py-2 rounded-md text-sm font-medium">
            Get Tickets →
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionCard;
