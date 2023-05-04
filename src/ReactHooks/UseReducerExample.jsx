import React, { useEffect, useReducer } from 'react'

// const initialTodos = [{
//     id: 1,
//     title: "Todo 1",
//     completed: false
// },
// {
//     id: 2,
//     title: "Todo 2",
//     completed: false
// },
// {
//     id: 3,
//     title: "Todo 3",
//     completed: false
// },
// {
//     id: 4,
//     title: "Todo 4",
//     completed: true
// },
// ]

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'COMPLETE':
//             return state.map((todo) => {
//                 if (todo.id === action.id) {
//                     return { ...todo, completed: !todo.completed }
//                 } else {
//                     return todo;
//                 }
//             })

//         case "DELETE":
//             return state.filter((todo) => todo.id !== action.id);
//         default:
//             return state;
//     }
// }

// export default function UseReducerExample() {
//     const [todos, dispatch] = useReducer(reducer, initialTodos)

//     useEffect(() => {
//         console.log("Todos", todos);
//     })

//     const handleComplete = (todo) => {
//         dispatch({ type: "COMPLETE", id: todo.id });
//     }

//     const handleDelete = (todo) => {
//         dispatch({ type: "DELETE", id: todo.id });
//     }

//     return (
//         <div>
//             <h1>UseReducer Example</h1>
//             {todos && todos.map((todo) => (
//                 <div key={todo.id}>
//                     <label>
//                         <input type="checkbox" checked={todo.completed} onChange={() => handleComplete(todo)} />
//                         {todo.title}
//                         <button onClick={() => handleDelete(todo)}>Delete</button>
//                     </label>
//                 </div>
//             ))}
//         </div>
//     )
// }

// ================================ Second Example ==============================

const countReducer = (state, action) => {
    switch (action.type) {
        case "DECREASE":
            return state - 1;
        case "INCREASE":
            return state + 1;
        default:
            return state;
    }
}

export default function UseReducerExample() {
    const [count, dispatch] = useReducer(countReducer, 10)

    useEffect(() => {
        console.log("Count", count);
    }, [count])

    return (
        <div style={{ margin: "30px" }}>
            <h2>{count}</h2>
            <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease Count</button>
            <button onClick={() => dispatch({ type: "INCREASE" })}>Increase Count</button>
        </div>
    )

}