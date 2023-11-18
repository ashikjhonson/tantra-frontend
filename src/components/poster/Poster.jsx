import React from "react";
//import IntroImage from '../../assets/intro.jpg';
import PosterImage from "../../assets/bg/des.png";
import PosterImg from "../../assets/bg.png";
import Title from "../../assets/title.svg";
import TantraLogo from "../../assets/tantra.png";
// import PosterImg from "../../assets/poster.png";
import ParticlesComponent from "../particles/ParticlesComponent";
import VideoPlayer from "../videoPlayer/VideoPlayer";

import "./Poster.css";

function Poster() {
  return (
    <div className="hero">
      <div className="particle_div">
        <ParticlesComponent className="part" />
      </div>
      {/* <div id="tsparticles"></div> */}
      <div className="fill ">
        <img src={PosterImage} alt="poster" className="intro_image" />
      </div>
      <div className="content">
        <img
          src={Title}
          alt="title"
          className="p-16 pr-20 w-fit sm:w-full lg:w-screen"
        />
        <p className="border-2 rounded-full w-fit mx-auto px-8 py-1 -mt-36 hidden sm:block">
          DEC 04
        </p>
      </div>
    </div>
  );
}

export default Poster;
