import React from "react";
// import "./style.css";
import ViewDetails from "../popup/ViewDetails";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  let navigate = useNavigate();
  let eventData = props.data;
  return (
    <div className="w-72 p-4 rounded-3xl overflow-hidden shadow-lg bg-gray-200">
      <div className="h-44 w-30 rounded-xl bg-red-200">
      <p className="font-mono text-center">{props.data.event_type}</p>
        <p className="font-mono text-center">
          {props.data.fee !== "" ? `Reg Fee: ${props.data.fee}` : "‎ "}
        </p>
      </div>
      <div className="pt-5">
        <div className="font-bold font-sans text-3xl mb-2 h-16">
          {props.data.name}
        </div>
       
      </div>
      <div className="px-0 pt-4 pb-2">
        <a>{/* <ViewDetails data={eventData} /> */}</a>
        {eventData.reg ? (
          <a className="">
            <button
              className="align bg-white text-black px-6 py-2 rounded-full"
              onClick={() => navigate("/register", { state: eventData })}
            >
              Register Event
            </button>
          </a>
        ) : (
          <a>
            <button className="bg-white text-black px-6 py-2 rounded-full">
              Register Event
            </button>
          </a>
          // null
        )}
      </div>
    </div>
  );
}

export default Cards;
