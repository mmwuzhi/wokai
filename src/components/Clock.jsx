import React, { Component } from 'react'

class Clock extends Component {
  constructor() {
    super()
    this.state = {
      date: new Date(),
    }
  }

  // 组件的启动工作(执行时组件还未加载完成 所以类似动画的启动会放在DidMount里)
  UNSAFE_componentWillMount() {
    // ajax.get('http://json-api.com/user', (userData) => {
    //   this.setState({userData})
    // })
    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  // 组件销毁时的清理工作
  componentWillUnmount() {
    console.log('销毁timer')
    clearInterval(this.timer)
  }

  render() {
    return (
      <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'lightgray' }}>
        {this.state.date.toLocaleTimeString('ja-JP', { hour12: true })}
      </div>
    )
  }
}

export default Clock
