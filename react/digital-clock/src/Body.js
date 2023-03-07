import React, { useState } from 'react'

const Body=()=>{

    let time=new Date().toLocaleTimeString()

    const[ctime,Updatetime]=useState(time);
    
    const timeFunc=()=>{
        let time=new Date().toLocaleTimeString()
        Updatetime(time)
    }

    setInterval(timeFunc,1000)

    return(
        <>
        <div className='headIng'><h3>Digital Clock</h3></div>
        <div className='sec'>
            <p id='txt' > {ctime}</p>
        </div>
        </>
    )
}

export default Body;