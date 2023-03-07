import React, { useState } from "react";


const MainBody=()=>{

const[count,counterUpdate]=useState(0)

 const decFunc=()=>{
     counterUpdate(count-1) 
     
} 
const incFunc=()=>{
    counterUpdate(count+1) 
} 

let changeColor="black"
{count<0? changeColor='red' :changeColor="grey" }
    
    return(

        <div className="container">
        <h1>JavaScript Counter</h1>

        <section id="num">
            <h4 style={{color:changeColor}}>{count}</h4>
        </section>

        <section id="buttons">
            <button type="button" id="btn" onClick={decFunc}> <h4>Decrement</h4></button>
            <button type="button" id="btn" onClick={incFunc}> <h4>Increment</h4></button>

        </section>
        
    </div>

    )
}

export default MainBody;