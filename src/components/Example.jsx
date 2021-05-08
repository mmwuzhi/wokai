import React, { useState, useEffect } from 'react'

export default function Example() {
  const [count, setCount] = useState(0)

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
// import React, { Component } from 'react'

// export default class Example extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`
//   }

//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count} times</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     )
//   }
// }
