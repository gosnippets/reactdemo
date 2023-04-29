import React from 'react'
import PropsExample from './PropsExample';

const name = "Surya";
const isValid = false;
const count = 20;
const userDetails = { name: "Ravi", age: 34 }
const userList = [{ name: "Surya", age: 34 }, { name: "Shyam", age: 34 }]

export default function StateExample() {

    const showUserDetails = () => {
        console.log("User Details",userDetails)
    }

    return (
        <div>
            <PropsExample
                name={name}
                isValid={isValid}
                count={count}
                userDetails={userDetails}
                userList={userList}
                showUserDetails={showUserDetails} />
        </div>
    )
}
