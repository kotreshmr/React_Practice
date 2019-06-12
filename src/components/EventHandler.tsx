import React from "react";

const EventHandler = () => {
  const clickEvent = () => {
    console.log("Functional Click Event log");
  };
  return (
    <div>
      <button
        onClick={() => {
          clickEvent();
        }}
      >
        Click event
      </button>
    </div>
  );
};
export default EventHandler;
