import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const d=new Date();
const time=d.getHours();
let status={};
let styleCss={};
let style2={};


if (time>=6 && time<12){
  status=" morning";
  styleCss.color="Green"
  style2.backgroundColor="#fdfac6"
}
else if (time>=12 && time<16){
  status=" Good afternoon";
  styleCss.color="Black"
  style2.backgroundColor="Yellow"
}
else if (time>16 && time<21){
  status=" Good evening";
  styleCss.color="orange"
  style2.backgroundColor="#87CEEB"
}
else{
  status=" Good night";
  styleCss.color="Black"
  style2.backgroundColor="black"
}





ReactDom.render(
<>
<div className="mainCont" style={style2}>
  <h1 id='one'>Hello sir,<span style={styleCss}> {status} </span></h1>
</div>


</>,
  document.getElementById('root')
);