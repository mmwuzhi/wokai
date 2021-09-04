import React, { useState, useEffect } from 'react'
import CommentInput from './comment/CommentInput'
import CommentList from './comment/CommentList'
import axios from 'axios'

import { Loading } from '../components/loading/Loading'

const Comment = () => {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // TODO: 内存泄漏
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
      .then(() => {
        setLoading(false)
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
    <>
      <CommentInput onSubmit={handleSubmitComment} />
      <div className='bg-white p-5 border-2 border-gray-50'>
        {loading && <Loading />}
        <CommentList
          loading={loading}
          comments={comments}
          onDeleteComment={handleDeleteComment}
        />
      </div>
    </>
  )
}

export default Comment
