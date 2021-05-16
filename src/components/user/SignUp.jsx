import React, { useState, useRef, useEffect, useContext } from 'react'
import { UserContext } from '../../provider/UserContext'
import { signup } from '../../actions/userActions'

const SignUp = (props) => {
  const { state, dispatch } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const confirmPassword = useRef(null)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (state.logged === true) props.history.push('/user/mypage')
  }, [state.logged, props.history])

  const onSubmit = (e) => {
    if (password !== confirmPassword.current.value) {
      setMessage({
        message: 'パスワードが一致していない！',
      })
    } else {
      const user = {
        username,
        email,
        password,
      }
      setMessage('')
      //调用后端接口创建user
      signup(user)(dispatch)
    }
  }
  return (
    <div>
      <h3 className='mt-3 mb-5'>サインアップ</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <label>ニックネーム: </label>
          <input
            type='text'
            className='form-control mt-2 mb-4'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>メールアドレス: </label>
          <input
            type='email'
            className='form-control mt-2 mb-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>パスワード: </label>
          <input
            type='password'
            className='form-control mt-2 mb-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>パスワード確認: </label>
          <span style={{ color: 'red' }}>{message}</span>
          <input
            type='password'
            className='form-control mt-2 mb-4'
            ref={confirmPassword}
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='サインアップ' className='btn btn-info' />
        </div>
      </form>
    </div>
  )
}
export default SignUp
