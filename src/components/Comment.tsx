import React from 'react'

import CommentInput from './comment/CommentInput'
import CommentList from './comment/CommentList'

const Comment = () => {
  return (
    <>
      <CommentInput />
      <div className='bg-white p-5 border-2 border-gray-50'>
        <CommentList />
      </div>
    </>
  )
}

export default Comment
