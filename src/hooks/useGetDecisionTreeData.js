import { useEffect, useState } from "react";
import { GetDecisionTreeDataFetch } from "../services/GetJsonData";

const useGetDecisionTreeData = (fileLocation) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [decisionTreeData, setDecisionTreeData] = useState([]);

  useEffect(() => {
    GetDecisionTreeDataFetch(fileLocation)
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
