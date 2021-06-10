import React, { useState, useContext, useRef, useEffect } from 'react'
import { UserContext } from '../../provider/UserContext'

import axios from 'axios'

import { DarkButton } from '../../tools/Inputs'
const CommentInput = (props) => {
  const { state } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')
  const textarea = useRef(null)
  const nameArea = useRef(null)

  // 第一次加载界面的时候调用，使光标移动到输入框
  useEffect(() => {
    // TODO: 以后说不定会有更好的获得当前用户名的方法
    axios.get('/api/users/userInfo').then((res) => {
      if (res.data.code === 0) {
        setUsername(res.data.data.username)
        textarea.current.focus()
      } else {
        nameArea.current?.focus()
      }
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (props.onSubmit) {
      const { email } = state.userData
      props.onSubmit({
        username,
        email,
        content,
      })
    }
    setContent('')
  }

  const keySend = (e) => {
    if (e.ctrlKey && e.keyCode === 13) handleSubmit(e)
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
            ref={textarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={keySend}
          />
        </div>
      </div>
      <div className='flex justify-end'>
        <DarkButton className='w-1/4' onClick={handleSubmit}>
          投稿
        </DarkButton>
      </div>
    </div>
  )
}

export default CommentInput
