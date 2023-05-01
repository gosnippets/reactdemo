import React from 'react'
import ChildComponent from './ChildComponent'
import ReuseableComponent2 from './ReuseableComponent2'
import Button from './Button'

const studentList = [
    { name: "Surya", age: 30, branch: "CSE" },
    { name: "Ravi", age: 40, branch: "CSE" },
    { name: "Shyam", age: 50, branch: "CSE" }
]

export default function ReuseableComponent() {

    const buttonClickedHandler =(buttonName)=>{
        console.log("Button clicked", buttonName);
    }

    return (<>
        <div>ReuseableComponent</div>
        <Button onClick={buttonClickedHandler} name="Click here"/>
        <Button onClick={buttonClickedHandler} name="Button 1"/>
        <Button onClick={buttonClickedHandler} name="Button 2"/>
        <Button onClick={buttonClickedHandler} name="Button 3"/>
        {/* <div>{studentList.map(student => <div>{student.name}</div>)}</div> */}

        {studentList.map((student, index) => <ChildComponent key={index} name={student.name} age={student.age} branch={student.branch} />)}
        {studentList.map((student, index) => <ChildComponent key={index} name={student.name} age={student.age} branch={student.branch} />)}
        <hr />
        <ReuseableComponent2 />
    </>
    )
}
