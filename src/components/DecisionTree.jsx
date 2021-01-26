import React from "react";
import localjsonData from "../data/test.json";
// import ReactHtmlParser from "react-html-parser";
//import { TableBody } from "@baltimorecounty/dotgov-components";

import useGetDecisionTreeData from "../hooks/useGetDecisionTreeData";
import DecisionStep from "./DecisionStep";
//import XMLParser from "react-xml-parser";
//import axios from "axios";
import StepWizard from "react-step-wizard";

const DecisionTree = () => {
  const { decisionTreeData, isLoading, hasError } = useGetDecisionTreeData(
    window.decisiontree.jsonlocation
  );

  const jsonData = decisionTreeData ? decisionTreeData : localjsonData;
  console.log(decisionTreeData);
  if (hasError) {
    return (
      <p>
        We could not load information for this decision tree. Please try again
        in a few minutes.
      </p>
    );
  }

  return (
    <div>
      {isLoading ? (
        <div>
          <p>{`Loading Decision Tree...`}</p>
        </div>
      ) : (
        <StepWizard>
          {jsonData.Questions.map((question, i) => (
            <DecisionStep
              setName={jsonData.QuestionSetName}
              text={question.Question}
              choices={question.Choices}
              type={question.Type}
              key={i}
            />
          ))}
        </StepWizard>
      )}
    </div>
  );
};

export default DecisionTree;
