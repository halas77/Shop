import React from "react";
import { items } from "../constant";
import shoe1 from "../assets/shoe1.jpeg";
import shoe2 from "../assets/shoe2.jpeg";
import shoe3 from "../assets/tshirt1.png";

const Shop = () => {
  return (
    <div className="w-full py-[3rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 sm:p-9 gap-8">
        <div className="w-full bg-[#080b1b] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-200 mx-auto mt-[-5rem] rounded-xl"
            src={shoe1}
            alt="/"
          />
          <p className="text-center pb-4 border-gray-600 border-b mt-10 text-white text-4xl font-bold">
            {items.map((link) => (
              <p>{link.cost}</p>
            ))}
          </p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 text-white font-bold mt-8">
              {items.map((link) => (
                <p>{link.desc}</p>
              ))}
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#090d28] rounded-md font-bold my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>

        <div className="w-full bg-[#080b1b] shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-200 mx-auto mt-[-5rem] rounded-xl"
            src={shoe1}
            alt="/"
          />
          <p className="text-center pb-4 border-gray-600 border-b mt-10 text-white text-4xl font-bold">
            {items.map((link) => (
              <p>{link.cost}</p>
            ))}
          </p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 text-white font-bold mt-8">
              {items.map((link) => (
                <p>{link.desc}</p>
              ))}
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#090d28] rounded-md font-bold my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>
        <div className="w-full bg-[#080b1b] shadow-xl flex flex-col p-4 my-4 mt- rounded-lg hover:scale-105 duration-300">
          <img
            className="w-200 mx-auto mt-[-5rem] rounded-xl"
            src={shoe1}
            alt="/"
          />
          <p className="text-center pb-4 border-gray-600 border-b mt-10 text-white text-4xl font-bold">
            {items.map((link) => (
              <p>{link.cost}</p>
            ))}
          </p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 text-white font-bold mt-8">
              {items.map((link) => (
                <p>{link.desc}</p>
              ))}
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#090d28] rounded-md font-bold my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>
        <div className="w-full bg-[#080b1b] shadow-xl flex flex-col p-4 my-4 rounded-lg mt-12 hover:scale-105 duration-300">
          <img
            className="w-200 mx-auto mt-[-5rem] rounded-xl"
            src={shoe1}
            alt="/"
          />
          <p className="text-center pb-4 border-gray-600 border-b mt-10 text-white text-4xl font-bold">
            {items.map((link) => (
              <p>{link.cost}</p>
            ))}
          </p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 text-white font-bold mt-8">
              {items.map((link) => (
                <p>{link.desc}</p>
              ))}
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#090d28] rounded-md font-bold  my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>
        <div className="w-full bg-[#080b1b] shadow-xl flex flex-col p-4 my-4 rounded-lg mt-12 hover:scale-105 duration-300">
          <img
            className="w-200 mx-auto mt-[-5rem] rounded-xl"
            src={shoe1}
            alt="/"
          />
          <p className="text-center pb-4 border-gray-600 border-b mt-10 text-white text-4xl font-bold">
            {items.map((link) => (
              <p>{link.cost}</p>
            ))}
          </p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 text-white font-bold mt-8">
              {items.map((link) => (
                <p>{link.desc}</p>
              ))}
            </p>
          </div>
          <button className="bg-[#00df9a] w-[200px] text-[#090d28] rounded-md font-bold my-6 mx-auto px-6 py-3">
            Buy Now
          </button>
        </div>
        <div className="w-full bg-[#080b1b] shadow-xl flex flex-col p-4 my-4 rounded-lg mt-12 hover:scale-105 duration-300">
          <img
            className="w-200 mx-auto mt-[-5rem] rounded-xl"
            src={shoe1}
            alt="/"
          />
          <p className="text-center pb-4 border-gray-600 border-b mt-10 text-white text-4xl font-bold">
            {items.map((link) => (
              <p>{link.cost}</p>
            ))}
          </p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 text-white font-bold mt-8">
              {items.map((link) => (
                <p>{link.desc}</p>
              ))}
            </p>
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
