/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react'
import io from 'socket.io-client'
import ChatDetail from './chat/ChatDetail'

import moment from 'moment'
import momentLocale from 'moment/locale/ja'

moment.updateLocale('ja', momentLocale)
const socket = io()

export default function Chat() {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')
  const [dataList, setDataList] = useState([])
  const [count, setCount] = useState()
  const msgArea = useRef(null)

  useEffect(() => {
    socket.on('sysMsg', (count) => {
      setCount(count)
    })
    socket.on('recvMsg', (data) => {
      setDataList(data)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    socket.emit('sendMsg', {
      name: name,
      msg: msg,
    })
    setMsg('')
    msgArea.current.focus()
  }

  const keySend = (e) => {
    if (e.keyCode === 13) handleSubmit(e)
  }

  return (
    <div>
      <div>オンライン人数：{count}</div>
      <div>
        ユーザー名：
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        メッセージ：
        <input
          value={msg}
          ref={msgArea}
          onKeyDown={keySend}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>送信</button>
      {dataList?.map((data, index) => (
        <ChatDetail data={data} key={index} index={index} />
      ))}
    </div>
  )
}
