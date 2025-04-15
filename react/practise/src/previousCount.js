import React, { useEffect, useRef, useState } from 'react'

function PreviousCount() {

    const[count,setCount]=useState(0)
    const refR=useRef()

    useEffect(()=>{
        refR.current=count;
    })

    const counter=()=>{
        setCount(count+1);
    }

    


  return (
    <div>
        <p>{count}</p>
        <p>Previous:{refR.current}</p>
        <button onClick={counter}>Increment</button>
      
    </div>
  )
}

export default PreviousCount
