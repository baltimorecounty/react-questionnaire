import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Section } from "@baltimorecounty/dotgov-components";
import StepIndicators from "./StepIndicators";
import ButtonSet from "./ButtonSet";
import RadioSet from "./RadioSet";

const DecisionTree = (props) => {

  var choiceElements = [];

    switch (props.type) {
        default:
        case "Button":
            choiceElements.push(
                <ButtonSet 
                    choices={props.choices}
                    goToStep={props.goToStep}
                />
            );
        break;
        case "Radio":
            choiceElements.push(
                <RadioSet 
                    id={props.id}
                    choices={props.choices}
                    goToStep={props.goToStep}
                />
            );
        break;
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
        {choiceElements}
        <StepIndicators
            currentStep={props.currentStep}
            totalSteps={props.totalSteps}
        />
      </div>
      </Section>
  );
};

export default DecisionTree;
