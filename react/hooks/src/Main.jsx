import React, { useState } from "react";


const Main=()=>{
    const[color,setColor]=useState("red");
return(
<>
<h1>hello now color is {color}</h1>
<button type="button" onClick={()=>{setColor("blue")}}>
Blue
</button>
<button type="button" onClick={()=>{setColor("Green")}}>
Green
</button>
<button type="Submit" onClick={()=>{setColor("Yellow")}}>
Yellow
</button>
</>
)
}
export default Main