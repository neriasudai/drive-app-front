import React from "react";
import { BsPlusLg } from "react-icons/bs";

const Button = (props) => {
  return (
    <div className="btn">
      <button type={props.type} onClick={props.onClick}>
        {props.text} <BsPlusLg />
      </button>
    </div>
  );
};

export default Button;
