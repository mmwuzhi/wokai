import React, { useEffect, useReducer, createContext } from 'react'
// import axios from 'axios'
import { userReducer } from '../reducers/userReducers'
import { checkLogged } from '../actions/userActions'
import { Loading } from '../components/loading/Loading'
let UserContext
const { Provider, Consumer } = (UserContext = createContext())

const initialState = {
  userData: {}, // 用户data，里面包含id，username，email
  error: null,
  logged: false,
  loading: true,
}
const UserProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, initialState)
  // TODO: 不知道为啥第一次加载的时候这里会渲染3次
  useEffect(() => {
    checkLogged(dispatch)
  }, [])

  // const handleCheckLogin = () => {
  //   axios
  //     .get('/api/users/userInfo')
  //     .then((user) => {
  //       user.data.code === 0
  //         ? this.setState({
  //             loading: false,
  //             logged: true,
  //             user: user.data.data,
  //           })
  //         : this.setState({ loading: false, logged: false })
  //     })
  //     .catch((error) => this.setState({ loading: false, logged: false, error }))
  // }
  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      {state.loading && <Loading />}
      {props.children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }