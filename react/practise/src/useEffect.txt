import { useState, useEffect } from "react";

function UseEffect(){
    const[isLoading,setLoading]=useState(false)

    useEffect(()=>{

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

   if (isLoading){
    return
    <h1>Loading...</h1>
   }
   else
   return <h2>Loaded page</h2>
    
}

export default UseEffect;