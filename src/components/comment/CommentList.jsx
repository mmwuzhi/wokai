import React, { useContext } from 'react'
import CommentDetail from './CommentDetail'
import { UserContext } from '../../provider/UserContext'

const CommentList = (props) => {
  const { state } = useContext(UserContext)
  const handleDeleteComment = (id) => {
    if (props.onDeleteComment) {
      props.onDeleteComment(id)
    }
  }
  return (
    <div>
      {props.comments.map(
        (comment, index) =>
          (comment.email === state.userData.email || comment.email === '') && (
            <CommentDetail
              comment={comment}
              key={index}
              index={index}
              onDeleteComment={(id) => handleDeleteComment(id)}
            />
          )
      )}
    </div>
  )
}

export default CommentList
