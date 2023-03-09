import React, { useState } from 'react'

const Formli = () => {

  const [seT, updaTe] = useState("")
  const[setPass,updatePass]=useState("")
  const[allentry,setEntry]=useState("")


  const onSubmits = (event) => {
    let newEntry={username:seT,password:setPass};
    setEntry([...allentry ,newEntry])
    alert('form submitted')
  }

  return (
    <>
      <div className='card'>
        <h1> Login </h1>

        <div id='headI'>
          <p>Username </p>
          < input type='text'
            placeholder="Type your username"
            id='inVAl'
            onChange={(e)=>{updaTe(e.target.value)}}
            value={seT}>
          </input>
          <u>____________________________</u>
          <p>Password</p>
          < input type='password'
            placeholder="Type your password"
            id='inVAl'
            onChange={(e)=>{updatePass(e.target.value)}}
            value={setPass}
            >
          </input>
          <u>____________________________</u>
        </div>


        <button type='submit' id='btn' onClick={onSubmits}>LOGIN</button>

      </div>
    </>)
}
export default Formli