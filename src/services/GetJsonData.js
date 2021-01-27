import axios from "axios";

/**
 * Get Past Meeting Events Data from Service
 */
const GetDecisionTreeData = (fileLocation) =>
  axios
    .get(fileLocation)
    .then(({ status, data }) => (status === 200 ? data : []));

export { GetDecisionTreeData };
