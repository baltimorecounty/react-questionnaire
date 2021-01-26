import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Button, Section } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {

  var choiceElements = [];
  props.choices.forEach((choice, i) => {
    if (props.type === "Button") {
        const handlesOnClickGo = () => {
            props.goToStep(choice.GoTo);
          };

      choiceElements.push(
        <Button
          key={i}
          text={choice.ChoiceText}
          onClick={handlesOnClickGo}
        />
      );
    }
  });

  var stepIndicatorElements = [];
  for (var i = 1; i <= props.totalSteps; i++) {
       var indicatorColor;
      if (i < props.currentStep) {indicatorColor = "#F7F7F7";}
      if (i === props.currentStep) {indicatorColor = "#FFD986";}
      if (i > props.currentStep) {indicatorColor = "#8091C0";}
      stepIndicatorElements.push(
        <div key={i} style={{display: "inline", color: indicatorColor}}>
            <i className="fas fa-circle" aria-hidden="true"></i>
            <span>{i}</span>
        </div>
      )
  }

  return (

      <Section className="dg_section dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="dg_icon-heading__container">
              <span className="dg_icon-heading__icon">
                <i className="fas fa-question-circle" aria-hidden="true"></i>
              </span>
              <h2 className="dg_icon-heading">{props.setName}</h2>
            </div>
            <div className="text">{ReactHtmlParser(props.text)}</div>
            {choiceElements}
            <br />
            {stepIndicatorElements}
          </div>
        </div>
      </div>
      </Section>

  );
};

export default DecisionTree;
