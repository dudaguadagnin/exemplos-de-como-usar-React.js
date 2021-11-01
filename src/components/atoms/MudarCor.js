import React from "react";
import "../../index.css";

function MudarCor(props) {
  return (
    <div className={"novaCor-" + props.color}>
      {props.children}
    </div>);
}
export default MudarCor;
