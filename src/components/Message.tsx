import React, { Component } from "react";
import { ReactNode } from "react";

interface Props {
  name?: string;
  fullName?: string;
  children?: ReactNode;
}

interface State {
  message: string;
}
//<type, {}>
class Message extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      message: "Message : Kindly click on Subscribe to Subscribe to channel"
    };
  }
  changeMessage() {
    this.setState({ message: "Thank for subscription" });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}

export default Message;
