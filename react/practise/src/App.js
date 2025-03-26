import React, { useState } from 'react';
function App(){

  const [count,setCount]=useState(0);

  const inc=()=>{
    setCount(count+1);
  }

  return(
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>+</button>
      
    </div>


  )
}

export default App