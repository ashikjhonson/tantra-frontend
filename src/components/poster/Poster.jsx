import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Desktop from "../../assets/bg/des.png";
import Mobile from "../../assets/bg/mob.png";
import ParticlesComponent from "../particles/ParticlesComponent";

import "./Poster.css";

function Poster() {
  let isMobileDevice = useMediaQuery({
    query: "(max-device-width: 500px)",
  });

  return (
    <div className="hero">
      {/* <div className='absolute top-[90px]'><ParticlesComponent className='part' /></div> */}
      <div className="particle_div ">
        {/**sm:hidden */}
        <ParticlesComponent className="part" />
      </div>
      {/* <div id="tsparticles"></div> */}
      <div className="fill">
        {isMobileDevice ? (
          <img src={Mobile} alt="poster" className="intro_image" />
        ) : (
          <img src={Desktop} alt="poster" className="intro_image" />
        )}
      </div>
      <div className="content">
        <p className="tantra">TANTRA"23</p>
        <p className="eventdate">DECEMBER 04, 2023</p>
      </div>
    </div>
  );
}

export default Poster;
