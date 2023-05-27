import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdateExample extends Component {
    constructor() {
        super()
        this.state = { showComponent: false }
    }
    render() {
        return (
            <div>
                <p>GetSnapshotBeforeUpdate</p>
                <button onClick={() => this.setState({ showComponent: true })}>Show Component</button>
                {this.state.showComponent ? <Component1 username="Surya" /> : <p>Please click button to show the Component</p>}
                <Component2 />
            </div>
        )
    }
}


class Component1 extends Component {
    constructor() {
        super()
        this.state = { username: "Ravi" }
        console.log("1. constructor")
    }

    componentDidMount() {
        console.log("3. componentDidMount")
        this.setState({ username: this.props.username });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("4. getSnapshotBeforeUpdate", prevProps, prevState)
        document.getElementById("previous").innerHTML = "Previous Username:" + prevState.username;
        return true;
    }

    componentDidUpdate() {
        console.log("5. componentDidUpdate")
        document.getElementById("new").innerHTML = "New Username:" + this.state.username;
    }

    render() {
        console.log("2. Component render")
        return (
            <div>
                <hr />
                <h2 id="previous">Previous Username </h2>
                <h2 id="new">New Username </h2>
                <h2>{this.state.username}</h2>
            </div>
        )
    }
}


class Component2 extends Component {
    constructor() {
        super();
        this.state = { count: 0, snapshot: null }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }))
            // console.log("Count:", this.state.count)
            // this.setState({count: this.state.count+1})
        }, 1000)
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState) {

        if (prevState.count !== this.state.count) {
            return { snapshot: prevState.count }
        }

        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (snapshot) {
            this.setState({snapshot:snapshot.snapshot})
            console.log("Previous Count: ", snapshot)
        }
    }

    render() {
        return (
            <div>
                <h2>Count: {this.state.count}</h2>
                <h2>Snapshot: {this.state.snapshot}</h2>
            </div>
        )
    }
}
