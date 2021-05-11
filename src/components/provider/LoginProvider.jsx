import React, { Component, createContext } from 'react'
import axios from 'axios'

const { Provider, Consumer } = createContext()

class LoginProvider extends Component {
  state = {
    user: {},
    doLogout: null,
    doLogin: null,
    error: null,
    Signed: false,
    onLoading: true,
  }

  componentDidMount() {
    this.setState({ login: false, error: null })
    axios
      .get('/api/users/userInfo')
      .then((user) => {
        user.data.code === 0
          ? this.setState({ onLoading: false, Signed: true, user: user.data })
          : this.setState({ onLoading: false, Signed: false })
      })
      .catch((error) =>
        this.setState({ onLoading: false, Signed: false, error })
      )
  }

  selectMessageHandler = (message) => {
    this.setState({ currentMessage: message })
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { LoginProvider, Consumer as LoginConsumer }
