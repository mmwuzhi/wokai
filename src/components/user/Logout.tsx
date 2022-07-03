import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { LightButton, DarkButton } from '../../tools/Inputs'
import { loginFail, logoutSuccess } from '../../store/features/userSlice'
import { useLogged } from '../../hooks/useLogged'
import { useNavigate } from 'react-router-dom'

export const logoutAction = (dispatch: React.Dispatch<any>) => {
  axios
    .get('/api/users/logout')
    .then(() => {
      dispatch(logoutSuccess(false))
    })
    .catch((error) => {
      dispatch(loginFail(error))
    })
}

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isError } = useLogged()
  if (isError) navigate('/user/login')

  const cancel = () => {
    navigate('/')
  }

  return (
    <div>
      <h3 className=''>なになにさいとからログアウトしますか？</h3>
      <div className=''>
        <LightButton onClick={cancel}>キャンセル</LightButton>
        <DarkButton onClick={() => logoutAction(dispatch)}>
          ログアウト
        </DarkButton>
      </div>
    </div>
  )
}
export default Logout
