import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import PricingCard from "./PricingCard"; // Ensure the path is correct
import { cardData } from "./Utilities";
import { IoIosArrowBack } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-[#032858] flex flex-col items-center p-6">
      {/* Button at the top center */}
      <div className="w-full flex justify-start mb-6">
        <button className="flex items-center px-6 py-3 bg-[#cccbcb] text-gray-800 rounded-md hover:bg-gray-400 transition duration-300 ease-in-out">
          <FaArrowLeft />
          <span className="mr-2">Choose Your Plan</span>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap gap-4 justify-center max-w-6xl">
        {cardData.map((elem, currIndex) => {
          return (
            <div key={currIndex} className="w-full sm:w-1/4 lg:w-1/4 px-2">
              <PricingCard
                heading={elem.heading}
                description={elem.description}
                price={elem.price}
              />
            </div>
          );
        })}

        {/* <div className="w-full sm:w-1/4 lg:w-1/4 px-2">
          <PricingCard
            heading="Advanced"
            description="Everything included from a basic and more staff members."
            price="79"
          />
        </div>

        <div className="w-full sm:w-1/4 lg:w-1/4 px-2">
          <PricingCard
            heading="Professional"
            description="Everything from Basic and Advanced with more team members and lower fees."
            price="99"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
