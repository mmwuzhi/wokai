import React from 'react'

const ChatDetail = (props) => {
  return (
    <div className='comment'>
      <div className='comment-user'>
        <span className='comment-username'>{props.data.name}　</span>
        <span className='comment-createdtime'>{props.data.time}</span>
      </div>
      <span>{props.data.msg}</span>
    </div>
  )
}

export default ChatDetail
