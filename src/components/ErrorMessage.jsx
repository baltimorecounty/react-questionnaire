import React from "react";
import { Alert } from "@baltimorecounty/dotgov-components";
const ErrorMessage = (props) => {
  const { errorMessage } = props;

  return (
    <Alert className="status" type="error" icon="fas fa-exclamation-circle">
      <p>{errorMessage}</p>
    </Alert>
  );
};

export default ErrorMessage;
