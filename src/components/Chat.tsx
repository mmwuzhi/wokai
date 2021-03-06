/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef, SyntheticEvent } from 'react'
import io from 'socket.io-client'
import ChatDetail from './chat/ChatDetail'

import moment from 'moment'
import momentLocale from 'moment/locale/ja'
import { DarkButton, LtInput } from '../tools/Inputs'

import NProgress from 'nprogress'

moment.updateLocale('ja', momentLocale)
const socket = io()

export default function Chat() {
  const [dataList, setDataList] = useState([])
  const [count, setCount] = useState()
  const nameRef = useRef<any>(null)
  const msgRef = useRef<any>(null)

  useEffect(() => {
    NProgress.start()
    // 避免组件销毁后仍然执行异步操作导致内存泄漏
    let isUnmounted = false
    // 向服务器发送请求获取当前msgList和在线人数
    socket.emit('reqMsg', {})
    // 监视在线人数
    socket.on('sysMsg', (count) => {
      if (!isUnmounted) {
        setCount(count)
      }
    })
    // 监视chat
    socket.on('recvMsg', (data) => {
      if (!isUnmounted) {
        setDataList(data)
        NProgress.done()
      }
    })
    return () => {
      isUnmounted = true
    }
  }, [])

  const handleSubmit = (e: KeyboardEvent | SyntheticEvent<any>) => {
    e.preventDefault()
    nameRef.current.checkSubmit()
    msgRef.current.checkSubmit()
    // 发送msg
    if (nameRef.current.value && msgRef.current.value) {
      socket.emit('sendMsg', {
        name: nameRef.current.value,
        msg: msgRef.current.value,
      })
      msgRef.current.focus()
      msgRef.current.setValue('')
      msgRef.current.setFilled('')
    }
  }

  const keySend = (e: KeyboardEvent | SyntheticEvent<any>) => {
    // 回车发送msg
    if ((e as KeyboardEvent).key === 'Enter') handleSubmit(e)
  }

  return (
    <div>
      <div>オンライン人数：{count}</div>
      <LtInput type='text' forID='user-name' ref={nameRef}>
        ニックネーム
      </LtInput>
      <LtInput type='textarea' forID='msg' onKeyDown={keySend} ref={msgRef}>
        メッセージ
      </LtInput>
      <div className='flex justify-end'>
        <DarkButton className='w-1/4' onClick={handleSubmit}>
          送信
        </DarkButton>
      </div>
      <div className='msg-list'>
        {dataList?.map((data, index) => (
          <ChatDetail data={data} key={index} index={index} />
        ))}
      </div>
    </div>
  )
}
