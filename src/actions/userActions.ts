import axios from 'axios'

import { loginFail, loginSuccess } from '../store/features/userSlice'
import { RootDispatch } from '../store/store'

export const checkLogged = async (dispatch: RootDispatch) => {
  try {
    const res = await axios.get('/api/users/userInfo')
    if (res.data.code === 0) dispatch(loginSuccess(res.data.data))

    return res.data
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      dispatch(loginFail(error.message))
      return false
    }
  }
}
