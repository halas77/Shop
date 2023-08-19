import React from "react";
import Single from "../assets/shoe1.jpeg";

const Shop = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 sm:p-9 gap-8">
        <div className="w-full bg-[#080b1b] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-200 mx-auto mt-[-5rem] rounded-xl"
            src={Single}
            alt="/"
          />
          <p className="text-center pb-4 border-gray-600 border-b mt-10 text-white text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 text-white font-bold mt-8">500 GB Storage</p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#090d28] rounded-md font-bold my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
