export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST'
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const USER_LOGOUT_FAIL = 'USER_LOGOUT_FAIL'

export const USER_CHECK_LOGGED_REQUEST = 'USER_CHECK_LOGGED_REQUEST'
export const USER_CHECK_LOGGED_SUCCESS = 'USER_CHECK_LOGGED_SUCCESS'
export const USER_CHECK_LOGGED_FAIL = 'USER_CHECK_LOGGED_FAIL'

export const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST'
export const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
export const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL'

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        userData: action.value,
      }
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.value,
      }
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: false,
        userData: {},
      }
    case USER_LOGOUT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.value,
      }
    case USER_CHECK_LOGGED_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_CHECK_LOGGED_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        userData: action.value,
      }
    case USER_CHECK_LOGGED_FAIL:
      return {
        ...state,
        loading: false,
        error: action.value,
      }
    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        logged: true,
        userData: action.value,
      }
    case USER_SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.value,
      }
    default:
      return state
  }
}

// TODO: 添加loading和loaded的action