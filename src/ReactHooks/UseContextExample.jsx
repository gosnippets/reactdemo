import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()
const initialUser = { name: "Ravi", isLoggedIn: true, theme: "light" }

export default function UseContextExample() {
    const [user, setUser] = useState(initialUser);

    const changeThemeHandler = () => {
        setUser({ ...user, theme: user.theme === 'light' ? 'dark' : 'light' })
    }

    return (
        <UserContext.Provider value={user}>
            <ChildComponentOne />
            <button onClick={changeThemeHandler}>Change Theme</button>
        </UserContext.Provider>
    )
}

function ChildComponentOne() {
    const user = useContext(UserContext)
    console.log("ChildComponentOne", user)
    return (<>
        <p>Theme : {user.theme}</p>
        <h1>User: {user.name}</h1>
        <h2>Child Component One</h2>
        {user.isLoggedIn && <ChildComponentTwo />}

    </>)
}

function ChildComponentTwo() {
    const user = useContext(UserContext)
    console.log("ChildComponentTwo", user)
    return (<>
        <p>Theme : {user.theme}</p>
        <h1>User: {user.name}</h1>
        <h2>Child Component Two</h2>
    </>)
}