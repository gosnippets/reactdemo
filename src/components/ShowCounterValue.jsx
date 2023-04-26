import React from 'react'

// export default function ShowCounterValue(props) {
//     return (<>
//         <h2>Student List: {props.studentList[1].name}</h2>
//         <h2>Name: {props.name}</h2>
//         <h2>Count: {props.countvalue}</h2>
//         <button onClick={() => props.setCount(props.countvalue - 1)}>Decrement</button>
//         <button onClick={() => props.setCount(props.countvalue + 1)}>Increment</button>
//     </>)
// }


export default function ShowCounterValue({ name, countvalue, studentList, setCount }) {
    return (<>
        <h2>Student List: {studentList[1].name}</h2>
        <h2>Name: {name}</h2>
        <h2>Count: {countvalue}</h2>
        <button onClick={() => setCount(countvalue - 1)}>Decrement</button>
        <button onClick={() => setCount(countvalue + 1)}>Increment</button>
    </>)
}