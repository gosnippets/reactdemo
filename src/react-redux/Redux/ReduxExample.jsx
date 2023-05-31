import React from 'react'
import { increment, decrement } from "./actions"
import { connect } from 'react-redux'

const ReduxExample = ({ count, increment, decrement }) => {
    return (
        <div className='m-5'>
            <p>Redux Example</p>
            <h2>Count: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { count: state.count }
}

const mapDispatchToProps = {
    increment,
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample)
