import React from "react";

const StepIndicators = (props) => {

  var stepIndicatorElements = [];
  for (var i = 1; i <= props.totalSteps; i++) {
       var indicatorColor;
      if (i < props.currentStep) {indicatorColor = "#F7F7F7";}
      if (i === props.currentStep) {indicatorColor = "#FFD986";}
      if (i > props.currentStep) {indicatorColor = "#8091C0";}
      stepIndicatorElements.push(
        <div key={i} className="col dg_section-cta" style={{color: indicatorColor}}>
            <div className="container">
                <div className="row">
                    <i className="fas fa-circle" aria-hidden="true"></i>
                </div>
                <div className="row">
                    <span>{i}</span>
                </div>
            </div>
        </div>
      )
  }

  return (
    <div style={{textAlign: "-webkit-center"}}>
        <div className="row" style={{width: "fit-content"}}>
            {stepIndicatorElements}
        </div>
    </div>
  );
};

export default StepIndicators;
