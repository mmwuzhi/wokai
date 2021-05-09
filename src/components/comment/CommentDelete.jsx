/*  */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static propTypes = {
    onDeleteComment: PropTypes.func,
    index: PropTypes.string,
  }

  handleDeleteComment() {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.id)
    }
  }
  render() {
    return (
      <span
        onClick={this.handleDeleteComment.bind(this)}
        className='comment-delete'
      >
        削除
      </span>
    )
  }
}

export default CommentList
