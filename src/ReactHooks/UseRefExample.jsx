import React, { useEffect, useRef, useState } from 'react'

export default function UseRefExample() {
    return (
        <>
            <UseRefExample1 /><hr />
            <UseRefExample2 /> <hr />
            <UseRefExample3 /> <hr />
        </>
    )
}

function UseRefExample1() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(10);

    useEffect(() => {
        console.log(count);
        count.current = count.current + 1;
    })

    return (
        <>
            <input type='text' onChange={(e) => setInputValue(e.target.value)} />
            <h2>Render Count: {count.current}</h2>
        </>
    )
}

function UseRefExample2() {
    const inputElement = useRef();

    const handleSubmit = () => {
        console.log("inputElement", inputElement);
        console.log("inputElement.current", inputElement.current);
        console.log("inputElement.current.value", inputElement.current.value);

        inputElement.current.focus();

    }

    return (<>
        <input type='text' ref={inputElement} placeholder='Enter text..' />
        <button onClick={handleSubmit}>Click Here</button>
    </>)
}

function UseRefExample3() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue])

    return (<>
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Enter text..' />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {previousInputValue.current}</h2>
    </>)
}