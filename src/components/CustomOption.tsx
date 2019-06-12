import React from "react";
import Select, { components } from "react-select";

const CustomOption = props => {
  const { options } = props;
  const customOption = options.map(option => (
    <option value={option.value}>{option.name}</option>
  ));
  return customOption;
};
export default CustomOption;
