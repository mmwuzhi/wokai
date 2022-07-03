import React, { useRef } from 'react'
import axios from 'axios'
import { DarkButton, LtInput, LtInputHandles } from '../../tools/Inputs'
import { useNavigate } from 'react-router-dom'
import { useLogged } from '../../hooks/useLogged'
import { useQueryClient } from 'react-query'

const Login = () => {
  const { isLoading, isError } = useLogged()
  const emailRef = useRef<LtInputHandles>(null)
  const passwordRef = useRef<LtInputHandles>(null)
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  if (!isLoading && !isError) navigate('/comment')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()

      const user = {
        email: emailRef.current!.value,
        password: passwordRef.current!.value,
      }
      const { data } = await axios.post('/api/users/login', user)
      queryClient.setQueryData('logged', () => data.data)
    } catch (err) {
      if (
        axios.isAxiosError(err) &&
        err.response &&
        err.response.status === 400
      ) {
        // TODO: 改成不影响用户的方法 不要用alert
        alert(err.response.data)
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
