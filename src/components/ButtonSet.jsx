import React from "react";
import { Button } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {

  var buttonElements = [];
  props.choices.forEach((choice, i) => {
        const handlesOnClickGo = () => {
            props.goToStep(choice.GoTo);
          };

      buttonElements.push(
        <div key={"button"+i} className="col dg_section-cta">
            <Button
            key={"choice"+i}
            text={choice.ChoiceText}
            onClick={handlesOnClickGo}
            />
        </div>
      );
  });

  return (
    <div className="row">
            {buttonElements}
    </div>
  );
};

export default DecisionTree;
