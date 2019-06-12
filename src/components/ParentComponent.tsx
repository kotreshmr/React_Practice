import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

interface Props {
  name?: string;
  fullName?: string;
}

interface State {
  message: string;
}

class ParentComponent extends Component<Props, State> {
  constructor(Props) {
    super(Props);
    this.state = {
      message: "Hello Parents"
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    console.log(`${this.state.message}, Greet From ${childName}`);
    alert(`${this.state.message}, Greet From ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}
export default ParentComponent;
