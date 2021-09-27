import React, { useState, useEffect } from 'react'
import CommentInput from './comment/CommentInput'
import CommentList from './comment/CommentList'
import axios from 'axios'

import NProgress from 'nprogress'

const Comment = () => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    // TODO: 内存泄漏
    commentLoader()
  }, [])

  const commentLoader = () => {
    NProgress.start()
    axios
      .get('/api/comments/')
      .then((res) => {
        setComments(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
      .then(() => {
        NProgress.done()
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
        alert('投稿失敗しました。もう一度やり直してください。')
        console.log(err)
      })
  }

  const handleDeleteComment = (id) => {
    NProgress.start()
    axios
      .delete('/api/comments/' + id)
      .then((res) => {
        console.log(res.data)
        setComments(comments.filter((comment) => comment._id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
      .then(() => {
        NProgress.done()
      })
  }
  return (
    <>
      <CommentInput onSubmit={handleSubmitComment} />
      <div className='bg-white p-5 border-2 border-gray-50'>
        <CommentList
          comments={comments}
          onDeleteComment={handleDeleteComment}
        />
      </div>
    </>
  )
}

export default Comment
