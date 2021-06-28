import React, { useState, useRef, useEffect } from 'react'
import moment from 'moment'

import Clock from './Clock'
import { DarkButton, LtInput } from '../tools/Inputs'
import subscribe from '../tools/subscribe'

const Tool = () => {
  const [checkedTime, setCheckedTime] = useState('')
  const titleRef = useRef()
  const detailRef = useRef()
  const timerRef = useRef()

  useEffect(() => {
    setTime()
  }, [])

  const setTime = () => {
    setCheckedTime(moment().format('HH:mm:ss'))
  }

  const doSubscribe = () => {
    subscribe(
      titleRef.current.value,
      detailRef.current.value,
      parseInt(timerRef.current.value) * 1000 * 60
    )
    // set成功之后给个提示不然都不知道自己干啥了。。。
  }

  return (
    <>
      <div>
        <LtInput type='text' forID='title' ref={titleRef}>
          プッシュタイトル
        </LtInput>
        <LtInput type='textarea' forID='detail' ref={detailRef}>
          プッシュ内容
        </LtInput>
        <LtInput type='number' forID='timer' ref={timerRef}>
          タイマー（単位：分）
        </LtInput>
        <DarkButton onClick={doSubscribe}>セットプッシュ</DarkButton>
      </div>
      <Clock />
      <div>
        <DarkButton onClick={setTime}>タイムセット</DarkButton>
        <div>
          セットされた時間：
          <span>{checkedTime}</span>
        </div>
      </div>
    </>
  )
}

export default Tool
