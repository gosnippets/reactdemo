import React, { useState } from 'react'

export default function StateFullComponent() {
  const [count, setCount] = useState(0);
  return (<>
    <div>StateFullComponent</div>
    <h2>Count: {count}</h2>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>
  </>)
}
