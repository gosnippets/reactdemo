import React from 'react'

export default function Button(props) {
  return (
    <button onClick={()=>props.onClick(props.name)}>{props.name}</button>
  )
}
