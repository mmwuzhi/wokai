import React, { Component } from 'react'
import axios from 'axios'

export default class MyPage extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      email: '',
      password: '',
      newPassword: '',
      confirmNewPassword: '',
      errorMessage: '',
      message: '',
    }
    axios.get('/api/users/userInfo').then((res) => {
      res.data.code === 0
        ? this.setState({
            username: res.data.data.username,
            email: res.data.data.email,
          })
        : this.props.history.push('/user/login')
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    })
  }
  onChangeNewPassword(e) {
    this.setState({
      newPassword: e.target.value,
    })
  }
  onChangeNewConfirmPassword(e) {
    this.setState({
      confirmNewPassword: e.target.value,
    })
  }
  onSubmit(e) {
    e.preventDefault()
    if (this.state.newPassword !== this.state.confirmNewPassword) {
      this.setState({
        message: 'パスワードが一致していない！',
      })
    } else {
      const user = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        newPassword: this.state.newPassword,
      }
      this.setState({
        message: '',
      })
      //调用后端接口创建user
      axios
        .post('/api/users/update', user)
        .then(() => {
          alert('変更しました！')
          this.props.history.push('/comment')
        })
        .catch((e) => {
          this.setState({
            errorMessage: 'パスワードが間違いました！',
          })
          alert(e)
        })
    }
  }
  render() {
    return (
      <div>
        <h3 className='mt-3 mb-5'>ユーザー情報変更</h3>
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
            <span>{this.state.email}</span>
          </div>
          <div className='form-group'>
            <label>パスワード: </label>
            <span style={{ color: 'red' }}>{this.state.errorMessage}</span>
            <input
              type='password'
              className='form-control mt-2 mb-4'
              value={this.state.password}
              onChange={this.onChangePassword.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>新パスワード: </label>
            <input
              type='password'
              className='form-control mt-2 mb-4'
              value={this.state.newPassword}
              onChange={this.onChangeNewPassword.bind(this)}
            />
          </div>
          <div className='form-group'>
            <label>新パスワード確認: </label>
            <span style={{ color: 'red' }}>{this.state.message}</span>
            <input
              type='password'
              className='form-control mt-2 mb-4'
              value={this.state.confirmNewPassword}
              onChange={this.onChangeNewConfirmPassword.bind(this)}
            />
          </div>
          <div className='form-group'>
            <input type='submit' value='変更' className='btn btn-info' />
          </div>
        </form>
      </div>
    )
  }
}
