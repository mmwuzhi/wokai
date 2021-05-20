import React, { useState, useEffect } from 'react'

export default function Example() {
  // 相当于 state setState
  const [count, setCount] = useState(0)
  // const ref = useRef()

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
