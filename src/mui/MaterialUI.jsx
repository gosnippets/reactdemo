import { Container, Table, TableHead, TableCell, TableContainer, TableBody, TableRow, Paper, Tooltip } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EnhancedTable from './Table'
import { getUsers } from '../API_Fetch_Axios/ApiCollection';

// const rows = [
//     {
//         "id": 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "city": "Gwenborough"
//         },
//         "phone": "1-770-736-8031 x56442"
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Kulas Light",
//             "city": "Wisokyburgh"
//         },
//         "phone": "010-692-6593 x09125"
//     }
// ]

export default function MaterialUI() {
    const [rows, setRows] = useState([])

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const data = await getUsers();
        setRows(data)
    }

    return (
        <Container maxWidth="lg">

            <TableContainer component={Paper} className='my-5'>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Street</TableCell>
                            <TableCell align="right">City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="right">{row.id} </TableCell>
                                <Tooltip title={row.name}><TableCell >{row.name}</TableCell></Tooltip>
                                <TableCell>{row.email}</TableCell>
                                <TableCell >{row.phone}</TableCell>
                                <TableCell > {row.address && row.address.street}</TableCell>
                                <TableCell>{row.address && row.address.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <EnhancedTable />
        </Container>
    )
}
