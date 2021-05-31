import React, { useState } from 'react'
import io from 'socket.io-client'
import ChatDetail from './chat/ChatDetail'

import moment from 'moment'
import momentLocale from 'moment/locale/ja'

moment.updateLocale('ja', momentLocale)

export default function Chat() {
  const socket = io('ws://104.198.93.49:3333')
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [dataList, setDataList] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('sendmsg', {
      msg: msg,
      name: name,
      time: moment().format('YYYY年MM月DD日 HH時mm分'),
    })
    setMsg('')
  }
  socket.on('recvmsg', (data) => {
    setDataList([...dataList, data])
  })
  return (
    <div>
      <div>
        ユーザー名：
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        メッセージ：
        <input value={msg} onChange={(e) => setMsg(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>送信</button>
      {dataList?.map((data, index) => (
        <ChatDetail data={data} key={index} index={index} />
      ))}
    </div>
  )
}
