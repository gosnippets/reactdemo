import React, { useEffect, useState } from 'react'

export default function UseEffectExample() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = useState("");

    useEffect(()=>{
        console.log("useEffect - ", count)
    })

    useEffect(() => {
        console.log('useEffect[]');
    },[])

    useEffect(() => {
        console.log('Count is updated...', count);
    },[count])

    useEffect(() => {
        console.log('Name is updated...', name);
    },[name])

    
    useEffect(() => {
        console.log('Count or Name is updated...', count, name);
    },[count,name])


    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+Count</button>

            <br/>
            <input type="text" onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}
