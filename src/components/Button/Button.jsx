import React from "react";
import "./Button.scss";

function Button(props) {
  return <button className="view">{props.name}</button>;
}

export default Button;
