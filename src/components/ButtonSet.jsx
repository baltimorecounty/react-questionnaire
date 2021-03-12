import React from "react";
import { Button } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {
  var buttonElements = [];
  props.choices.forEach((choice, i) => {
    const handlesOnClickGo = () => {
      if (choice.GoToType === "Link") {
        window.location.href = choice.GoTo;
      } else {
        props.goToStep(choice.GoTo);
        window.scrollTo(0, 0);
      }
    };

    buttonElements.push(
      <div key={"button" + i} className="col dg_section-cta">
        <Button
          key={"choice" + i}
          text={choice.ChoiceText}
          onClick={handlesOnClickGo}
        />
      </div>
    );
  });

  return <div className="row">{buttonElements}</div>;
};

export default DecisionTree;
