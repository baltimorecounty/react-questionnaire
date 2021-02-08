import React from "react";

const BackButton = (props) => {
  if (props.currentStep !== 1)
    return (
      <div onClick={props.previousStep} className="back-arrow">
        <i className="fas fa-arrow-left"></i>
      </div>
    );
  else return <div></div>;
};

export default BackButton;
