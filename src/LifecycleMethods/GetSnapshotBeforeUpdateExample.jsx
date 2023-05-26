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
                {this.state.showComponent ? <Component1 username="Surya"/> : <p>Please click button to show the Component</p>}
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

    componentDidMount(){
        console.log("3. componentDidMount")
        this.setState({username: this.props.username});
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("4. getSnapshotBeforeUpdate",prevProps,prevState)
        document.getElementById("previous").innerHTML = "Previous Username:"+prevState.username;
        return true;
    }

    componentDidUpdate(){
        console.log("5. componentDidUpdate")
        document.getElementById("new").innerHTML = "New Username:"+this.state.username;
    }

    render() {
        console.log("2. Component render")
        return (
            <div>
                <hr/>
                <h2 id="previous">Previous Username </h2>
                <h2 id="new">New Username </h2>  
                <h2>{this.state.username}</h2>              
            </div>
        )
    }
}
