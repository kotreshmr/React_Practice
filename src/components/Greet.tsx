import React from "react";
import { ReactNode } from "react";

// Function component
//Using Function before ES6
//function Greet() {
//  return <h1>Hello Kotresh</h1>;
//}
// Using Arrow(=>) in ES6
//strict is diabled,
interface type {
  name?: string;
  fullName?: string;
  children?: ReactNode;
}
const Greet = (props: type) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} aka {props.fullName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
