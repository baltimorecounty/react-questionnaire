import React from "react";
import localjsonData from "../data/test.json";
import useGetDecisionTreeData from "../hooks/useGetDecisionTreeData";
import DecisionStep from "./DecisionStep";
import StepWizard from "react-step-wizard";

const filelocation = window.decisiontree.jsonlocation;

const DecisionTree = () => {
  const [
    { decisionTreeData = [], isLoading, hasError },
  ] = useGetDecisionTreeData(filelocation);

  const jsonData =
    decisionTreeData.length > 0 ? decisionTreeData : localjsonData;

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
