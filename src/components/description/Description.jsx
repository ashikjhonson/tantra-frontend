import React from "react";
import MarqueeComp from "../marquee/MarqueeComp";

const Description = () => {
  return (
    <div className="bg-zinc-300 pt-10 pb-20">
      <hr className="border-gray-500 pb-10" />
      <ul className="pl-28 mb-20 flex flex-col gap-2 font-semibold font-sans text-7xl text-black">
        <li>Connect</li>
        <li>Collaborate</li>
        <li>Catalyze.</li>
      </ul>
      <div className="rotate-6">
        <MarqueeComp />
      </div>
      <div className="-rotate-12">
        <MarqueeComp />
      </div>
    </div>
  );
};

export default Description;
