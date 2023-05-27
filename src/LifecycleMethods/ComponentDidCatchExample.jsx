import React, { Component } from 'react'

export default class ComponentDidCatchExample extends Component {
    constructor(props) {
        super(props)
        this.state = { show: true }
    }

    componentDidCatch(error) {
        // console.log("componentDidCatch", error)
        alert("hi")
        this.setState({show:true})
    }

    render() {
        const { show } = this.state;
        return (
            <div className='m-5'>
                <p>ComponentDidCatch</p>
                <button onClick={() => this.setState({ show: !show })}>Toggle Component</button>
                {show ? <Component1 /> : <Component2 />}
            </div>
        )
    }
}

class Component1 extends Component {

    render() {
        return (
            <div>Component1</div>
        )
    }
}

class Component2 extends Component {

    render() {
        return (
            <div>Component 2 {this.state.username}</div>
        )
    }
}