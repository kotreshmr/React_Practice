import React, { Component } from "react";
import { ReactNode } from "react";
import { Textbox } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import "./Counter.css";

interface Props {
  name?: string;
  fullName?: string;
  children?: ReactNode;
}

interface State {
  incremntalValue: number;
  count: number;
  initialCount: number;
}
//<type, {}>
class Counter extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      incremntalValue: 1,
      count: 0,
      initialCount: 0
    };
  }

  reset() {
    this.setState(() => ({
      count: this.state.initialCount,
      incremntalValue: 1
    }));
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + this.state.incremntalValue
    }));
  }
  decrement() {
    this.setState(prevState => ({
      count: prevState.count - this.state.incremntalValue
    }));
  }
  setIncrementalValue(i) {
    this.setState(() => ({
      incremntalValue: i
    }));
  }
  handleChange = event => {
    // let { value, min, max } = event.target;
    let { value } = event.target;
    // value = Math.max(Number(min), Math.min(Number(max), Number(value)));
    value = Number(value);

    this.setState({ incremntalValue: value });
  };

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <div>
          Set Increment/Decremental Value :
          <input
            onChange={this.handleChange}
            type="number"
            name="incNum"
            //value={this.state.incremntalValue}
            min="1"
            pattern="[1-9]+[0-9]*"
            // max="1000"
          />
        </div>
        <div className="button">
          <button
            className="radius"
            onClick={() => {
              this.reset();
            }}
          >
            Reset
          </button>
          <button
            className="radius"
            onClick={() => {
              this.increment();
            }}
          >
            Increment
          </button>
          {/* <button
            onClick={() => {
              this.setIncrementalValue(5);
            }}
          >
            Increment By 5
          </button> */}
          <button
            className="radius"
            onClick={() => {
              this.decrement();
            }}
          >
            Decrement
          </button>
          {/* <button
            onClick={() => {
              this.setIncrementalValue(5);
            }}
          >
            Decrement By 5
          </button> */}
        </div>
        <h2>{this.state.incremntalValue}</h2>
      </div>
    );
  }
}

export default Counter;
