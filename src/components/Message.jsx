import React from "react";
import { Button } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {

  var buttonElements = [];
  props.choices.forEach((choice, i) => {
        const handlesOnClickGo = () => {
            window.location.href=choice.GoTo;
          };

      buttonElements.push(
        <div key={"button"+i} className="col dg_section-cta">
            <Button
            text={choice.ChoiceText}
            onClick={handlesOnClickGo}
            />
        </div>
      );
  });

  return (
      <div>
        <div className="row">
            <div className="col dg_section-cta">
                <i className="fas fa-check" aria-hidden="true"></i>
            </div>
        </div>
        <div className="row">
            {buttonElements}
        </div>
    </div>
  );
};

export default DecisionTree;
