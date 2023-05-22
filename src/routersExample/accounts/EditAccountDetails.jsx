import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAccountDetails, updateAccount } from '../../API_Fetch_Axios/AxiosAPICollection';

export default function EditAccountDetails() {
    const [accountEditData, setAccountEditData] = useState({username:"", email:"", password:""})

    const navigate = useNavigate();
    const { accountid } = useParams();

    useEffect(() => {
        getAccount(accountid);
    }, [])

    const getAccount = async (id) => {
        const res = await getAccountDetails(id)
        setAccountEditData(res.data)
        console.log("res", res.data);
    }

    const handleChangeAccount = (event)=>{
        setAccountEditData({...accountEditData, [event.target.name]:event.target.value})
    }

    const handleUpdateAccount = async()=>{
        console.log(accountEditData)
        const res = await updateAccount(accountid, accountEditData)
        navigate("/account");
    }

    return (
        <div className='mb-4'>
            <h1>Update Account</h1>
            <input type='text' name="username" onChange={handleChangeAccount} value={accountEditData["username"]} placeholder='Username' />
            <input type='email' name="email" onChange={handleChangeAccount} value={accountEditData["email"]} placeholder='Email' />
            <input type='password' name="password" onChange={handleChangeAccount} value={accountEditData["password"]} placeholder='Password' />
            <button onClick={handleUpdateAccount}>Update Account</button>
        </div>
    )
}
