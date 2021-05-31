import React, { useState, useEffect } from 'react'
import CommentInput from './comment/CommentInput'
import CommentList from './comment/CommentList'
//import PropTypes from 'prop-types'
import axios from 'axios'

const Comment = () => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    commentLoader()
  }, [])

  const commentLoader = () => {
    axios
      .get('/api/comments/')
      .then((res) => {
        setComments(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const handleSubmitComment = (comment) => {
    if (!comment) return
    if (!comment.username) return alert('ユーザ名を入力してください！')
    if (!comment.content) return alert('コメントを入力してください！')
    axios
      .post('/api/comments/add', comment)
      .then(commentLoader)
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDeleteComment = (id) => {
    axios
      .delete('/api/comments/' + id)
      .then((res) => {
        console.log(res.data)
        setComments(comments.filter((comment) => comment._id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='wrapper'>
      <CommentInput onSubmit={handleSubmitComment} />
      <CommentList
        comments={comments}
        onDeleteComment={handleDeleteComment}
      />
    </div>
  )
}

export default Comment
