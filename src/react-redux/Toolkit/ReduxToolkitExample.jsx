import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './slices/counterSlice'
import { addition } from './slices/additionSubtractionSlice'

export default function ReduxToolkitExample() {
    const count = useSelector(state => state.counter.count)
    const total = useSelector(state => state.addSub.total)
    const dispatch = useDispatch()
    return (
        <div className='m-5'>
            <h1>Redux Toolkit Example</h1>
            <h2>Count: {count}</h2>
            <button className='btn btn-primary' onClick={() => dispatch(increment())}>Increment</button>
            <button className='btn btn-primary' onClick={() => dispatch(decrement())}>Decrement</button>

            <hr />
            <div className='m-3'>
                <h2>Total : {total}</h2>
                <button className='btn btn-primary' onClick={() => dispatch(addition(100))}>Add</button>
            </div>
        </div>
    )
}
