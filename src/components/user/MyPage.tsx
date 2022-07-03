import { useRef, SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useLogged } from '../../hooks/useLogged'
import { LtInput, DarkButton, LtInputHandles } from '../../tools/Inputs'

const MyPage = () => {
  const { data, isLoading, isError } = useLogged()

  const nameRef = useRef<LtInputHandles>(null)
  const passwordRef = useRef<LtInputHandles>(null)
  const newPasswordRef = useRef<LtInputHandles>(null)
  const confirmNewPasswordRef = useRef<LtInputHandles>(null)
  const navigate = useNavigate()

  if (isError) navigate('/user/login')
  if (data != null) nameRef!.current!.setValue(data.username)

  const onSubmit = (e: SyntheticEvent<any>) => {
    e.preventDefault()
    // TODO: 改成不影响用户的方法 不要用alert
    if (
      newPasswordRef.current!.value !== confirmNewPasswordRef.current!.value
    ) {
      alert('新パスワードが確認用パスワードと一致していません！')
    } else if (!passwordRef.current!.value) {
      alert('パスワードを入力してください！')
    } else {
      const user = {
        username: nameRef.current!.value,
        email: data!.email,
        password: passwordRef.current!.value,
        newPassword: newPasswordRef.current!.value,
      }
      //调用后端接口修改user信息
      // TODO: 改成不影响用户的方法 不要用alert
      axios
        .put('/api/users/update', user)
        .then(() => {
          alert('変更しました！')
        })
        .catch((e) => {
          alert(e.response.data)
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
          <span>{!isLoading ? data!.email: ''}</span>
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
