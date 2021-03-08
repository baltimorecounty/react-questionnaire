import React, { useState } from "react";
import { Card, CardContent } from "@baltimorecounty/dotgov-components";
import ErrorMessage from "./ErrorMessage";
import NextButton from "./NextButton";

const DecisionTree = (props) => {
  const [getRadioValue, setRadioValue] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleSelectionChange = (event) => {
    setRadioValue(event.target.value);
    setHasError(false);
  };

  return (
    <div className="container">
      <div>
        {hasError ? (
          <div>
            <ErrorMessage errorMessage="Please select one of the options below" />
          </div>
        ) : null}
      </div>
      {props.choices.map(({ ChoiceText, GoToType, GoTo }) => {
        return (
          <div key={"radio" + ChoiceText + GoTo} className="row d-flex">
            <div className="col-md-8 col-xs-12 align-self-center">
              <Card>
                <CardContent className="text-left">
                  <div className="dg_radio">
                    <input
                      className="dg_radio-input"
                      id={ChoiceText + GoTo}
                      name={"radio" + props.id}
                      type="radio"
                      value={ChoiceText + "|" + GoToType + "|" + GoTo}
                      onChange={handleSelectionChange}
                    />
                    <label
                      className="dg_label dg_radio-label"
                      htmlFor={ChoiceText + GoTo}
                    >
                      {ChoiceText}
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );
      })}
      <div className="row d-flex dg_questionnaire_content">
        <NextButton
          inputValue={getRadioValue}
          goToStep={props.goToStep}
          setHasError={setHasError}
        />
      </div>
    </div>
  );
};

export default DecisionTree;
