import { useEffect, useState } from "react";
import { GetDecisionTreeData } from "../services/FetchJsonData";

const useGetDecisionTreeData = (fileLocation) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [decisionTreeData, setDecisionTreeData] = useState([]);

  useEffect(() => {
    GetDecisionTreeData()
      .then((response) => {
        setDecisionTreeData(response);
      })
      .catch(() => {
        setHasError(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [fileLocation]);
  return [
    {
      decisionTreeData,
      hasError,
      isLoading,
    },
  ];
};

export default useGetDecisionTreeData;
