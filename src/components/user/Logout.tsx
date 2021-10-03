import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../provider/UserContext'
import { checkLogged, logout } from '../../actions/userActions'
import { History } from 'history'

import { LightButton, DarkButton } from '../../tools/Inputs'
const Logout = (props: { history: History }) => {
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    ;(async () => {
      const data = await checkLogged(dispatch)
      if (data?.code !== 0) props.history.push('/user/login')
    })()
  }, [state.logged, dispatch, props.history])

  const cancel = () => {
    props.history.push('/')
  }

  return (
    <div>
      <h3 className=''>なになにさいとからログアウトしますか？</h3>
      <div className=''>
        <LightButton onClick={cancel}>キャンセル</LightButton>
        <DarkButton onClick={() => logout(dispatch)}>ログアウト</DarkButton>
      </div>
    </div>
  )
}
export default Logout
