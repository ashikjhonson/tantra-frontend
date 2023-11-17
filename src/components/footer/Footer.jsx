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
    <div className="footer rounded-t-2xl sm:rounded-none">
      <div className="grid grid-cols-3 gap-6 sm:gap-20 sm:px-20 py-10 items-center font-mono">
        <div className="col-span-3 sm:col-span-1">
          <h1 className="text-6xl font-bold">Connect with us.</h1>
        </div>
        <div className="col-span-1 sm:col-span-1 sm:mx-auto">
          <ul className="text-xl sm:pt-3">
            <li>Home</li>
            <li>Events</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 pl-20 sm:pl-0 sm:w-2/3 sm:mx-auto">
          <p>Jyothi Nagar, Chemperi (P.O) Kannur 670632, Kerala, India</p>
        </div>
        <p className="absolute -rotate-90 text-md text-gray-900 font-sans right-0 hidden sm:block">
          tantra'23
        </p>
      </div>

      <div className="flex justify-between sm:px-20">
        <div>tantra.22tech@gmail.com</div>
        <ul className="flex gap-4 sm:gap-10 sm:pr-24">
          <li>
            <InstagramIcon />
          </li>
          <li>
            <LinkedInIcon />
          </li>
          <li>
            <PhoneIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
