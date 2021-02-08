import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Section, Button } from "@baltimorecounty/dotgov-components";
import StepIndicators from "./StepIndicators";
import ButtonSet from "./ButtonSet";
import RadioSet from "./RadioSet";
import Dropdown from "./Dropdown";
import Message from "./Message";
import BackButton from "./BackButton";

const DecisionTree = (props) => {
  var choiceList;

  switch (props.type) {
    default:
    case "Button":
      choiceList = (
        <ButtonSet choices={props.choices} goToStep={props.goToStep} />
      );
      break;
    case "Radio":
      choiceList = (
        <RadioSet
          id={props.id}
          choices={props.choices}
          goToStep={props.goToStep}
        />
      );
      break;
    case "Dropdown":
      choiceList = (
        <Dropdown
          id={props.id}
          choices={props.choices}
          goToStep={props.goToStep}
        />
      );
      break;
    case "Message":
      choiceList = <Message choices={props.choices} />;
      break;
  }

  return (
    <Section className="dg_section">
      <StepIndicators
        currentStep={props.currentStep}
        totalSteps={props.totalSteps}
      />
      <BackButton
        currentStep={props.currentStep}
        previousStep={props.previousStep}
      />
      <div className="container">
        <div className="row">
          <div className="col dg_section-cta header">
            <div className="header">{ReactHtmlParser(props.text)}</div>
          </div>
        </div>
        {choiceList}
        <div className="row">
          <div className="col dg_section-cta">
            <Button
              text="Start Over"
              className="dg_button-link"
              onClick={props.firstStep}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default DecisionTree;
