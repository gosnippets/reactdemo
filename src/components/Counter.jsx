import React, { useState } from 'react'
import ShowCounterValue from './ShowCounterValue'

const studentList = [{
    name: "Ravi",
    age: 33
},
{
    name: "Surya",
    age: 35
}]
export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h2> Count : {count}</h2>
            <ShowCounterValue countvalue={count} name="Ravi" studentList={studentList} setCount={setCount} />
        </>
    )
}
