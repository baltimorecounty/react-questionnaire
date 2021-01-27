import React from "react";
//import { TableBody } from "@baltimorecounty/dotgov-components";
import jsonData from "../data/test.json";
import DecisionStep from "./DecisionStep";
import StepWizard from 'react-step-wizard';

const DecisionTree = props => {

     if (jsonData) {    
        //console.log(jsonData) ;
        //console.log(jsonData.Questions) ;
        return (
            <div>
                <StepWizard>
                    {jsonData.Questions.map((question, i) => 
                        <DecisionStep 
                        setName={jsonData.QuestionSetName}
                        id={question.Id}
                        text={question.Question}
                        choices={question.Choices}
                        type={question.Type}
                        key={i}
                        />
                        )}
                </StepWizard>
            </div>
            )
     } else {

         return (
             <div>Loading</div>
         )
     }
};

export default DecisionTree;
