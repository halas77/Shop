import React from "react";
import Typed from "react-typed";

const Home = () => {
  return (
    <div className= "text-white">
      <div className="max-w-[1000px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] text-2xl font-bold p-2">STAY IN FASHION</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          Keep with Fashion.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-6">
            Unique, Confortable, Quality
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 font-bold text-[#00df9a]"
            strings={[" Shoes", " Clothes", " Cosmotics"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-400 px-3">
          Monitor your analytics to increase your confort with Brand, Smooth, & Quality
          fashions.
        </p>
        <button className="bg-[#00df9a]  w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
