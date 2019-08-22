export const createProject = project => {
  return (dispatch, getState) => {
    // make async call
    return {
      type: 'ADD_PROJECT',
      payload: project,
    };
  };
};
