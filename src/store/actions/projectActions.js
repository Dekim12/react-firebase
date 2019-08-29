export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const { profile } = getState().firebase;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
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
          payload: error,
        });
        console.log(error);
      });
  };
};
