import React, { Component, createContext } from 'react'
import axios from 'axios'

let UserContext
const { Provider, Consumer } = UserContext = createContext()

class UserProvider extends Component {
  state = {
    user: {},
    doLogout: null,
    doLogin: null,
    error: null,
    logged: false,
    loading: true,
  }

  componentDidMount() {
    axios
      .get('/api/users/userInfo')
      .then((user) => {
        user.data.code === 0
          ? this.setState({
              loading: false,
              logged: true,
              user: user.data.data,
            })
          : this.setState({ loading: false, logged: false })
      })
      .catch((error) => this.setState({ loading: false, logged: false, error }))
  }

  handleCheckLogin() {
    axios
      .get('/api/users/userInfo')
      .then((user) => {
        user.data.code === 0
          ? this.setState({
              loading: false,
              logged: true,
              user: user.data.data,
            })
          : this.setState({ loading: false, logged: false })
      })
      .catch((error) => this.setState({ loading: false, logged: false, error }))
  }

  render() {
    return (
      <Provider
        value={{
          user: this.state.user,
          loading: this.state.loading,
          logged: this.state.logged,
          checkLogin: this.handleCheckLogin,
          //          ...this.state,
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { UserProvider, Consumer as UserConsumer , UserContext}
