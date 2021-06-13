import React, { useRef, useEffect, useContext } from 'react'
import { UserContext } from '../../provider/UserContext'
import { signup } from '../../actions/userActions'
import { DarkButton, LtInput } from '../../tools/Inputs'

const SignUp = (props) => {
  const { state, dispatch } = useContext(UserContext)

  const nameRef = useRef(null)
  const mailRef = useRef(null)
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  useEffect(() => {
    if (state.logged === true) props.history.push('/user/mypage')
  }, [state.logged, props.history])

  const onSubmit = (e) => {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert('パスワードが一致していない！')
    } else {
      const user = {
        username: nameRef.current.value,
        email: mailRef.current.value,
        password: passwordRef.current.value,
      }
      //调用后端接口创建user
      signup(user)(dispatch)
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
