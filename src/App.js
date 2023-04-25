import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // const [name, setName] = useState("Ravi");
  // const [fullname, setFullname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const fullnameHandler = (e) => {
  //   console.log("fullnameHandler");
  //   setFullname(e.target.value)
  // }

  const showDetials = ()=>{
    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (<>
    <h2>Login Form</h2>
    
    <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email id"/>
    <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
    <button onClick={showDetials}>Login</button>

    
    <p>Email: {email}</p>
    <p>Password: {password}</p>
  </>);
}

export default App;
