import React, { useState } from 'react'
import ShowAdditionSubtractionData from './ShowAdditionSubtractionData';

export default function AdditionSubtraction() {
    const [inputNumber, setInputNumber] = useState("");
    const [total, setTotal] = useState(0);
    const [name, setName] = useState("");

    const additionHandler = () => {
        setTotal(total + inputNumber)
        setInputNumber("")
    }

    const subtractionHandler = () => {
        setTotal(total - inputNumber)
        setInputNumber("")
    }


    return (
        <>
            <div className='main'>
                <input type='number' value={inputNumber} onChange={(e) => setInputNumber(Number(e.target.value))} placeholder='Enter number' /><br />
                <button onClick={additionHandler}>Addition</button>
                <button onClick={subtractionHandler}>Subtraction</button>

                <ShowAdditionSubtractionData total={total} setName={setName} />

                {name && <h2>Name: {name}</h2>}

                {name? <h2>Name: {name}</h2>:<h2>Please enter some value</h2> }
            </div>
        </>
    )
}
