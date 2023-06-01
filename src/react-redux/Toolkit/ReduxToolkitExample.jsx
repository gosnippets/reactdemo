import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slices/counterSlice'
import { addition, subtraction } from './slices/additionSubtractionSlice'

export default function ReduxToolkitExample() {
    const { count } = useSelector(state => state.counter)
    const { total } = useSelector(state => state.addSub)
    const inputValueRef = useRef();
    const dispatch = useDispatch()

    return (
        <div className='m-5'>
            <h1>Redux Toolkit Example</h1>
            <h2>Count: {count}</h2>
            <button className='btn btn-primary mr-2' onClick={() => dispatch(increment())}>Increment</button>
            <button className='btn btn-primary' onClick={() => dispatch(decrement())}>Decrement</button>

            <hr />
            <div className='m-3'>
                <h2>Total : {total}</h2>
                <div>
                    <input type="number" name='inputValue' ref={inputValueRef} placeholder='Enter Number' />
                </div>
                <button className='btn btn-primary mr-2' onClick={() => dispatch(addition(inputValueRef.current.value))}>Add</button>
                <button className='btn btn-primary mr-2' onClick={() => dispatch(subtraction(inputValueRef.current.value))}>Sub</button>
            </div>
        </div>
    )
}
