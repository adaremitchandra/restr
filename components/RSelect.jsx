import React from "react";
import ReactSelect from "react-select";

const RSelect = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return <ReactSelect className="" placeholder="All Categories" classNamePrefix="Select" isClearable options={options} />;
};

export default RSelect;
