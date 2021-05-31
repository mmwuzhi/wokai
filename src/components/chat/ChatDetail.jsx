import React from 'react'

import moment from 'moment'
import momentLocale from 'moment/locale/ja'

moment.updateLocale('ja', momentLocale)

const ChatDetail = (props) => {
  return (
    <div className='comment'>
      <div className='comment-user'>
        <span className='comment-username'>{props.data.name}　</span>
        <span className='comment-createdtime'>
          {moment(props.data.time).format('YYYY年MM月DD日 HH時mm分')}
        </span>
      </div>
      <span>{props.data.msg}</span>
    </div>
  )
}

export default ChatDetail
