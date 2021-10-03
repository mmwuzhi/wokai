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
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from '../reducers/userReducers'

export const login =
  (email: string, password: string) =>
  async (dispatch: React.Dispatch<any>) => {
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
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        dispatch({
          type: USER_LOGIN_FAIL,
          value: error.message,
        })
      }
    }
  }

export const logout = (dispatch: React.Dispatch<any>) => {
  dispatch({
    type: USER_LOGOUT_REQUEST,
  })
  axios
    .get('/api/users/logout')
    .then(() => {
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

export const checkLogged = async (dispatch: React.Dispatch<any>) => {
  try {
    dispatch({
      type: USER_CHECK_LOGGED_REQUEST,
    })
    const res = await axios.get('/api/users/userInfo')
    res.data.code === 0
      ? dispatch({
          type: USER_CHECK_LOGGED_SUCCESS,
          value: res.data.data,
        })
      : dispatch({
          type: USER_CHECK_LOGGED_FAIL,
        })
    return res.data
  } catch (error) {
    console.log(error)
    dispatch({
      type: USER_CHECK_LOGGED_FAIL,
    })
    return false
  }
}

export const signup =
  (user: IUser) => async (dispatch: React.Dispatch<any>) => {
    try {
      dispatch({
        type: USER_SIGNUP_REQUEST,
      })
      const { data } = await axios.post('/api/users/', user)
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        value: data,
      })
      alert('サインアップしました！')
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        dispatch({
          type: USER_SIGNUP_FAIL,
          value: error.message,
        })
      }
    }
  }
