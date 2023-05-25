import React, { Component } from 'react'

export default class GetDerivedStateFromPropsExample extends Component {
    render() {
        return (
            <div>
                <h1>GetDerivedStateFromPropsExample</h1>
                <Component1 username="Ravi" />
            </div>
        )
    }
}

class Component1 extends Component {
    constructor(props) {
        super(props);
        this.state = { username: "Ram" }
        console.log("constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps")
        console.log("Props", props, "State:", state);
        if (props.username !== state.username) {
            console.log("Differece....")
            return { username: props.username }
        }
        return null;
    }

    render() {
        return (
            <div>Username: {this.state.username} 
            <button onClick={()=>this.setState({username:"Mukesh"})}>Click</button></div>
        )
    }
}
