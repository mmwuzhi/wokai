import React, { useContext, useRef, useEffect, useState } from 'react'
import { UserContext } from '../../provider/UserContext'
import { checkLogged } from '../../actions/userActions'
import axios from 'axios'

const MyPage = (props) => {
  const { state, dispatch } = useContext(UserContext)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const confirmNewPassword = useRef(null)
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    ;(async () => {
      const check = await checkLogged(dispatch)
      if (check?.data?.data?.username !== undefined) {
        setUsername(check?.data?.data?.username)
      } else props.history.push('/user/login')
    })()
  }, [props.history, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    if (newPassword !== confirmNewPassword.current.value) {
      setMessage('パスワードが一致していない！')
    } else {
      const user = {
        username: username,
        email: state.userData.email,
        password: password,
        newPassword: newPassword,
      }
      setMessage('')
      //调用后端接口修改user信息
      axios
        .post('/api/users/update', user)
        .then(() => {
          alert('変更しました！')
          props.history.push('/comment')
        })
        .catch((e) => {
          console.table(e)
          setErrorMessage('パスワードが間違いました！')
        })
    }
  }
  return (
    <div>
      <h3 className='mt-3 mb-5'>ユーザー情報変更</h3>
      <form onSubmit={onSubmit}>
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
          <span>{state.userData.email}</span>
        </div>
        <div className='form-group'>
          <label>パスワード: </label>
          <span style={{ color: 'red' }}>{errorMessage}</span>
          <input
            type='password'
            className='form-control mt-2 mb-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>新パスワード: </label>
          <input
            type='password'
            className='form-control mt-2 mb-4'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>新パスワード確認: </label>
          <span style={{ color: 'red' }}>{message}</span>
          <input
            type='password'
            className='form-control mt-2 mb-4'
            ref={confirmNewPassword}
          />
        </div>
        <div className='form-group'>
          <input type='submit' value='変更' className='btn btn-info' />
        </div>
      </form>
    </div>
  )
}

export default MyPage
