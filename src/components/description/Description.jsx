import React from "react";
import MarqueeComp from "../marquee/MarqueeComp";

const Description = () => {
  return (
    <div className="bg-zinc-300 py-10">
      <hr className="border-gray-500 pb-10" />
      <ul className="pl-28 mb-10 flex flex-col gap-2 font-semibold font-sans text-7xl text-black">
        <li>Connect</li>
        <li>Collaborate</li>
        <li>Catalyze.</li>
      </ul>
      <MarqueeComp mdir="left" />
      {/* <MarqueeComp rot="rotate-6" /> */}
    </div>
  );
};

export default Description;
