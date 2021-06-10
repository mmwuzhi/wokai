import React, { useContext, useRef, useEffect } from 'react'
import { UserContext } from '../../provider/UserContext'
import { checkLogged } from '../../actions/userActions'
import axios from 'axios'

import { LtInput, DarkButton } from '../../tools/Inputs'
const MyPage = (props) => {
  const { state, dispatch } = useContext(UserContext)

  const nameRef = useRef(null)
  const passwordRef = useRef(null)
  const newPasswordRef = useRef(null)
  const confirmNewPasswordRef = useRef(null)

  useEffect(() => {
    ;(async () => {
      const check = await checkLogged(dispatch)
      if (check?.data?.data?.username !== undefined) {
        nameRef.current.setValue(check?.data?.data?.username)
      } else props.history.push('/user/login')
    })()
  }, [props.history, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    if (newPasswordRef.current.value !== confirmNewPasswordRef.current.value) {
    } else {
      const user = {
        username: nameRef.current.value,
        email: state.userData.email,
        password: passwordRef.current.value,
        newPassword: newPasswordRef.current.value,
      }
      //调用后端接口修改user信息
      axios
        .post('/api/users/update', user)
        .then(() => {
          alert('変更しました！')
          props.history.push('/comment')
        })
        .catch((e) => {
          console.table(e)
        })
    }
  }
  return (
    <div>
      <h3 className='mt-3 mb-5'>ユーザー情報変更</h3>
      <form onSubmit={onSubmit}>
        <LtInput type='text' forID='user-name' ref={nameRef}>
          ニックネーム
        </LtInput>
        <div className='form-group'>
          <label>メールアドレス: </label>
          <span>{state.userData.email}</span>
        </div>
        <LtInput type='password' forID='old-password' ref={passwordRef}>
          パスワード
        </LtInput>
        <LtInput type='password' forID='new-password' ref={newPasswordRef}>
          新パスワード
        </LtInput>
        <LtInput
          type='password'
          forID='confirm-new-password'
          ref={confirmNewPasswordRef}
        >
          新パスワード確認
        </LtInput>
        <DarkButton ype='submit'>変更</DarkButton>
      </form>
    </div>
  )
}

export default MyPage
