import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_CHECK_LOGGED_REQUEST,
  USER_CHECK_LOGGED_SUCCESS,
  USER_CHECK_LOGGED_FAIL,
} from '../reducers/userReducers'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    })
    const user = {
      email: email,
      password: password,
    }
    const { data } = await axios.post('/api/users/login', user)

    dispatch({
      type: USER_LOGIN_SUCCESS,
      value: data,
    })
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      value: error.response ? error.response.data.message : 'errorMessage',
    })
  }
}

export const logout = (dispatch) => {
  dispatch({
    type: USER_LOGOUT_REQUEST,
  })
  axios
    .get('/api/users/logout')
    .then((res) => {
      dispatch({
        type: USER_LOGOUT_SUCCESS,
      })
    })
    .catch((error) => {
      dispatch({
        type: USER_LOGOUT_FAIL,
        value: error.response ? error.response.data.message : 'errorMessage',
      })
    })
}

export const checkLogged = (dispatch) => {
  dispatch({
    type: USER_CHECK_LOGGED_REQUEST,
  })
  axios
    .get('/api/users/userInfo')
    .then((res) => {
      res.data.code === 0
        ? dispatch({
            type: USER_CHECK_LOGGED_SUCCESS,
            value: res.data.data,
          })
        : dispatch({
            type: USER_CHECK_LOGGED_FAIL,
          })
    })
    .catch((error) => {
      console.log(error)
      dispatch({
        type: USER_CHECK_LOGGED_FAIL,
      })
    })
}