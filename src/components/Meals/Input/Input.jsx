import React, { Fragment } from "react";

//CSS imports
import "./input.css";

const Input = (props) => {
  return (
    <div className="input">
      <label>{props.label}</label>
      <input type={props.type} />
    </div>
  );
};

export default Input;
