import React, { Component } from "react";

interface State {
  message: string;
}

class EventBind extends Component<{}, State> {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello EveryOne !"
    };
    // Binding 'this' in the constructor
    // this.eventBind = this.eventBind.bind(this);
  }
  //   eventBind() {
  //     console.log(this);
  //     this.setState({
  //       message: "Good Bye EveryOne !!!!"
  //     });
  //   }
  // Arrow function for class property
  eventBind = () => {
    console.log(this);
    this.setState({
      message: "Good Bye EveryOne !!!!"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        {/* This first approch of Event Binding using 'bind(this)' */}
        {/* <button onClick={this.eventBind.bind(this)}>Change Msg</button> */}

        {/* This Second approch of Event Binding using arrow fundtion, This can be used while passing params to method */}
        {/* <button onClick={() => this.eventBind()}>Change Msg</button> */}

        {/* This Third approch of Event Binding using constructor by binding 'this' in constructor 
            itself bind(this)' */}
        {/* <button onClick={this.eventBind}>Change Msg</button> */}

        {/* This fourth approch of Event Binding using fucntion as class property using Arrow function
        definding a const class propery and assinging the Arrow function */}
        <button onClick={this.eventBind}>Change Msg</button>
      </div>
    );
  }
}
export default EventBind;
