import React, { useEffect, useRef } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { loginSuccess, loginFail } from '../../store/features/userSlice'
import { RootDispatch } from '../../store/store'
import { DarkButton, LtInput } from '../../tools/Inputs'
import { RootState } from '../../store/store'
import { useNavigate } from 'react-router-dom'

const loginAction =
  (email: string, password: string) => async (dispatch: RootDispatch) => {
    try {
      const user = {
        email: email,
        password: password,
      }
      const { data } = await axios.post('/api/users/login', user)
      dispatch(loginSuccess(data))
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response &&
        error.response.status === 400
      ) {
        // TODO: 改成不影响用户的方法 不要用alert
        dispatch(loginFail(error.message))
        alert(error.response.data)
      }
    }
  }

const Login = () => {
  const dispatch = useDispatch()
  // 通过选择器获取state
  const userState = useSelector((state: RootState) => state.user)
  const emailRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (userState.logged === true) {
      navigate('/comment')
    }
  }, [userState.logged, navigate])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginAction(emailRef.current!.value, passwordRef.current!.value)(dispatch)
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
