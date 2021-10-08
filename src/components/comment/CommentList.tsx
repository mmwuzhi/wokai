import React from 'react'
import CommentDetail, { IComment } from './CommentDetail'
import { useQuery } from 'react-query'
import axios from 'axios'


const CommentList = () => {
  const { data, isLoading, isError } = useQuery<IComment[]>(
    'comments',
    async () => {
      const { data } = await axios.get('/api/comments/')
      return data
    }
  )

  return (
    <>
      {isLoading ? ( // TODO: LOADING画面
        <span>Loading...</span>
      ) : isError ? (
        // TODO: エラーcomponent
        <span>エラーが発生しました。</span>
      ) : (
        data?.map((comment, index) => (
          <CommentDetail
            comment={comment}
            key={index}
            index={index}
          />
        ))
      )}
    </>
  )
}

export default CommentList
