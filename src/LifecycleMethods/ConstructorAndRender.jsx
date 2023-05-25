import React, { Component } from 'react'

export default class ConstructorAndRender extends Component {
    constructor(props){
        super(props);
        console.log("constructor")
        this.state = {count:0}
    }

  render() {
    console.log("Render")
    return (
      <div>
        <h1>Constructor and Render</h1>
        <button onClick={()=>this.setState({count: this.state.count+1})}>Counter</button>
      </div>
    )
  }
}
