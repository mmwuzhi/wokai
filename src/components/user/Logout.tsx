import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useQueryClient } from 'react-query'
import { LightButton, DarkButton } from '../../tools/Inputs'
import { useLogged } from '../../hooks/useLogged'

const Logout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { isLoading, isError } = useLogged()
  if (isError) navigate('/user/login')

  const handleLogout = async () => {
    try {
      await axios.get('/api/users/logout')
      // logout成功则将logged标记为失效数据
      queryClient.invalidateQueries('logged')
    } catch {
      alert('ログアウト失敗！')
    }
  }

  const handleCancel = () => {
    navigate('/')
  }

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <h3 className=''>なになにさいとからログアウトしますか？</h3>
      <div className=''>
        <LightButton onClick={handleCancel}>キャンセル</LightButton>
        <DarkButton onClick={handleLogout}>ログアウト</DarkButton>
      </div>
    </>
  )
}
export default Logout
