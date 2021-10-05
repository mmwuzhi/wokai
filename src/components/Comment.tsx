import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CommentInput from './comment/CommentInput'
import CommentList from './comment/CommentList'
import { IComment } from './comment/CommentDetail'

const Comment = () => {
  const [comments, setComments] = useState<IComment[]>()
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
  }

  const handleSubmitComment = (comment: IComment) => {
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

  const handleDeleteComment = (id: string) => {
    axios
      .delete('/api/comments/' + id)
      .then((res) => {
        console.log(res.data)
        setComments(comments!.filter((comment) => comment._id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <CommentInput onSubmit={handleSubmitComment} />
      <div className='bg-white p-5 border-2 border-gray-50'>
        <CommentList
          comments={comments!}
          onDeleteComment={handleDeleteComment}
        />
      </div>
    </>
  )
}

export default Comment
