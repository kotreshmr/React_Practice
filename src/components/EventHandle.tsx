import React, { Component } from "react";

class EventHandle extends Component {
  clickEvent() {
    console.log("Class Click Evnet Log");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Click Me</button>
      </div>
    );
  }
}
export default EventHandle;
