import React from 'react'

export default function ShowAdditionSubtractionData({ total, setName }) {
    return (
        <div>
            <h2>{total}</h2>
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Enter your name..' /><br />            
        </div>
    )
}
