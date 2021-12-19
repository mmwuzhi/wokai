import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { LightButton, DarkButton } from '../../tools/Inputs'
import { RootState } from '../../store/store'
import { loginFail, logoutSuccess } from '../../store/features/userSlice'
import { checkLogged } from '../../actions/userActions'
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
  // 通过选择器获取state
  const logged = useSelector((state: RootState) => state.user.logged)
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      const data = await checkLogged(dispatch)
      if (data?.code !== 0 || logged === false) navigate('/user/login')
    })()
  }, [logged, dispatch, navigate])

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
