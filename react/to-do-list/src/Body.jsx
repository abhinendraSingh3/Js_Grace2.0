import React, { useState } from "react";]
import Tovalue from "./Tovalue"; 


const Body = () => {
    const [setN, updateN] = useState();
    const [btnS, btnUpdate] = useState([]);



    const addI = () => {
       btnUpdate((prevValue)=>{
         return [...prevValue,setN]
       });
       updateN('')
    };
    return ( 
        <div className="mainCont">
            <div id="addIt">
                <input type={Text}
                    placeholder="Type here"
                    id='iNp'
                    onChange={(e)=>{updateN(e.target.value)}}
                    value={setN}
                >

                </input>
                <button typeof="submit" onClick={addI}>+</button>
            </div>
            <div id='writtenC'>
                {btnS.map((valUe)=>{
                      return<p>{valUe}</p>
                })}
            </div>
        </div>
    )
}

export default Body