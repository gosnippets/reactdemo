import React, { useEffect, useState } from 'react'
import { getAccounts } from '../../API_Fetch_Axios/AxiosAPICollection';
import { Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Table } from 'react-bootstrap';
import { deleteAccount } from '../../API_Fetch_Axios/AxiosAPICollection';
import { useNavigate } from 'react-router-dom';

export default function AccountList() {
    const [accountList, setAccountList] = useState([])
    const [accountKeys, setAccountKeys] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        getAllAccounts();
    }, [])

    const getAllAccounts = async () => {
        const res = await getAccounts();
        setAccountList(res.data)
        setAccountKeys(Object.keys(res.data))
    }

    const handleDeleteAccount = async (id) => {
        await deleteAccount(id);
        getAllAccounts();
    }

    return (
        <div>
            <h2>Account List <Button variant='contained' onClick={() => navigate("new")}>Add Account</Button></h2>
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
                                    <Button variant='contained' onClick={() => navigate("edit/"+id)}>Edit</Button>
                                    <Button variant='contained' onClick={() => handleDeleteAccount(id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
