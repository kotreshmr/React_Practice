import React, { Component } from "react";
import { ReactNode } from "react";

interface type {
  name?: string;
  fullName?: string;
  children?: ReactNode;
}

class Welcome extends Component<type, {}> {
  render() {
    return (
      <div>
        <h1>
          Welcome to {this.props.name} aka {this.props.fullName}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;
