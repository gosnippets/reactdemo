import React, { useRef, useState } from 'react'


const withAuth = (WrappedComponent) => {
    function WithAuth() {
        const [isAuth, setIsAuth] = useState(false)
        const [username, setUsername] = useState("")
        const [msg, setMsg] = useState("")
        const usernameRef= useRef();
        const passwordRef= useRef();

        if (isAuth) {
            return <WrappedComponent username={username}/>
        }

        const handleSubmit =()=>{
            if (usernameRef.current.value === "admin" && passwordRef.current.value === "Test1234") {
                setUsername(usernameRef.current.value)
                setIsAuth(true)
                setMsg("");
            }else {
                setMsg("Invalid username or password")
            }
        }
        return (<div className='m-5'>
                <h2>Login Page</h2>
                <p style={{color:"red"}}>{msg}</p>
                <div><input type='text' name='username' ref={usernameRef} placeholder='Enter Username'/></div>
                <div><input type='password' name='password' ref={passwordRef} placeholder='Enter Password'/></div>
                <div><button onClick={handleSubmit}>Login</button></div>
        </div>)
    }
    return WithAuth;
}

const ProfileComponent = (props) => <h2>Welcome {props.username}...</h2>
const HighOrderComponent = withAuth(ProfileComponent)

export default HighOrderComponent;
