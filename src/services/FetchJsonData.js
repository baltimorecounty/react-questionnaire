/**
 * Get Past Meeting Events Data from Service
 */
const GetDecisionTreeData = (fileLocation = "") =>
  fetch(fileLocation).then((response) =>
    response.status === 200 ? response.json() : []
  );

export { GetDecisionTreeData };
