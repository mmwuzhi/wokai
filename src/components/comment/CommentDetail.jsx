import React, { useEffect, useState, useRef } from 'react'

const CommentDetail = (props) => {
  const [timeString, setTimeString] = useState('')
  const ref = useRef()
  useEffect(() => {
    updateTimeString()
    ref.current = setInterval(updateTimeString, 1000 * 60)
    return () => {
      clearInterval(ref.current)
    }
  })

  const getDate = (time) => {
    const dateTime = new Date(time)
    return `${dateTime.getFullYear()}年${
      dateTime.getMonth() + 1
    }月${dateTime.getDate()}日 ${dateTime.getHours()}:${dateTime.getMinutes()}:${dateTime.getSeconds()}`
  }

  const updateTimeString = () => {
    const comment = props.comment
    const duration = (+Date.now() - comment.createdTime) / 1000
    setTimeString(
      duration > 60
        ? duration > 60 * 60
          ? duration > 60 * 60 * 24
            ? getDate(comment.createdTime)
            : `${Math.round(duration / (60 * 60))} 時間前`
          : `${Math.round(duration / 60)} 分前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    )
  }

  const _getProcessedContent = (content) =>
    content
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
      .replace(/`([\S\s]+?)`/g, '<code>$1</code>')

  const handleDeleteComment = () => {
    props.onDeleteComment && props.onDeleteComment(props.comment._id)
  }
  return (
    <div className='comment'>
      <div className='comment-user'>
        <span>{props.comment.username}</span>：
      </div>
      <span className='comment-createdtime'>{timeString}</span>
      <p
        dangerouslySetInnerHTML={{
          __html: _getProcessedContent(props.comment.content),
        }}
      />
      {!!props.comment.email && (
        <span onClick={handleDeleteComment} className='comment-delete'>
          削除
        </span>
      )}
    </div>
  )
}

export default CommentDetail
