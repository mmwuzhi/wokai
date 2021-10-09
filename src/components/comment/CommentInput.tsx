import React, {
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  SyntheticEvent,
} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useMutation, useQueryClient } from 'react-query'

import { DarkButton } from '../../tools/Inputs'
import { IComment } from './CommentDetail'
import { RootState } from '../../store/store'

const submitComment = async (comment: IComment) => {
  if (!comment.username) throw new Error('ユーザ名を入力してください！')
  if (!comment.content) throw new Error('コメントを入力してください！')
  try {
    await axios.post('/api/comments/add', comment)
  } catch (err) {
    console.error(err)
    throw new Error('投稿失敗しました。もう一度やり直してください。')
  }
}

const CommentInput = () => {
  const { mutate } = useMutation(submitComment)
  const queryClient = useQueryClient()
  // 通过选择器获取state
  const userState = useSelector((state: RootState) => state.user)
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const textarea = useRef<HTMLTextAreaElement>(null)
  const nameArea = useRef<HTMLInputElement>(null)

  // 第一次加载界面的时候调用，使光标移动到输入框
  useEffect(() => {
    setUsername(userState.userData.username)
  }, [userState.userData.username])

  const handleSubmit = (e: SyntheticEvent<any>) => {
    e.preventDefault()
    const { email } = userState.userData
    mutate(
      {
        username,
        email,
        // 删除字符串右端所有空白
        content: content.trimEnd(),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries('comments')
          setContent('')
        },
        onError: (err) => {
          alert((err as Error).message)
        },
      }
    )
  }

  const keySend = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key === 'Enter') handleSubmit(e)
  }
  return (
    <div className='comment-input'>
      <div className='comment-field'>
        <span className='comment-field-name'>ユーザ名：</span>
        <div className='comment-field-input'>
          <input
            type='text'
            value={username}
            ref={nameArea}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className='comment-field'>
        <span className='comment-field-name'>コメント：</span>
        <div className='comment-field-input'>
          <textarea
            className='h-24'
            ref={textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={keySend}
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <DarkButton className='w-20 sm:w-1/4' onClick={handleSubmit}>
          投稿
        </DarkButton>
      </div>
    </div>
  )
}

export default CommentInput
