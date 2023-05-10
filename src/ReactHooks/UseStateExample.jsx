import React, { useState } from 'react'

export default function UseStateExample() {
    const [num, setNum] = useState();
    let [count, setCount] = React.useState(0);


    const updateCount =()=>{
        count=count+1;
        console.log("Count",count);
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+Count</button>
            <button onClick={updateCount}>+UpdateCount</button>
        </div>
    )
}
