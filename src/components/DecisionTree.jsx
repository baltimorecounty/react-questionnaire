import React from "react";
// import ReactHtmlParser from "react-html-parser";
//import { TableBody } from "@baltimorecounty/dotgov-components";
import jsonData from "../data/test.json";
import DecisionStep from "./DecisionStep";
//import XMLParser from "react-xml-parser";
//import axios from "axios";
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
