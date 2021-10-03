import React, { useEffect, useReducer, createContext } from 'react'
import { userReducer } from '../reducers/userReducers'
import { checkLogged } from '../actions/userActions'

let UserContext: React.Context<defaultValue>
const { Provider, Consumer } = (UserContext = createContext({} as defaultValue))

interface defaultValue {
  state: State
  dispatch: any
}
interface UserProviderProps {
  children: JSX.Element
}
export interface State {
  userData: IUserData
  error: any
  logged: boolean
  loading: boolean
}

const initialState: State = {
  userData: {
    id: '',
    username: '',
    email:'',
  }, // 用户data，里面包含id，username，email
  error: null,
  logged: false,
  loading: true,
}
const UserProvider: React.FC<UserProviderProps> = (
  props: UserProviderProps
) => {
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
