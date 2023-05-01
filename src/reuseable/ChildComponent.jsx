import React from 'react'

export default function ChildComponent(props) {
    return (<>
        <div style={{padding:"10px", background:"blue", marginBottom:"5px"}}>
            <h4>Name: {props.name}, Age: {props.age}, Branch: {props.branch}</h4>
        </div>
    </>)
}
