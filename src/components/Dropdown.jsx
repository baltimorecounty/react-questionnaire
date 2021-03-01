import React, { useState } from "react";
import { Button, Select } from "@baltimorecounty/dotgov-components";
import ErrorMessage from "./ErrorMessage";

const DecisionTree = (props) => {
  const [getDropdownChoice, setDropdownChoice] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleSelectionChange = (event) => {
    setDropdownChoice(event.target.value);
    setHasError(false);
  };

  const handlesOnClickGo = () => {
    if (getDropdownChoice) {
      var goToValue = getDropdownChoice.substring(
        getDropdownChoice.indexOf("|") + 1
      );
      props.goToStep(goToValue);
    } else {
      setHasError(true);
    }
  };

  var selectOptions = [];
  props.choices.forEach((choice, i) => {
    selectOptions.push({
      id: choice.ChoiceText + "|" + choice.GoTo,
      name: choice.ChoiceText,
    });
  });

  return (
    <div>
      {hasError ? (
        <div>
          <ErrorMessage errorMessage="Please select an option from the drop down below" />
        </div>
      ) : null}
      <div className="container">
        <div className="row d-flex dg_questionnaire_content">
          <div className="col-md-8 col-xs-12 align-self-center">
            <Select
              id={"dropdown" + props.id}
              label=""
              options={selectOptions}
              onChange={handleSelectionChange}
            />
          </div>
        </div>
        <div className="row d-flex dg_questionnaire_content">
          <Button text="Next" onClick={handlesOnClickGo} />
        </div>
      </div>{" "}
    </div>
  );
};

export default DecisionTree;
