import React, { useState } from 'react'

export default function Meew() {
    const [count,setCount]=useState(0); 
  return (
    <div>
    <h1 className="text-success">Buy Gold - Kaju Jewels</h1>
    <hr/>
    <h2>Grab your Gold!</h2>
    <h2>Gold : {count}</h2>
    <button onClick={()=>{count===0?setCount(0):setCount(count-1)}}>Decrement</button>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
    
  )
}