import React, { useState } from "react";
import CARD from "../../assets/cards/front.svg";
import FRAME from "../../assets/cards/frame.svg";
import PHONE from "../../assets/cards/phone.svg";
import BUTTON from "../../assets/cards/button.svg";
import BACK from "../../assets/cards/back.svg";
import TICKET from "../../assets/cards/ticket.svg";
const GameCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    name,
    time,
    venue,
    fee,
    department,
    contact,
    is_active,
    event_type,
    description,
    event_image,
    co_ord,
  } = props.data;

  // Toggle the flip state of the card
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-[338px] h-[390px] mx-auto [perspective:1000px]">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
          .font-arcade_classic {
            font-family: 'Press Start 2P', cursive;
          }
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
            font-weight: 500; /* Font weight for Montserrat */
          }
        `}
      </style>
      <div
        className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front Face of the Card */}
        <div
          className="relative inset-0 h-full [backface-visibility:hidden] [transform:rotateY(0deg)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Blue Card BG */}
          <img
            src={CARD}
            alt="Card Group"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
          {/* Event Image */}
          <img
            src={event_image}
            alt="Event"
            className="absolute top-[30%] left-[49%] w-[74%] h-[45%]  rounded-br-[59px] z-20 transform -translate-x-1/2 -translate-y-1/2"
          />
          {/* Black Frame */}
          <img
            src={FRAME}
            alt="Inner Box"
            className="absolute top-[45%] left-[49%] w-[85%] h-[85%] z-30 object-cover transform -translate-x-1/2 -translate-y-1/2"
          />

          {/* Event Name */}
          <div
            style={{
              textShadow:
                "1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black",
            }}
            className="absolute flex w-[70%] h-[45%] top-[30%] left-[51%] text-white font-arcade_classic text-xl z-40 transform -translate-x-1/2 -translate-y-1/2"
          >
            <p
              className="mt-auto w-[90%] break-words text-[17px]"
              style={
                {
                  // textShadow: "1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black"
                }
              }
            >
              {name}
            </p>
          </div>

          {/* Price Money */}

          <div className="absolute bottom-[-26%] left-[31%] transform -translate-x-1/2 z-20 w-full h-full ">
            <img
              src={TICKET}
              alt="Inspect Button"
              className="absolute w-[24%] h-[50%] top-[25%] left-[83%]"
            />
            <span className="absolute inset-0  left-[92%] flex items-center justify-center text-black font-arcade_classic text-[11px]">
              {fee === "FREE" ? (
                <p className=" text-xs">FREE</p>
              ) : (
                <>
                  <p className="font-sans text-lg">₹</p>
                  {fee}
                  <p className="font-serif text-lg font-bold">/-</p>
                </>
              )}
            </span>
          </div>

          {/* Combined Event Info */}
          <div className="relative top-[64%] left-[63%] w-full z-40 transform -translate-x-1/2 -translate-y-1/2">
            {/* Event Time */}
            <div className="text-white font-arcade_classic text-[13px]">
              {time}
            </div>

            {/* Event Type */}
            <div className="text-white font-arcade_classic text-[17px] mt-1">
              {event_type}
            </div>
          </div>

          {/* Phone Button */}
          <button>
            <img
              src={PHONE}
              alt="Phone"
              className={`absolute bottom-[-0%] right-[21%] w-[16%] h-[20%] z-40 transition-opacity duration-300 ${
                isFlipped ? "opacity-0" : "opacity-100"
              }`}
            />
          </button>

          {/* Register Button */}
          <button
            onClick={() => window.open("https://www.google.com", "_blank")}
            className=" absolute top-[70%] left-[9%] w-[52%] z-40"
          >
            <img
              src={BUTTON}
              alt="Register Button"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black font-arcade_classic text-sm">
              REGISTER
            </span>
          </button>
          {/* Inspect Button */}
          <button
            onClick={handleFlip}
            className=" absolute top-[83%] left-[9%] w-[52%] z-40"
          >
            <img
              src={BUTTON}
              alt="Register Button"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black font-arcade_classic text-sm">
              INSPECT
            </span>
          </button>
        </div>

        {/* Back Face of the Card */}
        <div
          className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{ backfaceVisibility: "hidden" }}
          onClick={handleFlip}
        >
          <img
            src={BACK}
            alt="Back Face"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          {/* Coordinator and Contact Information */}
          <div className="absolute top-[11%] left-[50%] w-[90%] flex flex-col text-white font-arcade_classic text-[11px] z-40 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex justify-between w-full">
              <div className="flex-1 ml-3 mr-4 overflow-hidden text-ellipsis">
                {co_ord} {/* Coordinator's Name */}
              </div>
              {/* Contact Information */}
              <div className="whitespace-nowrap mr-5">{contact}</div>{" "}
            </div>
          </div>

          {/* Event Description */}
          <div className="absolute break-words top-[37%] left-[54%] w-[80%] z-40 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white">
            <div
              className="font-arcade_classic text-xl"
              style={{
                textShadow:
                  "2px 1px 0px black, -2px -1px 0px black, 2px -1px 0px black, -2px 1px 0px black",
              }}
            >
              {name} {/* Event Name */}
            </div>
            <div className="font-montserrat sm:text-sm text-l mt-1">
              {description}
            </div>{" "}
            {/* Event Description */}
          </div>

          <div className="absolute top-[60%] left-[50%] w-full h-px bg-white z-40 transform -translate-x-1/2" />

          {/* Venue and Department Information */}
          <div className="absolute top-[69%] left-[53%] w-[80%] z-40 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-white">
            {/* Venue */}
            <div className="font-arcade_classic text-[11px]">{venue}</div>{" "}
            {/* Department */}
            <div className="font-arcade_classic text-xl font-bold mt-1">
              {department}
            </div>
          </div>

          {/* Register Button  */}

          <button
            onClick={() => window.open("https://www.google.com", "_blank")}
            className=" absolute top-[75%] left-[9%] w-[52%] z-40"
          >
            <img
              src={BUTTON}
              alt="Register Button"
              className="w-full h-full object-cover"
            />
            <span className="absolute inset-0 flex items-center justify-center text-black font-arcade_classic text-sm">
              REGISTER
            </span>
          </button>

          {/* Phone Icon on Back Face */}
          <button>
            <img
              src={PHONE}
              alt="Phone"
              className={`absolute bottom-[8%] right-[20%] w-[16%] h-[20%] z-40 transition-opacity duration-300 ${
                isFlipped ? "opacity-100" : "opacity-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
