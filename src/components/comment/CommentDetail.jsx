import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment'
import momentLocale from 'moment/locale/ja'

moment.updateLocale('ja', momentLocale)

const CommentDetail = (props) => {
  const [timeString, setTimeString] = useState('')
  const [timeTitle, setTimeTitle] = useState('')
  const ref = useRef()
  useEffect(() => {
    updateTimeString()
    ref.current = setInterval(updateTimeString, 1000 * 60)
    return () => {
      clearInterval(ref.current)
    }
  })

  const updateTimeString = () => {
    const duration = moment(props.comment.createdAt)
    setTimeString(duration.fromNow())
    setTimeTitle(duration.format('YYYY年MM月DD日 HH時mm分'))
  }

  const handleDeleteComment = () => {
    props.onDeleteComment && props.onDeleteComment(props.comment._id)
  }
  return (
    <div className='comment'>
      <div className='comment-user'>
        <span className='comment-username'>{props.comment.username}</span>
        ・
        <span className='comment-createdtime' title={timeTitle}>
          {timeString}
        </span>
        {!!props.comment.email && (
          <span onClick={handleDeleteComment} className='comment-delete'>
            削除
          </span>
        )}
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: props.comment.content,
        }}
      />
    </div>
  )
}

export default CommentDetail
