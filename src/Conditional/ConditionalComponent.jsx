import React from 'react'
import ChildComponentOne from './ChildComponentOne';
import ChildComponentTwo from './ChildComponentTwo';

const name = "";
const error = false;
const show = "componentOned";
const isLoggedIn = true;

// Profile component 
// Login component 

// "", undefined, null, 0, false

export default function ConditionalComponent() {

  if(show==="componentOne"){
    return <ChildComponentOne/>;
  }else{
    return <ChildComponentTwo/>;
  }

  // return (
  //   <div>
  //     {name && <h2>Name: {name}</h2>}
  //     <h2 style={{ color: name ? "green" : "red" }}>This is Text...</h2>
  //     <h2 className={name ? "colorGreen" : "colorRed"}>This is Text...</h2>

  //     <hr />
  //     <h2 style={{ color: name && "green" }}>This is Text...</h2>
  //     <h2 className={!name && "colorRed"}>This is Text...</h2>

  //     {error ? (
  //       <div style={{ backgroundColor: "red", height: "50px" }}>
  //         <h2>This is Text...</h2>
  //       </div>
  //     ) : (
  //       <div style={{ backgroundColor: "green", height: "50px" }}>
  //         <h2>This is Text...</h2>
  //       </div>
  //     )
  //     }

  //     {show === "componentOne"?<ChildComponentOne/>:<ChildComponentTwo/>}

  //   </div >
  // )
}
