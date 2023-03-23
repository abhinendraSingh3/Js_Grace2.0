import React, { useState } from "react";

const Body = () => {
    const [setN, updateN] = useState();
    // const [btnS, btnUpdate] = useState();



    const addI = (event) => {
        // let newEntry={note:setN}
        // btnUpdate([newEntry,btnS])
        updateN(event.target.value)
    }
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
                <p>{setN}</p>
            </div>
        </div>
    )
}

export default Body