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
        <div key={i} className="col dg_section-cta">
            <Button
            text={choice.ChoiceText}
            onClick={handlesOnClickGo}
            />
        </div>
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
        <div key={i} className="col dg_section-cta" style={{color: indicatorColor}}>
            <div className="container">
                <div className="row">
                    <i className="fas fa-circle" aria-hidden="true"></i>
                </div>
                <div className="row">
                    <span>{i}</span>
                </div>
            </div>
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
          </div>
        </div>
        <div className="row">
            <div className="col dg_section-cta">
                {ReactHtmlParser(props.text)}
            </div>
        </div>
        <div className="row">
                {choiceElements}
        </div>
        <div style={{textAlign: "-webkit-center"}}>
            <div className="row" style={{width: "fit-content"}}>
                {stepIndicatorElements}
            </div>
        </div>
      </div>
      </Section>
  );
};

export default DecisionTree;
