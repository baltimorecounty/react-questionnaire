import React, { useState } from "react";
import { Button, Select } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {
  const [getDropdownChoice, setDropdownChoice] = useState(0);

  const handleSelectionChange = (event) => {
    console.log(event);
    setDropdownChoice(event.target.value);
  };

  const handlesOnClickGo = () => {
    props.goToStep(getDropdownChoice);
  };

  var selectOptions = [];
  props.choices.forEach((choice, i) => {
    selectOptions.push({ id: choice.GoTo, name: choice.ChoiceText });
  });

  console.log(selectOptions);

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <div className="row" style={{ width: "fit-content" }}>
        <Select
          id={"dropdown" + props.id}
          label={""}
          options={selectOptions}
          onChange={handleSelectionChange}
        />
      </div>
      <div className="row" style={{ width: "fit-content" }}>
        <Button text="Next" onClick={handlesOnClickGo} />
      </div>
    </div>
  );
};

export default DecisionTree;
