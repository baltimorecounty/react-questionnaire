


/**
 * Get Past Meeting Events Data from Service
 */
const GetDecisionTreeDataFetch = async (fileLocation) =>
  await fetch(fileLocation).then((response) =>
    response ? response.json() : []
  );

export {  GetDecisionTreeDataFetch };
