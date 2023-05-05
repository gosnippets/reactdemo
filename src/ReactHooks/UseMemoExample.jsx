import React, { useEffect, useMemo, useState } from 'react'

// export default function UseMemoExample() {
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);


//     useEffect(() => {
//         console.log("Count", count)
//     }, [count])

//     const calculation = useMemo(() => {
//         return count * 2;
//     }, [count])

//     const addTodo = () => {
//         setTodos([...todos, "New Todo"])
//         // setTodos((todo) => [...todo, "New Todo"])
//     }

//     const incrementHandler = () => {
//         setCount(count + 1);
//         // setCount((c) => c + 1);
//     }

//     return (
//         <div>
//             <div>
//                 <h2>Todos</h2>
//                 {todos && todos.map((todo, index) => {
//                     return <p key={index}>{todo}</p>
//                 })}
//                 <button onClick={addTodo}>Add Todo</button>
//             </div>
//             <hr />

//             <div>
//                 <h2>Count: {count}</h2>
//                 <button onClick={incrementHandler}>+ Incremant</button>
//             </div>

//             <h1>Calculation</h1>
//             <h2>{calculation}</h2>
//         </div>
//     )
// }


export default function UseMemoExample() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const squaredNum = useMemo(() => squareNum(number), [number])

    return (
        <>
            <div><h2>Squared Value: {squaredNum}</h2></div>
            <input type='number' onChange={(e) => setNumber(e.target.value)} placeholder='Enter number' />

            {/* <br /><br />
            <button onClick={() => setCount(count + 1)}>Set count</button>
            <h2>Counter: {count}</h2> */}

        </>
    )
}

const squareNum = number => {
    console.log("Calling SquareNum function...")
    return Math.pow(number, 2);
}