import React, { useState } from "react";
import {
  Button,
  RadioButton,
  Card,
  CardContent,
} from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {
  const [getRadioChoice, setRadioChoice] = useState(0);

  const handleSelectionChange = (radio) => {
    setRadioChoice(radio.value);
  };

  const handlesOnClickGo = () => {
    props.goToStep(getRadioChoice);
  };

  var radioElements = [];
  props.choices.forEach((choice, i) => {
    radioElements.push(
      <div key={"radio" + i} className="row radio-body">
        <Card>
          <CardContent className="text-left">
            <RadioButton
              id={choice.ChoiceText + choice.GoTo}
              name={"radio" + props.id}
              label={choice.ChoiceText}
              value={choice.GoTo}
              onChange={handleSelectionChange}
            />
          </CardContent>
        </Card>
      </div>
    );
  });

  return (
    <div className="centered-row-parent">
      {radioElements}
      <div className="row centered-row">
        <Button text="Next" onClick={handlesOnClickGo} />
      </div>
    </div>
  );
};

export default DecisionTree;
