import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODO: 改为函数式
class CommentDetail extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index: PropTypes.number,
  }

  constructor(props) {
    super(props)
    this.state = { timeString: '' }
  }

  UNSAFE_componentWillMount() {
    this._updateTimeString()
    this._timer = setInterval(this._updateTimeString.bind(this), 1000 * 60)
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  getDate(time) {
    const dateTime = new Date(time)
    return `${dateTime.getFullYear()}年${
      dateTime.getMonth() + 1
    }月${dateTime.getDate()}日 ${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`
  }

  _updateTimeString() {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    this.setState({
      timeString:
        duration > 60
          ? duration > 60 * 60
            ? duration > 60 * 60 * 24
              ? this.getDate(comment.createdTime)
              : `${Math.round(duration / (60 * 60))} 時間前`
            : `${Math.round(duration / 60)} 分前`
          : `${Math.round(Math.max(duration, 1))} 秒前`,
    })
  }

  _getProcessedContent(content) {
    return content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }
  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.comment._id)
    }
  }

  render() {
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username}</span>：
        </div>
        <span className='comment-createdtime'>{this.state.timeString}</span>
        <p
          dangerouslySetInnerHTML={{
            __html: this._getProcessedContent(comment.content),
          }}
        />
        {comment.email !== '' && (
          <span
            onClick={this.handleDeleteComment.bind(this)}
            className='comment-delete'
          >
            削除
          </span>
        )}
      </div>
    )
  }
}

export default CommentDetail
