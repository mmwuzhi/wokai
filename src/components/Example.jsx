// import React from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'

// class Mouse extends React.Component {
//   static propTypes = {
//     render: PropTypes.func.isRequired,
//   }

//   state = { x: 0, y: 0 }

//   handleMouseMove = (event) => {
//     this.setState({
//       x: event.clientX,
//       y: event.clientY,
//     })
//   }

//   render() {
//     return (
//       <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//         {this.props.render(this.state)}
//       </div>
//     )
//   }
// }

// const Example = () => (
//   <div style={{ height: '100%' }}>
//     <Mouse
//       render={({ x, y }) => (
//         <h1>
//           The mouse position is ({x}, {y})
//         </h1>
//       )}
//     />
//   </div>
// )

//export default Example

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
