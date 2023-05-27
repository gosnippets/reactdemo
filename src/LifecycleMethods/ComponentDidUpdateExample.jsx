import React, { Component } from 'react'

export default class ComponentDidUpdateExample extends Component {
  constructor(props) {
    super(props)
    this.state = { username: "", count: 0 }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate")
    if (this.state.username !== prevState.username) {
      console.log("username changed", prevState.username, this.state.username)
    }
  }

  render() {
    return (
      <div>
        <h1>ComponentDidUpdate</h1>
        <input type="text" onChange={(e) => this.setState({ username: e.target.value })} placeholder='Enter Username' />
        <p>{this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
      </div>
    )
  }
}
