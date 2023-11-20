import React from "react";
// import "./style.css";
import ViewDetails from "../popup/ViewDetails";
import { useNavigate } from "react-router-dom";

function Cards(props) {
  let navigate = useNavigate();
  let eventData = props.data;
  return (
    <div className="w-72 p-4 rounded-3xl overflow-hidden shadow-lg bg-gray-200">
      {/*change angle of transition, 3d effect of turning the card here, in perspective */}
      <div class="group h-96 w-50 [perspective:5000px]">
      
      {/*change speed of transition here, in duration */}
      <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div class="absolute inset-0">
      <div className="h-44 w-30 rounded-xl bg-white">
        
      </div>
      <div className="pt-5">
        <div className="text-center font-bold font-mono text-3xl mb-2 h-16">
          {props.data.name}
        </div>
        <p className="text-center font-mono">{props.data.event_type}</p>
        <p className="text-center font-mono">
          {props.data.fee !== "" ? `Reg Fee: ${props.data.fee}` : "‎ "}
        </p>
      </div>
      <div className="px-0 pt-4 pb-2">
        <a>{/* <ViewDetails data={eventData} /> */}</a>
        {eventData.reg ? (
          <p className="text-center">
            <button
              className="bg-white font-mono text-black px-2 py-2 rounded-full"
              onClick={() => navigate("/register", { state: eventData })}
            >
              Register Event
            </button>
          </p>
        ) : (
          <p className="text-center">
            <button className="bg-white font-mono text-black px-2 py-2 rounded-full">
              Register Event
            </button>
          </p>
          // null
        )}
      </div>
      </div>

      {/*change color and transparency here, in bg */}
      <div class="absolute inset-0 h-full w-full rounded-xl bg-black/100 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div class="flex min-h-full flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">{props.data.name}</h1>
          <p class="text-base">{props.data.description}</p>
          <button class="mt-2 rounded-md bg-neutral-800 px-2 py-1 text-sm hover:bg-neutral-900">Register Event</button>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}


export default Cards;
