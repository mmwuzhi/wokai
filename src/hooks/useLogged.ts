import axios from 'axios'
import { useQuery } from 'react-query'

export const checkLogged = async () => {
  try {
    const res = await axios.get('/api/users/userInfo')
    if (res.data.code === 0) return res.data.data
  } catch (error) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 400
    ) {
      throw error.message
    }
  }
}

export const useLogged = () => {
  const { data, isLoading, isError } = useQuery<UserData>(
    'logged',
    checkLogged
  )

  return { data, isLoading, isError }
}
