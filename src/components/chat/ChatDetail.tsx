import React from 'react'

import moment from 'moment'
import momentLocale from 'moment/locale/ja'

moment.updateLocale('ja', momentLocale)

interface ChatDetailProps {
  data: {
    name:string
    createdAt: moment.MomentInput
    msg: string
  }
  index?: number
}

const ChatDetail = (props: ChatDetailProps) => {
  return (
    <div className='comment'>
      <div className='comment-user'>
        <span className='text-blue-500'>{props.data.name}　</span>
        <span className='comment-createdtime'>
          {moment(props.data.createdAt).format('YYYY年MM月DD日 HH時mm分')}
        </span>
      </div>
      <span>{props.data.msg}</span>
    </div>
  )
}

export default ChatDetail
