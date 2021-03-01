import React, { useState } from "react";
import { Button, Card, CardContent } from "@baltimorecounty/dotgov-components";
import ErrorMessage from "./ErrorMessage";

const DecisionTree = (props) => {
  const [getRadioValue, setRadioValue] = useState(0);
  const [hasError, setHasError] = useState(false);

  const handleSelectionChange = (event) => {
    setRadioValue(event.target.value);
    setHasError(false);
  };

  const handlesOnClickGo = () => {
    if (getRadioValue) {
      var goToValue = getRadioValue.substring(getRadioValue.indexOf("|") + 1);
      props.goToStep(goToValue);
    } else {
      setHasError(true);
    }
  };

  return (
    <div className="container">
      <div>
        {hasError ? (
          <div>
            <ErrorMessage errorMessage="DO something" />
          </div>
        ) : null}
      </div>
      {props.choices.map(({ ChoiceText, GoTo }) => {
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
                      value={ChoiceText + "|" + GoTo}
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
        <Button text="Next" onClick={handlesOnClickGo} />
      </div>
    </div>
  );
};

export default DecisionTree;
