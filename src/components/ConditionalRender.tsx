import React, { Component } from "react";
import SelectComponent from "./SelectComponent";

interface Props {
  name?: string;
  fullName?: string;
}

interface State {
  isLoggedIn: boolean;
}

class ConditionalRender extends Component<Props, State> {
  constructor(Props) {
    super(Props);
    this.state = { isLoggedIn: true };
  }

  render() {
    return (
      <div>
        <SelectComponent />
      </div>
    );

    //Short Circut Operator. this condition is sed either to Render some element or Render none
    // return (
    //   this.state.isLoggedIn && (
    //     <div>
    //       <h1>Welcome Uesr</h1>
    //     </div>
    //   )
    // );
    //------------------
    // Ternary Operator
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Kotresh</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    //------------------------
    // Element conditional render
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Kotresh</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    // return message;
    //-------------------------
    // if/else conditional render
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Kotresh</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
  }
}
export default ConditionalRender;
