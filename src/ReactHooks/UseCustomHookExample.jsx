import React, { useState } from 'react'
import { useEffect } from 'react'

const initialTodos = [{
    id: 1,
    title: "Todo 1",
    completed: false
},
{
    id: 2,
    title: "Todo 2",
    completed: false
},
{
    id: 3,
    title: "Todo 3",
    completed: false
},
{
    id: 4,
    title: "Todo 4",
    completed: true
},
]

const useTodos = (todos) => {    
    const [todosState, setTodosState] = useState(todos);

    const updateTodo = (id) => {
        const newTodo = todosState.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            } else { return todo; }
        })
        setTodosState(newTodo)
    }

    const deleteTodo = (id) => {
        setTodosState(todosState.filter((todo) => todo.id !== id));
    }

    return [todosState, updateTodo, deleteTodo]
}

export default function UseCustomHookExample() {
    const [todos, updateTodo, deleteTodo] = useTodos(initialTodos);

    return (
        <div>
            <h1>Custom Hook Example</h1>
            {todos && todos.map((todo) => (
                <div key={todo.id}>
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={() => updateTodo(todo.id)} />
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </label>
                </div>
            ))}
        </div>
    )
}
