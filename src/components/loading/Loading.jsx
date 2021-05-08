import React from 'react'
import { Spin } from 'antd'
import style from './style.css'
export const Loading = () => (
  <div className={style.loading}>
    <Spin size='large' />
  </div>
)
