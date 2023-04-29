import React from 'react'

const name = "";

// "", undefined, null, 0, false

export default function ConditionalComponent() {
  return (
    <div>
      {name && <h2>Name: {name}</h2>}
      <h2 style={{ color: name ? "green" : "red" }}>This is Text...</h2>
      <h2 className={name? "colorGreen": "colorRed"}>This is Text...</h2>

      <hr/>
      <h2 style={{ color: name && "green" }}>This is Text...</h2>
      <h2 className={!name && "colorRed"}>This is Text...</h2>

    </div>
  )
}
