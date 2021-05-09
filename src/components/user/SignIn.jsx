import React, { Component } from 'react'
import axios from 'axios'

import { Loading } from '../loading/Loading'

export default class CreateUsers extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
      isLoading: true,
    }
    axios.get('/api/users/userInfo').then((res) => {
      res.data.code === 0
        ? this.props.history.push('/user/mypage')
        : this.setState({ isLoading: false })
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
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
  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    })
  }
  onSubmit(e) {
    e.preventDefault()
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        message: 'パスワードが一致していない！',
      })
    } else {
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }
      this.setState({
        message: '',
      })
      //调用后端接口创建user
      axios
        .post('/api/users/', user)
        .then(() => {
          alert('サインアップしました！')
          this.props.history.push('/comment')
        })
        .catch((e) => {
          console.log(e)
          alert(e)
        })
    }
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
        <h3 className='mt-3 mb-5'>サインアップ</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>ニックネーム: </label>
            <input
              type='text'
              className='form-control mt-2 mb-4'
              value={this.state.username}
              onChange={this.onChangeUsername.bind(this)}
            />
          </div>
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
            <label>パスワード確認: </label>
            <span style={{ color: 'red' }}>{this.state.message}</span>
            <input
              type='password'
              className='form-control mt-2 mb-4'
              value={this.state.confirmPassword}
              onChange={this.onChangeConfirmPassword.bind(this)}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              value='サインアップ'
              className='btn btn-info'
            />
          </div>
        </form>
      </div>
    )
  }
}
