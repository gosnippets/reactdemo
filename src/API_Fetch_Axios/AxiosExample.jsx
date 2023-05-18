import { Table, TableHead, TableCell, TableContainer, TableBody, TableRow, Paper, Tooltip } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { createAccount, deleteAccount, getAccounts, updateAccount } from './AxiosAPICollection';

export default function AxiosExample() {

  const [accountList, setAccountList] = useState([])
  const [accountKeys, setAccountKeys] = useState([])
  const [accountEditData, setAccountEditData] = useState({})
  const [accountEditID, setAccountEditID] = useState();

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    getAllAccounts();
  }, [])

  const getAllAccounts = async () => {
    const res = await getAccounts();
    console.log("data", res.data);
    setAccountList(res.data)
    setAccountKeys(Object.keys(res.data))
  }


  const handleSubmit = async () => {
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

  const handleEdit = (id) => {
    setAccountEditID(id);
    setAccountEditData(accountList[id])
    console.log("id", id, accountList[id])
  }

  const handleChangeAccount = (e) => {
    setAccountEditData({ ...accountEditData, [e.target.name]: e.target.value })
  }

  const handleUpdateAccount = async () => {
    console.log("accountEditData", accountEditData)
    await updateAccount(accountEditID, accountEditData);
    getAllAccounts();
  }

  const handleDeleteAccount = async (id) => {
    await deleteAccount(id);
    getAllAccounts();
  }


  return (
    <div className='m-5'>

      <div className='mb-4'>
        <h1>Add Account</h1>
        <input type='text' name="username" ref={usernameRef} placeholder='Username' />
        <input type='email' name="email" ref={emailRef} placeholder='Email' />
        <input type='password' name="password" ref={passwordRef} placeholder='Password' />
        <button onClick={handleSubmit}>Add Account</button>
      </div>

      <h2> Account List</h2>
      <TableContainer component={Paper} className='mb-5'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Actions</TableCell>
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
                <TableCell>
                  <button onClick={() => handleEdit(id)}>Edit</button>
                  <button onClick={() => handleDeleteAccount(id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {accountEditID && (
        <div className='mb-4'>
          <h1>Update Account</h1>
          <input type='text' name="username" onChange={handleChangeAccount} value={accountEditData["username"]} placeholder='Username' />
          <input type='email' name="email" onChange={handleChangeAccount} value={accountEditData["email"]} placeholder='Email' />
          <input type='password' name="password" onChange={handleChangeAccount} value={accountEditData["password"]} placeholder='Password' />
          <button onClick={handleUpdateAccount}>Update Account</button>
        </div>
      )}
    </div>
  )
}
