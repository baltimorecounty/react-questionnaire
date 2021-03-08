import React from "react";
import { Button } from "@baltimorecounty/dotgov-components";

const Message = (props) => {
  var buttonElements = [];
  const { options } = props;
  props.choices.forEach((choice, i) => {
    const handlesOnClickGo = () => {
      if (choice.GoToType == "Link") {
        window.location.href = choice.GoTo;
      } else {
        props.goToStep(choice.GoTo);
        window.scrollTo(0, 0);
      }
    };

    buttonElements.push(
      <div key={"button" + i} className="col dg_section-cta">
        <Button text={choice.ChoiceText} onClick={handlesOnClickGo} />
      </div>
    );
  });

  return (
    <div>
      <div className="row">
        {options.ShowSuccessIcon ? (
          <div className="col dg_section-cta success-checkmark">
            <i className="fas fa-check" aria-hidden="true"></i>
          </div>
        ) : null}
      </div>
      <div className="row">{buttonElements}</div>
    </div>
  );
};

export default Message;
