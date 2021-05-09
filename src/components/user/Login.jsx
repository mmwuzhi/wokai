import React, { Component } from 'react'
import axios from 'axios'

import {Loading} from '../loading/Loading'

export default class CreateUsers extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      code: 1,
      isLoading: true
    }
    axios.get('/api/users/userInfo').then((res) => {
      console.log(res.data.data)
      res.data.code === 0
        ? this.props.history.push('/comment')
        : this.setState({ isLoading: false })
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }
  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
    }
    //调用后端接口创建user
    axios
      .post('/api/users/login', user)
      .then((res) => {
        this.setState({
          data: res.data,
        })
      })
      .then(() => {
        console.log('ログインしました！')
        this.props.history.push('/comment')
      })
      .catch((e) => {
        console.log(e)
      })
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        <h3 className='mt-3 mb-5'>ログイン</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>メールアドレス: </label>
            <input
              type='email'
              className='form-control mt-2 mb-4'
              value={this.state.email}
              onChange={this.onChangeEmail.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>パスワード: </label>
            <input
              type='password'
              className='form-control mt-2 mb-4'
              value={this.state.password}
              onChange={this.onChangePassword.bind(this)}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='サインイン' className='btn btn-info' />
          </div>
        </form>
      </div>
    )
  }
}
