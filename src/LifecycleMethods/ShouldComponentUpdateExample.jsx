import React, { Component } from 'react'

export default class ShouldComponentUpdateExample extends Component {
    constructor() {
        super();
        this.state = { "username": "Ravi", count: 10 }
        console.log("constructor")
    }

    shouldComponentUpdate(prevProps, prevState) {
        console.log("shouldComponentUpdate", prevProps, prevState)
        console.log(prevState.username, this.state.username)
        if (prevState.username !== this.state.username || prevState.count !== this.state.count) {
            return true;
        }
        return false;
    }

    render() {
        console.log("render")
        return (
            <div>
                <h1>{this.state.username}</h1>
                <button onClick={() => this.setState({ "username": "Surya" })}>Update Username</button>
                <div>
                    <h2>Count: {this.state.count}</h2>
                    <button onClick={() => this.setState({ "count": this.state.count + 1 })}>Update Count</button>
                </div>
                <Component1 count={this.state.count} />
            </div>
        )
    }
}

class Component1 extends Component {
    constructor(props) {
        super(props);
        console.log("Component1 constructor")
    }

    shouldComponentUpdate(prevProps, prevState) {
        console.log("Component1 shouldComponentUpdate", prevProps.count, this.props.count)
        if (prevProps.count !== this.props.count) {
            return true;
        }
        return false;
    }

    render() {
        console.log("Component1 Render")
        return (
            <div>
                <h2>Count: {this.props.count}</h2>
            </div>
        )
    }
}
