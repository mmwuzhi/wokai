import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    username: PropTypes.string,
    email: PropTypes.string,
    onSubmit: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      content: '',
    }
  }

  componentDidMount() {
    this.textarea.focus()
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    if (this.props.onSubmit) {
      const { username, content } = this.state
      const email = this.props.email
      this.props.onSubmit({
        username,
        email,
        content,
        createdTime: new Date(),
      })
    }
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className='comment-input'>
        <div className='comment-field'>
          <span className='comment-field-name'>ユーザ名：</span>
          <div className='comment-field-input'>
            <input
              value={this.state.username}
              onChange={this.handleUsernameChange.bind(this)}
              // 这里的ref的作用是 将这个input命名为inputName
              // 并且设置为组件实例的一个属性
              // 之后就可以通过this.inputName来获取这个DOM元素
              // 比如可以在componentDidMount里面使用这个DOM元素
              // 并且调用类似this.inputName.focus()之类的DOM API
              // 就可以达到加载完页面自动focus到输入框的效果
              // *** 但是！！！能用react的机能做到的事一定不要用ref
              // *** 并且 总之不到万不得已尽量不要用ref
              // ref={(inputName) => (this.inputName = inputName)}
            />
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>コメント：</span>
          <div className='comment-field-input'>
            <textarea
              ref={(textarea) => (this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleContentChange.bind(this)}
            />
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit.bind(this)}>投稿</button>
        </div>
      </div>
    )
  }
}

export default CommentInput
