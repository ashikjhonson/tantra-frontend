import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Cards.css";
import Arrow from "../../assets/icons/Arrow.svg";

function EventCard(props) {
  let navigate = useNavigate();

  return (
    <div className="flex justify-between border-b border-gray-400 py-10">
      <h2 className="font-mono font-bold text-gray-400 text-3xl sm:text-5xl w-40 sm:w-96 whitespace-pre-wrap">
        {props.title}
        <p className="font-sans font-light text-2xl">
          {props.title != "Common Events" ? "Engineering" : ""}
        </p>
      </h2>
      <button className="scale-50" onClick={() => navigate(props.explore)}>
        <img src={Arrow} className="h-20 -rotate-90" />
      </button>
    </div>
  );
  // <div className="event_card">
  //     {/* <img src={props.imgsrc} alt="workshop" /> */}
  //     <h2 className="event_title">{props.title}</h2>
  //     <div className="event_details">
  //       <p>{props.text}</p>
  //       <div className="event_btns">
  //         <button className="btn" onClick={() => navigate(props.explore)}>
  //           Explore
  //         </button>
  //       </div>
  //     </div>
  //   </div>
}

export default EventCard;
