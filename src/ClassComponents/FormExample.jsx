import React, { Component } from 'react'

export default class FormExample extends Component {
    constructor() {
        super();
        this.state = { isLoggedIn: false, username: "admin", password: "Test1234", error: "" }
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleLogin() {
        console.log(this.state)
        if (this.state.username === "admin" && this.state.password === "Test1234") {
            this.setState({ isLoggedIn: true, error: "" });
        } else {
            this.setState({ error: "Invalid username or password" });
        }
    }

    render() {
        const { isLoggedIn, username, password, error } = this.state;

        if (!isLoggedIn) {
            return (
                <div className='m-5'>
                    <h2>Login</h2>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <div><input type='text' name='username' value={username} onChange={(e) => this.onChangeHandler(e)} placeholder='Enter Username' /></div>
                    <div><input type='password' value={password} name='password' onChange={(e) => this.onChangeHandler(e)} placeholder='Enter Password' /></div>
                    <button onClick={() => this.handleLogin()}>Login</button>
                </div>
            )
        }
        else {
            return (<div className='m-5'>
                <h2>Welcome...{username} </h2>
            </div>)
        }
    }
}


// =====================
// MainClassComponent 

// LoginClassComponent 
// ProfileClassComponent 
