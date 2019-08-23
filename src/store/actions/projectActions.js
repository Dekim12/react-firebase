export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Siarhei',
        authorLastName: 'Zykau',
        authorId: 1,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: 'ADD_PROJECT',
          payload: project,
        });
      })
      .catch(error => {
        dispatch({
          type: 'ADD_PROJECT_ERROR',
        });
        console.log(error);
      });
  };
};
