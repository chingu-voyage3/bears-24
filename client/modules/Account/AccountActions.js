import callApi from '../../util/apiCaller';

// Export Constants
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_SIGNUP_LOCAL = 'USER_SIGNUP_LOCAL';
export const USER_UPDATE_PROFILE = 'USER_UPDATE_PROFILE';
export const USER_UPDATE_PASSWORD = 'USER_UPDATE_PASSWORD';
export const USER_DELETE_ACCOUNT = 'USER_DELETE_ACCOUNT';
export const USER_UNLINK_OAUTH = 'USER_UNLINK_OAUTH';


// Export Actions
export function login(user) {
  return {
    type: USER_LOGIN,
    user,
  };
}

export function loginRequest(user) {
  return (dispatch) => {
    return callApi('login', 'post', {
      email: user.email,
      password: user.password,
    }).then(res => dispatch(login(res.user)));
  };
}

export function logout(user) {
  return {
    type: USER_LOGOUT,
    user,
  };
}

export function logoutRequest(user) {
  return (dispatch) => {
    return callApi('logout', 'get', {
      user_id: user,
    }).then(res => dispatch(logout(res.user)));
  };
}

export function signup(user) {
  return {
    type: USER_SIGNUP_LOCAL,
    user,
  };
}

export function getSignupRequest() {
  return () => {
    return callApi('signup', 'get', {
    });
  };
}

export function signupRequest(user) {
  return (dispatch) => {
    return callApi('signup', 'get', {
      email: user.email,
      password: user.password,
    }).then(res => dispatch(signup(res.user)));
  };
}
