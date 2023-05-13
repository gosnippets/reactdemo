import React, { useEffect, useState } from 'react'
import { getUser, getUsers } from './ApiCollection';
import { Card, CardContent, Typography } from '@mui/material';

const userApiUrl = "https://jsonplaceholder.typicode.com/users";

export default function FetchExample() {
    const [userList, setUserList] = useState([])
    const [user, setUser] = useState()

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const data = await getUsers();
        setUserList(data)
    }

    const getSingleUser = async (id) => {
        const data = await getUser(id);
        setUser(data);
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
        </div>
    )
}
