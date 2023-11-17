import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="grid grid-cols-3 gap-20 px-20 py-10 items-center font-mono">
        <div>
          <h1 className="text-6xl font-bold">Connect with us.</h1>
        </div>
        <div className="mx-auto">
          <ul className="text-xl">
            <li>Home</li>
            <li>Events</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="mx-auto flex-wrap w-2/3">
          Jyothi Nagar, Chemperi (P.O) Kannur 670632, Kerala, India
        </div>
      </div>
      <div className="flex justify-between px-20">
        <div>tantra.22tech@gmail.com</div>
        <div>
          <InstagramIcon />
          <LinkedInIcon />
          <PhoneIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;
