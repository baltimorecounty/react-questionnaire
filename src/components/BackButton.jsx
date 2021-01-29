import React from "react";


const BackButton = (props) => {
if (props.currentStep !== 1)
  return (
    <div onClick={props.previousStep}>
    <i className="fas fa-arrow-left" style={{color:"#002280"}}></i>
    </div>
   ); 
else return (
    <div></div>
   );
};

export default BackButton;
