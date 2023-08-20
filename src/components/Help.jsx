import React from "react";
import about from "../assets/about.jpg";

const Help = () => {
  return (
    <div className="w-full h-[700px] bg-white py-16 px-4">
      <div className="max-w-[1040px] max-h-[1200px] mx-auto grid md:grid-cols-2">
        <img className="w-[350px] h-[500px] shadow-xl rounded-xl hover:scale-105 duration-300 border-8 border-[#00df9a]" src={about} alt="About Img" />
        <div className="flex flex-col justify-center ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Yene Fashion.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, eos blanditiis. Nobis enim porro dignissimos nulla
            placeat sint. Obcaecati officiis, nesciunt impedit nulla odio
            placeat, explicabo libero adipisci facere inventore quia
            consequuntur illo nemo pariatur vel delectus nostrum voluptate ipsam
            iusto exercitationem? Excepturi in ab pariatur modi repellendus
            natus asperiores expedita ullam neque eos accusamus corrupti fuga
            totam facilis, sapiente suscipit repellat architecto iure
            accusantium. Qui in ex mollitia quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
