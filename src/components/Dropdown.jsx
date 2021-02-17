import React, { useState } from "react";
import { Button, Select } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {
  const [getDropdownChoice, setDropdownChoice] = useState(0);

  console.log(props);

  const handleSelectionChange = (event) => {
    setDropdownChoice(event.target.value);
  };

  const handlesOnClickGo = () => {
    var goToValue = getDropdownChoice.substring(
      getDropdownChoice.indexOf("|") + 1
    );
    props.goToStep(goToValue);
  };

  var selectOptions = [];
  props.choices.forEach((choice, i) => {
    selectOptions.push({
      id: choice.ChoiceText + "|" + choice.GoTo,
      name: choice.ChoiceText,
    });
  });

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-8 col-xs-12 align-self-center">
          <Select
            id={"dropdown" + props.id}
            label=""
            options={selectOptions}
            onChange={handleSelectionChange}
          />
        </div>
      </div>
      <div className="row d-flex">
        <div className="col-md-6 col-xs-12">
          <Button text="Next" onClick={handlesOnClickGo} />
        </div>
      </div>
    </div>
  );
};

export default DecisionTree;
