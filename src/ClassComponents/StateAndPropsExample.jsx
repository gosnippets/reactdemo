import React, { Component } from 'react'

export default class StateAndPropsExample extends Component {
    constructor() {
        super();
        this.state = { count: 10 }
        console.log("constructor")
    }

    decrementHandler() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (<>
            <div className='m-5'>
                <h2>Count: {this.state.count}</h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <button onClick={() => this.decrementHandler()}>Decrement</button>
            </div>
            <div className='m-5'>
                <PropsExample count={this.state.count} />
            </div>
        </>)
    }
}


class PropsExample extends Component {
    constructor(props){
        super(props);
        this.state = {count:props.count}
        console.log("PropsExample ..")
    }

    render() {
        return (
            <div>
                <h2>Props Example</h2>
                <h2>Count: {this.props.count}</h2>
                <h2>Count: {this.state.count}</h2>
            </div>
        )
    }
}
