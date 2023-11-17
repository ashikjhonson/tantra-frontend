import React from "react";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
// import ArrowDown from "../../assets/icons/Arrow.svg";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer rounded-t-2xl sm:rounded-none">
      <div className="grid grid-cols-3 gap-6 sm:gap-20 sm:px-20 py-10 items-center font-mono">
        <div className="col-span-3 sm:col-span-1">
          <h1 className="text-6xl font-bold flex sm:flex-col">
            Connect with us.{" "}
            <span className="mr-10 sm:pt-14 sm:pb-10 rotate-90 sm:rotate-0">
              <svg
                width="50"
                height="52"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M52.5 7.5H60V60H7.5V52.5H47.1973L1.08398 6.41602L6.41602 1.08398L52.5 47.1973V7.5Z"
                  fill="black"
                />
              </svg>
            </span>
          </h1>
        </div>
        <div className="col-span-1 sm:col-span-1 sm:mx-auto">
          <ul className="text-xl sm:pt-3">
            <li className="py-2">Home</li>
            <li className="py-2">Events</li>
            <li className="py-2">Contacts</li>
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
