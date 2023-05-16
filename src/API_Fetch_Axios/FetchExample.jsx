import { Container, Table, TableHead, TableCell, TableContainer, TableBody, TableRow, Paper, Tooltip } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { createAccount, getAccounts, getUser, getUsers } from './ApiCollection';
import { Card, CardContent, Typography } from '@mui/material';


export default function FetchExample() {
    const [userList, setUserList] = useState([])
    const [accountList, setAccountList] = useState([])
    const [accountKeys, setAccountKeys] = useState([])
    const [user, setUser] = useState()

    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(() => {
        getAllUsers();
        getAllAccounts();
    }, []);

    const getAllAccounts = async () => {
        const data = await getAccounts();
        setAccountList(data)
        setAccountKeys(Object.keys(data))
    }

    const getAllUsers = async () => {
        const data = await getUsers();
        setUserList(data)
    }

    const getSingleUser = async (id) => {
        const data = await getUser(id);
        setUser(data);
    }

    const handleSubmit = async() => {
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(username, email, password)
        if (username && email && password) {
            const resData = await createAccount({ username, email, password })
            console.log("ResData", resData);
            getAllAccounts()
        }
    }


    return (
        <div>
            <h1>Fetch Example</h1>
            <ul>
                {userList.map((user, index) => <li key={user.id}>{user.id}. {user.name} <button onClick={() => getSingleUser(user.id)}>Show Details</button></li>)}
            </ul>

            {user && (
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography variant="h4">Id: {user.id}</Typography>
                        <Typography variant="h4">Username: {user.username}</Typography>
                        <Typography variant="h4">Name: {user.name}</Typography>
                        <Typography variant="h4">Email: {user.email}</Typography>

                    </CardContent>
                </Card>
            )}

            <input type='text' name="username" ref={usernameRef} placeholder='Username' />
            <input type='email' name="email" ref={emailRef} placeholder='Email' />
            <input type='password' name="password" ref={passwordRef} placeholder='Password' />
            <button onClick={handleSubmit}>Add Account</button>


            <h2> Account List</h2>
            <TableContainer component={Paper} className='my-5'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {accountKeys.map((id) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="right">{id} </TableCell>
                                <TableCell >{accountList[id].username}</TableCell>
                                <TableCell >{accountList[id].email}</TableCell>
                                <TableCell>{accountList[id].password}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}
