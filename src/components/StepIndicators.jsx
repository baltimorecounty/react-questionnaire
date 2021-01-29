import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const StepIndicators = (props) => {

    var progressPercent = props.currentStep / props.totalSteps * 100;

  return (
    <ProgressBar now={progressPercent} />
  );
};

export default StepIndicators;
