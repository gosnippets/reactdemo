import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import { Button, Stack } from 'react-bootstrap';

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

// const useTodos = (todos) => {    
//     const [todosState, setTodosState] = useState(todos);

//     const updateTodo = (id) => {
//         const newTodo = todosState.map((todo) => {
//             if (todo.id === id) {
//                 return { ...todo, completed: !todo.completed }
//             } else { return todo; }
//         })
//         setTodosState(newTodo)
//     }

//     const deleteTodo = (id) => {
//         setTodosState(todosState.filter((todo) => todo.id !== id));
//     }

//     return [todosState, updateTodo, deleteTodo]
// }

// export default function UseCustomHookExample() {
//     const [todos, updateTodo, deleteTodo] = useTodos(initialTodos);

//     return (
//         <div>
//             <h1>Custom Hook Example</h1>
//             {todos && todos.map((todo) => (
//                 <div key={todo.id}>
//                     <label>
//                         <input type="checkbox" checked={todo.completed} onChange={() => updateTodo(todo.id)} />
//                         {todo.title}
//                         <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//                     </label>
//                 </div>
//             ))}
//         </div>
//     )
// }

const useStudentData = (studentData) => {
    const [studentDataState, setStudentDataState] = useState(studentData);

    const addStudent = (stdData) => {
        setStudentDataState([...studentDataState, stdData])
    }

    const deleteStudent = (stdData) => {
        setStudentDataState(studentDataState.filter((std) => std.contact !== stdData.contact))
    }

    return [studentDataState, addStudent, deleteStudent]
}

export default function UseCustomHookExample() {
    const [students, addStudent, deleteStudent] = useStudentData([]);

    const nameRef = useRef();
    const emailRef = useRef();
    const contactRef = useRef();

    const submitHandler = () => {
        const student = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            contact: contactRef.current.value
        }

        addStudent(student);

        nameRef.current.value = ""
        emailRef.current.value = ""
        contactRef.current.value = ""
    }

    return (
        <div className='container'>
            <h1>Custom Hook Example</h1>
            <div>
                <input type='text' className='form-control mb-2' name="name" ref={nameRef} placeholder='Enter Name' />
                <input type='email' className='form-control mb-2' name="email" ref={emailRef} placeholder='Enter Email' />
                <input type='text' className='form-control mb-2' name='contact' ref={contactRef} placeholder='Enter Contact' />
            </div>
            <button className="btn btn-primary form-control" onClick={submitHandler}>Add Student</button>


            <Stack direction="horizontal" gap={2} className='my-2'>
                <Button as="a" variant="primary">Button</Button>
                <Button as="a" variant="success">Button</Button>
            </Stack>

            <div>
                <h2>Student List</h2>
                <ul>
                    {students.map((student, index) => (
                        <li key={index}>{student.name} {student.email} {student.contact} <button onClick={() => deleteStudent(student)}>Delete</button></li>
                    ))}
                </ul>
            </div>
        </div>
    )

}