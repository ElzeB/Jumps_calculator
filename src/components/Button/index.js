import React from "react";
import "./index.css";

function Button({title, onClick}) {
  return <button className="Big-btn" onClick={onClick}>{title}</button>
}

export default Button; 