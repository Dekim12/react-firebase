const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return { ...state, authError: 'Login failed' };
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return { ...state, authError: null };
    case 'LOGOUT_SUCCESS':
      console.log('logOut success');
      return { ...state };
    case 'SIGNUP_SUCCESS':
      console.log('signUp success');
      return { ...state, authError: null };
    case 'SIGNUP_ERROR':
      console.log('signUp failed');
      return { ...state, authError: action.payload.message };
    default:
      return state;
  }
};

export default authReducer;
