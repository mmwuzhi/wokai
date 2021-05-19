import React from 'react'
import CommentDetail from './CommentDetail'

const CommentList = (props) => {
  const handleDeleteComment = (id) => {
    if (props.onDeleteComment) {
      props.onDeleteComment(id)
    }
  }
  return (
    <div>
      {props.comments.map((comment, index) => (
        <CommentDetail
          comment={comment}
          key={index}
          index={index}
          onDeleteComment={(id) => handleDeleteComment(id)}
        />
      ))}
    </div>
  )
}

export default CommentList
