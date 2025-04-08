import React, { useState } from 'react';
function App(){
 
  
  const[formData,setformData]=useState({
    username:"",
    email:"",
    password:"",


  })
  // const[email,setEmail]=useState("")
  // const[pass,setPass]=useState("")

  const eventhandleForm=(en)=>{
    const {name,value} =en.target //The brackets {} on the left mean "extract these properties from the object on the right".
    setformData({...formData,[name]:value})
  }
//   const eventhandleemai=(em)=>{
    
//     console.log(em.target.value)
//     setEmail(em.target.value)
  
// }
// const eventhandlepas=(ep)=>{
    
//   console.log(ep.target.value)
//   setPass(ep.target.value)

// }
  const handleForm=(e)=>{
    e.preventDefault();
    

  }

  return(
    <>
    <form onSubmit={handleForm}>
      <label>username: </label>
      <input type="text" placeholder="Enter your username" name="username" onChange={eventhandleForm} value={formData.username}></input><br></br>

      <label>email: </label>
      <input type="email" placeholder="Enter your email" name="email" onChange={eventhandleForm} value={formData.email}></input><br></br>

      <label>password: </label>
      <input type="Password" placeholder="Enter your password" name="password" onChange={eventhandleForm} value={formData.password}></input><br></br>

      <button type="submit">Submit</button>
    </form>
    
  </>
    

  )

}

export default App