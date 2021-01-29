import React, { useState } from "react";
import { Button, RadioButton, Card, CardContent } from "@baltimorecounty/dotgov-components";

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
        <div key={"radio"+i} className="row" style={{width: "80%"}}>
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
    <div style={{textAlign: "-webkit-center"}}>
        {radioElements}
        <div className="row" style={{width: "fit-content"}}>
            <Button
                text="Next"
                onClick={handlesOnClickGo}
                />
        </div>
    </div>
  );
};

export default DecisionTree;
