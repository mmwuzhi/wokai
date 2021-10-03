import React, { useState, useEffect } from 'react'

const Clock = () => {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'lightgray' }}>
      {date.toLocaleTimeString('ja-JP', { hour12: true })}
    </div>
  )
}

export default Clock
