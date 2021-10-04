import React, { useRef, useEffect, SyntheticEvent } from 'react'
import axios from 'axios'
import { History } from 'history'
import { useDispatch, useSelector } from 'react-redux'

import { DarkButton, LtInput } from '../../tools/Inputs'
import { RootDispatch, RootState } from '../../store/store'
import { loginFail, loginSuccess } from '../../store/features/userSlice'

const signupAction = (user: IUser) => async (dispatch: RootDispatch) => {
  try {
    const { data } = await axios.post('/api/users/', user)
    dispatch(loginSuccess(data))
    alert('サインアップしました！')
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      dispatch(loginFail(error.message))
    }
  }
}

const SignUp = (props: { history: History }) => {
  const dispatch = useDispatch()
  // 通过选择器获取state
  const userState = useSelector((state: RootState) => state.user)

  const nameRef = useRef<any>(null)
  const mailRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)
  const confirmPasswordRef = useRef<any>(null)

  useEffect(() => {
    if (userState.logged === true) props.history.push('/user/mypage')
  }, [userState.logged, props.history])

  const onSubmit = (e: SyntheticEvent<any>) => {
    e.preventDefault()
    if (passwordRef!.current!.value !== confirmPasswordRef!.current!.value) {
      alert('パスワードが一致していない！')
    } else {
      const user: IUser = {
        username: nameRef!.current!.value,
        email: mailRef!.current!.value,
        password: passwordRef!.current!.value,
      }
      //调用后端接口创建user
      signupAction(user)(dispatch)
    }
  }
  return (
    <div>
      <h3 className='mt-3 mb-5'>サインアップ</h3>
      <form onSubmit={onSubmit}>
        <LtInput type='text' forID='user-name' ref={nameRef}>
          ニックネーム
        </LtInput>
        <LtInput type='email' forID='e-mail' ref={mailRef}>
          メールアドレス
        </LtInput>
        <LtInput type='password' forID='password' ref={passwordRef}>
          パスワード
        </LtInput>
        <LtInput
          type='password'
          forID='confirm-password'
          ref={confirmPasswordRef}
        >
          パスワード確認
        </LtInput>
        <DarkButton type='submit'>サインアップ</DarkButton>
      </form>
    </div>
  )
}
export default SignUp