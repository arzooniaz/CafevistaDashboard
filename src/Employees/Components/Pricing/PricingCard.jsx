import React from 'react';

const PricingCard = ({ heading, price, description, additionalClasses }) => {
  return (
    <div className={`bg-[#cccbcb] shadow-lg rounded-lg p-8 max-w-sm mx-auto ${additionalClasses}`}>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{heading}</h2>
      <p className="text-sm font-bold text-gray-600 mb-4">{description}</p>
      
      <p className="text-lg text-gray-500">Starting at</p>
      <p className="text-4xl font-bold text-blue-800">${price}</p>
      <p className="text-sm text-gray-600 mb-4">USD/month</p>

      <button className="w-full py-2 text-xs font-bold border-2 border-black text-gray-800 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out mb-4">
        Choose {heading} Plan
      </button>

      <div className="text-left text-gray-600">
        <p className="font-bold">Fees</p>
        <p className="text-sm">Transaction fee: 2.5%</p>
        <p className="text-sm">Currency Conversion fee: 1.5%</p>
        <br />
        <div className="border-b border-gray-500"></div>
        <p className="font-bold mt-4">Features included</p>
        <p>Up to 50 Products</p>
      </div>
    </div>
  );
};

export default PricingCard;
