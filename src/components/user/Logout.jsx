import React, { Component } from 'react'
import axios from 'axios'

import { Loading } from '../loading/Loading'

export default class CreateUsers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: 1,
      display: 'block',
    }
    axios.get('/api/users/userInfo').then((res) => {
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
    axios.get('/api/users/logout').then((res) => {
      if (res.data.logout === '1') this.props.history.push('/')
    })
  }
  render() {
    return (
      <div>
        {this.state.isLoading && <Loading />}
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
