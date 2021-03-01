import React, { useState } from "react";
import { Button, Card, CardContent } from "@baltimorecounty/dotgov-components";
import ErrorMessage from "./ErrorMessage";

const DecisionTree = (props) => {
  const [getRadioValue, setRadioValue] = useState(0);
  const [hasError, setHasError] = useState(0);

  const handleSelectionChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handlesOnClickGo = () => {
    var goToValue = getRadioValue.substring(getRadioValue.indexOf("|") + 1);
    goToValue ? props.goToStep(goToValue) : setHasError(false);
  };

  return (
    <div className="container">
      {props.choices.map(({ ChoiceText, GoTo }) => {
        return (
          <div>
            {hasError}?
            <div>
              <ErrorMessage errorMessage="DO something" />
            </div>
            :
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
          </div>
        );
      })}
      <div className="row d-flex">
        <div className="col-md-6 col-xs-12">
          <Button text="Next" onClick={handlesOnClickGo} />
        </div>
      </div>
    </div>
  );
};

export default DecisionTree;
