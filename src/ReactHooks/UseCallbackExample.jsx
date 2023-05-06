import React, { memo, useCallback, useState } from 'react'

export default function UseCallbackExample() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const squaredNum = useCallback((num) => {
        console.log("squaredNum", num)
        setNumber(Math.pow(num, 2))
    }, [number])

    return (
        <>
            <ShowNumber number={number} setNumber={squaredNum}/>
            <br /><br />
            <button onClick={() => setCount(count + 1)}>Set count</button>
            <h2>Counter: {count}</h2>

        </>
    )
}

const ShowNumber = memo(({number, setNumber}) => {
    console.log("Child component...")
    return (
        <>
            <div><h2>Squared Value: {number}</h2></div>
            <input type='number' onChange={(e) => setNumber(e.target.value)} placeholder='Enter number' />
        </>
    )
});

