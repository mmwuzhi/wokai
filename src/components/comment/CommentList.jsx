import React, { Component } from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.array,
    email: PropTypes.string,
    onDeleteComment: PropTypes.func,
  }

  static defaultProps = {
    comments: [],
  }

  handleDeleteComment(id) {
    if (this.props.onDeleteComment) {
      this.props.onDeleteComment(id)
    }
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment, index) => (comment.email === this.props.email || comment.email === '') && (
          <Comment
            comment={comment}
            key={index}
            index={index}
            onDeleteComment={this.handleDeleteComment.bind(this)}
          />
        ))}
      </div>
    )
  }
}

export default CommentList
