import React from "react";
//import IntroImage from '../../assets/intro.jpg';
import PosterImage from "../../assets/poster.png";
import ParticlesComponent from "../particles/ParticlesComponent";
import VideoPlayer from "../videoPlayer/VideoPlayer";

import "./Poster.css";

function Poster() {
  return (
    <div className="hero">
      {/* <div className="particle_div">
        <ParticlesComponent className="part" />
      </div> */}
      {/* <div id="tsparticles"></div> */}
      <div className="fill intro_image">
        <img src={PosterImage} alt="poster" className="intro_image" />
      </div>
      <div className="content">
        <VideoPlayer />
        <p className="tantra relative z-1">TANTRA"23</p>
        <p className="eventdate relative z-1">DECEMBER 04, 2023</p>
      </div>
    </div>
  );
}

export default Poster;
