import React, { PureComponent, Fragment } from "react";
import ReactDOM from "react-dom";
import CustomOption from "./CustomOption";
import "./SelectComponent.css";
import Detail from "./Detail";

class SelectComponent extends PureComponent {
  state = {
    options: [
      {
        name: "Select",
        value: null
      },
      {
        name: "India",
        value: "India"
      },
      {
        name: "Japan",
        value: "Japan"
      },
      {
        name: "Australia",
        value: "Australia"
      }
    ],
    value: "?"
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { options, value } = this.state;

    return (
      <div>
        <div>
          <select onChange={this.handleChange} value={value} name="Country">
            {/* {options.map(item => (
            <option>{item.name}</option>
          ))} */}
            <CustomOption options={this.state.options} />
          </select>
        </div>
        <h1>Selected Country: {value}</h1>
        <Detail country={value} />
      </div>
    );
  }
}
export default SelectComponent;
