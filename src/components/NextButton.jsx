import React from "react";
import { Button } from "@baltimorecounty/dotgov-components";

const NextButton = (props) => {
  const handlesOnClickGo = () => {
    if (props.inputValue) {
      var typeIndex = props.inputValue.indexOf("|");
      var valueIndex = props.inputValue.indexOf("|", typeIndex);
      var goToType = props.inputValue.substring(typeIndex + 1);
      var goToValue = props.inputValue.substring(valueIndex + 1);
      if (goToType == "Link") {
        window.location.href = goToValue;
      } else {
        props.goToStep(goToValue);
        window.scrollTo(0, 0);
      }
    } else {
      props.setHasError(true);
    }
  };

  return <Button text="Next" onClick={handlesOnClickGo} />;
};

export default NextButton;
