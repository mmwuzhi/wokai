import React from 'react'
import CommentDetail, {IComment} from './CommentDetail'

interface CommentListProps {
  onDeleteComment: (id: string) => void
  comments: IComment[]
}

const CommentList = (props: CommentListProps) => {
  const handleDeleteComment = (id: string) => {
    if (props.onDeleteComment) {
      props.onDeleteComment(id)
    }
  }
  return (
    <>
      {props.comments?.map((comment, index) => (
        <CommentDetail
          comment={comment}
          key={index}
          index={index}
          onDeleteComment={(id) => handleDeleteComment(id)}
        />
      ))}
    </>
  )
}

export default CommentList
