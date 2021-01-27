import React, { useState } from "react";
import { Button, RadioButton } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {
const [getRadioChoice, setRadioChoice] = useState(0);

    const handleSelectionChange = (value) => {
        setRadioChoice(value);
    };

    const handlesOnClickGo = () => {
        props.goToStep(getRadioChoice);
    };

    var radioElements = [];
    props.choices.forEach((choice, i) => {
        radioElements.push(
        <div key={i} className="row" style={{width: "fit-content"}}>
            <RadioButton
                id={choice.ChoiceText + choice.GoTo}
                name={"radio" + props.id}
                label={choice.ChoiceText}
                value={choice.GoTo}
                onChange={handleSelectionChange}
            />
        </div>
        );
    });

  return (
    <div style={{textAlign: "-webkit-center"}}>
        {radioElements}
        <div className="row" style={{width: "fit-content"}}>
            <Button
                text="Submit"
                onClick={handlesOnClickGo}
                />
        </div>
    </div>
  );
};

export default DecisionTree;
