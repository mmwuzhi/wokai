import React, { Component } from 'react'
import { Spin } from 'antd'
import axios from 'axios'

// 解决跨域session无效(自动重置)问题
axios.defaults.withCredentials = true

export default class CreateUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: 1,
      display: 'block',
    }
    axios.get('http://localhost:5000/users/userInfo').then((res) => {
      console.log(res.data.data)
      res.data.code === 0
        ? this.setState({ display: 'none' })
        : this.props.history.push('/user/login')
    })
  }

  cancel() {
    this.props.history.push('/')
  }

  logout() {
    //调用后端接口创建user
    axios.get('http://localhost:5000/users/logout').then((res) => {
      console.log(res.data)
      if (res.data.logout === "1") this.props.history.push('/')
    })
  }
  render() {
    return (
      <div>
        <div
          style={{
            zIndex: 1,
            backgroundColor: 'white',
            width: '930px',
            height: '500px',
            position: 'absolute',
            textAlign: 'center',
            paddingTop: '150px',
            display: this.state.display,
          }}
        >
          <Spin size='large' tip='Loading...' />
        </div>
        <h3 className='mt-3 mb-5'>ログアウト</h3>
        <span className='form-group'>
          なんでもさいとからログアウトしますか？
        </span>
        <div className='form-group'>
          <button
            onClick={this.cancel.bind(this)}
            className='btn btn-info'
            style={{ backgroundColor: 'lightgray', borderColor: 'lightgray' }}
          >
            キャンセル
          </button>
          <button onClick={this.logout.bind(this)} className='btn btn-info'>
            ログアウト
          </button>
        </div>
      </div>
    )
  }
}
