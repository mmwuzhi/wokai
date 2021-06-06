import React, { useEffect, useReducer, createContext } from 'react'
import { userReducer } from '../reducers/userReducers'
import { checkLogged } from '../actions/userActions'
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

  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </Provider>
  )
}

export { UserProvider, Consumer as UserConsumer, UserContext }
