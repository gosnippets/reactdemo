import React, { Component } from 'react'

export default class ComponentWillUnmountExample extends Component {
    constructor(props) {
        super(props)
        this.state = { show: false }
    }

    render() {
        const { show } = this.state;
        return (
            <div className='m-5'>
                <h1>ComponentWillUnmountExample</h1>
                <button onClick={() => this.setState({ show: !show })}>Toggle Component</button>
                {show ? <Component1 /> : <Component2 />}
            </div>
        )
    }
}

class Component1 extends Component {

    componentWillUnmount() {
        console.log('Component1 will unmount')
    }
    render() {
        return (
            <div>Component1</div>
        )
    }
}

class Component2 extends Component {
    componentWillUnmount() {
        console.log('Component2 will unmount')
        alert("Component2")
    }

    render() {
        return (
            <div>Component2</div>
        )
    }
}
