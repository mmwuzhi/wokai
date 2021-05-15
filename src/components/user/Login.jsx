import React, { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../provider/UserContext'
import { login } from '../../actions/userActions'

const Login = (props) => {
  const { state, dispatch } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  useEffect(() => {
    if (state.logged === true) props.history.push('/comment')
  }, [state.logged, props.history])
  const onSubmit = (e) => {
    e.preventDefault()
    //调用后端接口创建user
    login(email, password)(dispatch)
  }
  return (
    <div>
      <h3 className='mt-3 mb-5'>ログイン</h3>
      <form onSubmit={(e) => onSubmit(e)}>
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
          <input type='submit' value='サインイン' className='btn btn-info' />
        </div>
      </form>
    </div>
  )
}
export default Login
