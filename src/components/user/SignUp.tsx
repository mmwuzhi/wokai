import { useRef, SyntheticEvent } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { DarkButton, LtInput, LtInputHandles } from '../../tools/Inputs'
import { loginFail } from '../../store/features/userSlice'
import { useLogged } from '../../hooks/useLogged'

const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const { data, isLoading } = useLogged()

  const nameRef = useRef<LtInputHandles>(null)
  const mailRef = useRef<LtInputHandles>(null)
  const passwordRef = useRef<LtInputHandles>(null)
  const confirmPasswordRef = useRef<LtInputHandles>(null)

  if (data != null && !isLoading) navigate('/user/mypage')

  const onSubmit = async (e: SyntheticEvent<any>) => {
    try {
      e.preventDefault()
      if (passwordRef!.current!.value !== confirmPasswordRef!.current!.value) {
        alert('パスワードが一致していない！')
      } else {
        const user: User = {
          username: nameRef.current!.value,
          email: mailRef.current!.value,
          password: passwordRef.current!.value,
        }
        //调用后端接口创建user
        const { data } = await axios.post('/api/users/', user)
        queryClient.setQueryData('logged', () => data.data)
        alert('サインアップしました！')
      }
    } catch (err) {
      if (
        axios.isAxiosError(err) &&
        err.response &&
        err.response.status === 400
      ) {
        // TODO: 改成不影响用户的方法 不要用alert
        alert(err.response.data)
        dispatch(loginFail(err.message))
      }
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
