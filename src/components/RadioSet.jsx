import React, { useState } from "react";
import { Button, Card, CardContent } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {
  const [getRadioValue, setRadioValue] = useState(0);

  const handleSelectionChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handlesOnClickGo = () => {
    var goToValue = getRadioValue.substring(getRadioValue.indexOf("|") + 1);
    props.goToStep(goToValue);
  };

  return (
    <div className="centered-row-parent">
      {props.choices.map(({ ChoiceText, GoTo }) => {
        return (
          <div key={"radio" + ChoiceText + GoTo} className="row radio-body">
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
        );
      })}
      <div className="row centered-row">
        <Button text="Next" onClick={handlesOnClickGo} />
      </div>
    </div>
  );
};

export default DecisionTree;
