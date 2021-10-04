import React, { useState, useRef, useEffect, KeyboardEvent, SyntheticEvent } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'

import { DarkButton } from '../../tools/Inputs'
import { IComment } from './CommentDetail'
import { RootState } from '../../store/store'

interface CommentInputProps {
  onSubmit: (comment: IComment) => void
}

const CommentInput = (props: CommentInputProps) => {
  // 通过选择器获取state
  const userState = useSelector((state: RootState) => state.user)
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const textarea = useRef<HTMLTextAreaElement>(null)
  const nameArea = useRef<HTMLInputElement>(null)

  // 第一次加载界面的时候调用，使光标移动到输入框
  useEffect(() => {
    // 避免组件销毁后仍然执行异步操作导致内存泄漏
    let isUnmounted = false
    // TODO: 以后说不定会有更好的获得当前用户名的方法
    axios.get('/api/users/userInfo').then((res) => {
      if (!isUnmounted) {
        if (res.data.code === 0) {
          setUsername(res.data.data.username)
          textarea!.current!.focus()
        } else {
          nameArea!.current!.focus()
        }
      }
    })
    return () => {
      isUnmounted = true
    }
  }, [])

  const handleSubmit = (e: SyntheticEvent<any>) => {
    e.preventDefault()
    if (props.onSubmit) {
      const { email } = userState.userData
      props.onSubmit({
        username,
        email,
        // 删除字符串右端所有空白
        content: content.trimEnd(),
      })
    }
    // TODO: 把这边给弄好 弄成如果发送失败就不set成空并且弹出提示
    setContent('')
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
