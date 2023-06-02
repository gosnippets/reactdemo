import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllAccounts } from './slices/accountSlice';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function GetAllAccountComponent() {
    const { total, accounts, status, error } = useSelector((state) => state.accounts);
    const [accountKeys, setAccountKeys] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllAccounts());
    }, [])

    useEffect(() => {
        setAccountKeys(Object.keys(accounts))
    }, [accounts])


    return (
        <div>
            <h1>Get All Account</h1>
            <h2>Total: {total}</h2>
            <h2>Status: {status}</h2>
            {error && <h2>Error: {error}</h2>}

            <button className='btn btn-primary' onClick={() => { navigate("/account/new") }}>Add new Account</button>
            <h2> Account List</h2>
            {accountKeys.length > 0 && (
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
                                    <TableCell >{accounts[id].username}</TableCell>
                                    <TableCell >{accounts[id].email}</TableCell>
                                    <TableCell>{accounts[id].password}</TableCell>
                                    <TableCell>
                                        <button onClick={() => navigate("/account/edit/"+id)}>Edit</button>
                                        {/* <button onClick={() => handleDeleteAccount(id)}>Delete</button> */}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    )
}
