import React from 'react'
// export default function PropsExample({name, isValid, count, userDetails, userList, showUserDetails}) {
export default function PropsExample(props) {
    console.log("Props", props)
    return (
        <div>
            <h2>Name: {props.name}</h2>
            {props.isValid && (<h2>This is valid</h2>)}
            <hr />
            {props.isValid ? <h2>This is valid</h2> : <h2>This is not valid</h2>}

            <h2>Count: {props.count}</h2>

            <h2>Name: {props.userDetails.name} Age: {props.userDetails.age}</h2>
            <hr />
            {props.userList.map((value, index) => {
                return (<>
                    <h2>{value.name}</h2>
                </>)
            })}

            <hr />
            {props.userList.map((value, index) => (<>
                <h2>{value.name}</h2>
            </>)
            )}

            <br/>
            <button onClick={props.showUserDetails}>Click this button</button>
        </div>
    )
}
