import React, { useRef, useEffect, SyntheticEvent } from 'react'
import { checkLogged } from '../../actions/userActions'
import axios from 'axios'
import { History } from 'history'

import { LtInput, DarkButton } from '../../tools/Inputs'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/store'

interface MyPageProps {
  history: History
  /* other props for ChildComponent */
}
const MyPage = (props: MyPageProps) => {
  const dispatch = useDispatch()
  // 通过选择器获取state
  const userState = useSelector((state: RootState) => state.user)

  const nameRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)
  const newPasswordRef = useRef<any>(null)
  const confirmNewPasswordRef = useRef<any>(null)

  useEffect(() => {
    ;(async () => {
      const data = await checkLogged(dispatch)
      if (data?.data?.username !== undefined) {
        nameRef!.current!.setValue(data?.data?.username)
      } else props.history.push('/user/login')
    })()
  }, [props.history, dispatch])

  const onSubmit = (e: SyntheticEvent<any>) => {
    e.preventDefault()
    if (newPasswordRef.current.value !== confirmNewPasswordRef.current.value) {
    } else {
      const user = {
        username: nameRef.current.value,
        email: userState.userData.email,
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
          <span>{userState.userData.email}</span>
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
        <DarkButton type='submit'>変更</DarkButton>
      </form>
    </div>
  )
}

export default MyPage
