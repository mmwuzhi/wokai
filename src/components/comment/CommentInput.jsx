import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../provider/UserContext'

import axios from 'axios'

const CommentInput = (props) => {
  const { state } = useContext(UserContext)
  const [username, setUsername] = useState('')
  const [content, setContent] = useState('')

  // 第一次加载界面的时候调用，使光标移动到输入框
  useEffect(() => {
    // TODO: 以后说不定会有更好的获得当前用户名的方法
    axios.get('/api/users/userInfo').then((res) => {
      res.data.code === 0 && setUsername(res.data.data.username)
    })
    // TODO: 估计要用useRef
    // this.textarea.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (props.onSubmit) {
      const { email } = state.user
      props.onSubmit({
        username,
        email,
        content,
        createdTime: +new Date(),
      })
    }
    setContent('')
  }

  return (
    <div className='comment-input'>
      <div className='comment-field'>
        <span className='comment-field-name'>ユーザ名：</span>
        <div className='comment-field-input'>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
      <div className='comment-field'>
        <span className='comment-field-name'>コメント：</span>
        <div className='comment-field-input'>
          <textarea
            // TODO: 估计要用useRef
            // ref={(textarea) => (this.textarea = textarea)}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
      <div className='comment-field-button'>
        <button onClick={(e) => handleSubmit(e)}>投稿</button>
      </div>
    </div>
  )
}

export default CommentInput
