import React from 'react'
import ReactDom from 'react-dom'
const d=new Date();
const currentDate=d.toLocaleDateString();
const currentTime=d.toLocaleTimeString();


ReactDom.render(
<>
<h1>Abhinedra Singh</h1>
<p>Today's Date is {currentDate}</p>
<p>Current Time is {currentTime}</p>

</>,
  document.getElementById('root')
);