import React from "react";
import { Button } from "@baltimorecounty/dotgov-components";

const NextButton = (props) => {
  const handlesOnClickGo = () => {
    if (props.inputValue) {
      var goToValue = props.inputValue.substring(
        props.inputValue.indexOf("|") + 1
      );
      props.goToStep(goToValue);
      window.scrollTo(0, 0);
    } else {
      props.setHasError(true);
    }
  };

  return <Button text="Next" onClick={handlesOnClickGo} />;
};

export default NextButton;
