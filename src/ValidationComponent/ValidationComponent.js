import React from "react";

const ValidationComponent = (props) => {
  let validationMessage = "";
  if (props.number < 5) {
    validationMessage = <p>Text too short</p>;
  } else {
    validationMessage = <p>Text long enough</p>;
  }
  return validationMessage;
};

export default ValidationComponent;
