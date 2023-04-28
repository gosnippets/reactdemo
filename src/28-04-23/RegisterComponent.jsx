import { useState } from "react"



export default function RegisterComponent() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [showData, setShowData] = useState(false);
    const [error, setError] = useState("");

    const submitHandler = () => {
        if (fullname && email && contact) {
            setShowData(true);
            setError("");
        }else{
            setError("All fields are required!!")
        }
    }


    return (
        <>
            <div style={{ marginLeft: "50px", marginTop: "50px" }}>
                {showData && (<div>
                    <h2>Full name: {fullname}</h2>
                    <h2>Email : {email}</h2>
                    <h2>Contact: {contact}</h2>
                </div>)}


                {error && <p style={{color:"red"}}>{error}</p>}

                <input type="text" name="fullname" onChange={(e) => setFullname(e.target.value)} placeholder="Enter full name" /><br />
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" /><br />
                <input type="number" name="contact" onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact number" /><br />
                <button type="button" onClick={submitHandler}>Submit</button>
            </div>
        </>
    )
}


// export function Form() {

//     return (<>
//         <input type="text" name="fullname" placeholder="Enter full name" /><br />
//         <input type="email" name="email" placeholder="Enter email" /><br />
//         <input type="number" name="contact" placeholder="Enter Contact number" />
//     </>)
// }