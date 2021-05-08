const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST'
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
const USER_LOGOUT = 'USER_LOGOUT'

const USER_SIGNUP_REQUEST = 'USER_SIGNUP_REQUEST'
const USER_SIGNUP_SUCCESS = 'USER_SIGNUP_SUCCESS'
const USER_SIGNUP_FAIL = 'USER_SIGNUP_FAIL'

const USER_UPDATE_PROFILE_REQUEST = 'USER_UPDATE_PROFILE_REQUEST'
const USER_UPDATE_PROFILE_SUCCESS = 'USER_UPDATE_PROFILE_SUCCESS'
const USER_UPDATE_PROFILE_FAIL = 'USER_UPDATE_PROFILE_FAIL'
const USER_UPDATE_PROFILE_RESET = 'USER_UPDATE_PROFILE_RESET'

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, userData: action.payload }
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
