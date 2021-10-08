import React, { useEffect, useState, useRef } from 'react'
import moment from 'moment'
import momentLocale from 'moment/locale/ja'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

moment.updateLocale('ja', momentLocale)

export interface IComment {
  createdAt?: moment.MomentInput
  username: string
  _id?: string
  email: string
  content: string
}
interface CommentDetailProps {
  comment: IComment
  index?: number
}

const deleteComment = async (id: string) => {
  const { data } = await axios.delete('/api/comments/' + id)
  console.log(data)
}

const CommentDetail: React.FC<CommentDetailProps> = (props) => {
  const [timeString, setTimeString] = useState('')
  const [timeTitle, setTimeTitle] = useState('')
  const ref = useRef<number>()
  const { mutate } = useMutation(deleteComment)
  const queryClient = useQueryClient()

  useEffect(() => {
    updateTimeString()
    ref.current = window.setInterval(updateTimeString, 1000 * 60)
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
    mutate(props.comment._id!, {
      onSuccess: () => {
        queryClient.invalidateQueries('comments')
      },
    })
  }
  return (
    <div className='comment'>
      <div className='comment-user text-sm'>
        <span className='text-blue-500'>{props.comment.username}</span>・
        <span className='text-gray-500 text-xs' title={timeTitle}>
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
