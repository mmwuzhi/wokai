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
  const userArea = useRef(null)
  const msgArea = useRef(null)

  useEffect(() => {
    userArea.current.focus()
    // 向服务器发送请求获取当前msgList和在线人数
    socket.emit('reqMsg', {})
    // 监视在线人数
    socket.on('sysMsg', (count) => {
      setCount(count)
    })
    // 监视chat
    socket.on('recvMsg', (data) => {
      setDataList(data)
    })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // 发送msg
    socket.emit('sendMsg', {
      name: name,
      msg: msg,
    })
    setMsg('')
    msgArea.current.focus()
  }

  const keySend = (e) => {
    // 回车发送msg
    if (e.keyCode === 13) handleSubmit(e)
  }

  return (
    <div>
      <div>オンライン人数：{count}</div>
      <div>
        ユーザー名：
        <input
          value={name}
          ref={userArea}
          onChange={(e) => setName(e.target.value)}
        />
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
      <div className='chat-send-button'>
        <button onClick={handleSubmit}>送信</button>
      </div>
      {dataList?.map((data, index) => (
        <ChatDetail data={data} key={index} index={index} />
      ))}
    </div>
  )
}
