import React from 'react'

function Condition(){
    const d=new Date();
const time=d.getHours();
let status={};
let styleCss={};
let style2={};

    if (time>=6 && time<12){
        status="Good morning 🌄";
        styleCss.color="Green"
        style2.backgroundColor="#fdfac6"
      }
      else if (time>=12 && time<16){
        status=" Good afternoon";
        styleCss.color="Black"
        style2.backgroundColor="Yellow"
      }
      else if (time>16 && time<21){
        status=" Good evening 🌇";
        styleCss.color="orange"
        style2.backgroundColor="#87CEEB"
      }
      else{
        status=" Good night 🌙";
        styleCss.color="White"
        style2.backgroundColor="black"
      }

      return(
        <div className="mainCont" style={style2}>
  <h1 id='one'>Hello sir,<span style={styleCss}> {status} </span></h1>
</div>


      )
}
export default Condition;