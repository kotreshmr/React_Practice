import React, { Component } from "react";

function ChildComponent(Props) {
  return (
    <div>
      <button
        onClick={() => {
          Props.greetHandler("Children");
        }}
      >
        Click to Greet Parents
      </button>
    </div>
  );
}
export default ChildComponent;
