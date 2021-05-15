import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../provider/UserContext'
import { logout } from '../../actions/userActions'

const Logout = (props) => {
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    if (state.logged === false) props.history.push('/user/login')
  }, [state.logged, props.history])

  const cancel = () => {
    props.history.push('/')
  }

  return (
    <div>
      <h3 className='mt-3 mb-5'>ログアウト</h3>
      <span className='form-group'>なんでもさいとからログアウトしますか？</span>
      <div className='form-group'>
        <button
          onClick={() => cancel()}
          className='btn btn-info'
          style={{ backgroundColor: 'lightgray', borderColor: 'lightgray' }}
        >
          キャンセル
        </button>
        <button onClick={() => logout(dispatch)} className='btn btn-info'>
          ログアウト
        </button>
      </div>
    </div>
  )
}
export default Logout