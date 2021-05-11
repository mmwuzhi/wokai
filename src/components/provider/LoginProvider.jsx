import React, { Component, createContext } from 'react'
import axios from 'axios'

const { Provider, Consumer } = createContext()

class LoginProvider extends Component {
  state = {
    user: {},
    doLogout: null,
    doLogin: null,
    error: null,
    isLogin: true,
    isLoading: true,
  }

  componentDidMount() {
    this.setState({ login: false, error: null })
    axios
      .get('/api/users/userInfo')
      .then((user) => this.setState({ isLoading: false, isLogin: true, user }))
      .catch((error) =>
        this.setState({ isLoading: false, isLogin: false, error })
      )
  }

  selectMessageHandler = (message) => {
    this.setState({ currentMessage: message })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { LoginProvider, Consumer as LoginConsumer }
