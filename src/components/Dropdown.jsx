import React, { useState } from "react";
import { Select } from "@baltimorecounty/dotgov-components";
import ErrorMessage from "./ErrorMessage";
import NextButton from "./NextButton";

const DecisionTree = (props) => {
  const [getDropdownChoice, setDropdownChoice] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleSelectionChange = (event) => {
    setDropdownChoice(event.target.value);
    setHasError(false);
  };

  var selectOptions = [];
  props.choices.forEach((choice, i) => {
    selectOptions.push({
      id: choice.ChoiceText + "|" + choice.goToType + "|" + choice.GoTo,
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
          <NextButton
            inputValue={getDropdownChoice}
            goToStep={props.goToStep}
            setHasError={setHasError}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default DecisionTree;
