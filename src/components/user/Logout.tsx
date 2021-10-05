import React, { useEffect } from 'react'
import { History } from 'history'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { LightButton, DarkButton } from '../../tools/Inputs'
import { RootState } from '../../store/store'
import { loginFail, logoutSuccess } from '../../store/features/userSlice'
import { checkLogged } from '../../actions/userActions'

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

const Logout = (props: { history: History }) => {
  const dispatch = useDispatch()
  // 通过选择器获取state
  const logged = useSelector((state: RootState) => state.user.logged)

  useEffect(() => {
    ;(async () => {
      const data = await checkLogged(dispatch)
      if (data?.code !== 0 || logged === false)
        props.history.push('/user/login')
    })()
  }, [logged, dispatch, props.history])

  const cancel = () => {
    props.history.push('/')
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
