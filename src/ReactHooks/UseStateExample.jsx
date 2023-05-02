import React from 'react'

export default function UseStateExample() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+Count</button>
        </div>
    )
}
