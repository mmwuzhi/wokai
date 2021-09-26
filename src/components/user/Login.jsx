import React, { useEffect, useContext, useRef } from 'react'
import { UserContext } from '../../provider/UserContext'
import { login } from '../../actions/userActions'

import { DarkButton, LtInput } from '../../tools/Inputs'
const Login = (props) => {
  const { state, dispatch } = useContext(UserContext)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  useEffect(() => {
    if (state.logged === true) props.history.push('/comment')
  }, [state.logged, props.history])
  const onSubmit = (e) => {
    e.preventDefault()
    login(emailRef.current.value, passwordRef.current.value)(dispatch)
  }
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <LtInput type='email' forID='mail-address' ref={emailRef}>
          メールアドレス
        </LtInput>
        <LtInput type='password' forID='now-password' ref={passwordRef}>
          パスワード
        </LtInput>
        <DarkButton type='submit'>ログイン</DarkButton>
      </form>
    </div>
  )
}
export default Login
