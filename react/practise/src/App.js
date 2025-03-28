import React, { useState } from 'react';
function App(){
 
  
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[pass,setPass]=useState("")

  const eventhandlename=(en)=>{
    
      console.log(en.target.value)
      setName(en.target.value)
    
  }
  const eventhandleemai=(em)=>{
    
    console.log(em.target.value)
    setEmail(em.target.value)
  
}
const eventhandlepas=(ep)=>{
    
  console.log(ep.target.value)
  setPass(ep.target.value)

}
  const handleForm=(e)=>{
    e.preventDefault();
    

  }

  return(
    <>
    <form onSubmit={handleForm}>
      <label>username: </label>
      <input type="text" placeholder="Enter your username" name="username" onChange={eventhandlename} value={name}></input><br></br>

      <label>email: </label>
      <input type="email" placeholder="Enter your email" name="email" onChange={eventhandleemai} value={email}></input><br></br>

      <label>password: </label>
      <input type="Password" placeholder="Enter your password" name="password" onChange={eventhandlepas} value={pass}></input><br></br>

      <button type="submit">Submit</button>
    </form>
    
  </>
    

  )

}

export default App