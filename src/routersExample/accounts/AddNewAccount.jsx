import React, { useRef } from 'react'
import { createAccount } from '../../API_Fetch_Axios/AxiosAPICollection';
import { useNavigate } from 'react-router-dom';

export default function AddNewAccount() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate= useNavigate();

    const handleSubmit = async () => {
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(username, email, password)
        if (username && email && password) {
          const resData = await createAccount({ username, email, password })
          console.log("ResData", resData);
          navigate("/account")
        //   getAllAccounts()
        }
      }

    return (
        <div className='mb-4'>
            <h1>Add Account</h1>
            <input type='text' name="username" ref={usernameRef} placeholder='Username' />
            <input type='email' name="email" ref={emailRef} placeholder='Email' />
            <input type='password' name="password" ref={passwordRef} placeholder='Password' />
            <button onClick={handleSubmit}>Add Account</button>
        </div>
    )
}
