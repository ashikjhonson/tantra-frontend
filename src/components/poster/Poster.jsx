import React from "react";
//import IntroImage from '../../assets/intro.jpg';
import PosterImage from "../../assets/bg/des.png";
import PosterImag from "../../assets/bg/mob.png";
import Title from "../../assets/title.svg";
import TantraLogo from "../../assets/tantra.png";
// import PosterImg from "../../assets/poster.png";
import ParticlesComponent from "../particles/ParticlesComponent";
import VideoPlayer from "../videoPlayer/VideoPlayer";

import "./Poster.css";

function Poster() {
  return (
    <div className="hero">
      {/* <div className='absolute top-[90px]'><ParticlesComponent className='part' /></div> */}
      <div className="particle_div sm:hidden">
        <ParticlesComponent className="part" />
      </div>
      {/* <div id="tsparticles"></div> */}
      <div className="fill">
        <img src={PosterImage} alt="poster" className="intro_image" />
      </div>
      <div className="content">
        <p className="tantra">TANTRA"23</p>
        <p className="eventdate">DECEMBER 04, 2023</p>
      </div>
    </div>
  );
}

export default Poster;
